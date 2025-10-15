"use client";

import { useState } from "react";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const isSidebarExpanded = false; // temporal hasta que tengas el sidebar

  const renderActiveSection = () => {
    switch (activeSection) {
      case "home":
        return <HeroSection />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="flex min-h-screen bg-neutral-900 text-white">
      <main
        className={`flex-1 transition-all duration-300 ml-20 ${
          isSidebarExpanded ? "md:ml-64" : "md:ml-20"
        }`}
      >
        {renderActiveSection()}
      </main>
    </div>
  );
}
