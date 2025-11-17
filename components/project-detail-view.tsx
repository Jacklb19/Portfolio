"use client";

import Image from "next/image";
import Link from "next/link";
import { useDictionary } from "@/data/use-dictionary";
import { usePreferences } from "@/lib/preferences-context";
import {
  FaDocker,
  FaNodeJs,
  FaReact,
  FaPython,
  FaJava,
  FaUnity,
  FaLock,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiSpringboot,
} from "react-icons/si";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  Briefcase,
  User,
  MailIcon,
} from "lucide-react";
import { JSX } from "react";

interface ProjectDetailViewProps {
  slug: string;
  onBack: () => void;
  onNavigateSection: (section: string) => void;
}

export function ProjectDetailView({ slug, onBack,onNavigateSection }: ProjectDetailViewProps) {
  const { dictionary, loading } = useDictionary();
  const { preferences } = usePreferences();
  const lang = preferences.language;

  if (loading || !dictionary) {
    return (
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 animate-pulse">
        <div className="max-w-5xl mx-auto">
          <div className="h-4 w-32 bg-muted rounded mb-8" />
          <div className="h-12 w-3/4 bg-muted rounded mb-4" />
          <div className="h-6 w-full bg-muted rounded mb-8" />
          <div className="aspect-video bg-muted rounded-2xl mb-8" />
        </div>
      </div>
    );
  }

  const project = dictionary.projects.projectDetails.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Proyecto no encontrado</h2>
          <button onClick={onBack} className="text-primary hover:underline">
            Volver a proyectos
          </button>
        </div>
      </div>
    );
  }

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
    JWT: <FaLock className="text-black dark:text-white" />,
    Unity: <FaUnity className="text-black dark:text-white" />,
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto">
        {/* BREADCRUMB */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          {lang === "es" ? "Todos los Proyectos" : "All Projects"}
        </button>

        {/* HERO */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            {project.name}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6">
            {project.description}
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-6 text-sm text-muted-foreground">
            <time dateTime={project.date}>{project.date}</time>
            <span className="h-1 w-1 rounded-full bg-muted-foreground" />
            <span className="rounded-full bg-primary/10 text-primary px-3 py-1 font-medium">
              {project.category}
            </span>
          </div>
        </div>

        {/* IMAGEN */}
        <div className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-secondary mb-12 border border-border">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
          <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black/50 to-transparent flex items-center px-4 gap-2">
            <div className="h-3 w-3 rounded-full bg-white/60" />
            <div className="h-3 w-3 rounded-full bg-white/60" />
            <div className="h-3 w-3 rounded-full bg-white/60" />
          </div>
        </div>

        {/* DEMO & CODE */}
        <section className="mb-16 rounded-2xl sm:rounded-3xl bg-card border border-border p-8 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {lang === "es" ? "Demo & Código" : "Demo & Code"}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {lang === "es"
              ? "¿Te gustaría probar una demo rápida o revisar el código fuente?"
              : "Would you like to take a quick demo or view the source code?"}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {project.status === "online" && project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 min-w-[140px]"
              >
                <ExternalLink className="h-5 w-5" />
                Demo
              </a>
            )}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border bg-card px-6 py-3 text-base font-semibold hover:bg-secondary transition-all hover:scale-105 min-w-[140px]"
            >
              <Github className="h-5 w-5" />
              {lang === "es" ? "Código" : "Source"}
            </a>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            {lang === "es" ? "Características Clave" : "Key Features"}
          </h2>
          <ul className="space-y-3">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-muted-foreground leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* OUTCOME */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            {lang === "es" ? "Resultado" : "Outcome"}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {project.outcome}
          </p>
        </section>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          <button
            onClick={() => onNavigateSection("contact")}
            className="group rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 p-6 sm:p-8 transition-all hover:scale-105 hover:shadow-xl text-left"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/20 mb-4">
              <MailIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">
              {lang === "es" ? "Contacto" : "Contact"}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {lang === "es"
                ? "¿Quieres trabajar conmigo o charlar sobre desarrollo? Hablemos por aquí."
                : "Want to work together or chat about development? Let's connect!"}
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
              {lang === "es" ? "Ir a Contacto" : "Go to Contact"}
              <ChevronLeft className="h-4 w-4 rotate-180" />
            </span>
          </button>

          <button
            onClick={() => onNavigateSection("experience")}
            className="group rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 p-6 sm:p-8 transition-all hover:scale-105 hover:shadow-xl text-left"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/20 mb-4">
              <User className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">
              {lang === "es" ? "Experiencia" : "Experience"}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {lang === "es"
                ? "Sumérgete para ver mi experiencia profesional."
                : "Dive in to see my experience."}
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
              {lang === "es" ? "Ver Experiencia" : "View Experience"}
              <ChevronLeft className="h-4 w-4 rotate-180" />
            </span>
          </button>
        </div>

        {/* BACKGROUND */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            {lang === "es" ? "Contexto" : "Background"}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {project.background}
          </p>
        </section>

        {/* CHALLENGE */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            {lang === "es" ? "Desafío" : "Challenge"}
          </h2>
          <ul className="space-y-3">
            {project.challenges.map((challenge, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                <span className="text-muted-foreground leading-relaxed">
                  {challenge}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* SOLUTION */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            {lang === "es" ? "Solución" : "Solution"}
          </h2>
          <ul className="space-y-4">
            {project.solutions.map((solution, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                <div>
                  <p className="font-semibold mb-1">{solution.title}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* TECH STACK */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            {lang === "es" ? "Stack Tecnológico" : "Tech Stack"}
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="flex items-center gap-2 rounded-lg bg-secondary border border-border px-4 py-2 text-sm font-medium"
              >
                {techIcons[tech] || null}
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* VOLVER */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          {lang === "es" ? "Volver a Proyectos" : "Back to Projects"}
        </button>
      </div>
    </div>
  );
}
