import { useCallback } from 'react';
import { openInNewTab, isExternalUrl, isInternalNavigation, smoothScrollToSection } from '../utils/linkUtils';

/**
 * Custom hook for handling external links
 * Provides functions to handle link clicks and determine if links should open in new tabs
 */
export const useExternalLinks = () => {
  /**
   * Handles link clicks, opening external links in new tabs
   */
  const handleLinkClick = useCallback((url: string, event: React.MouseEvent) => {
    if (isExternalUrl(url)) {
      openInNewTab(url, event);
    }
  }, []);

  /**
   * Gets props for external links (target="_blank", rel="noopener noreferrer")
   */
  const getExternalLinkProps = useCallback(() => ({
    target: '_blank' as const,
    rel: 'noopener noreferrer' as const
  }), []);

  /**
   * Checks if a URL should open in a new tab
   */
  const shouldOpenInNewTab = useCallback((url: string): boolean => {
    return isExternalUrl(url);
  }, []);

  /**
   * Checks if a URL is internal navigation
   */
  const isInternalNav = useCallback((url: string): boolean => {
    return isInternalNavigation(url);
  }, []);

  /**
   * Smooth scroll to a section
   */
  const scrollToSection = useCallback((sectionId: string, offset?: number) => {
    smoothScrollToSection(sectionId, offset);
  }, []);

  return {
    handleLinkClick,
    getExternalLinkProps,
    shouldOpenInNewTab,
    isExternalUrl,
    isInternalNav,
    scrollToSection
  };
}; 