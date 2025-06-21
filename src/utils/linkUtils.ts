// Utility functions for handling links and external navigation

/**
 * Opens a URL in a new tab with proper security attributes
 * @param url - The URL to open
 * @param event - Optional event to prevent default behavior
 */
export const openInNewTab = (url: string, event?: React.MouseEvent) => {
  if (event) {
    event.preventDefault();
  }
  
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Checks if a URL is external (not relative to current domain)
 * @param url - The URL to check
 * @returns boolean indicating if the URL is external
 */
export const isExternalUrl = (url: string): boolean => {
  if (!url) return false;
  
  // Check if it's a relative URL (internal navigation)
  if (url.startsWith('/') || url.startsWith('#')) {
    return false;
  }
  
  // Check if it's a protocol-relative URL
  if (url.startsWith('//')) {
    return true;
  }
  
  // Check if it has a protocol (http, https, etc.)
  if (url.match(/^https?:\/\//)) {
    return true;
  }
  
  return false;
};

/**
 * Checks if a URL is an internal navigation link (hash link)
 * @param url - The URL to check
 * @returns boolean indicating if the URL is internal navigation
 */
export const isInternalNavigation = (url: string): boolean => {
  if (!url) return false;
  
  // Check if it's a hash link (internal navigation)
  return url.startsWith('#');
};

/**
 * Creates proper link attributes for external links
 * @returns object with target and rel attributes
 */
export const getExternalLinkProps = () => ({
  target: '_blank' as const,
  rel: 'noopener noreferrer' as const
});

/**
 * Handles link clicks with automatic new tab opening for external links
 * @param url - The URL to navigate to
 * @param event - The click event
 */
export const handleLinkClick = (url: string, event: React.MouseEvent) => {
  if (isExternalUrl(url)) {
    openInNewTab(url, event);
  }
  // For internal links, let the default behavior handle it
};

/**
 * Smooth scroll to a section by ID
 * @param sectionId - The ID of the section to scroll to
 * @param offset - Optional offset to account for fixed headers
 */
export const smoothScrollToSection = (sectionId: string, offset: number = 80) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementTop = element.offsetTop - offset;
    window.scrollTo({
      top: elementTop,
      behavior: 'smooth'
    });
  }
}; 