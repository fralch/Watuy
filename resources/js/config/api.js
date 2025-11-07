/**
 * API Configuration
 * Automatically detects environment and returns the correct API URL
 */

const getApiUrl = () => {
  // Check if we're in development or production
  const isDevelopment = import.meta.env.DEV;
  const isLocalhost = window.location.hostname === 'localhost' ||
                      window.location.hostname === '127.0.0.1';

  // In production, always use the current origin
  if (!isDevelopment && !isLocalhost) {
    console.log('[API Config] Using production URL:', window.location.origin);
    return window.location.origin;
  }

  // In development, try to use VITE_API_URL if available, otherwise use localhost
  const devApiUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
  console.log('[API Config] Using development URL:', devApiUrl);
  return devApiUrl;
};

export const API_URL = getApiUrl();

export default API_URL;
