export interface Brokerage {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  founded: number;
  region: string;
  city: string;
  province: string;
  coordinates: [number, number];
  specializations: string[];
  description: string;
  overview: string;
  mission?: string;
  vision?: string;
  values?: string[];
  leadership?: { name: string; title: string; email?: string }[];
  milestones?: { year: number; event: string }[];
  locations: string[];
  website: string;
  phone: string;
  email: string;
}

export const brokerages: Brokerage[] = [
  {
    id: 'brokerteam',
    name: 'BrokerTeam Insurance Solutions Inc.',
    shortName: 'BrokerTeam Insurance',
    logo: '/logos/BrokerTeam.png',
    founded: 2005,
    region: 'Greater Toronto Area',
    city: 'Richmond Hill',
    province: 'Ontario',
    coordinates: [43.8828, -79.4403],
    specializations: ['Hospitality', 'Contractors', 'Builder\'s Risk', 'Fleet', 'Wholesale', 'Retail', 'Rooming House'],
    description: 'BrokerTeam Insurance is a multi-lingual insurance brokerage serving the GTA and beyond.',
    overview: 'BrokerTeam Insurance is a multi-lingual insurance brokerage originally founded in Ontario. Our story begins in 2005, when we opened our doors for the purpose of meeting the insurance needs of the Chinese and Korean communities. Since then, we have expanded well-beyond! In 2022, we launched in Alberta and Nova Scotia, and we will continue to expand nationally offering insurance to Canadians. Our insurance experts can service you in 16 different languages, providing expert advice on coverage and price. We are a people-focused team, driven by integrity. This means we aim to build solid relationships with our clients, our people, our carrier partners, and our industry.',
    mission: 'Grow by providing opportunities, succeed by providing exceptional professional service with care.',
    vision: 'Be an Industry leading brokerage, and a great place for brokers and customers alike.',
    values: ['Good people working with good people'],
    leadership: [
      { name: 'William Chan', title: 'President', email: 'william.chan@brokerteam.ca' },
      { name: 'Jennifer Lau', title: 'Director of Broker Development', email: 'jennifer.lau@brokerteam.ca' },
      { name: 'Karen Shum', title: 'Director of Sales', email: 'karen.shum@brokerteam.ca' }
    ],
    milestones: [
      { year: 2005, event: 'Founded in Richmond Hill' },
      { year: 2015, event: '10th Anniversary' },
      { year: 2017, event: 'IBAO Brokerage of the Year Award' },
      { year: 2018, event: 'Creation of Project Spotlight' }
    ],
    locations: ['Richmond Hill', 'Ottawa', 'Thornhill', 'Markham', 'Aurora', 'Milton', 'Vaughan', 'Bedford', 'Goodrates', 'Unionville'],
    website: 'https://brokerteam.ca/en/',
    phone: '(905) 886-9203',
    email: 'info@brokerteam.ca'
  },
  {
    id: 'caldwell-roach',
    name: 'Caldwell Roach Insurance Ltd.',
    shortName: 'Caldwell Roach Insurance',
    logo: '/logos/Caldwell_Roach.png',
    founded: 1965,
    region: 'Maritimes',
    city: 'Truro',
    province: 'Nova Scotia',
    coordinates: [45.3649, -63.2800],
    specializations: ['Agriculture', 'Forestry', 'Marine', 'Farm', 'Rural Commercial'],
    description: 'Caldwell Roach Insurance has been serving Atlantic Canada for nearly 60 years.',
    overview: 'Caldwell Roach Insurance has been serving Atlantic Canada for nearly 60 years, with deep expertise in agricultural and forestry operations. A trusted name in Nova Scotia\'s rural communities.',
    mission: 'To protect the livelihoods of Atlantic Canadian families and businesses.',
    vision: 'To remain the Maritime region\'s premier insurance partner for agricultural and rural enterprises.',
    values: ['Community', 'Trust', 'Knowledge', 'Service'],
    leadership: [
      { name: 'Leadership Team', title: 'Management' }
    ],
    milestones: [
      { year: 1965, event: 'Founded in Truro, NS' },
      { year: 1985, event: 'Expanded agricultural specialization' },
      { year: 2000, event: 'Added forestry expertise' }
    ],
    locations: ['Truro', 'Amherst', 'Nova Scotia', 'Atlantic Canada'],
    website: 'https://caldwellroach.com',
    phone: '(902) 893-4204',
    email: 'info@caldwellroach.com'
  },
  {
    id: 'darling',
    name: 'Darling Insurance and Realty / Sentinel Insurance',
    shortName: 'Darling Insurance',
    logo: '/logos/Darling.png',
    founded: 1928,
    region: 'Peterborough and Kawarthas',
    city: 'Peterborough',
    province: 'Ontario',
    coordinates: [44.3091, -78.3197],
    specializations: ['Personal Lines', 'General Commercial', 'Farm', 'Agritainment', 'Small Business'],
    description: 'Darling Insurance has been a cornerstone of the Peterborough community since 1928.',
    overview: 'With roots dating back to 1928, Darling Insurance is one of Ontario\'s most established brokerages. Specializing in Personal Home/Auto/Cottage, Small Business and Farm/Agritainment risks.',
    mission: 'To assist our clients with integrity, professionalism, and efficiency, while promoting leadership in our community',
    vision: 'Our fully qualified staff are ready to work with you in understanding your needs and providing unbiased advice on the best available coverage for the most competitive price.',
    values: ['Heritage', 'Expertise', 'Relationships', 'Community'],
    leadership: [
      { name: 'Leadership Team', title: 'Management' }
    ],
    milestones: [
      { year: 1928, event: 'Founded in Peterborough' },
      { year: 1960, event: 'Expanded farm insurance practice' },
      { year: 2010, event: 'Pioneer in agritainment coverage' },
      { year: 2022, event: 'Partnered with five long-term employees—people who live and work right here in the community' }
    ],
    locations: ['Peterborough', 'Lindsay', 'Kawarthas', 'Central Ontario'],
    website: 'https://darlinginsurance.net',
    phone: '(705) 742-5306',
    email: 'info@darlinginsurance.net'
  },
  {
    id: 'josslin',
    name: 'Josslin Insurance Brokers',
    shortName: 'Josslin Insurance Brokers',
    logo: '/logos/Josslin.png',
    founded: 1880,
    region: 'Southwestern Ontario',
    city: 'Kitchener',
    province: 'Ontario',
    coordinates: [43.4516, -80.4925],
    specializations: ['Mid-Market Commercial', 'Farm', 'Manufacturing', 'Technology', 'Professional Services'],
    description: 'One of Ontario\'s oldest brokerages, Josslin has been protecting families since 1880.',
    overview: 'Josslin Insurance is one of Canada\'s oldest brokerages, founded in 1880. With over 140 years of experience, they specialize in mid-market commercial and farm insurance across Southwestern Ontario.',
    mission: 'To deliver exceptional insurance solutions built on trust and expertise.',
    vision: 'To continue our legacy as Southwestern Ontario\'s most respected insurance brokerage.',
    values: ['Trust', 'Expertise', 'Innovation', 'Long-term Relationships'],
    leadership: [
      { name: 'Leadership Team', title: 'Management' }
    ],
    milestones: [
      { year: 1880, event: 'Founded in Galt (now Cambridge)' },
      { year: 1950, event: 'Expanded to Kitchener-Waterloo' },
      { year: 2020, event: 'Celebrated 140 years of service' }
    ],
    locations: ['Kitchener', 'Cambridge', 'Waterloo Region', 'Southwestern Ontario'],
    website: 'https://www.josslin.com/',
    phone: '(519) 742-2641',
    email: 'info@josslin.com'
  },
  {
    id: 'mmr',
    name: 'Martin Merry and Reid Insurance',
    shortName: 'Martin Merry & Reid Insurance',
    logo: '/logos/MMR.png',
    founded: 1904,
    region: 'Greater Toronto Area',
    city: 'Toronto',
    province: 'Ontario',
    coordinates: [43.6532, -79.3832],
    specializations: ['Construction', 'Directors & Officers', 'Professional Liability', 'Real Estate', 'Financial Institutions'],
    description: 'Martin Merry and Reid specializes in construction and professional liability insurance.',
    overview: 'Martin Merry & Reid has been a pillar of Toronto\'s commercial insurance market since 1904. Specialists in construction and D&O coverage, they serve mid to large commercial clients across Canada.',
    mission: 'To provide sophisticated risk management solutions for complex commercial enterprises.',
    vision: 'To be Canada\'s leading independent brokerage for construction and professional liability risks.',
    values: ['Excellence', 'Integrity', 'Partnership', 'Innovation'],
    leadership: [
      { name: 'Leadership Team', title: 'Management' }
    ],
    milestones: [
      { year: 1904, event: 'Founded in Toronto' },
      { year: 1970, event: 'Became construction insurance specialists' },
      { year: 2000, event: 'Expanded D&O practice nationally' }
    ],
    locations: ['Toronto', 'Ontario', 'National clients'],
    website: 'https://www.mmr.ca/',
    phone: '(416) 366-5655',
    email: 'info@mmrinsurance.com'
  },
  {
    id: 'orr',
    name: 'Orr Insurance and Investment',
    shortName: 'Orr Insurance & Investment',
    logo: '/logos/Orr.png',
    founded: 1895,
    region: 'Perth and Huron Counties',
    city: 'Stratford',
    province: 'Ontario',
    coordinates: [43.3700, -80.9822],
    specializations: ['General Commercial', 'Personal Lines', 'Farm', 'Small Business', 'Life & Financial'],
    description: 'Orr Insurance has been a trusted name in Perth and Huron counties for over 125 years.',
    overview: 'Orr Insurance has served the communities of Perth and Huron Counties for over 125 years. A full-service brokerage offering insurance and financial planning for families and businesses.',
    mission: 'To protect what matters most to our community members.',
    vision: 'To be the most trusted advisor for insurance and financial needs in Southwestern Ontario.',
    values: ['Community', 'Trust', 'Service', 'Stability'],
    leadership: [
      { name: 'Leadership Team', title: 'Management' }
    ],
    milestones: [
      { year: 1895, event: 'Founded in Stratford' },
      { year: 1950, event: 'Added financial services' },
      { year: 2020, event: 'Celebrated 125 years of service' }
    ],
    locations: ['Stratford', 'Listowel', 'Mitchell', 'Perth County', 'Huron County'],
    website: 'https://orrinsurance.net/',
    phone: '(519) 271-2680',
    email: 'info@orrinsurance.com'
  },
  {
    id: 'roughley',
    name: 'Roughley Insurance Brokers Ltd.',
    shortName: 'Roughley Insurance Brokers',
    logo: '/logos/Roughley.png',
    founded: 1945,
    region: 'Durham Region',
    city: 'Oshawa',
    province: 'Ontario',
    coordinates: [43.8971, -78.8658],
    specializations: ['Contractor', 'Agricultural', 'Commercial', 'Surety Bonds', 'Personal Lines'],
    description: 'Roughley Insurance has served Durham Region for over 75 years.',
    overview: 'Roughley Insurance has been protecting Durham Region families and businesses since 1945. Known for expertise in contractor and agricultural insurance, with strong surety bond capabilities.',
    mission: 'To provide exceptional insurance protection with personal service excellence.',
    vision: 'To be Durham Region\'s preferred insurance partner for contractors and agricultural operations.',
    values: ['Family Values', 'Personal Service', 'Expertise', 'Community'],
    leadership: [
      { name: 'Leadership Team', title: 'Management' }
    ],
    milestones: [
      { year: 1945, event: 'Founded in Oshawa' },
      { year: 1975, event: 'Developed contractor specialty' },
      { year: 2000, event: 'Expanded agricultural practice' }
    ],
    locations: ['Oshawa', 'Whitby', 'Ajax', 'Durham Region'],
    website: 'https://roughleyinsurance.com/',
    phone: '(905) 728-8484',
    email: 'info@roughleyinsurance.com'
  },
  {
    id: 'rozon',
    name: 'Rozon Insurance Brokers Ltd.',
    shortName: 'Rozon Insurance Brokers',
    logo: '/logos/Rozon.png',
    founded: 1968,
    region: 'Eastern Ontario and Quebec',
    city: 'Lancaster',
    province: 'Ontario',
    coordinates: [45.1983, -74.4972],
    specializations: ['Agriculture', 'Cottages & Seasonal', 'Rural Commercial', 'Farm', 'Personal Lines'],
    description: 'Rozon Insurance serves Eastern Ontario and Western Quebec with bilingual service.',
    overview: 'Rozon Insurance serves the bilingual communities of Eastern Ontario and Western Quebec. Specialists in agricultural and cottage/seasonal property insurance with deep regional roots.',
    mission: 'To provide tailored protection for the unique needs of Eastern Ontario and Quebec communities.',
    vision: 'To be the trusted insurance partner for agricultural and cottage owners across our region.',
    values: ['Bilingual Service', 'Community Roots', 'Agricultural Expertise', 'Personal Touch'],
    leadership: [
      { name: 'Leadership Team', title: 'Management' }
    ],
    milestones: [
      { year: 1968, event: 'Founded in Lancaster' },
      { year: 1985, event: 'Expanded into Quebec market' },
      { year: 2010, event: 'Developed cottage insurance specialty' }
    ],
    locations: ['Lancaster', 'Alexandria', 'Cornwall', 'Eastern Ontario', 'Western Quebec'],
    website: 'https://www.rozoninsurance.ca/',
    phone: '(613) 347-7600',
    email: 'info@rozoninsurance.ca'
  },
  {
    id: 'olsen-sottile',
    name: 'Olsen-Sottile Insurance Brokers',
    shortName: 'Olsen-Sottile Insurance Brokers',
    logo: '/logos/Sottile.png',
    founded: 1980,
    region: 'Niagara Region',
    city: 'St. Catharines',
    province: 'Ontario',
    coordinates: [43.1594, -79.2469],
    specializations: ['Hospitality', 'Wineries', 'Tourism', 'Restaurant', 'Commercial'],
    description: 'Olsen-Sottile Insurance is the Niagara Region specialist in hospitality and winery insurance.',
    overview: 'Olsen-Sottile Insurance is Niagara\'s specialist in hospitality and winery insurance. With the region\'s booming wine and tourism industry, they\'ve developed unmatched expertise in these sectors.',
    mission: 'To protect Niagara\'s vibrant hospitality and wine industry with specialized coverage.',
    vision: 'To be Canada\'s leading insurance brokerage for wineries and hospitality ventures.',
    values: ['Specialization', 'Partnership', 'Regional Pride', 'Excellence'],
    leadership: [
      { name: 'Leadership Team', title: 'Management' }
    ],
    milestones: [
      { year: 1980, event: 'Founded in St. Catharines' },
      { year: 1995, event: 'Began winery insurance specialization' },
      { year: 2015, event: 'Recognized as leading hospitality insurer' }
    ],
    locations: ['St. Catharines', 'Niagara Falls', 'Niagara-on-the-Lake', 'Niagara Region'],
    website: 'https://www.olsen-sottile.com/site/home',
    phone: '(905) 688-3311',
    email: 'info@olsensottile.com'
  },
  {
    id: 'stan-darling',
    name: 'Stan Darling Insurance Brokers',
    shortName: 'Stan Darling Insurance',
    logo: '/logos/Stan_Darling.png',
    founded: 1938,
    region: 'Parry Sound and Muskoka',
    city: 'Parry Sound',
    province: 'Ontario',
    coordinates: [45.3436, -80.0364],
    specializations: ['General Commercial', 'Cottage', 'Personal Lines', 'Marine', 'Seasonal Properties'],
    description: 'Stan Darling Insurance has been protecting cottage country for over 85 years.',
    overview: 'Stan Darling Insurance has protected the cottage country communities of Parry Sound and Muskoka since 1938. Expert in seasonal property and marine coverage for this unique region.',
    mission: 'To be the trusted protector of cottage country families and businesses.',
    vision: 'To remain the insurance provider of choice in the Parry Sound-Muskoka corridor.',
    values: ['Community', 'Trust', 'Local Knowledge', 'Personal Service'],
    leadership: [
      { name: 'Leadership Team', title: 'Management' }
    ],
    milestones: [
      { year: 1938, event: 'Founded in Parry Sound' },
      { year: 1970, event: 'Expanded cottage insurance focus' },
      { year: 2000, event: 'Enhanced marine coverage offerings' }
    ],
    locations: ['Parry Sound', 'Huntsville', 'Muskoka', 'Georgian Bay'],
    website: 'https://standarlinginsurance.com/',
    phone: '(705) 746-2221',
    email: 'info@standarling.com'
  },
  {
    id: 'tanner',
    name: 'Tanner Insurance Services Ltd.',
    shortName: 'Tanner Insurance',
    logo: '/logos/Tanner.png',
    founded: 1922,
    region: 'Ottawa and Eastern Ontario',
    city: 'Ottawa',
    province: 'Ontario',
    coordinates: [45.4215, -75.6972],
    specializations: ['Marine', 'Commercial', 'Professional Liability', 'Technology', 'Government Contractors'],
    description: 'Tanner Insurance has served the Ottawa region for over 100 years.',
    overview: 'Tanner Insurance has served Ottawa and Eastern Ontario for over 100 years. Known particularly for marine expertise and serving government contractors and technology companies in the National Capital Region.',
    mission: 'To deliver professional insurance solutions for Ottawa\'s diverse business community.',
    vision: 'To be Ottawa\'s premier commercial insurance brokerage.',
    values: ['Professionalism', 'Expertise', 'Integrity', 'Service Excellence'],
    leadership: [
      { name: 'Leadership Team', title: 'Management' }
    ],
    milestones: [
      { year: 1922, event: 'Founded in Ottawa' },
      { year: 1960, event: 'Developed marine insurance specialty' },
      { year: 2022, event: 'Celebrated 100 years of service' }
    ],
    locations: ['Ottawa', 'Gatineau', 'National Capital Region', 'Eastern Ontario'],
    website: 'https://tannerinsurance.ca',
    phone: '(613) 238-4444',
    email: 'info@tannerinsurance.ca'
  }
];

export const getBrokerageById = (id: string): Brokerage | undefined => {
  return brokerages.find(b => b.id === id);
};

export const searchBrokerages = (query: string): Brokerage[] => {
  const q = query.toLowerCase();
  return brokerages.filter(b =>
    b.name.toLowerCase().includes(q) ||
    b.shortName.toLowerCase().includes(q) ||
    b.region.toLowerCase().includes(q) ||
    b.city.toLowerCase().includes(q) ||
    b.province.toLowerCase().includes(q) ||
    b.specializations.some(s => s.toLowerCase().includes(q))
  );
};

export const getAllSpecializations = (): string[] => {
  const specs = new Set<string>();
  brokerages.forEach(b => b.specializations.forEach(s => specs.add(s)));
  return Array.from(specs).sort();
};

export const getAllRegions = (): string[] => {
  const regions = new Set<string>();
  brokerages.forEach(b => regions.add(b.region));
  return Array.from(regions).sort();
};
