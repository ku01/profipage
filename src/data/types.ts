export interface PersonalInfo {
  name: string;
  title: string;
  contact: {
    email: string;
    phone?: string;
    location: string;
    website?: string;
    links: {
      [key: string]: string;
    };
  };
}

export interface ProfessionalSummary {
  overview: string;
  highlights: string[];
}

export interface Experience {
  jobTitle: string;
  company: string;
  companyLogo: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  responsibilities: string[];
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: {
    name: string;
    logo?: string;
  };
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Skill {
  category: string;
  items: {
    name: string;
    category: string;
  }[];
}

export interface AdditionalSection {
  type: 'Publication' | 'Certification' | 'Project' | 'Award';
  title: string;
  date: string;
  description: string;
  url?: string;
  additionalInfo?: Record<string, string>;
}

// Root data structure
export interface ProfileData {
  personalInfo: PersonalInfo;
  professionalSummary: ProfessionalSummary;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  additionalSections?: AdditionalSection[];
} 