import { MapPin, Code2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AboutSection as AboutSectionType } from "@/data/types";

interface AboutSectionProps {
  content: AboutSectionType;
}

export function AboutSection({ content }: AboutSectionProps) {
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

        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 sm:mb-12 max-w-3xl">
          {content.description}
        </p>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="group rounded-2xl sm:rounded-3xl bg-card border border-border p-6 sm:p-8 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <h3 className="text-lg sm:text-xl font-semibold">
                {content.hobbies.title}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {content.hobbies.text}
            </p>
          </div>

          <div className="group rounded-2xl sm:rounded-3xl bg-card border border-border p-6 sm:p-8 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
              <h3 className="text-lg sm:text-xl font-semibold">{content.interests.title}</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {content.interests.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
