import { useState, useEffect } from 'react';
import type { ProfileData } from './types';
import { loadProfileData, validateProfileData } from './api';

interface ProfileDataState {
  data: ProfileData | null;
  isLoading: boolean;
  error: Error | null;
}

export function useProfileData() {
  const [state, setState] = useState<ProfileDataState>({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      try {
        const data = await loadProfileData();
        
        if (!mounted) return;
        
        if (!validateProfileData(data)) {
          throw new Error('Invalid profile data structure');
        }
        
        setState({
          data,
          isLoading: false,
          error: null,
        });
      } catch (error) {
        if (!mounted) return;
        
        setState({
          data: null,
          isLoading: false,
          error: error instanceof Error ? error : new Error('Unknown error occurred'),
        });
      }
    }

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  return state;
} 