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

export type Testimonial = {
  id: number;
  name: string;
  title: string;
  content: string;
  image: string;
};

export type TestimonialsSection = {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
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
  testimonials: TestimonialsSection;
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
  intro: {
    paragraph1: string;
    paragraph2: string;
  };
  experiences: ExperienceItem[];
};

export type Footer ={
  title: string;
  made: string;
  by: string
}

export type ProjectItem = {
  id: number;
  name: string;
  description: string;
  status: "online" | "offline";
  technologies: string[];
  image: string;
  link: string;
};

export type ProjectsSection = {
  title: string;
  filter:{
    name: string;
    option: string;
  };
  description: string;
  button: string;
  projects: ProjectItem[];
};

export type ContactSection = {
  title: string
  subtitle: string
  form: {
    labels: {
      name: string
      email: string
      message: string
    }
    placeholders: {
      name: string
      email: string
      message: string
    }
    submit: string
  }
  info: {
    location: { label: string; value: string }
    availability: { label: string; value: string }
    email: { label: string; value: string }
  }
  socials: {
    title: string
    items: Array<{
      label: string
      href: string
      ariaLabel?: string
    }>
    cta?: { label: string; href: string; download?: boolean }
  }
}


export type Dictionary = {
  hero: HeroSection;
  about: AboutSection;
  experience: ExperienceSection;
  projects: ProjectsSection;
  contact: ContactSection;
  footer: Footer;
  switcher: { label: string; es: string; en: string };
};
