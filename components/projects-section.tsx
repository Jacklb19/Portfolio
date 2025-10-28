"use client";
import Image from "next/image";
import { JSX, useState } from "react";
import { ExternalLink, ChevronDown } from "lucide-react";
import { ProjectsSection as ProjectSectionType } from "@/data/types";
import { FaDocker, FaNodeJs, FaReact, FaPython, FaJava, FaLock, FaUnity } from "react-icons/fa";
import {
  SiPostgresql,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiSpringboot,
} from "react-icons/si";

interface ProjectSectionProps {
  content: ProjectSectionType;
}

export function ProjectsSection({ content }: ProjectSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<
    "all" | "online" | "offline"
  >("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProjects = content.projects.filter((project) => {
    if (selectedFilter === "all") return true;
    return project.status === selectedFilter;
  });

  const filterOptions = [
    { value: "all" as const, label: content.filter.option },
    { value: "online" as const, label: "Online" },
    { value: "offline" as const, label: "Offline" },
  ];

  const techIcons: Record<string, JSX.Element> = {
    Docker: <FaDocker className="text-blue-500" />,
    "Node.js": <FaNodeJs className="text-green-500" />,
    PostgreSQL: <SiPostgresql className="text-sky-700" />,
    React: <FaReact className="text-cyan-400" />,
    Tailwind: <SiTailwindcss className="text-sky-400" />,
    MongoDB: <SiMongodb className="text-green-600" />,
    Python: <FaPython className="text-yellow-500" />,
    Java: <FaJava className="text-red-600" />,
    TypeScript: <SiTypescript className="text-blue-500" />,
    NextJS: <SiNextdotjs className="text-black dark:text-white" />,
    Express: <SiExpress className="text-gray-500" />,
    SpringBoot: <SiSpringboot className="text-green-700" />,
    JWT: <FaLock className="text-black dark:text:white" />,
    Unity: <FaUnity className="text-black dark:text:white"/>,
  };

  return (
    <section
      id="projects"
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start justify-between mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4 sm:gap-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              {content.title}
            </h2>

            <div className="relative">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="
      rounded-full bg-secondary px-3 py-1.5 sm:px-4 sm:py-2
      flex items-center gap-2 transition-colors hover:bg-secondary/80
      shadow-sm shadow-black/20 hover:shadow-md dark:shadow-none
    "
              >
                <span className="text-xs sm:text-sm text-muted-foreground">
                  {content.filter.name}:{" "}
                  {
                    filterOptions.find((opt) => opt.value === selectedFilter)
                      ?.label
                  }
                </span>
                <ChevronDown
                  className={`h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground transition-transform
        ${
          isFilterOpen ? "rotate-180" : ""
        } drop-shadow-md dark:drop-shadow-none`}
                />
              </button>

              {isFilterOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsFilterOpen(false)}
                  />
                  <div
                    className="
          absolute right-0 mt-2 w-40 sm:w-48 rounded-lg bg-card border border-border
          shadow-lg dark:shadow-none z-20 overflow-hidden
        "
                  >
                    {filterOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSelectedFilter(option.value);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-secondary ${
                          selectedFilter === option.value
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-foreground"
                        }`}
                      >
                        {option.label}
                        {option.value !== "all" && (
                          <span className="ml-2 text-xs text-muted-foreground">
                            (
                            {
                              content.projects.filter(
                                (p) => p.status === option.value
                              ).length
                            }
                            )
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <p className="text-muted-foreground text-sm sm:text-base mt-4 max-w-3xl">
            {content.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank" 
              rel="noopener noreferrer"
              className="group rounded-2xl sm:rounded-3xl bg-card border border-border overflow-hidden transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden bg-secondary relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-2 sm:mb-3">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>

                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {project.description}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="flex items-center gap-1 rounded-md sm:rounded-lg bg-secondary px-2 py-0.5 sm:px-2 sm:py-1 text-xs font-medium"
                      >
                        {techIcons[tech] || null}
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span
                    className={`rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 text-xs font-semibold flex-shrink-0 ${
                      project.status === "online"
                        ? "bg-green-500/10 text-green-500"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
