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
  switcher: { label: string; es: string; en: string };
};
