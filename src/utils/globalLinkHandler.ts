import { isExternalUrl, isInternalNavigation } from './linkUtils';

/**
 * Global click handler for external links
 * This function can be attached to the document to catch any external links
 * that might not have been properly configured
 */
export const setupGlobalLinkHandler = () => {
  const handleGlobalClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const link = target.closest('a');
    
    if (link && link.href && isExternalUrl(link.href) && !isInternalNavigation(link.href)) {
      // Check if the link already has target="_blank"
      if (!link.target || link.target !== '_blank') {
        // Add target="_blank" and rel="noopener noreferrer" if not present
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
    }
  };

  // Add the event listener
  document.addEventListener('click', handleGlobalClick);

  // Return cleanup function
  return () => {
    document.removeEventListener('click', handleGlobalClick);
  };
};

/**
 * Initialize global link handling
 * Call this function in your App component's useEffect
 */
export const initializeGlobalLinkHandling = () => {
  return setupGlobalLinkHandler();
}; 