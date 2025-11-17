"use client";

import { useState, useRef, useEffect } from "react";
import {
  Home,
  User,
  Briefcase,
  FolderOpen,
  Mail,
  Github,
  Linkedin,
  Settings,
  Gamepad2,
  BookOpen,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation, usePreferences } from "@/lib/preferences-context";
import { SettingsModal } from "@/components/settings-modal";
import { SearchModal } from "@/components/search-model";

interface BottomNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function BottomNav({ activeSection, onSectionChange }: BottomNavProps) {
  const { t } = useTranslation();
  const { preferences } = usePreferences();
  const [showSettings, setShowSettings] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLElement>>(new Map());

  const navItems = [
    { icon: Home, label: t("home"), id: "home", type: "section" as const },
    { icon: User, label: t("about"), id: "about", type: "section" as const },
    {
      icon: Briefcase,
      label: t("experience"),
      id: "experience",
      type: "section" as const,
    },
    {
      icon: FolderOpen,
      label: t("projects"),
      id: "projects",
      type: "section" as const,
    },
    { icon: Mail, label: t("contact"), id: "contact", type: "section" as const },
    { icon: Gamepad2, label: "Trivia", id: "trivia", type: "section" as const },
    {
      icon: BookOpen,
      label: t("Guestbook"),
      id: "guestbook",
      type: "section" as const,
    },
    {
      icon: Github,
      label: "GitHub",
      id: "github",
      type: "link" as const,
      href: "https://github.com/Jacklb19",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      id: "linkedin",
      type: "link" as const,
      href: "https://www.linkedin.com/in/jose-luis-burbano-buchelly-a1313834a/",
    },
    { icon: Search, label: t("search"), id: "search", type: "action" as const },
    {
      icon: Settings,
      label: t("settings"),
      id: "settings",
      type: "action" as const,
    },
  ];

  const scrollToItem = (itemId: string) => {
    const container = scrollContainerRef.current;
    const item = itemRefs.current.get(itemId);

    if (!container || !item) return;

    const containerWidth = container.offsetWidth;
    const itemLeft = item.offsetLeft;
    const itemWidth = item.offsetWidth;

    const scrollLeft = itemLeft - containerWidth / 2 + itemWidth / 2;

    container.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (activeSection) {
      scrollToItem(activeSection);
    }
  }, [activeSection]);

  const handleItemClick = (item: (typeof navItems)[0]) => {
    scrollToItem(item.id);

    if (item.type === "section") {
      onSectionChange(item.id);
    } else if (item.type === "link") {
      window.open(item.href, "_blank");
    } else if (item.type === "action") {
      if (item.id === "settings") {
        setShowSettings(true);
      } else if (item.id === "search") {
        setShowSearch(true);
      }
    }
  };

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="backdrop-blur-md bg-card/80 border-t border-border">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scroll-smooth scrollbar-hide"
          >
            <div className="flex items-center gap-2 px-4 py-3 min-w-max">
              {navItems.map((item) => {
                if (item.type === "link") {
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      ref={(el) => {
                        if (el) itemRefs.current.set(item.id, el);
                      }}
                      className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 ease-in-out min-w-[60px] text-muted-foreground hover:text-foreground hover:bg-secondary group"
                    >
                      <item.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                      <span className="text-[10px] font-medium whitespace-nowrap">
                        {item.label}
                      </span>
                    </a>
                  );
                }

                return (
                  <button
                    key={item.id}
                    ref={(el) => {
                      if (el) itemRefs.current.set(item.id, el);
                    }}
                    onClick={() => handleItemClick(item)}
                    className={cn(
                      "flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 ease-in-out min-w-[60px] group",
                      item.type === "section" && activeSection === item.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    )}
                  >
                    <item.icon
                      className={cn(
                        "h-5 w-5 transition-transform",
                        item.type === "section" &&
                          activeSection === item.id &&
                          "scale-110",
                        item.id === "settings" && "group-hover:rotate-90"
                      )}
                    />
                    <span className="text-[10px] font-medium whitespace-nowrap">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

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
