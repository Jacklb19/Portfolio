import { Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
          <p>© {currentYear} Portfolio. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Made with <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-primary fill-primary" /> by Jose Burbano
          </p>
        </div>
      </div>
    </footer>
  )
}
