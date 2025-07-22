import {z} from 'zod';

// Custom error class for data loading failures
export class DataLoadError extends Error {
  constructor(message: string, public cause?: Error) {
    super(message);
    this.name = 'DataLoadError';
  }
}

// Define the data file names
export const DATA_FILES = [
  'personal-info',
  'education',
  'experience',
  'skills',
  'summary',
] as const;

type DataFile = typeof DATA_FILES[number];

// Environment variable name for remote data URL
const REMOTE_DATA_URL = import.meta.env.VITE_REMOTE_DATA_URL;

// Schema definitions
export const PersonalInfoSchema = z.object({
  name: z.string(),
  title: z.string(),
  contact: z.object({
    email: z.string(),
    phone: z.string(),
    location: z.string(),
    website: z.string().url(),
    links: z.record(z.string().url())
  })
});

export const EducationSchema = z.array(z.object({
  degree: z.string(),
  institution: z.string(),
  institutionLogo: z.string().optional(),
  location: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  description: z.string().optional()
}));

export const ExperienceSchema = z.array(z.object({
  jobTitle: z.string(),
  company: z.string(),
  companyLogo: z.string().optional(),
  location: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  responsibilities: z.array(z.string()),
  achievements: z.array(z.string()).optional()
}));

export const SkillsSchema = z.object({
  categories: z.array(z.string()),
  items: z.array(z.object({
    name: z.string(),
    category: z.string()
  }))
});

export const SummarySchema = z.object({
  text: z.string(),
  highlights: z.array(z.string())
});

// Type exports
export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;
export type Education = z.infer<typeof EducationSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
export type Skills = z.infer<typeof SkillsSchema>;
export type Summary = z.infer<typeof SummarySchema>;

// Helper function to build the remote URL for a data file
const getRemoteUrl = (file: DataFile): string => {
  if (!REMOTE_DATA_URL) {
    throw new Error('Remote data URL is not configured');
  }
  return `${REMOTE_DATA_URL}/${file}.json`;
};

// Helper function to get the local URL for a data file
const getLocalUrl = (file: DataFile): string => {
  return `/data/${file}.json`;
};

// Function to fetch and validate data
async function fetchAndValidate<T>(
  url: string,
  schema: z.ZodType<T>,
  fileName?: string
): Promise<T> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorMsg = `Failed to load ${fileName || 'data file'} from ${url}: HTTP status ${response.status} - ${response.statusText}`;
      console.log(errorMsg);
      throw new Error(errorMsg);
    }
    const data = await response.json();
    try {
      return schema.parse(data);
    } catch (validationError) {
      const errorMsg = `Data validation failed for ${fileName || 'data file'} from ${url}`;
      console.log(errorMsg, validationError);
      throw new Error(errorMsg);
    }
  } catch (error) {
    // No fallback - throw error immediately
    throw error;
  }
}

// Main data loading function
export async function loadProfileData() {
  try {
    const isRemoteConfigured = Boolean(REMOTE_DATA_URL?.trim());

    // Fetch personal info
    const personalInfo = await fetchAndValidate(
      isRemoteConfigured ? getRemoteUrl('personal-info') : getLocalUrl('personal-info'),
      PersonalInfoSchema,
      'personal-info'
    );

    // Fetch education data
    const education = await fetchAndValidate(
      isRemoteConfigured ? getRemoteUrl('education') : getLocalUrl('education'),
      EducationSchema,
      'education'
    );

    // Fetch experience data
    const experience = await fetchAndValidate(
      isRemoteConfigured ? getRemoteUrl('experience') : getLocalUrl('experience'),
      ExperienceSchema,
      'experience'
    );

    // Fetch skills data
    const skills = await fetchAndValidate(
      isRemoteConfigured ? getRemoteUrl('skills') : getLocalUrl('skills'),
      SkillsSchema,
      'skills'
    );

    // Fetch summary data
    const summary = await fetchAndValidate(
      isRemoteConfigured ? getRemoteUrl('summary') : getLocalUrl('summary'),
      SummarySchema,
      'summary'
    );

    return {
      personalInfo,
      education: education,
      experience: experience,
      skills,
      summary
    };
  } catch (error) {
    console.error('Error loading profile data:', error);
    
    // Throw a specific DataLoadError with a user-friendly message
    if (error instanceof Error) {
      throw new DataLoadError(
        'Failed to load required data files. Some content may be missing or corrupted. Please refresh the page to try again.',
        error
      );
    } else {
      throw new DataLoadError(
        'Failed to load required data files. Some content may be missing or corrupted. Please refresh the page to try again.'
      );
    }
  }
} 