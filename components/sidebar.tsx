"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
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
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SettingsModal } from "@/components/settings-modal";
import { SearchModal } from "@/components/search-model";
import { usePreferences, useTranslation } from "@/lib/preferences-context";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isExpanded: boolean;
  onToggleExpand: (expanded: boolean) => void;
}

export function Sidebar({
  activeSection,
  onSectionChange,
  isExpanded,
  onToggleExpand,
}: SidebarProps) {
  const [showSettings, setShowSettings] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { preferences } = usePreferences();
  const { t } = useTranslation();

  useEffect(() => {
    if (!preferences.sidebarAutoExpand) return;

    const sidebarElement = document.getElementById("sidebar-auto");

    if (!sidebarElement) return;

    const handleMouseEnter = () => onToggleExpand(true);
    const handleMouseLeave = () => onToggleExpand(false);

    sidebarElement.addEventListener("mouseenter", handleMouseEnter);
    sidebarElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      sidebarElement.removeEventListener("mouseenter", handleMouseEnter);
      sidebarElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [preferences.sidebarAutoExpand, onToggleExpand]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "l") {
        e.preventDefault();
        setShowSearch(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navItems = [
    { icon: Home, label: t("home"), id: "home" },
    { icon: User, label: t("about"), id: "about" },
    { icon: Briefcase, label: t("experience"), id: "experience" },
    { icon: FolderOpen, label: t("projects"), id: "projects" },
    { icon: Mail, label: t("contact"), id: "contact" },
  ];

  const externalLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Jacklb19" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jose-luis-burbano-buchelly-a1313834a/",
    },
  ];

  return (
    <>
      <TooltipProvider delayDuration={0}>
        <aside
          id="sidebar-auto"
          className={cn(
            "hidden md:flex fixed left-0 top-0 z-50 h-screen bg-card border-r border-border transition-all duration-300 ease-in-out",
            isExpanded ? "w-64" : "w-20"
          )}
        >
          <div className="flex h-full flex-col w-full">
            <button
              onClick={() => onToggleExpand(!isExpanded)}
              className="absolute -right-3 top-8 z-10 h-6 w-6 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center"
            >
              {isExpanded ? (
                <ChevronLeft className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>

            <div className="border-b border-border p-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 flex-shrink-0 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden">
                  <div className="h-12 w-12 flex-shrink-0 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden relative">
                    <Image
                      src="/images/profile.jpg"
                      alt="Jose Burbano"
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                </div>
                {isExpanded && (
                  <div className="overflow-hidden">
                    <h3 className="font-semibold text-sm text-foreground truncate">
                      Jose Burbano
                    </h3>
                    <p className="text-xs text-muted-foreground truncate">
                      {t("profession")}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <nav className="flex-1 overflow-y-auto overflow-x-hidden space-y-1 p-4">
              {/* Main navigation items */}
              {navItems.map((item) => {
                const button = (
                  <button
                    key={item.id}
                    onClick={() => onSectionChange(item.id)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl px-3.5 py-3 transition-all group",
                      activeSection === item.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    )}
                  >
                    <item.icon className="h-5 w-5 flex-shrink-0 transition-transform group-hover:scale-110" />
                    {isExpanded && (
                      <span className="text-sm font-medium">{item.label}</span>
                    )}
                  </button>
                );

                if (!isExpanded) {
                  return (
                    <Tooltip key={item.id}>
                      <TooltipTrigger asChild>{button}</TooltipTrigger>
                      <TooltipContent side="right">
                        <p>{item.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  );
                }

                return button;
              })}

              <div className="pt-4 border-t border-border mt-4">
                {(() => {
                  const dontClickButton = (
                    <button className="flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-destructive transition-all hover:bg-destructive/10 group">
                      <AlertTriangle className="h-5 w-5 flex-shrink-0 transition-transform group-hover:scale-110" />
                      {isExpanded && (
                        <span className="text-sm font-medium">
                          Don&apos;t Click
                        </span>
                      )}
                    </button>
                  );

                  if (!isExpanded) {
                    return (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          {dontClickButton}
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          <p>Don&apos;t Click</p>
                        </TooltipContent>
                      </Tooltip>
                    );
                  }

                  return dontClickButton;
                })()}
              </div>

              <div className="pt-4 border-t border-border mt-4">
                {externalLinks.map((item) => {
                  const link = (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl px-3.5 py-3 text-muted-foreground transition-all hover:bg-secondary hover:text-foreground group"
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0 transition-transform group-hover:scale-110" />
                      {isExpanded && (
                        <span className="text-sm font-medium">
                          {item.label}
                        </span>
                      )}
                    </a>
                  );

                  if (!isExpanded) {
                    return (
                      <Tooltip key={item.label}>
                        <TooltipTrigger asChild>{link}</TooltipTrigger>
                        <TooltipContent side="right">
                          <p>{item.label}</p>
                        </TooltipContent>
                      </Tooltip>
                    );
                  }

                  return link;
                })}
              </div>
            </nav>

            <div className="border-t border-border p-4 space-y-1">
              {(() => {
                const searchButton = (
                  <button
                    className="flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-muted-foreground transition-all hover:bg-secondary hover:text-foreground group ring ring-gray-800"
                    onClick={() => setShowSearch(true)}
                  >
                    <Search className="h-5 w-5 flex-shrink-0 transition-transform group-hover:scale-110" />
                    {isExpanded && (
                      <>
                        <span className="text-sm font-medium flex-1 text-left">
                          {preferences.language === "es"
                            ? "Busca o pide"
                            : "Search or ask"}
                        </span>
                        <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                          <span className="text-xs">Ctrl+</span>L
                        </kbd>
                      </>
                    )}
                  </button>
                );

                if (!isExpanded) {
                  return (
                    <Tooltip>
                      <TooltipTrigger asChild>{searchButton}</TooltipTrigger>
                      <TooltipContent side="right">
                        <p>
                          {preferences.language === "es"
                            ? "Buscar (Ctrl+L)"
                            : "Search (Ctrl+L)"}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  );
                }

                return searchButton;
              })()}

              {(() => {
                const settingsButton = (
                  <button
                    className="flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-muted-foreground transition-all hover:bg-secondary hover:text-foreground group"
                    onClick={() => setShowSettings(true)}
                  >
                    <Settings className="h-5 w-5 flex-shrink-0 transition-transform group-hover:rotate-90" />
                    {isExpanded && (
                      <span className="text-sm font-medium">
                        {t("settings")}
                      </span>
                    )}
                  </button>
                );

                if (!isExpanded) {
                  return (
                    <Tooltip>
                      <TooltipTrigger asChild>{settingsButton}</TooltipTrigger>
                      <TooltipContent side="right">
                        <p>{t("settings")}</p>
                      </TooltipContent>
                    </Tooltip>
                  );
                }

                return settingsButton;
              })()}
            </div>
          </div>
        </aside>
      </TooltipProvider>

      <SettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
      />

      <SearchModal
        isOpen={showSearch}
        onClose={() => setShowSearch(false)}
        onNavigate={onSectionChange}
      />
    </>
  );
}
