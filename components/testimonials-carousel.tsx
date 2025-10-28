"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, testimonials.length]);

  const goToPrevious = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, testimonials.length]);

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, goToNext, testimonials.length]);

  return (
    <div className="mt-8 md:mt-10 lg:mt-12 transition-all duration-300">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 md:gap-4 mb-6 md:mb-7 lg:mb-8 transition-all duration-300">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground transition-all duration-300">
          {title}
        </h3>
        <div className="rounded-full bg-secondary/80 px-3 py-1.5 md:px-3.5 md:py-1.5 lg:px-4 lg:py-2 border border-border/50 transition-all duration-300 shadow-sm shadow-black/10 dark:shadow-none">
          <span className="text-xs md:text-sm text-muted-foreground transition-all duration-300">
            {subtitle}
          </span>
        </div>
      </div>

      <div
        className="relative max-w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden rounded-2xl md:rounded-2xl lg:rounded-3xl transition-all duration-300">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0">
                <div className="rounded-2xl md:rounded-2xl lg:rounded-3xl bg-card border border-border p-6 md:p-7 lg:p-8 px-10 md:px-12 lg:px-14 xl:px-16 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-6 md:gap-7 lg:gap-10 xl:gap-12 items-center lg:items-start transition-all duration-300">
                    <div className="flex-shrink-0 transition-all duration-300">
                      <div className="relative h-16 w-16 md:h-18 md:w-18 lg:h-20 lg:w-20 xl:h-24 xl:w-24 rounded-full overflow-hidden border-2 border-primary/20 ring-2 ring-primary/10 transition-all duration-300">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 64px, (max-width: 768px) 72px, (max-width: 1024px) 80px, 96px"
                        />
                      </div>
                    </div>

                    <div className="flex-1 text-center lg:text-left transition-all duration-300 relative z-10">
                      <h4 className="text-lg md:text-xl lg:text-xl font-bold text-foreground mb-1 md:mb-1.5 lg:mb-2 transition-all duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-3.5 lg:mb-4 transition-all duration-300">
                        {testimonial.title}
                      </p>
                      <p className="text-sm md:text-base lg:text-base text-muted-foreground leading-relaxed transition-all duration-300">
                        {testimonial.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0">
          <div className="pointer-events-auto absolute left-2 md:left-3 lg:left-4 top-1/2 -translate-y-1/2">
            <button
              type="button"
              onClick={goToPrevious}
              disabled={isAnimating}
              aria-label="Previous testimonial"
              className="
                relative z-20 flex h-9 w-9 md:h-10 md:w-10 lg:h-11 lg:w-11 xl:h-12 xl:w-12 items-center justify-center
                rounded-xl bg-secondary text-muted-foreground transition-all
                hover:bg-primary hover:text-primary-foreground hover:scale-110
                hover:shadow-md hover:shadow-primary/20
                shadow-sm shadow-black/20 dark:shadow-none
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              <ChevronLeft className="h-4 w-4 md:h-4.5 md:w-4.5 lg:h-5 lg:w-5 transition-all duration-300" />
            </button>
          </div>

          <div className="pointer-events-auto absolute right-2 md:right-3 lg:right-4 top-1/2 -translate-y-1/2">
            <button
              type="button"
              onClick={goToNext}
              disabled={isAnimating}
              aria-label="Next testimonial"
              className="
                relative z-20 flex h-9 w-9 md:h-10 md:w-10 lg:h-11 lg:w-11 xl:h-12 xl:w-12 items-center justify-center
                rounded-xl bg-secondary text-muted-foreground transition-all
                hover:bg-primary hover:text-primary-foreground hover:scale-110
                hover:shadow-md hover:shadow-primary/20
                shadow-sm shadow-black/20 dark:shadow-none
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              <ChevronRight className="h-4 w-4 md:h-4.5 md:w-4.5 lg:h-5 lg:w-5 transition-all duration-300" />
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-1.5 md:gap-1.5 lg:gap-2 mt-4 md:mt-5 lg:mt-6 transition-all duration-300">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`h-1.5 md:h-1.5 lg:h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-6 md:w-7 lg:w-8 bg-primary"
                  : "w-1.5 md:w-1.5 lg:w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-3 md:mt-3.5 lg:mt-4 transition-all duration-300">
          <span className="text-xs md:text-sm text-muted-foreground transition-all duration-300">
            {currentIndex + 1} / {testimonials.length}
          </span>
        </div>
      </div>
    </div>
  );
}
