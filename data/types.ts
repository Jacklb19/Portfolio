export type SocialLink = {
  label: string;
  href: string;
};

export type HeroSection = {
  intro: string;
  title: {
    start: string;
    highlight: string;
    end: string;
  };
  subtitle: string;
  socials: SocialLink[];
};

export type Dictionary = {
  hero: HeroSection;
  about: AboutSection
  switcher: { label: string; es: string; en: string };
};

export type AboutSection = {
  title: string;
  description: string;
  hobbies: {
    title: string;
    text: string;
  };
  interests: {
    title: string;
    text: string;
  };
  stack: {
    title: string;
    description: string;
    button: string;
  };
  projects: {
    title: string;
    description: string;
    button: string;
  };
};

