import { Heart } from "lucide-react"
import { Footer as FooterSection } from "@/data/types"

interface FooterSectionProps {
  content: FooterSection
}

export function Footer({ content }: FooterSectionProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="flex justify-center">
      <div className="max-w-6xl w-full border border-border bg-card/60 backdrop-blur-sm px-6 py-6 sm:px-8 sm:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
          <p>© {currentYear} {content.title}</p>
          <p className="flex items-center gap-2">
            {content.made} <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-primary fill-primary" /> {content.by}
          </p>
        </div>
      </div>
    </footer>
  )
}
