import { useEffect } from 'react';

const SITE_URL = 'https://www.truclaimsadvisorygroup.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

type StructuredData = Record<string, unknown> | Record<string, unknown>[];

interface PageMetadataProps {
  title: string;
  description: string;
  canonicalPath: string;
  imageUrl?: string;
  structuredData?: StructuredData;
}

function upsertMeta(tagName: 'name' | 'property', tagValue: string, content: string) {
  if (!content) return;
  const selector = `meta[${tagName}="${tagValue}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(tagName, tagValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

export default function PageMetadata({
  title,
  description,
  canonicalPath,
  imageUrl,
  structuredData,
}: PageMetadataProps) {
  useEffect(() => {
    const resolvedPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    const canonicalUrl = `${SITE_URL}${resolvedPath}`;
    const fullTitle = `${title} | TruClaims Appraisal Group`;
    const socialImage = imageUrl ?? DEFAULT_IMAGE;

    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', socialImage);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', socialImage);

    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

  }, [title, description, canonicalPath, imageUrl]);

  useEffect(() => {
    const scriptId = `ld-json-${canonicalPath}`;
    let script = document.head.querySelector<HTMLScriptElement>(`#${scriptId}`);

    if (structuredData) {
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = scriptId;
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    } else if (script) {
      script.remove();
    }

    return () => {
      const existing = document.head.querySelector<HTMLScriptElement>(`#${scriptId}`);
      if (existing) existing.remove();
    };
  }, [structuredData, canonicalPath]);

  return null;
}
