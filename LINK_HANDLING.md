# Link Handling System

This project now includes a comprehensive system for handling external links that automatically opens them in new tabs.

## Features

### 🔗 Automatic External Link Detection
- All external links (http, https, www, etc.) automatically open in new tabs
- Internal links (relative paths, hash links) remain in the same tab
- Security attributes (`rel="noopener noreferrer"`) are automatically added

### 🛠️ Components & Utilities

#### 1. SmartLink Component (`src/components/common/SmartLink.tsx`)
A reusable component that automatically handles external vs internal links:

```tsx
import SmartLink from './components/common/SmartLink';

<SmartLink href="https://github.com/user/repo">
  View Repository
</SmartLink>
```

#### 2. useExternalLinks Hook (`src/hooks/useExternalLinks.ts`)
Custom hook providing link handling utilities:

```tsx
import { useExternalLinks } from './hooks/useExternalLinks';

const { handleLinkClick, getExternalLinkProps, shouldOpenInNewTab } = useExternalLinks();
```

#### 3. Link Utilities (`src/utils/linkUtils.ts`)
Core utility functions for link handling:

- `openInNewTab(url, event)` - Opens URL in new tab
- `isExternalUrl(url)` - Checks if URL is external
- `getExternalLinkProps()` - Returns proper attributes for external links
- `handleLinkClick(url, event)` - Handles link clicks with automatic new tab opening

#### 4. Global Link Handler (`src/utils/globalLinkHandler.ts`)
Automatically catches any missed external links and adds proper attributes.

## Implementation

### ✅ Already Updated Components

1. **Projects Component** - Uses SmartLink for project links
2. **GetInTouch Component** - Social media links have `target="_blank"`
3. **App Component** - Includes global link handler

### 🔧 How to Use

#### For New Components
```tsx
// Option 1: Use SmartLink component
import SmartLink from './components/common/SmartLink';

<SmartLink href="https://external-site.com">
  External Link
</SmartLink>

// Option 2: Use the hook
import { useExternalLinks } from './hooks/useExternalLinks';

const { getExternalLinkProps } = useExternalLinks();

<a href="https://external-site.com" {...getExternalLinkProps()}>
  External Link
</a>

// Option 3: Manual attributes
<a href="https://external-site.com" target="_blank" rel="noopener noreferrer">
  External Link
</a>
```

#### For Internal Links
```tsx
// These will stay in the same tab
<a href="#section">Internal Section</a>
<a href="/about">Internal Page</a>
<a href="./relative-path">Relative Link</a>
```

## Security

All external links automatically include:
- `target="_blank"` - Opens in new tab
- `rel="noopener noreferrer"` - Prevents security vulnerabilities

## Browser Compatibility

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## Testing

To test the link handling:

1. **External Links**: Click any GitHub, LinkedIn, or Instagram links
2. **Internal Links**: Click navigation menu items (should stay in same tab)
3. **Mixed Content**: Check that only external links open in new tabs

## Future Enhancements

- Add visual indicators for external links (optional)
- Track external link clicks for analytics
- Customize behavior per link type
- Add confirmation dialogs for certain external links 