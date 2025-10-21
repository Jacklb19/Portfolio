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

export type ExperienceItem = {
  id: number;
  category: string;
  title: string;
  period: string;
  technologies: string[];
  description: string[];
  image: string;
};

export type ExperienceSection = {
  title: string;
  experiences: ExperienceItem[];
};

export type Footer ={
  title: string;
  made: string;
  by: string
}

export type Dictionary = {
  hero: HeroSection;
  about: AboutSection;
  experience: ExperienceSection;
  footer: Footer;
  switcher: { label: string; es: string; en: string };
};
