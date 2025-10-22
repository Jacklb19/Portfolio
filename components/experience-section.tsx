"use client";

import { useState, useEffect, useRef, JSX } from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { ExperienceSection as ExperienceSectionType } from "@/data/types";
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
} from "react-icons/fa";
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
} from "react-icons/si";

interface ExperienceSectionProps {
  content: ExperienceSectionType;
}

export function ExperienceSection({ content }: ExperienceSectionProps) {
  const experiences = content.experiences;
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

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
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      // Punto de referencia: centro del viewport
      const viewportMiddle = window.innerHeight / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const itemMiddle = rect.top + rect.height / 2;
          const distance = Math.abs(itemMiddle - viewportMiddle);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });

      setActiveIndex(closestIndex);
    };

    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", scrollListener);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16">
          {content.title}
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Lista de experiencias con altura garantizada */}
          <div className="relative">
            {/* Texto introductorio en lugar del espaciador */}
            <div className="mb-16 sm:mb-20 lg:mb-24">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                A lo largo de mi trayectoria profesional, he tenido la oportunidad de trabajar en proyectos diversos y desafiantes que han fortalecido mis habilidades técnicas y mi capacidad para resolver problemas complejos.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Desde el desarrollo full-stack hasta la implementación de soluciones innovadoras, cada experiencia ha contribuido a mi crecimiento como desarrollador. A continuación, te presento un recorrido por los proyectos y roles que han definido mi carrera profesional.
              </p>
            </div>

            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`min-h-[60vh] sm:min-h-[70vh] flex items-center transition-all duration-700 ${
                  activeIndex === index ? "opacity-100" : "opacity-40"
                }`}
              >
                <div className="flex gap-3 sm:gap-4 w-full">
                  {/* Línea y punto indicador */}
                  <div className="flex flex-col items-center pt-2">
                    <div
                      className={`h-3 w-3 sm:h-4 sm:w-4 rounded-full border-2 transition-all duration-500 ${
                        activeIndex === index
                          ? "border-primary bg-primary shadow-lg shadow-primary/50 scale-125"
                          : "border-muted-foreground bg-background"
                      }`}
                    />
                    {index < experiences.length - 1 && (
                      <div className="w-0.5 bg-border mt-2 mb-2 flex-1 min-h-[200px]" />
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

                    {/* Descripción con transición suave */}
                    <ul
                      className={`mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-muted-foreground transition-all duration-700 ${
                        activeIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-xs sm:text-sm leading-relaxed"
                          style={{
                            transitionDelay:
                              activeIndex === index ? `${i * 50}ms` : "0ms",
                          }}
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

            {/* Espaciador inferior para permitir scroll de la última experiencia */}
            <div className="h-[40vh]" />
          </div>

          {/* Imagen lateral sticky con transición */}
          <div className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-border bg-card shadow-2xl">
              <div className="relative w-full aspect-[4/3]">
                {experiences.map((exp, index) => (
                  <Image
                    key={exp.id}
                    src={exp.image}
                    alt={exp.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                      activeIndex === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95"
                    }`}
                    width={600}
                    height={450}
                    priority={index === 0}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
