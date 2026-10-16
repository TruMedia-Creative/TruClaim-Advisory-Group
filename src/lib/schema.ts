export const SITE_URL = 'https://www.truclaimsadvisorygroup.com';
export const BUSINESS_NAME = 'TruClaims Advisory Group';
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const FOUNDER_ID = `${SITE_URL}/about#larryon-truman`;

export type JsonLd = Record<string, unknown>;

const STATES = [
  { name: 'Texas', code: 'TX' },
  { name: 'Louisiana', code: 'LA' },
];

const LICENSES = [
  {
    name: 'Texas All Lines Adjuster License',
    identifier: '2532605',
    validIn: { '@type': 'State', name: 'Texas', identifier: 'TX' },
  },
  {
    name: 'Texas LA&H / P&C License',
    identifier: '1917567',
    validIn: { '@type': 'State', name: 'Texas', identifier: 'TX' },
  },
  {
    name: 'NFIP Flood Certification',
    identifier: '0070011243',
    validIn: { '@type': 'Country', name: 'United States', identifier: 'US' },
  },
];

export const SERVICE_TYPES = [
  'Insurance appraisal',
  'Umpire services',
  'Catastrophic loss valuation',
  'NFIP flood claim support',
  'Estimate review',
  'Residential property claim appraisal',
  'Commercial property claim appraisal',
];

const areaServed = STATES.map(({ name, code }) => ({
  '@type': 'State',
  name,
  identifier: code,
  containedInPlace: { '@type': 'Country', name: 'United States' },
}));

const providerRef = {
  '@id': ORGANIZATION_ID,
  '@type': ['InsuranceAgency', 'ProfessionalService'],
  name: BUSINESS_NAME,
};

export function buildOrganizationSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': ['InsuranceAgency', 'ProfessionalService'],
    '@id': ORGANIZATION_ID,
    name: BUSINESS_NAME,
    legalName: BUSINESS_NAME,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/og-image.jpg`,
    image: `${SITE_URL}/og-image.jpg`,
    description:
      'Independent insurance appraisal, umpire, and catastrophic loss valuation services for policyholders, carriers, and attorneys across Texas and Louisiana.',
    slogan: 'Independent. Objective. Evidence-based.',
    telephone: '+1-903-315-0136',
    email: 'info@truclaimsadvisorygroup.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lumberton',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    areaServed,
    knowsLanguage: ['en', 'es'],
    knowsAbout: [
      ...SERVICE_TYPES,
      'Appraisal clause disputes',
      'Property insurance claims',
      'Hurricane and hail damage',
      'Loss valuation',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: '+1-903-315-0136',
        email: 'info@truclaimsadvisorygroup.com',
        areaServed: ['US-TX', 'US-LA'],
        availableLanguage: ['English', 'Spanish'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        url: `${SITE_URL}/contact`,
        email: 'info@truclaimsadvisorygroup.com',
        availableLanguage: ['English', 'Spanish'],
      },
    ],
    hasCredential: LICENSES.map((license) => ({
      '@type': 'EducationalOccupationalCredential',
      name: license.name,
      credentialCategory: 'license',
      identifier: license.identifier,
      validIn: license.validIn,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Insurance appraisal and loss valuation services',
      url: `${SITE_URL}/services`,
      itemListElement: SERVICE_TYPES.map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
    },
    founder: { '@id': FOUNDER_ID },
    potentialAction: [
      {
        '@type': 'CommunicateAction',
        name: 'Contact TruClaims Advisory Group',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/contact`,
          actionPlatform: [
            'https://schema.org/DesktopWebPlatform',
            'https://schema.org/MobileWebPlatform',
          ],
        },
        inLanguage: ['en', 'es'],
      },
    ],
    sameAs: ['https://www.linkedin.com/company/truclaims-advisory-group'],
  };
}

export function buildWebSiteSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: BUSINESS_NAME,
    inLanguage: 'en-US',
    publisher: providerRef,
  };
}

export function buildWebPageSchema(path: string, name: string, description: string): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name,
    description,
    inLanguage: 'en-US',
    isPartOf: { '@id': WEBSITE_ID },
    about: providerRef,
  };
}

export function buildBreadcrumbSchema(items: { name: string; path: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...items].map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function buildServiceSchema(name: string, description: string): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType: name,
    provider: providerRef,
    areaServed,
    audience: { '@type': 'Audience', audienceType: 'Policyholders, carriers, and attorneys' },
    potentialAction: {
      '@type': 'CommunicateAction',
      name: `Request ${name}`,
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/contact`,
        actionPlatform: 'https://schema.org/DesktopWebPlatform',
      },
    },
  };
}

export function buildFounderSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': FOUNDER_ID,
    name: 'Larryon Truman',
    jobTitle: 'Principal Appraiser',
    worksFor: providerRef,
    url: `${SITE_URL}/about`,
    image: `${SITE_URL}/larryon-truman.webp`,
    knowsLanguage: ['en', 'es'],
    knowsAbout: ['Insurance appraisal', 'Umpire services', 'NFIP flood claims'],
    hasCredential: LICENSES.map((license) => ({
      '@type': 'EducationalOccupationalCredential',
      name: license.name,
      credentialCategory: 'license',
      identifier: license.identifier,
    })),
    sameAs: ['https://www.linkedin.com/in/larryontruman'],
  };
}

export function buildContactPageSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE_URL}/contact#webpage`,
    name: 'Request an Insurance Appraisal Review',
    url: `${SITE_URL}/contact`,
    description:
      'Submit documentation for an independent insurance appraisal or umpire review covering Texas and Louisiana property claims.',
    inLanguage: 'en-US',
    isPartOf: { '@id': WEBSITE_ID },
    about: providerRef,
    mainEntity: providerRef,
    potentialAction: {
      '@type': 'CommunicateAction',
      name: 'Submit an appraisal review request',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/contact`,
        actionPlatform: [
          'https://schema.org/DesktopWebPlatform',
          'https://schema.org/MobileWebPlatform',
        ],
      },
      inLanguage: ['en', 'es'],
    },
  };
}

export function buildStateServiceSchema(stateName: string, path: string): JsonLd {
  const state = STATES.find((s) => s.name === stateName);
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${stateName} Insurance Appraisal Services`,
    url: `${SITE_URL}${path}`,
    serviceType: SERVICE_TYPES,
    provider: providerRef,
    areaServed: { '@type': 'State', name: stateName, identifier: state?.code },
  };
}
