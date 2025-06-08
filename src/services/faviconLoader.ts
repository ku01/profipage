import { useEffect } from 'react';

const REMOTE_DATA_URL = import.meta.env.VITE_REMOTE_DATA_URL;

export async function updateFavicon() {
  if (!REMOTE_DATA_URL) {
    return;
  }

  try {
    const remoteFaviconUrl = `${REMOTE_DATA_URL}/favicon.png`;
    const response = await fetch(remoteFaviconUrl);
    
    if (response.ok) {
      // Update favicon link element
      const faviconLink = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
      if (faviconLink) {
        faviconLink.href = remoteFaviconUrl;
      }
    } else {
      console.warn('Remote favicon not found, using default favicon');
    }
  } catch (error) {
    console.warn('Error fetching remote favicon:', error);
  }
}

export function useFavicon() {
  useEffect(() => {
    updateFavicon();
  }, []);
} 