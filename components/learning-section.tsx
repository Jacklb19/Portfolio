"use client";

import { useState, useRef, useEffect, JSX } from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Languages, Target, Calendar, ExternalLink, CheckCircle2, Clock } from 'lucide-react';
import { LearningSection as LearningSectionType } from "@/data/types";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiDocker,
  SiTailwindcss,
} from "react-icons/si";

interface LearningSectionProps {
  content: LearningSectionType;
}

const techIcons: Record<string, JSX.Element> = {
  React: <FaReact className="text-cyan-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  PostgreSQL: <SiPostgresql className="text-sky-700" />,
  MongoDB: <SiMongodb className="text-green-600" />,
  Python: <FaPython className="text-yellow-500" />,
  Java: <FaJava className="text-red-600" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  NextJS: <SiNextdotjs className="text-black dark:text-white" />,
  Express: <SiExpress className="text-gray-500" />,
  Docker: <SiDocker className="text-blue-500" />,
  Tailwind: <SiTailwindcss className="text-sky-400" />,
  SQL: <SiPostgresql className="text-sky-700" />,
  JWT: <div className="text-purple-500 font-bold text-xs">JWT</div>,
  Hooks: <FaReact className="text-cyan-400" />,
  "Context API": <FaReact className="text-cyan-400" />,
  "Database Design": <SiPostgresql className="text-sky-700" />,
};

export function LearningSection({ content }: LearningSectionProps) {
  const [activeTab, setActiveTab] = useState<
    "certifications" | "courses" | "languages" | "focus"
  >("certifications");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const tabs = [
    { id: "certifications" as const, label: content.certifications.title, icon: Award },
    { id: "courses" as const, label: content.courses.title, icon: BookOpen },
    { id: "languages" as const, label: content.languages.title, icon: Languages },
    { id: "focus" as const, label: content.currentFocus.title, icon: Target },
  ];

  return (
    <section
      ref={sectionRef}
      className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-none mb-4">
            {content.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl">
            {content.subtitle}
          </p>
        </div>

        {/* Intro */}
        <div className="mb-8 sm:mb-12">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
            {content.intro.paragraph1}
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {content.intro.paragraph2}
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 border-b border-border overflow-x-auto">
          <div className="flex gap-1 min-w-max">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 font-medium transition-colors relative ${
                    activeTab === tab.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base whitespace-nowrap">{tab.label}</span>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "certifications" && (
            <div>
              <p className="text-muted-foreground mb-6 sm:mb-8">
                {content.certifications.subtitle}
              </p>
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                {content.certifications.items.map((cert) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: cert.id * 0.1 }}
                    className="bg-card border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-6 hover:border-primary/50 transition-all group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {cert.name}
                        </h3>
                        <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Award className="h-3 w-3 sm:h-4 sm:w-4" />
                            {cert.area}
                          </span>
                          <span>•</span>
                          <span>{cert.platform}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                            {cert.date}
                          </span>
                        </div>
                      </div>
                      <div
                        className={`flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                          cert.status === "completed"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-yellow-500/10 text-yellow-500"
                        }`}
                      >
                        {cert.status === "completed" ? (
                          <>
                            <CheckCircle2 className="h-3 w-3" />
                            <span className="hidden sm:inline">{content.statusLabels.completed}</span>
                          </>
                        ) : (
                          <>
                            <Clock className="h-3 w-3" />
                            <span className="hidden sm:inline">{content.statusLabels.inProgress}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.technologies.map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center gap-1.5 bg-secondary rounded-lg px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm"
                        >
                          <span className="text-base sm:text-lg">{techIcons[tech]}</span>
                          <span className="font-medium">{tech}</span>
                        </div>
                      ))}
                    </div>

                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm text-primary hover:underline"
                      >
                        {content.labels.viewCredential}
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "courses" && (
            <div>
              <p className="text-muted-foreground mb-6 sm:mb-8">
                {content.courses.subtitle}
              </p>
              <div className="space-y-8 sm:space-y-12">
                {Object.entries(content.courses.categories).map(
                  ([key, category], categoryIndex) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: categoryIndex * 0.1 }}
                    >
                      <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {category.title}
                      </h3>
                      <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
                        {category.items.map((course) => (
                          <div
                            key={course.id}
                            className="bg-card border border-border rounded-2xl p-4 sm:p-5 hover:border-primary/50 transition-all"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <h4 className="text-base sm:text-lg font-bold flex-1">
                                {course.title}
                              </h4>
                              <span className="text-xs sm:text-sm text-muted-foreground bg-secondary px-2 py-1 rounded-lg ml-2">
                                {course.year}
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                              <span className="font-medium text-foreground">
                                {course.platform}
                              </span>
                            </p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3">
                              {course.description}
                            </p>
                            {course.outcome && (
                              <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 mt-3">
                                <p className="text-xs sm:text-sm text-primary font-medium">
                                  ✓ {course.outcome}
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          )}

          {activeTab === "languages" && (
            <div>
              <p className="text-muted-foreground mb-6 sm:mb-8">
                {content.languages.subtitle}
              </p>
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2 max-w-3xl">
                {content.languages.items.map((language, index) => (
                  <motion.div
                    key={language.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-6 hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-2">
                          {language.name}
                        </h3>
                        <p className="text-base sm:text-lg text-primary font-medium">
                          {language.level}
                        </p>
                      </div>
                      <div className="bg-primary text-primary-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-sm sm:text-base font-bold">
                        {language.levelCode}
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                      {language.description}
                    </p>

                    {/* Link clicable traducido */}
                    {language.credentialUrl && (
                      <a
                        href={language.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm text-primary hover:underline"
                      >
                        {content.labels.viewCredential}
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "focus" && (
            <div>
              <p className="text-muted-foreground mb-6 sm:mb-8">
                {content.currentFocus.subtitle}
              </p>
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                {content.currentFocus.items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-card border-2 rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all ${
                      item.status === "active"
                        ? "border-primary hover:shadow-lg hover:shadow-primary/20"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className={`p-2 sm:p-3 rounded-xl ${
                          item.status === "active"
                            ? "bg-primary/10 text-primary"
                            : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        <Target className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="text-lg sm:text-xl font-bold leading-tight">
                            {item.title}
                          </h3>
                          <span
                            className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                              item.status === "active"
                                ? "bg-green-500/10 text-green-500"
                                : "bg-blue-500/10 text-blue-500"
                            }`}
                          >
                              {item.status === "active" ? content.statusLabels.active : content.statusLabels.planned}
                          </span>
                        </div>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
