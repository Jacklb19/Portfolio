import { Github, Linkedin, Mail, FileText } from "lucide-react"
import { HeroSection as HeroSectionType } from "@/data/types"

interface HeroSectionProps {
  content: HeroSectionType
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

          <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left">
            <p className="text-muted-foreground text-base sm:text-lg">{content.intro}</p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight text-balance">
              {content.title.start}{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {content.title.highlight}
              </span>{" "}
              {content.title.end}
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground">{content.subtitle}</p>

            <div className="flex gap-3 sm:gap-4 pt-4 justify-center lg:justify-start">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/jose-luis-burbano-buchelly-a1313834a/", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/Jacklb19", label: "GitHub" },
                { icon: Mail, href: "mail", label: "Email" },
                { icon: FileText, href: "#", label: "Portfolio" },
              ].map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                )
              })}
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl sm:rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                <img
                  src="/images/profile.jpg"
                  alt="Jose Burbano"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
