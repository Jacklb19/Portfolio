export type ExperienceItem = {
  title: string;
  role: string;
  period: string;
  bullets: string[];
};

export type EducationItem = {
  title: string;
  field: string;
  location: string;
  period: string;
};

export type Dictionary = {
  intro: string;
  sections: {
    interests: { title: string; items: string[] };
    experience: { freelance: ExperienceItem; meetzed: ExperienceItem };
    designTools: string;
    education: {
      highSchool: EducationItem;
      diploma: EducationItem;
      graduation: EducationItem;
    };
    editingTools: string;
    languages: string;
    portfolio: string;
    details: string;
  };
  switcher: { label: string; es: string; en: string };
};
