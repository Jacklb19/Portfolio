"use client";

import { useState } from "react";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { Sidebar } from "@/components/sidebar";
import { useDictionary } from "@/data/use-dictionary";
import { BottomNav } from "@/components/bottom-nav";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const { dictionary, loading } = useDictionary(); 

  if (loading || !dictionary) {
    return (
      <div className="flex items-center justify-center min-h-screen text-muted-foreground">
        Cargando...
      </div>
    );
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case "home":
        return <HeroSection content={dictionary.hero} />;
      case "about":
        return <AboutSection/> 
      default:
        return <HeroSection content={dictionary.hero} />;
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        isExpanded={isSidebarExpanded}
        onToggleExpand={setIsSidebarExpanded}
      />
      <main
        className={`flex-1 transition-all duration-300 pb-20 md:pb-0 md:ml-20 ${
          isSidebarExpanded ? "md:ml-64" : "md:ml-20"
        }`}
      >
        {renderActiveSection()}
      </main>
      <BottomNav activeSection={activeSection} onSectionChange={setActiveSection} />
    </div>
  );
}
