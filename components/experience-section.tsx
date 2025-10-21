"use client"

import { useState, useEffect, useRef } from "react"
import { Calendar } from "lucide-react"
import { ExperienceSection as ExperienceSectionType } from "@/data/types"

interface ExperienceSectionProps {
  content: ExperienceSectionType
}

export function ExperienceSection({ content }: ExperienceSectionProps) {
  const experiences = content.experiences
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionTop = sectionRef.current.offsetTop
      const scrollPosition = window.scrollY + window.innerHeight / 2

      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const itemTop = ref.offsetTop + sectionTop
          const itemBottom = itemTop + ref.offsetHeight

          if (scrollPosition >= itemTop && scrollPosition < itemBottom) {
            setActiveIndex(index)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16">
          {content.title}
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Lista de experiencias */}
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                className={`transition-all duration-500 ${
                  activeIndex === index ? "opacity-100" : "opacity-40"
                }`}
              >
                <div className="flex gap-3 sm:gap-4">
                  {/* Línea y punto indicador */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`h-3 w-3 sm:h-4 sm:w-4 rounded-full border-2 transition-all duration-500 ${
                        activeIndex === index
                          ? "border-primary bg-primary shadow-lg shadow-primary/50 scale-125"
                          : "border-muted-foreground bg-background"
                      }`}
                    />
                    {index < experiences.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2 flex-1 min-h-[60px] sm:min-h-[80px]" />
                    )}
                  </div>

                  {/* Contenido */}
                  <div className="flex-1 pb-6 sm:pb-8">
                    <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                      {exp.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold mt-1 mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-3 sm:mb-4">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="text-xs sm:text-sm">{exp.period}</span>
                    </div>

                    {/* Tecnologías */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md sm:rounded-lg bg-secondary px-2 py-0.5 sm:px-3 sm:py-1 text-xs font-medium text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Descripción */}
                    <ul
                      className={`mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-muted-foreground transition-all duration-500 ${
                        activeIndex === index
                          ? "opacity-100 max-h-[500px]"
                          : "opacity-0 max-h-0 overflow-hidden"
                      }`}
                    >
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-2 text-xs sm:text-sm leading-relaxed">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Imagen lateral */}
          <div className="hidden lg:block lg:sticky lg:top-24">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-border bg-card shadow-2xl transition-all duration-500">
              <img
                src={experiences[activeIndex].image || "/placeholder.svg"}
                alt={experiences[activeIndex].title}
                className="w-full h-auto object-cover transition-opacity duration-500"
                key={activeIndex}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
