"use client"

import type React from "react"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Compass, Briefcase, Pencil, User, Mail, Sparkles, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import ReactMarkdown from "react-markdown"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
  onNavigate: (section: string) => void
}

interface NavigationItem {
  id: string
  label: string
  icon: React.ElementType
  keywords: string[]
}

interface SearchResult {
  id: string
  title: string
  subtitle?: string
  category: string
  type: "navigation" | "content"
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
    keywords: ["experience", "work", "jobs", "career", "experiencia", "trabajo"],
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
]

export function SearchModal({ isOpen, onClose, onNavigate }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isLoadingAI, setIsLoadingAI] = useState(false)
  const [aiResponse, setAiResponse] = useState("")
  const [showAIPrompt, setShowAIPrompt] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("")
      setResults([])
      setSelectedIndex(0)
      setIsLoadingAI(false)
      setAiResponse("")
      setShowAIPrompt(false)
    } else {
      // Focus input when modal opens
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  // Search with debounce
  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults([])
      setShowAIPrompt(false)
      return
    }

    const timeoutId = setTimeout(() => {
      performSearch(searchQuery)
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [searchQuery])

  const performSearch = useCallback((query: string) => {
    const lowerQuery = query.toLowerCase()
    const searchResults: SearchResult[] = []

    // Search through navigation items
    navigationItems.forEach((item) => {
      const matchScore = item.keywords.reduce((score, keyword) => {
        if (keyword.includes(lowerQuery)) return score + 2
        if (lowerQuery.includes(keyword)) return score + 1
        return score
      }, 0)

      if (matchScore > 0 || item.label.toLowerCase().includes(lowerQuery)) {
        searchResults.push({
          id: item.id,
          title: item.label,
          subtitle: `Navigate to ${item.label}`,
          category: "Navigation",
          type: "navigation",
        })
      }
    })

    setResults(searchResults)
    setShowAIPrompt(searchResults.length === 0)
    setSelectedIndex(0)
  }, [])

  const handleAIQuery = async () => {
    if (!searchQuery.trim() || isLoadingAI) return

    setIsLoadingAI(true)
    setAiResponse("")

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content: `You are Jose Burbano's portfolio assistant. Answer this question about Jose or his portfolio: ${searchQuery}. Keep responses concise and helpful.`,
            },
          ],
        }),
      })

      if (!response.ok) throw new Error("Failed to get AI response")

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value)
          const lines = chunk.split("\n")

          for (const line of lines) {
            if (line.startsWith("0:")) {
              const content = line.slice(2).replace(/^"|"$/g, "")
              setAiResponse((prev) => prev + content)
            }
          }
        }
      }
    } catch (error) {
      console.error("AI query error:", error)
      setAiResponse("Sorry, I couldn't process your question. Please try again.")
    } finally {
      setIsLoadingAI(false)
    }
  }

  const handleSelect = (result: SearchResult) => {
    if (result.type === "navigation") {
      onNavigate(result.id)
      onClose()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose()
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev < (showAIPrompt ? 0 : results.length - 1) ? prev + 1 : prev))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0))
    } else if (e.key === "Enter") {
      e.preventDefault()
      if (showAIPrompt && selectedIndex === 0) {
        handleAIQuery()
      } else if (results[selectedIndex]) {
        handleSelect(results[selectedIndex])
      }
    }
  }

  const clearSearch = () => {
    setSearchQuery("")
    setAiResponse("")
    setIsLoadingAI(false)
    setShowAIPrompt(false)
    inputRef.current?.focus()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="fixed left-1/2 top-[20%] -translate-x-1/2 w-full max-w-2xl z-[101] px-4"
          >
            <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
              {/* Header with search input */}
              <div className="flex items-center gap-3 p-4 border-b border-border">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search or ask…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-lg"
                />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
                <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Content area */}
              <div ref={resultsRef} className="max-h-[60vh] overflow-y-auto scrollbar-hide">
                {/* Default view - Navigation items */}
                {!searchQuery && (
                  <div className="p-4">
                    <div className="text-xs font-semibold text-muted-foreground mb-3 px-3">Navigation</div>
                    <div className="space-y-1">
                      {navigationItems.map((item, index) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            onNavigate(item.id)
                            onClose()
                          }}
                          className={cn(
                            "w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all group",
                            index === selectedIndex
                              ? "bg-secondary text-foreground"
                              : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
                          )}
                        >
                          <item.icon className="h-5 w-5 flex-shrink-0 transition-transform group-hover:scale-110" />
                          <span className="text-sm font-medium">{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Search results */}
                {searchQuery && results.length > 0 && !aiResponse && (
                  <div className="p-4">
                    <div className="text-xs font-semibold text-muted-foreground mb-3 px-3">Results</div>
                    <div className="space-y-1">
                      {results.map((result, index) => (
                        <button
                          key={result.id}
                          onClick={() => handleSelect(result)}
                          className={cn(
                            "w-full flex flex-col items-start gap-1 px-3 py-3 rounded-xl transition-all text-left",
                            index === selectedIndex
                              ? "bg-secondary text-foreground"
                              : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
                          )}
                        >
                          <span className="text-sm font-medium">{result.title}</span>
                          {result.subtitle && <span className="text-xs text-muted-foreground">{result.subtitle}</span>}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* AI Prompt - No results */}
                {showAIPrompt && !aiResponse && !isLoadingAI && (
                  <div className="p-4">
                    <button
                      onClick={handleAIQuery}
                      className={cn(
                        "w-full flex items-start gap-3 px-4 py-4 rounded-xl transition-all border-2 border-dashed",
                        selectedIndex === 0
                          ? "bg-primary/10 border-primary text-foreground"
                          : "border-border text-muted-foreground hover:bg-secondary/50 hover:border-primary/50",
                      )}
                    >
                      <Sparkles className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" />
                      <div className="flex-1 text-left">
                        <div className="text-sm font-medium">
                          Can you tell me about <span className="font-bold">{searchQuery}</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">Use AI to answer your questions (Beta)</div>
                      </div>
                    </button>
                  </div>
                )}

                {/* Loading AI */}
                {isLoadingAI && (
                  <div className="p-8 flex flex-col items-center justify-center gap-3">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    <p className="text-sm text-muted-foreground">Generating answer…</p>
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
                      New search
                    </button>
                  </div>
                )}

                {/* Empty state */}
                {searchQuery && results.length === 0 && !showAIPrompt && !aiResponse && !isLoadingAI && (
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
  )
}
    