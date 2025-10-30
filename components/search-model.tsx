"use client";

import type React from "react";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Compass,
  Briefcase,
  Pencil,
  User,
  Mail,
  Sparkles,
  Loader2,
  Delete,
  XCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import { useDictionary } from "@/data/use-dictionary";
import { usePreferences } from "@/lib/preferences-context";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: string) => void;
}

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ElementType;
  keywords: string[];
}

interface SearchResult {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  type: "navigation" | "content";
  section?: string;
}

const navigationItems: NavigationItem[] = [
  {
    id: "home",
    label: "Explore",
    icon: Compass,
    keywords: ["home", "explore", "main", "inicio"],
  },
  {
    id: "experience",
    label: "Experience",
    icon: Briefcase,
    keywords: [
      "experience",
      "work",
      "jobs",
      "career",
      "experiencia",
      "trabajo",
    ],
  },
  {
    id: "projects",
    label: "Projects",
    icon: Pencil,
    keywords: ["projects", "portfolio", "work", "proyectos"],
  },
  {
    id: "about",
    label: "About",
    icon: User,
    keywords: ["about", "bio", "me", "sobre", "acerca"],
  },
  {
    id: "contact",
    label: "Contact",
    icon: Mail,
    keywords: ["contact", "email", "reach", "contacto"],
  },
];

export function SearchModal({ isOpen, onClose, onNavigate }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [showAIPrompt, setShowAIPrompt] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const { dictionary } = useDictionary();
  const { preferences } = usePreferences();

  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
      setResults([]);
      setSelectedIndex(0);
      setIsLoadingAI(false);
      setAiResponse("");
      setShowAIPrompt(false);
    } else {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const performSearch = useMemo(() => {
    return (query: string) => {
      const lowerQuery = query.toLowerCase();
      const searchResults: SearchResult[] = [];

      navigationItems.forEach((item) => {
        const matchScore = item.keywords.reduce((score, keyword) => {
          if (keyword.includes(lowerQuery)) return score + 2;
          if (lowerQuery.includes(keyword)) return score + 1;
          return score;
        }, 0);

        if (matchScore > 0 || item.label.toLowerCase().includes(lowerQuery)) {
          searchResults.push({
            id: item.id,
            title: item.label,
            subtitle: `Navigate to ${item.label}`,
            category: "Navigation",
            type: "navigation",
          });
        }
      });

      if (dictionary?.projects?.projects) {
        dictionary.projects.projects.forEach((project) => {
          const matchInName = project.name.toLowerCase().includes(lowerQuery);
          const matchInDescription = project.description
            .toLowerCase()
            .includes(lowerQuery);
          const matchInTech = project.technologies.some((tech) =>
            tech.toLowerCase().includes(lowerQuery)
          );

          if (matchInName || matchInDescription || matchInTech) {
            searchResults.push({
              id: `project-${project.id}`,
              title: project.name,
              subtitle: project.description.substring(0, 80) + "...",
              category: "Projects",
              type: "content",
              section: "projects",
            });
          }
        });
      }

      if (dictionary?.experience?.experiences) {
        dictionary.experience.experiences.forEach((exp) => {
          const matchInTitle = exp.title.toLowerCase().includes(lowerQuery);
          const matchInCategory = exp.category
            .toLowerCase()
            .includes(lowerQuery);
          const matchInTech = exp.technologies.some((tech) =>
            tech.toLowerCase().includes(lowerQuery)
          );
          const matchInDescription = exp.description.some((desc) =>
            desc.toLowerCase().includes(lowerQuery)
          );

          if (
            matchInTitle ||
            matchInCategory ||
            matchInTech ||
            matchInDescription
          ) {
            searchResults.push({
              id: `experience-${exp.id}`,
              title: exp.title,
              subtitle: `${exp.category} • ${exp.period}`,
              category: "Experience",
              type: "content",
              section: "experience",
            });
          }
        });
      }

      if (dictionary?.about) {
        const aboutText = [
          dictionary.about.description,
          dictionary.about.hobbies?.text,
          dictionary.about.interests?.text,
        ]
          .join(" ")
          .toLowerCase();

        if (aboutText.includes(lowerQuery)) {
          if (
            dictionary.about.hobbies?.text.toLowerCase().includes(lowerQuery)
          ) {
            searchResults.push({
              id: "about-hobbies",
              title: dictionary.about.hobbies.title,
              subtitle: dictionary.about.hobbies.text.substring(0, 80) + "...",
              category: "About",
              type: "content",
              section: "about",
            });
          }
          if (
            dictionary.about.interests?.text.toLowerCase().includes(lowerQuery)
          ) {
            searchResults.push({
              id: "about-interests",
              title: dictionary.about.interests.title,
              subtitle:
                dictionary.about.interests.text.substring(0, 80) + "...",
              category: "About",
              type: "content",
              section: "about",
            });
          }
          if (dictionary.about.description.toLowerCase().includes(lowerQuery)) {
            searchResults.push({
              id: "about-description",
              title: "About Jose Burbano",
              subtitle: dictionary.about.description.substring(0, 80) + "...",
              category: "About",
              type: "content",
              section: "about",
            });
          }
        }
      }

      if (dictionary?.contact) {
        const contactKeywords = [
          dictionary.contact.info?.location?.value,
          dictionary.contact.info?.availability?.value,
          dictionary.contact.info?.email?.value,
          dictionary.contact.info?.location?.label,
          dictionary.contact.info?.availability?.label,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        if (contactKeywords.includes(lowerQuery)) {
          if (
            dictionary.contact.info?.location?.value
              .toLowerCase()
              .includes(lowerQuery)
          ) {
            searchResults.push({
              id: "contact-location",
              title: dictionary.contact.info.location.label,
              subtitle: dictionary.contact.info.location.value,
              category: "Contact",
              type: "content",
              section: "contact",
            });
          }
          if (
            dictionary.contact.info?.availability?.value
              .toLowerCase()
              .includes(lowerQuery)
          ) {
            searchResults.push({
              id: "contact-availability",
              title: dictionary.contact.info.availability.label,
              subtitle: dictionary.contact.info.availability.value,
              category: "Contact",
              type: "content",
              section: "contact",
            });
          }
          if (
            dictionary.contact.info?.email?.value
              .toLowerCase()
              .includes(lowerQuery)
          ) {
            searchResults.push({
              id: "contact-email",
              title: dictionary.contact.info.email.label,
              subtitle: dictionary.contact.info.email.value,
              category: "Contact",
              type: "content",
              section: "contact",
            });
          }
        }
      }
      if (dictionary?.hero) {
        const heroText = [
          dictionary.hero.intro,
          dictionary.hero.title.start,
          dictionary.hero.title.highlight,
          dictionary.hero.title.end,
          dictionary.hero.subtitle,
        ]
          .join(" ")
          .toLowerCase();

        if (heroText.includes(lowerQuery)) {
          searchResults.push({
            id: "hero-intro",
            title: dictionary.hero.subtitle,
            subtitle: `${dictionary.hero.intro} ${dictionary.hero.title.start} ${dictionary.hero.title.highlight} ${dictionary.hero.title.end}`,
            category: "Profile",
            type: "content",
            section: "home",
          });
        }
      }

      if (dictionary?.about?.testimonials?.testimonials) {
        dictionary.about.testimonials.testimonials.forEach((testimonial) => {
          const matchInName = testimonial.name
            .toLowerCase()
            .includes(lowerQuery);
          const matchInTitle = testimonial.title
            .toLowerCase()
            .includes(lowerQuery);
          const matchInContent = testimonial.content
            .toLowerCase()
            .includes(lowerQuery);

          if (matchInName || matchInTitle || matchInContent) {
            searchResults.push({
              id: `testimonial-${testimonial.id}`,
              title: `${testimonial.name} - ${testimonial.title}`,
              subtitle: testimonial.content.substring(0, 80) + "...",
              category: "Testimonials",
              type: "content",
              section: "about",
            });
          }
        });
      }

      const techKeywords = [
        "react",
        "next",
        "nextjs",
        "spring",
        "springboot",
        "mongodb",
        "postgresql",
        "jwt",
        "tailwind",
        "typescript",
        "java",
        "python",
        "node",
        "nodejs",
        "unity",
        "c#",
        "csharp",
        "javascript",
        "html",
        "css",
        "api",
        "rest",
        "graphql",
        "docker",
        "aws",
        "git",
        "github",
        "vite",
        "n8n",
        "automation",
        "whatsapp",
      ];

      techKeywords.forEach((tech) => {
        if (tech.includes(lowerQuery) || lowerQuery.includes(tech)) {
          searchResults.push({
            id: `tech-${tech}`,
            title: tech.charAt(0).toUpperCase() + tech.slice(1),
            subtitle: `Technology used in projects`,
            category: "Technologies",
            type: "content",
            section: "projects",
          });
        }
      });

      const uniqueResults = Array.from(
        new Map(searchResults.map((item) => [item.id, item])).values()
      );

      setResults(uniqueResults);
      setShowAIPrompt(uniqueResults.length === 0);
      setSelectedIndex(0);
    };
  }, [dictionary]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults([]);
      setShowAIPrompt(false);
      setAiResponse("");
      return;
    }

    const timeoutId = setTimeout(() => {
      performSearch(searchQuery);
    }, 200);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, performSearch]);

  const handleAIQuery = async () => {
    if (!searchQuery.trim() || isLoadingAI) return;

    setIsLoadingAI(true);
    setAiResponse("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content: searchQuery,
            },
          ],
          language: preferences.language, 
          portfolioContext: dictionary, 
        }),
      });

      if (!response.ok) throw new Error("Failed to get AI response");

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split("\n");

          for (const line of lines) {
            if (line.startsWith("0:")) {
              const content = line.slice(2).replace(/^"|"$/g, "");
              setAiResponse((prev) => prev + content);
            }
          }
        }
      }
    } catch (error) {
      console.error("AI query error:", error);
      setAiResponse(
        dictionary?.chatbot?.errorMessage ||
          "Sorry, I couldn't process your question. Please try again."
      );
    } finally {
      setIsLoadingAI(false);
    }
  };

  const handleSelect = (result: SearchResult) => {
    if (result.type === "navigation") {
      onNavigate(result.id);
      onClose();
    } else if (result.section) {
      onNavigate(result.section);
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < (showAIPrompt ? 0 : results.length - 1) ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (showAIPrompt && selectedIndex === 0) {
        handleAIQuery();
      } else if (results[selectedIndex]) {
        handleSelect(results[selectedIndex]);
      }
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setAiResponse("");
    setIsLoadingAI(false);
    setShowAIPrompt(false);
    inputRef.current?.focus();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-background/90 z-[100]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="fixed left-1/2 top-[20%] -translate-x-1/2 w-full max-w-2xl z-[101] px-4"
          >
            <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-3 p-4 border-b border-border">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder={
                    dictionary?.chatbot?.placeholder || "Search or ask…"
                  }
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-lg"
                />
                {searchQuery && !aiResponse && (
                  <button
                    onClick={clearSearch}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Clear search"
                  >
                    <Delete className="h-5 w-5" />
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close"
                >
                  <XCircle className="h-5 w-5" />
                </button>
              </div>

              {/* Content area */}
              <div
                ref={resultsRef}
                className="max-h-[60vh] overflow-y-auto scrollbar-hide"
              >
                {/* Default view */}
                {!searchQuery && (
                  <div className="p-4">
                    <div className="text-xs font-semibold text-muted-foreground mb-3 px-3">
                      Navigation
                    </div>
                    <div className="space-y-1">
                      {navigationItems.map((item, index) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            onNavigate(item.id);
                            onClose();
                          }}
                          className={cn(
                            "w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all group",
                            index === selectedIndex
                              ? "bg-secondary text-foreground"
                              : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                          )}
                        >
                          <item.icon className="h-5 w-5 flex-shrink-0 transition-transform group-hover:scale-110" />
                          <span className="text-sm font-medium">
                            {item.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Search results */}
                {searchQuery && results.length > 0 && !aiResponse && (
                  <div className="p-4">
                    <div className="text-xs font-semibold text-muted-foreground mb-3 px-3">
                      {results.length} result{results.length !== 1 ? "s" : ""}{" "}
                      found
                    </div>
                    <div className="space-y-1">
                      {results.map((result, index) => (
                        <button
                          key={result.id}
                          onClick={() => handleSelect(result)}
                          className={cn(
                            "w-full flex flex-col items-start gap-1 px-3 py-3 rounded-xl transition-all text-left",
                            index === selectedIndex
                              ? "bg-secondary text-foreground"
                              : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                          )}
                        >
                          <div className="flex items-center gap-2 w-full">
                            <span className="text-sm font-medium">
                              {result.title}
                            </span>
                            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full ml-auto">
                              {result.category}
                            </span>
                          </div>
                          {result.subtitle && (
                            <span className="text-xs text-muted-foreground line-clamp-1">
                              {result.subtitle}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* AI Prompt */}
                {showAIPrompt && !aiResponse && !isLoadingAI && (
                  <div className="p-4">
                    <button
                      onClick={handleAIQuery}
                      className={cn(
                        "w-full flex items-start gap-3 px-4 py-4 rounded-xl transition-all border-2 border-dashed",
                        selectedIndex === 0
                          ? "bg-primary/10 border-primary text-foreground"
                          : "border-border text-muted-foreground hover:bg-secondary/50 hover:border-primary/50"
                      )}
                    >
                      <Sparkles className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" />
                      <div className="flex-1 text-left">
                        <div className="text-sm font-medium">
                          {preferences.language === "es" ? (
                            <>
                              ¿Puedes contarme sobre{" "}
                              <span className="font-bold">{searchQuery}</span>?
                            </>
                          ) : (
                            <>
                              Can you tell me about{" "}
                              <span className="font-bold">{searchQuery}</span>?
                            </>
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {preferences.language === "es"
                            ? "Usa IA para responder tus preguntas (Beta)"
                            : "Use AI to answer your questions (Beta)"}
                        </div>
                      </div>
                    </button>
                  </div>
                )}

                {/* Loading */}
                {isLoadingAI && (
                  <div className="p-8 flex flex-col items-center justify-center gap-3">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    <p className="text-sm text-muted-foreground">
                      {dictionary?.chatbot?.loadingText || "Generating answer…"}
                    </p>
                  </div>
                )}

                {/* AI Response */}
                {aiResponse && (
                  <div className="p-6">
                    <div className="prose prose-sm dark:prose-invert max-w-none">
                      <ReactMarkdown>{aiResponse}</ReactMarkdown>
                    </div>
                    <button
                      onClick={clearSearch}
                      className="mt-4 px-4 py-2 bg-secondary hover:bg-secondary/80 text-foreground rounded-lg text-sm font-medium transition-colors"
                    >
                      {preferences.language === "es"
                        ? "Nueva búsqueda"
                        : "New search"}
                    </button>
                  </div>
                )}

                {/* Empty state */}
                {searchQuery &&
                  results.length === 0 &&
                  !showAIPrompt &&
                  !aiResponse &&
                  !isLoadingAI && (
                    <div className="p-8 text-center text-muted-foreground">
                      <p className="text-sm">No results found</p>
                    </div>
                  )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
