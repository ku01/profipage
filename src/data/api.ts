import type {ProfileData} from './types';

class DataLoadError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DataLoadError';
  }
}

export async function loadProfileData(): Promise<ProfileData> {
  try {
    const response = await fetch('/data/profile.json');
    if (!response.ok) {
      throw new DataLoadError(`Failed to load profile data: ${response.statusText}`);
    }
    return await response.json() as ProfileData;
  } catch (error) {
    if (error instanceof DataLoadError) {
      throw error;
    }
    throw new DataLoadError(`Failed to load profile data: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// Helper function to validate the loaded data against our TypeScript types
export function validateProfileData(data: unknown): data is ProfileData {
  const profile = data as ProfileData;
  
  // Basic validation of required fields
  if (!profile.personalInfo?.name || 
      !profile.personalInfo?.contact?.email ||
      !profile.professionalSummary?.overview ||
      !Array.isArray(profile.experience) ||
      !Array.isArray(profile.education) ||
      !Array.isArray(profile.skills)) {
    return false;
  }
  
  return true;
} 