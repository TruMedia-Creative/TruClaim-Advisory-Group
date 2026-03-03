import { motion } from 'framer-motion';
import { Shield, Award, Scale, CheckCircle, MapPin, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageMetadata from '../components/PageMetadata';

const SITE_URL = 'https://www.truclaimsadvisorygroup.com';

const credentials = [
  'Texas All Lines Adjuster License #2532605',
  'Texas LA&H / P&C License #1917567',
  'NFIP Flood Certification #0070011243',
  'Non-Resident Licensed: AL, FL, GA, IN, KY, LA, MI, MN, MS, NC, OK, SC',
  'State Farm Certified – Rope & Harness / Steep & High Roof',
  'USAA Certified Adjuster',
  'TWIA / TFPA Certified',
  'Xactimate Certified Estimator',
  'Catastrophe & daily claims experience',
  '20+ years of leadership & operations background',
  'FluentSpanish-speaking adjuster',
];

const values = [
  {
    icon: Shield,
    title: 'Independence',
    description:
      'TruClaims Appraisal Group serves both policyholders and insurance carriers as a neutral, independent insurance appraiser. Our obligation in every engagement is to provide an accurate, objective valuation grounded in evidence and policy terms — not to advocate for either party.',
  },
  {
    icon: Scale,
    title: 'Procedural Discipline',
    description:
      'Every appraisal engagement is conducted within the framework of the policy\'s appraisal clause. We apply consistent methodology — on-site inspection, detailed documentation, and defensible Xactimate estimates — to produce results that hold up to scrutiny from all parties.',
  },
  {
    icon: Award,
    title: 'Credentials & Licensure',
    description:
      'Licensed in Texas and 12 additional states with carrier certifications from State Farm, USAA, and TWIA. Our Xactimate estimates are detailed, defensible, and built to withstand review from carriers, counsel, and umpires.',
  },
  {
    icon: CheckCircle,
    title: 'Preloss Restoration Standard',
    description:
      'The measure of an accurate appraisal is whether the award reflects the true cost to return the property to its preloss condition. That is the standard applied to every inspection and estimate — for policyholders and carriers alike.',
  },
];

const catEvents = [
  { event: 'Hurricane Beryl', location: 'Texas' },
  { event: 'Hurricane Laura & Delta', location: 'Louisiana' },
  { event: 'Hurricane Ian', location: 'Florida' },
  { event: 'Hurricane Isaias', location: 'New Jersey' },
  { event: 'Hurricane Ida', location: 'Louisiana' },
  { event: 'Texas Freeze', location: 'Texas' },
  { event: 'SE Texas Wind & TWIA Events', location: 'Texas' },
  { event: 'OKC Hail Deployments', location: 'Oklahoma' },
  { event: 'NFIP Flood Deployments', location: 'South Texas' },
];

const carrierPartners = [
  'State Farm',
  'USAA',
  'TWIA',
  'Travelers',
  'Nationwide',
  'Assurant',
  'Homesite',
  'American Integrity',
  'Germania',
  'Standard Casualty',
  'Farmers',
  'Foremost',
  'Farm Bureau',
];

const experience = [
  {
    icon: Briefcase,
    role: 'Independent Property Appraiser',
    org: 'JDR Appraisals',
    period: 'Dec 2025 – Present',
    bullets: [
      'Conduct independent appraisal inspections for disputed residential property claims',
      'Compare carrier and contractor estimates for scope and pricing accuracy',
      'Prepare detailed Xactimate estimates with photo and narrative documentation',
      'Support fair and defensible settlement recommendations',
    ],
  },
  {
    icon: Briefcase,
    role: 'Independent Insurance Adjuster / CAT Specialist',
    org: 'Sedgwick | Wardlaw | Eberl | Alacrity | Pilot | Compass | Allcat | QA Claims | Others',
    period: 'Sep 2021 – Present',
    bullets: [
      'Handle high-volume CAT and daily claims across multiple states',
      'Perform detailed residential inspections and damage scoping',
      'Write accurate, defensible Xactimate estimates with rope & harness steep-roof capability',
      'Manage supplements and negotiate fair settlements',
      'Deploy for hurricane, hail, wind, freeze, and flood events',
    ],
  },
  {
    icon: MapPin,
    role: 'District Manager',
    org: 'Kemper Insurance – Texas',
    period: '2014 – 2020',
    bullets: [
      'Supervised 23 team members across Texas operations',
      'Managed $350K+ monthly premium volume',
      'Led operations and escalated claim resolutions during Hurricanes Harvey & Imelda',
      'Resolved escalated service and claims concerns',
    ],
  },
  {
    icon: MapPin,
    role: 'Construction Project Manager (International)',
    org: 'Assemblies of God World Missions',
    period: '1998 – 2013',
    bullets: [
      'Managed 50+ construction projects internationally',
      'Oversaw material procurement, labor coordination, and on-site execution',
      'Developed deep structural and building systems knowledge applied to insurance loss evaluations',
    ],
  },
];

const headshotSrc = `${import.meta.env.BASE_URL}larryon-truman.jpg`;

const aboutStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Larryon Truman',
    jobTitle: 'Principal Appraiser',
    worksFor: {
      '@type': 'Organization',
      name: 'TruClaims Appraisal Group',
    },
    url: 'https://www.truclaimsadvisorygroup.com/about',
    image: `${SITE_URL}/larryon-truman.jpg`,
    knowsAbout: ['Insurance appraisal', 'Umpire services', 'NFIP flood claims'],
    sameAs: ['https://www.linkedin.com/in/larryontruman'],
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-parchment-50">
      <PageMetadata
        title="About TruClaims Appraisal Group"
        description="Independent insurance appraisal firm led by Larryon Truman — multi-state licensed, NFIP certified, and experienced across catastrophic deployments."
        canonicalPath="/about"
        structuredData={aboutStructuredData}
      />
      {/* Header */}
      <section className="bg-gradient-to-br from-ink-black-800 via-ink-black-900 to-ink-black-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              About TruClaims Appraisal Group
            </h1>
            <p className="text-ink-black-200 text-lg max-w-2xl mx-auto">
              Independent. Evidence-Based. Policy-Consistent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-parchment-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="section-title mb-6">Who We Are</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                TruClaims Appraisal Group is a field-experienced, independent insurance appraiser serving policyholders and insurance carriers across Texas and Louisiana — with travel available for large-loss and catastrophic events nationwide.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                The firm was founded on a commitment to procedural discipline and neutral evaluation. Whether retained by a policyholder, a carrier, or as a neutral umpire, TruClaims Appraisal Group applies the same evidence-based methodology: on-site inspection, detailed documentation, and policy-consistent valuation — with no advocacy on either side.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Our principal, Larryon Truman, is a licensed multi-state adjuster and certified Xactimate estimator with years of catastrophe and daily claims experience and an extensive background in construction and operations. He holds a rope &amp; harness steep-roof certification and is a Spanish-speaking adjuster — able to serve a broader range of policyholders across Texas and Louisiana.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Deployment experience spans residential claims, umpire engagements, and catastrophic events including Hurricanes Beryl, Laura, Ian, and Ida. TruClaims specializes in hail, wind, water, and NFIP flood losses — and performs on-site inspections for every engagement.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mt-10 space-y-8"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-parchment-200">
                  <h3 className="text-xl font-bold text-ink-black-800 mb-4 font-display">Recent Deployments</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Selected catastrophic responses across the Gulf Coast, Texas hail corridor, and NFIP flood regions.
                  </p>
                  <ul className="space-y-3">
                    {catEvents.map((item) => (
                      <li key={item.event} className="flex items-start gap-3">
                        <MapPin className="text-steel-blue-500 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-gray-700">
                          <span className="font-semibold">{item.event}</span>
                          <span className="text-gray-500 ml-2">— {item.location}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            </motion.div>

            {/* Profile + Credentials card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Profile header */}
              <div className="border-b border-gray-200">
                <img
                  src={headshotSrc}
                  alt="Larryon Truman, Principal Appraiser at TruClaims Appraisal Group"
                  className="w-22 h-22 rounded-xl object-cover object-top "
                />
                <div className="px-8 py-5">
                  <p className="text-lg font-bold text-ink-black-800">Larryon Truman</p>
                  <p className="text-sm text-steel-blue-600 font-medium">Principal Appraiser</p>
                  <p className="text-xs text-gray-500 mt-0.5">Lumberton, TX · (903) 315-0136</p>
                </div>
              </div>
              {/* Credentials */}
              <div className="p-8">
                <h3 className="text-base font-bold text-ink-black-800 uppercase tracking-wide mb-5">
                  Licenses, Certifications & Experience
                </h3>
                <ul className="space-y-3">
                  {credentials.map((cred) => (
                    <li key={cred} className="flex items-start gap-3">
                      <CheckCircle className="text-steel-blue-500 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700 text-sm">{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      

      {/* Carrier Partners */}
      <section className="py-20 bg-parchment-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Carrier Partners</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              Trusted by regional and national carriers for disciplined fact-finding, preloss restoration estimates,
              and transparent documentation that withstands peer review.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-parchment-200 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-ink-black-800 font-display">Carrier Network</h3>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">Trusted</span>
            </div>
            <div className="relative whitespace-nowrap overflow-hidden">
              <motion.div
                className="flex gap-4 items-center"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
              >
                {[...carrierPartners, ...carrierPartners].map((carrier) => (
                  <span
                    key={carrier}
                    className="px-4 py-2 rounded-xl bg-parchment-100 border border-parchment-200 text-sm font-semibold text-ink-black-700 uppercase tracking-wide"
                  >
                    {carrier}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Experience Timeline */}
      <section className="py-20 bg-parchment-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Professional Background</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              A combination of hands-on claims expertise and decades of leadership and construction experience.
            </p>
          </motion.div>

          <div className="space-y-6">
            {experience.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ink-black-800 to-ink-black-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-steel-blue-400" size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-ink-black-800">{item.role}</h3>
                    <p className="text-steel-blue-600 font-medium text-sm">{item.org}</p>
                    <p className="text-gray-400 text-sm">{item.period}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-0 sm:ml-16">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-steel-blue-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-parchment-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Every engagement is governed by four principles that define the quality and integrity of our work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-8 shadow-lg flex gap-6"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-ink-black-800 to-ink-black-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <value.icon className="text-steel-blue-400" size={26} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink-black-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-parchment-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="section-title mb-4">Work With Us</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
              Whether you need an independent appraiser, a neutral umpire, or a documentation review, TruClaims Appraisal Group is available to assist with amount of loss disputes in Texas and Louisiana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="btn-secondary">
                View Our Services
              </Link>
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
