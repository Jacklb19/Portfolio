"use client";

import { MapPin, Code2, Heart, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import type { AboutSection as AboutSectionType, ProjectItem } from "@/data/types";
import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import { SiPostgresql, SiTailwindcss, SiMongodb } from "react-icons/si";
import Image from "next/image";

interface AboutSectionProps {
  content: AboutSectionType;
  onNavigateToProjects?: () => void;
  projectsPreview?: ProjectItem[];
}

export function AboutSection({
  content,
  onNavigateToProjects,
  projectsPreview,
}: AboutSectionProps) {
  const techStack = [
    { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-700" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  ];

  const handleNavigateToProjects = () => {
    if (onNavigateToProjects) {
      onNavigateToProjects();
    }
  };

  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
          <span className="text-sm sm:text-base text-muted-foreground">
            Colombia
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12 mb-8 sm:mb-12">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
              {content.title}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {content.description}
            </p>
          </div>

          <div className="flex justify-center lg:justify-end lg:flex-shrink-0">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
              <Image
                src="/images/profile.jpg"
                alt="Jose Burbano Profile Photo"
                fill
                className="rounded-full object-cover shadow-2xl shadow-primary/20 ring-4 ring-primary/10 transition-transform hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="group rounded-2xl sm:rounded-3xl bg-card border border-border p-6 sm:p-8 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <h3 className="text-lg sm:text-xl font-semibold">
                {content.hobbies.title}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {content.hobbies.text}
            </p>
          </div>

          <div className="group rounded-2xl sm:rounded-3xl bg-card border border-border p-6 sm:p-8 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
              <h3 className="text-lg sm:text-xl font-semibold">
                {content.interests.title}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {content.interests.text}
            </p>
          </div>
        </div>

        <div className="rounded-2xl sm:rounded-3xl bg-card border border-border p-6 sm:p-8 mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
            {content.stack.title}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
            {content.stack.description}
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 rounded-lg sm:rounded-xl bg-secondary px-3 py-2 sm:px-4 sm:py-3 transition-all hover:bg-secondary/80 hover:scale-105"
              >
                <span className="text-xl sm:text-2xl">{tech.icon}</span>
                <span className="font-medium text-xs sm:text-sm">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 p-6 sm:p-8 mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <Layers className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <h3 className="text-xl sm:text-2xl font-semibold">
              {content.projects.title}
            </h3>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
            {content.projects.description}
          </p>

          {projectsPreview && projectsPreview.length > 0 && (
            <div className="relative mb-6 sm:mb-8 -mx-2">
              <div className="flex gap-3 sm:gap-4 overflow-x-auto px-2 pb-2 scrollbar-hide snap-x snap-mandatory">
                {projectsPreview.map((project) => (
                  <div
                    key={project.id}
                    className="group flex-none w-32 sm:w-40 snap-start"
                  >
                    <div className="rounded-lg sm:rounded-xl overflow-hidden bg-card border border-border transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                      <div className="relative aspect-square bg-secondary">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 128px, 160px"
                        />
                      </div>
                      
                      <div className="p-3 sm:p-4">
                        <h4 className="font-semibold text-xs sm:text-sm text-foreground mb-2 truncate">
                          {project.name}
                        </h4>
                        
                        <div className="flex items-center gap-2">
                          <div
                            className={`h-2 w-2 rounded-full ${
                              project.status === "online"
                                ? "bg-green-500"
                                : "bg-muted-foreground/50"
                            }`}
                          />
                          <span className="text-xs text-muted-foreground capitalize">
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Button
            onClick={handleNavigateToProjects}
            className="rounded-xl bg-primary hover:bg-primary/90 w-full sm:w-auto transition-all hover:scale-105"
          >
            {content.projects.button}
          </Button>
        </div>

        <TestimonialsCarousel
          title={content.testimonials.title}
          subtitle={content.testimonials.subtitle}
          testimonials={content.testimonials.testimonials}
        />
      </div>
    </section>
  );
}
