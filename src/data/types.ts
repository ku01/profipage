export interface PersonalInfo {
  name: string;
  contacts: {
    email: string;
    phone?: string;
    location: string;
    links: {
      title: string;
      url: string;
    }[];
  };
  professionalTitle: string;
}

export interface ProfessionalSummary {
  overview: string;
  highlights: string[];
}

export interface Experience {
  jobTitle: string;
  company: {
    name: string;
    logo?: string;
  };
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
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
    proficiency?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  }[];
}

export interface Language {
  name: string;
  proficiency: 'Elementary' | 'Limited Working' | 'Professional Working' | 'Full Professional' | 'Native';
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
  languages: Language[];
  additionalSections?: AdditionalSection[];
} 