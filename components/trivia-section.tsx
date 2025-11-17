"use client";
import { useState, useMemo, useEffect } from "react";
import { Gamepad2, Timer, Check, X, Star, RefreshCcw } from "lucide-react";
// Define el tipo de pregunta
type Question = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

// Define el tipo de questionBank con firma de índice
type QuestionBank = {
  [key: string]: Question[];
};

// Ahora con tipado correcto:
const questionBank: QuestionBank = {
  algoritmos: [
    {
      question: "¿Cuál es el peor caso de búsqueda binaria?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
      answer: 1,
      explanation: "La búsqueda binaria en el peor caso es O(log n).",
    },
    {
      question: "¿Cuál es la complejidad de QuickSort en promedio?",
      options: ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
      answer: 1,
      explanation: "QuickSort tiene complejidad promedio O(n log n).",
    },
  ],
  "cultura tech": [
    {
      question: "¿Quién es considerado el creador de Linux?",
      options: ["Linus Torvalds", "Bill Gates", "Dennis Ritchie", "Bjarne Stroustrup"],
      answer: 0,
      explanation: "Linus Torvalds creó el núcleo de Linux.",
    },
    {
      question: "¿En qué año se lanzó el primer navegador web (Mosaic)?",
      options: ["1990", "1991", "1993", "1995"],
      answer: 2,
      explanation: "Mosaic se lanzó en 1993 y popularizó la web.",
    },
  ],
  frontend: [
    {
      question: "¿Cuál es el framework más popular para React?",
      options: ["Next.js", "Vue", "Angular", "Svelte"],
      answer: 0,
      explanation: "Next.js es el framework más popular basado en React.",
    },
  ],
  backend: [
    {
      question: "¿Qué significa REST en el contexto de APIs?",
      options: ["Representational State Transfer", "Really Easy Software Transfer", "Remote Execution State Token", "Real-time Event Streaming Tech"],
      answer: 0,
      explanation: "REST significa Representational State Transfer.",
    },
  ],
  "bases de datos": [
    {
      question: "¿Cuál es la diferencia entre SQL y NoSQL?",
      options: ["No hay diferencia", "SQL es relacional, NoSQL es no relacional", "SQL es más rápido", "NoSQL es más seguro"],
      answer: 1,
      explanation: "SQL usa tablas relacionales, NoSQL almacena datos en otros formatos.",
    },
  ],
};

const CATEGORIES = [
  { id: "algoritmos", name: "Algoritmos" },
  { id: "cultura tech", name: "Cultura Tech" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "bases de datos", name: "Bases de Datos" },
];

export function TriviaSection() {
  const [stage, setStage] = useState<"category" | "quiz" | "result">("category");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [questionOrder, setQuestionOrder] = useState<number[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(20); // segundos por pregunta
  const [finished, setFinished] = useState(false);

  // Iniciar quiz: selecciona categoría y aleatoriza preguntas
  function startQuiz(category: string) {
    setSelectedCategory(category);
    setStage("quiz");
    setCurrent(0);
    setScore(0);
    setShowExplanation(false);
    setSelected(null);
    setFinished(false);
    setTimer(20);
    // Aleatoriza preguntas:
    const n = questionBank[category]?.length || 0;
    setQuestionOrder(shuffle([...Array(n).keys()]));
  }

  // Elige la pregunta actual
  const questions = useMemo(
    () =>
      selectedCategory
        ? questionBank[selectedCategory]
        : [],
    [selectedCategory]
  );
  const qIndex = questionOrder[current];
  const q = questions[qIndex];

  // Temporizador ↓
  useEffect(() => {
    if (stage !== "quiz" || showExplanation || finished) return;
    if (timer === 0) {
      // Se acabó el tiempo
      setShowExplanation(true);
      setTimeout(handleNext, 2000);
      return;
    }
    const id = setTimeout(() => setTimer(timer - 1), 1000);
    return () => clearTimeout(id);
  }, [timer, stage, showExplanation, finished]);

  function handleOption(index: number) {
    setSelected(index);
    setShowExplanation(true);
    // Puntaje: +20 correcto, -10 incorrecto, 0 si tiempo agotado
    if (index === q.answer) {
      setScore((s) => s + 20);
    } else {
      setScore((s) => s - 10);
    }
  }

  function handleNext() {
    setSelected(null);
    setShowExplanation(false);
    setTimer(20);
    if (current + 1 < questionOrder.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
      setStage("result");
    }
  }

  function handleRestart() {
    setStage("category");
    setSelectedCategory(null);
    setCurrent(0);
    setScore(0);
    setShowExplanation(false);
    setSelected(null);
    setFinished(false);
    setTimer(20);
  }

  // --- Renderizado principal ---
  if (stage === "category") {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-br from-indigo-700/10 to-blue-700/5">
        <div className="w-full max-w-xl text-center space-y-8">
          <h2 className="text-3xl font-bold flex items-center justify-center gap-2 mb-4">
            <Gamepad2 className="h-7 w-7 text-yellow-500 animate-bounce" />
            Trivia: ¿Cuánto sabes de tecnología?
          </h2>
          <p className="mb-6 text-muted-foreground">Elige una categoría para empezar tu trivia:</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => startQuiz(cat.id)}
                className="rounded-2xl border-2 border-indigo-300 bg-card hover:bg-primary/10 px-6 py-6 font-bold text-lg transition-all shadow-xl flex items-center justify-center gap-2 hover:shadow-indigo-100 active:scale-95"
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (stage === "result") {
    const total = questionOrder.length;
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-br from-indigo-700/10 to-blue-700/5">
        <div className="max-w-xl w-full">
          <div className="rounded-2xl shadow-xl bg-card border border-border p-8 flex flex-col items-center" style={{minHeight: 380}}>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              Resultado
              <Star className="h-6 w-6 text-yellow-400" />
            </h2>
            <div className="text-2xl font-bold mb-4 text-primary">{score} puntos</div>
            <div className="mb-2">Respondiste {total} preguntas de <strong>{CATEGORIES.find(c => c.id === selectedCategory)?.name}</strong>.</div>
            <div className="mb-6">
              {score >= total * 15
                ? "¡Fantástico! Eres todo un pro de la ingeniería de software."
                : score >= total * 8
                ? "¡Nada mal! Tienes buena base, pero aún puedes mejorar."
                : "¡Vamos! Repasa un poco más y vuelve a intentarlo ;)"}
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => startQuiz(selectedCategory!)}
                className="rounded-xl bg-primary text-primary-foreground font-bold px-6 py-2.5 transition-all hover:bg-primary/85 shadow hover:scale-105 flex items-center gap-2"
              >
                <RefreshCcw className="h-5 w-5" /> Jugar de nuevo
              </button>
              <button
                onClick={handleRestart}
                className="rounded-xl bg-secondary border border-border font-bold px-6 py-2.5 transition-all hover:bg-secondary/80 shadow hover:scale-105"
              >
                Cambiar categoría
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // --- Quiz activo ---
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-br from-indigo-700/10 to-blue-700/5">
      <div className="max-w-xl w-full space-y-8">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <Gamepad2 className="h-6 w-6 text-indigo-500" />
            <span className="font-bold text-lg">{CATEGORIES.find(c => c.id === selectedCategory)?.name}</span>
          </div>
          <div className="flex items-center gap-2 font-mono">
            <Timer className="w-5 h-5 text-primary animate-pulse" />
            <span
              className={`font-bold ${
                timer <= 3 ? "text-red-600" : ""
              }`}
            >
              {timer}s
            </span>
          </div>
        </div>
        <div className="rounded-2xl shadow-xl bg-card border border-border p-8 flex flex-col items-stretch">
          <div className="mb-4 font-semibold text-lg text-primary">
            Pregunta {current + 1} de {questionOrder.length}
          </div>
          <div className="text-base sm:text-lg font-bold mb-6">{q.question}</div>
          <div className="space-y-3 mb-4">
            {q.options.map((option, i) => (
              <button
                key={i}
                disabled={showExplanation}
                onClick={() => handleOption(i)}
                className={`w-full rounded-xl border px-5 py-3 text-left font-medium transition-all
                  ${
                    showExplanation
                      ? i === q.answer
                        ? "bg-green-100 border-green-500 text-green-800 dark:bg-green-800/10"
                        : i === selected
                        ? "bg-red-100 border-red-500 text-red-800 dark:bg-red-800/10"
                        : "border-border"
                      : "hover:bg-primary/10 border-border"
                  }
                `}
              >
                {option}
                {showExplanation &&
                  i === q.answer && (
                    <Check className="inline-block ml-2 h-5 w-5 text-green-600" />
                  )}
                {showExplanation &&
                  i === selected &&
                  selected !== q.answer && (
                    <X className="inline-block ml-2 h-5 w-5 text-red-600" />
                  )}
              </button>
            ))}
          </div>
          {showExplanation && (
            <div className="rounded-lg mt-2 mb-3 px-4 py-2 bg-secondary font-medium text-xs sm:text-sm text-muted-foreground">
              {selected === q.answer ? (
                <>¡Correcto! {q.explanation}</>
              ) : (
                <>Incorrecto. {q.explanation}</>
              )}
            </div>
          )}
          <button
            onClick={handleNext}
            className="flex items-center gap-2 mt-2 rounded-xl bg-primary text-primary-foreground font-bold px-6 py-2.5 transition-all hover:bg-primary/85 shadow hover:scale-105"
            disabled={!showExplanation}
          >
            Siguiente
          </button>
          <div className="flex gap-2 mt-4 items-center text-yellow-600">
            <Star className="w-5 h-5" />
            <span className="font-semibold">Puntos: {score}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Función utilitaria para mezclar preguntas aleatorias
function shuffle(array: number[]): number[] {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
