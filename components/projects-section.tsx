"use client"

import { ExternalLink } from "lucide-react"
import { Dictionary } from "@/data/types"

export function ProjectsSection({ content }: { content: Dictionary["projects"] }) {
  return (
    <section id="projects" className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start justify-between mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4 sm:gap-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{content.title}</h2>
            <div className="rounded-full bg-secondary px-3 py-1.5 sm:px-4 sm:py-2">
              <span className="text-xs sm:text-sm text-muted-foreground">{content.filter}</span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base mt-4 max-w-3xl">{content.description}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {content.projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="group rounded-2xl sm:rounded-3xl bg-card border border-border overflow-hidden transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden bg-secondary">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
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
                        className="rounded-md sm:rounded-lg bg-secondary px-2 py-0.5 sm:px-2 sm:py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span
                    className={`rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 text-xs font-semibold flex-shrink-0 ${
                      project.status === "online" ? "bg-green-500/10 text-green-500" : "bg-muted text-muted-foreground"
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
  )
}
