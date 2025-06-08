import {z} from 'zod';

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
  description: z.string(),
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
  fallbackUrl?: string
): Promise<T> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log(`Remote data fetch failed for ${url}: HTTP status ${response.status} - ${response.statusText}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    try {
      return schema.parse(data);
    } catch (validationError) {
      console.log(`Remote data validation failed for ${url}:`, validationError);
      throw validationError;
    }
  } catch (error) {
    if (fallbackUrl) {
      if (error instanceof Error) {
        console.log(`Falling back to local data. Reason: ${error.message}`);
      } else {
        console.log('Falling back to local data due to unknown error');
      }
      const fallbackResponse = await fetch(fallbackUrl);
      if (!fallbackResponse.ok) {
        throw new Error(`Fallback fetch failed! status: ${fallbackResponse.status}`);
      }
      const fallbackData = await fallbackResponse.json();
      return schema.parse(fallbackData);
    }
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
      isRemoteConfigured ? getLocalUrl('personal-info') : undefined
    );

    // Fetch education data
    const education = await fetchAndValidate(
      isRemoteConfigured ? getRemoteUrl('education') : getLocalUrl('education'),
      EducationSchema,
      isRemoteConfigured ? getLocalUrl('education') : undefined
    );

    // Fetch experience data
    const experience = await fetchAndValidate(
      isRemoteConfigured ? getRemoteUrl('experience') : getLocalUrl('experience'),
      ExperienceSchema,
      isRemoteConfigured ? getLocalUrl('experience') : undefined
    );

    // Fetch skills data
    const skills = await fetchAndValidate(
      isRemoteConfigured ? getRemoteUrl('skills') : getLocalUrl('skills'),
      SkillsSchema,
      isRemoteConfigured ? getLocalUrl('skills') : undefined
    );

    // Fetch summary data
    const summary = await fetchAndValidate(
      isRemoteConfigured ? getRemoteUrl('summary') : getLocalUrl('summary'),
      SummarySchema,
      isRemoteConfigured ? getLocalUrl('summary') : undefined
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
    throw new Error('Failed to load profile data. Please check your configuration and try again.');
  }
} 