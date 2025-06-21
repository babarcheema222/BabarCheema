import React from 'react';
import { useExternalLinks } from '../../hooks/useExternalLinks';
import { isInternalNavigation, smoothScrollToSection } from '../../utils/linkUtils';

interface SmartLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
  [key: string]: any; // Allow additional props
}

/**
 * SmartLink component that automatically handles external links
 * Opens external links in new tabs while keeping internal links in the same tab
 */
const SmartLink: React.FC<SmartLinkProps> = ({ 
  href, 
  children, 
  className, 
  onClick,
  ...props 
}) => {
  const { getExternalLinkProps, isExternalUrl } = useExternalLinks();
  
  const isExternal = isExternalUrl(href);
  const isInternal = isInternalNavigation(href);
  const linkProps = isExternal ? getExternalLinkProps() : {};

  const handleClick = (event: React.MouseEvent) => {
    if (onClick) {
      onClick(event);
    }
    
    // Handle internal navigation
    if (isInternal) {
      event.preventDefault();
      const sectionId = href.substring(1); // Remove the # from the href
      smoothScrollToSection(sectionId);
    }
  };

  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
      {...linkProps}
      {...props}
    >
      {children}
    </a>
  );
};

export default SmartLink; 