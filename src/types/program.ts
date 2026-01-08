export interface ProgramFeature {
  title: string;
  description: string;
  icon?: string;
}

export type ProgramIconName = 'bars' | 'book' | 'chat' | 'check' | 'clock' | 'download' | 'globe' | 'shield' | 'users';

export interface ProgramHighlight {
  title: string;
  subtitle: string;
  icon?: ProgramIconName;
}

export interface ProgramPillar {
  label: string;
  title: string;
  description: string;
}

export interface ProgramCurriculum {
  title?: string;
  description?: string;
  pillarLabel?: string;
  pillars: ProgramPillar[];
  benefits: string[];
  syllabusUrl?: string;
}

export interface ProgramBenefit {
  title: string;
  description: string;
}

export interface ProgramStep {
  step: number;
  title: string;
  description: string;
}

export interface ProgramFAQ {
  question: string;
  answer: string;
}

export interface ProgramTestimonial {
  text: string;
  name: string;
  role: string;
}

export interface ProgramRegistrationFeature {
  title: string;
  description: string;
  icon?: ProgramIconName;
}

export interface ProgramDetail {
  mainFunction?: string;
  valueCreated?: string[];
  mainImage?: string;
  highlights?: ProgramHighlight[];
  curriculum?: ProgramCurriculum;
  testimonials?: ProgramTestimonial[];
  registrationFeatures?: ProgramRegistrationFeature[];
}

export interface ProgramCTA {
  primary: {
    text: string;
    action: string;
  };
  secondary?: {
    text: string;
    action: string;
  };
  tertiary?: {
    text: string;
    action: string;
  };
}

export interface ProgramData {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  heroImage?: string;
  ctaTitle?: string;
  detail?: ProgramDetail;

  overview: {
    about: string;
    vision: string;
    mission: string;
  };

  features: ProgramFeature[];
  benefits: ProgramBenefit[];
  howItWorks: ProgramStep[];

  targetAudience: {
    title: string;
    segments: string[];
  };

  faqs: ProgramFAQ[];
  cta: ProgramCTA;
  relatedPrograms?: string[];
}
