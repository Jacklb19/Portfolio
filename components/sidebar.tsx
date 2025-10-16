"use client"

import { useState, useEffect } from "react"
import {
  Home,
  User,
  Briefcase,
  FolderOpen,
  Mail,
  Github,
  Linkedin,
  Settings,
  AlertTriangle,
  ChevronRight,
  ChevronLeft,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { SettingsModal } from "@/components/settings-modal"
import { usePreferences, useTranslation } from "@/lib/preferences-context"

interface SidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
  isExpanded: boolean
  onToggleExpand: (expanded: boolean) => void
}

export function Sidebar({ activeSection, onSectionChange, isExpanded, onToggleExpand }: SidebarProps) {
  const [showSettings, setShowSettings] = useState(false)
  const { preferences } = usePreferences()
  const { t } = useTranslation()

  useEffect(() => {
    if (preferences.sidebarAutoExpand && !isExpanded) {
      onToggleExpand(true)
    }
  }, [preferences.sidebarAutoExpand])

  const navItems = [
    { icon: Home, label: t("home"), id: "home" },
    { icon: User, label: t("about"), id: "about" },
    { icon: Briefcase, label: t("experience"), id: "experience" },
    { icon: FolderOpen, label: t("projects"), id: "projects" },
    { icon: Mail, label: t("contact"), id: "contact" },
  ]

  const externalLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  ]

  return (
    <>
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-screen bg-card border-r border-border transition-all duration-300 ease-in-out",
          isExpanded ? "w-full md:w-64" : "w-20",
        )}
      >
        <div className="flex h-full flex-col">
          <button
            onClick={() => onToggleExpand(!isExpanded)}
            className="absolute -right-3 top-8 z-10 h-6 w-6 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center"
          >
            {isExpanded ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </button>

          {/* Profile Section */}
          <div className="border-b border-border p-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 flex-shrink-0 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden">
                <img src="/images/profile.jpg" alt="Jose Burbano" className="h-full w-full object-cover" />
              </div>
              {isExpanded && (
                <div className="overflow-hidden">
                  <h3 className="font-semibold text-sm text-foreground truncate">Jose Burbano</h3>
                  <p className="text-xs text-muted-foreground truncate">Software Engineer</p>
                </div>
              )}
            </div>
          </div>

          <nav className="flex-1 space-y-1 p-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-3 transition-all group",
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0 transition-transform group-hover:scale-110" />
                {isExpanded && <span className="text-sm font-medium">{item.label}</span>}
              </button>
            ))}

            <div className="pt-4 border-t border-border mt-4">
              {externalLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl px-3 py-3 text-muted-foreground transition-all hover:bg-secondary hover:text-foreground group"
                >
                  <item.icon className="h-5 w-5 flex-shrink-0 transition-transform group-hover:scale-110" />
                  {isExpanded && <span className="text-sm font-medium">{item.label}</span>}
                </a>
              ))}
            </div>
          </nav>

          {/* Bottom Section */}
          <div className="border-t border-border p-2 space-y-1">
            <button
              className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-muted-foreground transition-all hover:bg-secondary hover:text-foreground group"
              onClick={() => setShowSettings(true)}
            >
              <Settings className="h-5 w-5 flex-shrink-0 transition-transform group-hover:rotate-90" />
              {isExpanded && <span className="text-sm font-medium">{t("settings")}</span>}
            </button>

            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-destructive transition-all hover:bg-destructive/10 group">
              <AlertTriangle className="h-5 w-5 flex-shrink-0 transition-transform group-hover:scale-110" />
              {isExpanded && <span className="text-sm font-medium">Don&apos;t Click</span>}
            </button>
          </div>
        </div>
      </aside>

      <SettingsModal isOpen={showSettings} onClose={() => setShowSettings(false)} />
    </>
  )
}
