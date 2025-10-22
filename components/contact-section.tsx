"use client";

import type React from "react";
import { useState } from "react";
import { MapPin, Phone, MailIcon, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { ContactSection as ContactSectionType } from "@/data/types";

interface ContactSectionProps {
  content: ContactSectionType;
}

export function ContactSection({ content }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            {content.title}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            {content.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="rounded-2xl sm:rounded-3xl bg-card border border-border p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-medium mb-2"
                >
                  {content.form.labels.name}
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder={content.form.placeholders.name}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="rounded-xl bg-secondary border-border"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium mb-2"
                >
                  {content.form.labels.email}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder={content.form.placeholders.email}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="rounded-xl bg-secondary border-border"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium mb-2"
                >
                  {content.form.labels.message}
                </label>
                <Textarea
                  id="message"
                  placeholder={content.form.placeholders.message}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="rounded-xl bg-secondary border-border min-h-[120px] sm:min-h-[150px]"
                />
              </div>

              <Button type="submit" className="w-full rounded-xl" size="lg">
                <Send className="mr-2 h-4 w-4" />
                {content.form.submit}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="rounded-2xl sm:rounded-3xl bg-card border border-border p-5 sm:p-6 transition-all hover:border-primary/50">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">
                    {content.info.location.label}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {content.info.location.value}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl sm:rounded-3xl bg-card border border-border p-5 sm:p-6 transition-all hover:border-primary/50">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 flex-shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">
                    {content.info.phone.label}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {content.info.phone.value}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl sm:rounded-3xl bg-card border border-border p-5 sm:p-6 transition-all hover:border-primary/50">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 flex-shrink-0">
                  <MailIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">
                    {content.info.email.label}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm break-all">
                    {content.info.email.value}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 p-6 sm:p-8">
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                {content.socials.title}
              </h3>
              <TooltipProvider>
                <div className="flex gap-3 sm:gap-4">
                  {content.socials.items.map((social) => (
                    <Tooltip key={social.label}>
                      <TooltipTrigger asChild>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-card border border-border text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110"
                          aria-label={social.label}
                        >
                          {social.label === "GitHub" ? (
                            <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                          ) : social.label.toLowerCase().includes("link") ? (
                            <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                          ) : (
                            <MailIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                          )}
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{social.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
