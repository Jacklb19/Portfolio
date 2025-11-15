    "use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { SearchModal } from "@/components/search-model"

interface MobileHeaderProps {
  onNavigate: (section: string) => void
}

export function MobileHeader({ onNavigate }: MobileHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <AnimatePresence>
        <motion.header
          initial={{ y: 0 }}
          animate={{
            y: isScrolled ? 8 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
          }}
          className={cn(
            "md:hidden fixed top-0 left-0 right-0 z-40 transition-all duration-300",
            isScrolled ? "mx-4 mt-2 rounded-2xl" : "mx-0 mt-0 rounded-none",
          )}
        >
          <div
            className={cn(
              "flex items-center justify-between px-6 py-4 transition-all duration-300",
              isScrolled
                ? "bg-card/80 backdrop-blur-xl border border-border shadow-lg"
                : "bg-card/60 backdrop-blur-sm border-b border-border",
            )}
            style={{
              borderRadius: isScrolled ? "var(--radius-lg)" : "0",
            }}
          >
            {/* Name on the left */}
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-lg font-semibold text-foreground"
            >
              Jose Burbano
            </motion.h1>

            {/* Search icon on the right */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              onClick={() => setShowSearch(true)}
              className={cn(
                "flex items-center justify-center h-10 w-10 rounded-xl transition-all",
                "text-muted-foreground hover:text-foreground",
                "hover:bg-secondary active:scale-95",
              )}
              aria-label="Open search"
            >
              <Search className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.header>
      </AnimatePresence>

      {/* Add padding to prevent content from going under the header */}
      <div className="md:hidden h-[72px]" />

      <SearchModal isOpen={showSearch} onClose={() => setShowSearch(false)} onNavigate={onNavigate} />
    </>
  )
}
