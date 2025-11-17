"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  triviaCategories,
  type TriviaCategory,
  type TriviaQuestion,
} from "@/data/trivia-data";
import { ChevronLeft, Trophy, RotateCcw, Grid3x3 } from "lucide-react";
import { usePreferences } from "@/lib/preferences-context";

export function TriviaSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);
  const [gameState, setGameState] = useState<"category" | "quiz" | "results">(
    "category"
  );
  const [shuffledQuestions, setShuffledQuestions] = useState<TriviaQuestion[]>(
    []
  );
  const { preferences } = usePreferences();
  const animationsOn = preferences.animationsEnabled;

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const getRandomMixQuestions = (): TriviaQuestion[] => {
    // Get all questions from all categories except the random category itself
    const allQuestions = triviaCategories
      .filter((cat) => cat.id !== "random")
      .flatMap((cat) => cat.questions);

    // Shuffle and take 10 random questions
    const shuffled = shuffleArray(allQuestions);
    return shuffled.slice(0, 10);
  };

  const startCategory = (categoryId: string) => {
    const category = triviaCategories.find((c) => c.id === categoryId);
    if (category) {
      let questions: TriviaQuestion[];
      if (categoryId === "random") {
        questions = getRandomMixQuestions();
      } else {
        questions = shuffleArray(category.questions);
      }

      setShuffledQuestions(questions);
      setSelectedCategory(categoryId);
      setGameState("quiz");
      setCurrentQuestionIndex(0);
      setScore(0);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setTimeLeft(20);
    }
  };

  const currentCategory = triviaCategories.find(
    (c) => c.id === selectedCategory
  );
  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  useEffect(() => {
    if (gameState === "quiz" && !showExplanation && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && selectedAnswer === null) {
      setSelectedAnswer(-1);
      setShowExplanation(true);
      setScore(score - 10);
    }
  }, [timeLeft, gameState, showExplanation, selectedAnswer, score]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    if (answerIndex === currentQuestion.correctAnswer) {
      setScore(score + 20);
    } else {
      setScore(score - 10);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setTimeLeft(20);
    } else {
      setGameState("results");
    }
  };

  const handlePlayAgain = () => {
    if (selectedCategory) {
      startCategory(selectedCategory);
    }
  };

  const handleChangeCategory = () => {
    setSelectedCategory(null);
    setGameState("category");
    setScore(0);
  };

  const getPerformanceMessage = () => {
    const maxScore = shuffledQuestions.length * 20;
    const percentage = (score / maxScore) * 100;

    if (percentage >= 80)
      return {
        title: "Outstanding! 🎯",
        message: "You're a true software engineering pro!",
      };
    if (percentage >= 60)
      return {
        title: "Great Job! 👏",
        message: "Solid knowledge, keep it up!",
      };
    if (percentage >= 40)
      return { title: "Good Try! 💪", message: "You're on the right track!" };
    return { title: "Keep Learning! 📚", message: "Practice makes perfect!" };
  };

  const renderCategorySelection = () => (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Software Engineering Trivia
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
          Test your knowledge across different areas of software engineering.
          Choose a category and challenge yourself!
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {triviaCategories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => startCategory(category.id)}
            className="group rounded-2xl sm:rounded-3xl bg-card border border-border p-6 sm:p-8 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 text-left"
            whileHover={animationsOn ? { scale: 1.02, y: -4 } : {}}
            whileTap={animationsOn ? { scale: 0.98 } : {}}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
              {category.name}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
              {category.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                {category.questions.length} questions
              </span>
              <span className="text-xs bg-secondary px-3 py-1 rounded-full">
                20 points each
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );

  const renderQuiz = () => {
    if (!currentQuestion || !currentCategory) return null;

    const progress =
      ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;

    return (
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleChangeCategory}
              className="text-muted-foreground hover:text-foreground"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Categories
            </Button>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Question {currentQuestionIndex + 1} of{" "}
                {shuffledQuestions.length}
              </span>
              <span className="text-lg font-bold">Score: {score}</span>
            </div>
          </div>

          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <div className="rounded-2xl sm:rounded-3xl bg-card border border-border p-6 sm:p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
              {currentCategory.name}
            </span>
            <div className="flex items-center gap-2">
              <div
                className={`text-2xl font-bold ${
                  timeLeft <= 5
                    ? "text-destructive animate-pulse"
                    : "text-foreground"
                }`}
              >
                {timeLeft}s
              </div>
              <div className="relative h-12 w-12">
                <svg className="transform -rotate-90 h-12 w-12">
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    className="text-secondary"
                  />
                  <motion.circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    className={
                      timeLeft <= 5 ? "text-destructive" : "text-primary"
                    }
                    strokeDasharray={`${2 * Math.PI * 20}`}
                    initial={{ strokeDashoffset: 0 }}
                    animate={{
                      strokeDashoffset:
                        (1 - timeLeft / 20) * (2 * Math.PI * 20),
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </svg>
              </div>
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold mb-6 leading-relaxed">
            {currentQuestion.question}
          </h3>

          <div className="grid gap-3 sm:gap-4">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.correctAnswer;
              const showResult = showExplanation;

              let buttonClass =
                "rounded-xl p-4 sm:p-5 text-left transition-all border-2 ";

              if (!showResult) {
                buttonClass +=
                  "border-border hover:border-primary/50 hover:bg-secondary";
              } else if (isCorrect) {
                buttonClass +=
                  "border-green-500 bg-green-500/10 text-green-700 dark:text-green-400";
              } else if (isSelected && !isCorrect) {
                buttonClass +=
                  "border-red-500 bg-red-500/10 text-red-700 dark:text-red-400";
              } else {
                buttonClass += "border-border opacity-50";
              }

              return (
                <motion.button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  className={buttonClass}
                  whileHover={
                    animationsOn && !showResult ? { scale: 1.01, x: 4 } : {}
                  }
                  whileTap={animationsOn && !showResult ? { scale: 0.99 } : {}}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 h-8 w-8 rounded-full bg-secondary flex items-center justify-center font-semibold text-sm">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-sm sm:text-base font-medium">
                      {option}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {showExplanation && (
              <motion.div
                initial={animationsOn ? { opacity: 0, y: 10 } : {}}
                animate={animationsOn ? { opacity: 1, y: 0 } : { opacity: 1 }}
                exit={animationsOn ? { opacity: 0, y: -10 } : {}}
                className="mt-6 p-4 sm:p-5 rounded-xl bg-primary/5 border border-primary/20"
              >
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">
                    Explanation:{" "}
                  </span>
                  {currentQuestion.explanation}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {showExplanation && (
          <Button
            onClick={handleNextQuestion}
            className="w-full rounded-xl py-6 text-base"
            size="lg"
          >
            {currentQuestionIndex < shuffledQuestions.length - 1
              ? "Next Question"
              : "See Results"}
          </Button>
        )}
      </div>
    );
  };

  const renderResults = () => {
    const performance = getPerformanceMessage();
    const maxScore = shuffledQuestions.length * 20;
    const percentage = Math.round((score / maxScore) * 100);

    return (
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={animationsOn ? { scale: 0.9, opacity: 0 } : {}}
          animate={animationsOn ? { scale: 1, opacity: 1 } : { opacity: 1 }}
          className="rounded-2xl sm:rounded-3xl bg-card border border-border p-8 sm:p-12 mb-6"
        >
          <div className="mb-6">
            <Trophy className="h-16 w-16 sm:h-20 sm:w-20 mx-auto text-primary mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">
              {performance.title}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              {performance.message}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
            <div className="rounded-xl bg-secondary p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                {score}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Total Score
              </div>
            </div>
            <div className="rounded-xl bg-secondary p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                {percentage}%
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Accuracy
              </div>
            </div>
            <div className="rounded-xl bg-secondary p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                {shuffledQuestions.length}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Questions
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              onClick={handlePlayAgain}
              className="flex-1 rounded-xl py-6"
              size="lg"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Play Again
            </Button>
            <Button
              onClick={handleChangeCategory}
              variant="outline"
              className="flex-1 rounded-xl py-6"
              size="lg"
            >
              <Grid3x3 className="h-4 w-4 mr-2" />
              Change Category
            </Button>
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={gameState}
          initial={animationsOn ? { opacity: 0, y: 20 } : {}}
          animate={animationsOn ? { opacity: 1, y: 0 } : { opacity: 1 }}
          exit={animationsOn ? { opacity: 0, y: -20 } : {}}
          transition={{ duration: 0.3 }}
        >
          {gameState === "category" && renderCategorySelection()}
          {gameState === "quiz" && renderQuiz()}
          {gameState === "results" && renderResults()}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
