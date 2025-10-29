// app/api/chat/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import { getDictionary } from '@/data';
import type { Lang } from '@/data/config';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!
});

// Memoria de conversaciones
const conversations = new Map<string, Array<{role: string, content: string}>>();

export async function POST(request: NextRequest) {
  try {
    const { message, portfolioContext, sessionId, language } = await request.json();
    
    // Obtener diccionario para el idioma correcto
    const dict = await getDictionary(language as Lang);
    
    // Obtener o crear historial
    if (!conversations.has(sessionId)) {
      conversations.set(sessionId, []);
    }
    const history = conversations.get(sessionId)!;
    
    // Construir mensajes con el prompt del idioma correcto
    const messages: Groq.Chat.Completions.ChatCompletionMessageParam[] = [ // 👈 TIPO CORRECTO
      {
        role: "system",
        content: `${dict.chatbot.systemPrompt}

[INFORMACIÓN DEL PORTAFOLIO]
${JSON.stringify(portfolioContext, null, 2)}`
      },
      ...history.map(msg => ({
        role: msg.role as "user" | "assistant",
        content: msg.content
      })),
      { role: "user", content: message }
    ];
    
    // Llamar a Groq
    const chatCompletion = await groq.chat.completions.create({
      messages: messages,
      model: "llama-3.3-70b-versatile",
      temperature: 0.6,
      max_tokens: 500,
    });
    
    const response = chatCompletion.choices[0]?.message?.content || 
                     dict.chatbot.errorMessage;
    
    // Actualizar historial (mantener últimos 10 intercambios)
    history.push({ role: "user", content: message });
    history.push({ role: "assistant", content: response });
    if (history.length > 20) {
      history.splice(0, history.length - 20);
    }
    
    return NextResponse.json({ response });
    
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}

// Limpiar conversaciones viejas cada hora
setInterval(() => {
  conversations.clear();
}, 3600000);
