"use client";

import { useState } from "react";
import { HeroSection } from "@/components/hero-section";
import { Sidebar } from "@/components/sidebar"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)

  const renderActiveSection = () => {
    switch (activeSection) {
      case "home":
        return <HeroSection />;
      default:
        return <HeroSection />;
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
      <main className={`flex-1 transition-all duration-300 ml-20 ${isSidebarExpanded ? "md:ml-64" : "md:ml-20"}`}>
        {renderActiveSection()}
      </main>
    </div>
  );
}
