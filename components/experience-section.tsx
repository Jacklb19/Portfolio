"use client"

import { useState, useEffect, useRef, JSX } from "react"
import { Calendar } from "lucide-react"
import { ExperienceSection as ExperienceSectionType } from "@/data/types"
import {
  FaDocker,
  FaNodeJs,
  FaReact,
  FaPython,
  FaWhatsapp,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaGitAlt,
} from "react-icons/fa"
import {
  SiPostgresql,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiSpringboot,
  SiFirebase,
} from "react-icons/si"

interface ExperienceSectionProps {
  content: ExperienceSectionType
}

export function ExperienceSection({ content }: ExperienceSectionProps) {
  const experiences = content.experiences
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const techIcons: Record<string, JSX.Element> = {
    Docker: <FaDocker className="text-blue-500" />,
    "Node.js": <FaNodeJs className="text-green-500" />,
    PostgreSQL: <SiPostgresql className="text-sky-700" />,
    React: <FaReact className="text-cyan-400" />,
    Tailwind: <SiTailwindcss className="text-sky-400" />,
    MongoDB: <SiMongodb className="text-green-600" />,
    Python: <FaPython className="text-yellow-500" />,
    "WhatsApp API": <FaWhatsapp className="text-green-500" />,
    Java: <FaJava className="text-red-600" />,
    HTML5: <FaHtml5 className="text-orange-500" />,
    CSS3: <FaCss3Alt className="text-blue-600" />,
    Git: <FaGitAlt className="text-orange-600" />,
    TypeScript: <SiTypescript className="text-blue-500" />,
    JavaScript: <SiJavascript className="text-yellow-400" />,
    NextJS: <SiNextdotjs className="text-black dark:text-white" />,
    Express: <SiExpress className="text-gray-500" />,
    SpringBoot: <SiSpringboot className="text-green-700" />,
    Firebase: <SiFirebase className="text-amber-500" />,
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const viewportMiddle = window.innerHeight / 2

      let closestIndex = 0
      let closestDistance = Infinity

      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect()
          const itemMiddle = rect.top + rect.height / 2
          const distance = Math.abs(itemMiddle - viewportMiddle)

          if (distance < closestDistance) {
            closestDistance = distance
            closestIndex = index
          }
        }
      })

      setActiveIndex(closestIndex)
    }

    let ticking = false
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", scrollListener, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", scrollListener)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
    >
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
                    <h3 className="text-xl sm:text-2xl font-bold mt-1 mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-3 sm:mb-4">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="text-xs sm:text-sm">{exp.period}</span>
                    </div>

                    {/* Tecnologías con íconos */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
                      {exp.technologies.map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center gap-2 bg-secondary rounded-lg sm:rounded-xl px-3 py-1 sm:px-4 sm:py-2 transition-all hover:bg-secondary/80 hover:scale-105"
                        >
                          <span className="text-lg sm:text-xl">
                            {techIcons[tech]}
                          </span>
                          <span className="text-xs sm:text-sm font-medium text-foreground">
                            {tech}
                          </span>
                        </div>
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
                        <li
                          key={i}
                          className="flex gap-2 text-xs sm:text-sm leading-relaxed"
                        >
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
                src={experiences[activeIndex].image}
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