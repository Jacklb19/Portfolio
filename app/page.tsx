"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { BottomNav } from "@/components/bottom-nav"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { Footer } from "@/components/footer"
import { useDictionary } from "@/data/use-dictionary"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)
  const { dictionary, loading } = useDictionary()

  if (loading || !dictionary) {
    return (
      <div className="flex items-center justify-center min-h-screen text-muted-foreground">
        Cargando...
      </div>
    )
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case "home":
        return <HeroSection content={dictionary.hero} />
      case "about":
        return <AboutSection content={dictionary.about} />
      case "experience":
        return <ExperienceSection content={dictionary.experience} />
      case "projects":
        return <ProjectsSection content={dictionary.projects}/>
      case "contact":
        return <ContactSection content={dictionary.contact}/>
      default:
        return <HeroSection content={dictionary.hero} />
    }
  }

  const shouldShowFooter = activeSection !== "home" 

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        isExpanded={isSidebarExpanded}
        onToggleExpand={setIsSidebarExpanded}
      />

      <main
        className={`flex-1 flex flex-col transition-all duration-300 pb-20 md:pb-0 md:ml-20 ${
          isSidebarExpanded ? "md:ml-64" : "md:ml-20"
        }`}
      >
        <div className="flex-grow">{renderActiveSection()}</div>

        {shouldShowFooter && <Footer content={dictionary.footer} />} 
      </main>

      <BottomNav
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
    </div>
  )
}
