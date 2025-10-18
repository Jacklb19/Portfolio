import { MapPin, Code2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AboutSection as AboutSectionType } from "@/data/types"

interface AboutSectionProps {
  content: AboutSectionType
}


export function AboutSection({ content}: AboutSectionProps) {
  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary"></MapPin>
          <span className="text-sm sm:text-base text-muted-foreground">
            Colombia
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
          {content.title}
        </h2>


      </div>
    </section>
  );
}
