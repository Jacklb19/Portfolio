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
    const body = await request.json();
    
    // Detectar si viene del SearchModal o del Chatbot tradicional
    const isSearchModal = body.messages && Array.isArray(body.messages);
    
    if (isSearchModal) {
      // SEARCHMODAL - Con soporte de idioma
      const userMessage = body.messages[0]?.content || '';
      const language = body.language || 'en'; // AÑADIDO: Obtener idioma
      const portfolioContext = body.portfolioContext; // AÑADIDO: Obtener contexto
      
      // Crear system prompt basado en el idioma
      const systemPrompts = {
        en: `You are Jose Burbano's professional portfolio assistant. Your ONLY purpose is to discuss information directly related to Jose's portfolio, projects, skills, and professional experience.

**STRICT CONTENT RESTRICTIONS**:
- ONLY answer questions about: portfolio projects, technologies used, skills, experience, education, and contact information found in the portfolio context
- REFUSE politely any questions about: general programming help, unrelated topics, personal opinions, current events, or anything not explicitly in the portfolio
- If asked about non-portfolio topics, respond: "I'm specifically designed to discuss Jose Burbano's portfolio. I can help you learn about his projects, skills, and experience. What would you like to know about his work?"

**Response Guidelines**:
- Structure: Start with a direct answer, use bullet points for lists (3+ items)
- Tone: Professional yet approachable, confident, enthusiastic
- Content: Only use information from the portfolio context below
- If info unavailable in portfolio: "That specific detail isn't included in the portfolio, but I can tell you about [related portfolio topic]"
- Link technologies to specific portfolio projects when mentioned
- Max length: 150 words

**IMPORTANT**: ALWAYS respond in English.

[PORTFOLIO CONTEXT]
${JSON.stringify(portfolioContext, null, 2)}`,
        
        es: `Eres el asistente del portafolio profesional de José Burbano. Tu ÚNICO propósito es discutir información directamente relacionada con el portafolio, proyectos, habilidades y experiencia profesional de José.

**RESTRICCIONES ESTRICTAS DE CONTENIDO**:
- SOLO responde preguntas sobre: proyectos del portafolio, tecnologías utilizadas, habilidades, experiencia, educación e información de contacto que aparezca en el contexto del portafolio
- RECHAZA educadamente cualquier pregunta sobre: ayuda general de programación, temas no relacionados, opiniones personales, eventos actuales, o cualquier cosa que no esté explícitamente en el portafolio
- Si te preguntan sobre temas fuera del portafolio, responde: "Estoy diseñado específicamente para hablar sobre el portafolio de José Burbano. Puedo ayudarte a conocer sus proyectos, habilidades y experiencia. ¿Qué te gustaría saber sobre su trabajo?"

**Directrices de respuesta**:
- Estructura: Comienza con respuesta directa, usa viñetas para listas (3+ elementos)
- Tono: Profesional pero cercano, seguro, entusiasta
- Contenido: Solo usa información del contexto del portafolio a continuación
- Si no hay info en el portafolio: "Ese detalle específico no está incluido en el portafolio, pero puedo contarte sobre [tema relacionado del portafolio]"
- Vincula tecnologías con proyectos específicos del portafolio cuando se mencionen
- Longitud máxima: 150 palabras

**IMPORTANTE**: SIEMPRE responde en español.

[CONTEXTO DEL PORTAFOLIO]
${JSON.stringify(portfolioContext, null, 2)}`
      };

      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content: systemPrompts[language as keyof typeof systemPrompts] || systemPrompts.en
          },
          { role: "user", content: userMessage }
        ],
        model: "llama-3.3-70b-versatile",
        temperature: 0.6,
        max_tokens: 500,
        stream: true,
      });

      const encoder = new TextEncoder();
      const stream = new ReadableStream({
        async start(controller) {
          try {
            for await (const chunk of chatCompletion) {
              const content = chunk.choices[0]?.delta?.content || '';
              if (content) {
                controller.enqueue(encoder.encode(`0:"${content}"\n`));
              }
            }
            controller.close();
          } catch (error) {
            controller.error(error);
          }
        },
      });

      return new Response(stream, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Transfer-Encoding': 'chunked',
        },
      });
      
    } else {
      // CHATBOT TRADICIONAL - Ya funciona con idioma
      const { message, portfolioContext, sessionId, language } = body;
      
      const dict = await getDictionary(language as Lang);
      
      if (!conversations.has(sessionId)) {
        conversations.set(sessionId, []);
      }
      const history = conversations.get(sessionId)!;
      
      const messages: Groq.Chat.Completions.ChatCompletionMessageParam[] = [
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
      
      const chatCompletion = await groq.chat.completions.create({
        messages: messages,
        model: "llama-3.3-70b-versatile",
        temperature: 0.6,
        max_tokens: 500,
      });
      
      const response = chatCompletion.choices[0]?.message?.content || 
                       dict.chatbot.errorMessage;
      
      history.push({ role: "user", content: message });
      history.push({ role: "assistant", content: response });
      if (history.length > 20) {
        history.splice(0, history.length - 20);
      }
      
      return NextResponse.json({ response });
    }
    
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
