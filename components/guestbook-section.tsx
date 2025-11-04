"use client"

import type React from "react"

import { useSession, signIn, signOut } from "next-auth/react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { MessageSquare, LogOut } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import type { GuestbookSection as GuestbookSectionType } from "@/data/types";
import { Button } from "@/components/ui/button"

interface GuestbookEntry {
  id: string
  message: string
  user: {
    name: string | null
    image: string | null
  }
  createdAt: string
}

interface GuestbookSectionProps {
  content: GuestbookSectionType;
}

export function GuestbookSection({ content }: GuestbookSectionProps) {
  const { data: session } = useSession()
  const [message, setMessage] = useState("")
  const [entries, setEntries] = useState<GuestbookEntry[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const formatCharacterCount = (tpl: string, count: number, max: number) =>
    tpl.replace("{count}", String(count)).replace("{max}", String(max))

  useEffect(() => {
    fetchEntries()
  }, [])

  const fetchEntries = async () => {
    setIsLoading(true)
    try {
      const res = await fetch("/api/guestbook")
      const data = await res.json()
      setEntries(data)
    } catch (error) {
      console.error("Error fetching entries:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!message.trim() || !session) return

    setIsSubmitting(true)
    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      })

      if (res.ok) {
        setMessage("")
        await fetchEntries()
      }
    } catch (error) {
      console.error("Error submitting message:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <MessageSquare className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-primary flex-shrink-0" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{content.title}</h2>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {content.intro}
          </p>
        </div>

        {/* Sign In / Message Form */}
        <div className="mb-8 sm:mb-12">
          {session ? (
            <div className="rounded-2xl sm:rounded-3xl bg-card border border-border p-6 sm:p-8 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
              {/* User Info */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  {session.user?.image && (
                    <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden ring-2 ring-primary/20">
                      <Image
                        src={session.user.image || "/placeholder.svg"}
                        alt={session.user?.name || content.form.labels.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-sm sm:text-base">{session.user?.name}</p>
                    <p className="text-xs text-muted-foreground">{content.auth.signedInWith}</p>
                  </div>
                </div>
                <Button
                  onClick={() => signOut()}
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  {content.auth.signOut}
                </Button>
              </div>

              {/* Message Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={content.form.placeholders.message}
                  maxLength={content.form.maxLength}
                  className="w-full px-4 py-3 sm:px-5 sm:py-4 border border-input rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                  rows={4}
                  disabled={isSubmitting}
                />

                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    {formatCharacterCount(content.characterCount, message.length, content.form.maxLength)}
                  </span>
                  <Button
                    type="submit"
                    disabled={!message.trim() || isSubmitting}
                    className="rounded-xl transition-all hover:scale-105"
                  >
                    {isSubmitting ? content.pagination.loading : content.form.submit}
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div className="rounded-2xl sm:rounded-3xl bg-card border border-border p-6 sm:p-8 text-center transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
              <MessageSquare className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{content.auth.signInTitle}</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {content.auth.signInDescription}
              </p>
              <Button onClick={() => signIn("github")} className="rounded-xl transition-all hover:scale-105">
                <FaGithub className="w-5 h-5 mr-2" />
                {content.auth.signInButton}
              </Button>
            </div>
          )}
        </div>

        {/* Entries List */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-6">
            {entries.length} {content.entriesLabel}
          </h3>

          {isLoading ? (
            <div className="rounded-2xl sm:rounded-3xl bg-card border border-border p-12 text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
              <p className="text-muted-foreground mt-4">{content.pagination.loading}</p>
            </div>
          ) : entries.length === 0 ? (
            <div className="rounded-2xl sm:rounded-3xl bg-card border border-border p-12 text-center">
              <MessageSquare className="h-12 w-12 sm:h-16 sm:w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground">{content.emptyState}</p>
            </div>
          ) : (
            <div className="space-y-4 sm:space-y-6">
              {entries.map((entry) => (
                <div
                  key={entry.id}
                  className="group rounded-2xl sm:rounded-3xl bg-card border border-border p-4 sm:p-6 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    {entry.user.image && (
                      <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden ring-2 ring-border group-hover:ring-primary/30 transition-all flex-shrink-0">
                        <Image
                          src={entry.user.image || "/placeholder.svg"}
                          alt={entry.user.name || content.form.labels.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                        <span className="font-semibold text-sm sm:text-base">{entry.user.name}</span>
                        <span className="text-xs sm:text-sm text-muted-foreground">
                          {new Date(entry.createdAt).toLocaleDateString(content.dateLocale, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-foreground leading-relaxed whitespace-pre-wrap break-words">
                        {entry.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
