"use client";

import { useState, useMemo, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sidebar } from "@/components/sidebar";
import { BottomNav } from "@/components/bottom-nav";
import { MobileHeader } from "@/components/mobil-header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { Footer } from "@/components/footer";
import { useDictionary } from "@/data/use-dictionary";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { usePreferences } from "@/lib/preferences-context";
import { GuestbookSection } from "@/components/guestbook-section";
import { ProjectDetailView } from "@/components/project-detail-view";
import { TriviaSection } from "@/components/trivia-section";
import { LearningSection } from "@/components/learning-section";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const { dictionary, loading } = useDictionary();
  const { preferences } = usePreferences();
  const animationsOn = preferences.animationsEnabled;

  const projectsPreview = useMemo(() => {
    if (!dictionary?.projects?.projects) return [];
    return dictionary.projects.projects.slice(0, 6);
  }, [dictionary]);

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }, [activeSection, selectedProject]);
  if (loading || !dictionary) {
    return (
      <div className="flex items-center justify-center min-h-screen text-muted-foreground">
        Cargando...
      </div>
    );
  }

  const handleNavigateToProjects = () => {
    setActiveSection("projects");
    setSelectedProject(null);
  };

  const handleProjectClick = (slug: string) => {
    setSelectedProject(slug);
    setActiveSection("project-detail");
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    setActiveSection("projects");
  };

  const renderActiveSection = () => {
    if (selectedProject) {
      return (
        <ProjectDetailView
          slug={selectedProject}
          onBack={handleBackToProjects}
          onNavigateSection={(section) => {
            setSelectedProject(null);
            setActiveSection(section);
          }}
        />
      );
    }

    switch (activeSection) {
      case "home":
        return <HeroSection content={dictionary.hero} />;
      case "about":
        return (
          <AboutSection
            content={dictionary.about}
            onNavigateToProjects={handleNavigateToProjects}
            projectsPreview={projectsPreview}
            onProjectClick={handleProjectClick}
          />
        );
      case "experience":
        return <ExperienceSection content={dictionary.experience} />;
      case "projects":
        return (
          <ProjectsSection
            content={dictionary.projects}
            onProjectClick={handleProjectClick}
          />
        );
      case "learning":
        return <LearningSection content={dictionary.learning} />;
      case "contact":
        return <ContactSection content={dictionary.contact} />;
      case "guestbook":
        return <GuestbookSection content={dictionary.guestbook} />;
      case "trivia":
        return <TriviaSection />;
      default:
        return <HeroSection content={dictionary.hero} />;
    }
  };

  const shouldShowFooter = activeSection !== "home";

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <MobileHeader onNavigate={setActiveSection} />

      <Sidebar
        activeSection={selectedProject ? "projects" : activeSection}
        onSectionChange={(section) => {
          setActiveSection(section);
          setSelectedProject(null);
        }}
        isExpanded={isSidebarExpanded}
        onToggleExpand={setIsSidebarExpanded}
      />

      <main
        className={`flex-1 flex flex-col transition-all duration-300 pb-20 md:pb-0 md:ml-20  ${
          isSidebarExpanded ? "md:ml-64" : "md:ml-20"
        }`}
        style={{ containerType: "inline-size", minWidth: 0 }}
      >
        {animationsOn ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProject || activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="flex-grow"
            >
              {renderActiveSection()}
            </motion.div>
          </AnimatePresence>
        ) : (
          <div key={selectedProject || activeSection} className="flex-grow">
            {renderActiveSection()}
          </div>
        )}

        {shouldShowFooter && <Footer content={dictionary.footer} />}
      </main>

      <BottomNav
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
    </div>
  );
}
