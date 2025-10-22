"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Testimonial } from "@/data/types";
import Image from "next/image";

interface TestimonialsCarouselProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

export function TestimonialsCarousel({
  title,
  subtitle,
  testimonials,
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-scroll con useCallback para mejor rendimiento
  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, testimonials.length]);

  const goToPrevious = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, testimonials.length]);

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-scroll cada 5 segundos
  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, goToNext, testimonials.length]);

  return (
    <div className="mt-12 sm:mt-16 lg:mt-20">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
          {title}
        </h3>
        <div className="rounded-full bg-secondary/80 dark:bg-secondary/50 px-3 py-1.5 sm:px-4 sm:py-2 border border-border/50">
          <span className="text-xs sm:text-sm text-muted-foreground">
            {subtitle}
          </span>
        </div>
      </div>

      {/* Carousel Container */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full flex-shrink-0 px-1 sm:px-2"
              >
                <div className="rounded-2xl sm:rounded-3xl bg-card dark:bg-card border border-border dark:border-border/50 p-6 sm:p-8 md:p-12 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center md:items-start">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-full overflow-hidden border-2 border-primary/20 dark:border-primary/30 ring-2 ring-primary/10 dark:ring-primary/20">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 64px, 80px"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      <h4 className="text-lg sm:text-xl font-bold text-foreground mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                        {testimonial.title}
                      </p>
                      <p className="text-sm sm:text-base text-muted-foreground dark:text-muted-foreground/90 leading-relaxed">
                        {testimonial.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 rounded-full bg-card/80 dark:bg-card/90 backdrop-blur-sm h-8 w-8 sm:h-10 sm:w-10 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary dark:hover:bg-primary dark:hover:border-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          onClick={goToPrevious}
          disabled={isAnimating}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-full bg-card/80 dark:bg-card/90 backdrop-blur-sm h-8 w-8 sm:h-10 sm:w-10 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary dark:hover:bg-primary dark:hover:border-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          onClick={goToNext}
          disabled={isAnimating}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-6 sm:w-8 bg-primary dark:bg-primary"
                  : "w-1.5 sm:w-2 bg-muted-foreground/30 dark:bg-muted-foreground/40 hover:bg-muted-foreground/50 dark:hover:bg-muted-foreground/60"
              }`}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Counter */}
        <div className="flex justify-center mt-3 sm:mt-4">
          <span className="text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground/80">
            {currentIndex + 1} / {testimonials.length}
          </span>
        </div>
      </div>
    </div>
  );
}
