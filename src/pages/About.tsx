import { motion } from 'framer-motion';
import { Shield, Award, Scale, CheckCircle, MapPin, Briefcase, ClipboardList, Search, FileCheck, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageMetadata from '../components/PageMetadata';

const SITE_URL = 'https://www.truclaimsadvisorygroup.com';

const principalBullets = [
  'Texas All Lines Adjuster License #2532605',
  'Texas LA&H / P&C License #1917567',
  'NFIP Flood Certification #0070011243',
  'Multi-state licensed: AL, FL, GA, IN, KY, LA, MI, MN, MS, NC, OK, SC',
  'CAT & daily claims experience across Gulf Coast and hail corridor',
  'Spanish-speaking adjuster',
];

const licenses = [
  'Texas All Lines Adjuster License #2532605',
  'Texas LA&H / P&C License #1917567',
  'NFIP Flood Certification #0070011243',
  'Non-Resident Licensed: AL, FL, GA, IN, KY, LA, MI, MN, MS, NC, OK, SC',
  'State Farm Certified – Rope & Harness / Steep & High Roof',
  'USAA Certified Adjuster',
  'TWIA / TFPA Certified',
  'Xactimate Certified Estimator',
];

const whoWeServe = [
  'Policyholders',
  'Insurance Carriers',
  'Attorneys',
  'Contractors',
  'Public Adjusters',
];

const values = [
  {
    icon: Shield,
    title: 'Independence',
    description:
      'Neutral, independent valuation for policyholders and carriers alike — no advocacy, no bias, evidence only.',
  },
  {
    icon: Scale,
    title: 'Procedural Discipline',
    description:
      'Every engagement follows the policy\'s appraisal clause: on-site inspection, defensible Xactimate estimates, and consistent methodology.',
  },
  {
    icon: Award,
    title: 'Credentials & Licensure',
    description:
      'Licensed in Texas and 12 additional states with carrier certifications from State Farm, USAA, and TWIA.',
  },
  {
    icon: CheckCircle,
    title: 'Preloss Restoration Standard',
    description:
      'Every award is measured against one standard: the true cost to return the property to its preloss condition.',
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

const appraisalProcess = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'File Review & Scope Analysis',
    description: 'Review policy, prior estimates, and claim documentation to identify scope disputes.',
  },
  {
    icon: Search,
    step: '02',
    title: 'On-Site Inspection',
    description: 'Conduct a thorough physical inspection with photo documentation for every engagement.',
  },
  {
    icon: FileCheck,
    step: '03',
    title: 'Estimate Comparison & Documentation',
    description: 'Prepare defensible Xactimate estimates and reconcile line-item differences.',
  },
  {
    icon: Handshake,
    step: '04',
    title: 'Award Negotiation & Settlement',
    description: 'Work toward a fair, policy-consistent award through the appraisal or umpire process.',
  },
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
      'Independent appraisal inspections for disputed residential property claims',
      'Scope and pricing reconciliation between carrier and contractor estimates',
      'Detailed Xactimate estimates with photo and narrative documentation',
    ],
  },
  {
    icon: Briefcase,
    role: 'Independent Insurance Adjuster / CAT Specialist',
    org: 'Sedgwick | Wardlaw | Eberl | Alacrity | Pilot | Compass | Allcat | QA Claims | Others',
    period: 'Sep 2021 – Present',
    bullets: [
      'High-volume CAT and daily claims across multiple states',
      'Rope & harness steep-roof inspections and defensible Xactimate estimates',
      'Hurricane, hail, wind, freeze, and flood event deployments',
    ],
  },
  {
    icon: MapPin,
    role: 'District Manager',
    org: 'Kemper Insurance – Texas',
    period: '2014 – 2020',
    bullets: [
      'Supervised 23 team members; managed $350K+ monthly premium volume',
      'Led operations and escalated claim resolutions during Hurricanes Harvey & Imelda',
    ],
  },
  {
    icon: MapPin,
    role: 'Construction Project Manager (International)',
    org: 'Assemblies of God World Missions',
    period: '1998 – 2013',
    bullets: [
      'Managed 50+ construction projects internationally',
      'Structural and building systems knowledge applied to insurance loss evaluations',
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

      {/* 1. Hero */}
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
            <p className="text-ink-black-200 text-lg max-w-2xl mx-auto mb-4">
              Independent. Evidence-Based. Policy-Consistent.
            </p>
            <p className="text-steel-blue-300 text-sm font-medium tracking-wide">
              Licensed in Texas & additional states · CAT & NFIP experience · Carrier-approved
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Who We Serve */}
      <section className="py-12 bg-white border-b border-parchment-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-5">Who We Serve</p>
            <div className="flex flex-wrap justify-center gap-3">
              {whoWeServe.map((type) => (
                <span
                  key={type}
                  className="px-5 py-2 rounded-full border border-ink-black-200 text-sm font-semibold text-ink-black-700 bg-parchment-50"
                >
                  {type}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Principal Snapshot */}
      <section className="py-20 bg-parchment-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: credential bullets + neutrality paragraph */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="section-title mb-6">Our Principal</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                TruClaims Appraisal Group operates as a neutral, independent appraiser — retained by policyholders, carriers, and as a neutral umpire. Every engagement follows the same evidence-based methodology: on-site inspection, detailed documentation, and policy-consistent valuation, with no advocacy on either side.
              </p>
              <ul className="space-y-3">
                {principalBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <CheckCircle className="text-steel-blue-500 flex-shrink-0 mt-0.5" size={17} />
                    <span className="text-gray-700 text-sm">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: photo + name/title/contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-2xl border border-parchment-200 overflow-hidden"
            >
              <img
                src={headshotSrc}
                alt="Larryon Truman, Principal Appraiser at TruClaims Appraisal Group"
                className="w-full object-cover object-top"
              />
              <div className="px-8 py-6">
                <p className="text-lg font-bold text-ink-black-800">Larryon Truman</p>
                <p className="text-sm text-steel-blue-600 font-medium">Principal Appraiser</p>
                <p className="text-xs text-gray-500 mt-1">Lumberton, TX · (903) 315-0136</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Licenses & Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <h2 className="section-title">Licenses & Certifications</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-x-10 gap-y-4"
          >
            {licenses.map((lic) => (
              <div key={lic} className="flex items-start gap-3">
                <CheckCircle className="text-steel-blue-500 flex-shrink-0 mt-0.5" size={17} />
                <span className="text-gray-700 text-sm">{lic}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Catastrophe & Large-Loss Engagements */}
      <section className="py-20 bg-parchment-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <h2 className="section-title mb-2">Catastrophe & Large-Loss Engagements</h2>
            <p className="text-gray-500 text-sm">Selected deployments across the Gulf Coast, Texas hail corridor, and NFIP flood regions.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-wrap gap-3"
          >
            {catEvents.map((item) => (
              <span
                key={item.event}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-parchment-200 text-sm font-medium text-ink-black-700"
              >
                <MapPin size={13} className="text-steel-blue-500 flex-shrink-0" />
                {item.event}
                <span className="text-gray-400 font-normal">· {item.location}</span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Our Appraisal Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-14"
          >
            <h2 className="section-title">Our Appraisal Process</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {appraisalProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-parchment-50 rounded-xl p-6 border border-parchment-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-steel-blue-500 tracking-widest">{step.step}</span>
                  <div className="w-9 h-9 bg-ink-black-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="text-steel-blue-400" size={18} />
                  </div>
                </div>
                <h3 className="text-base font-bold text-ink-black-800 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Our Approach */}
      <section className="py-20 bg-parchment-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-14"
          >
            <h2 className="section-title">Our Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Four principles that govern every engagement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-xl p-6 border border-parchment-200 flex gap-5"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-ink-black-800 to-ink-black-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <value.icon className="text-steel-blue-400" size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink-black-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Professional Background */}
      <section className="py-20 bg-parchment-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Professional Background</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Hands-on claims expertise combined with decades of construction and operations leadership.
            </p>
          </motion.div>

          <div className="space-y-4">
            {experience.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-xl px-6 py-5 border border-parchment-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-ink-black-800 to-ink-black-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-steel-blue-400" size={18} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-ink-black-800">{item.role}</h3>
                    <p className="text-steel-blue-600 font-medium text-sm">{item.org}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{item.period}</p>
                  </div>
                </div>
                <ul className="space-y-1.5 ml-0 sm:ml-14">
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

      {/* 9. Carriers We've Worked With */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10"
          >
            <h2 className="section-title">Carriers We've Worked With</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-parchment-50 rounded-2xl p-8 border border-parchment-200 overflow-hidden"
          >
            <div className="relative whitespace-nowrap overflow-hidden">
              <motion.div
                className="flex gap-4 items-center"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
              >
                {[...carrierPartners, ...carrierPartners].map((carrier, i) => (
                  <span
                    key={`${carrier}-${i}`}
                    className="px-4 py-2 rounded-xl bg-white border border-parchment-200 text-sm font-semibold text-gray-500 uppercase tracking-wide"
                  >
                    {carrier}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="py-20 bg-gradient-to-br from-ink-black-800 via-ink-black-900 to-ink-black-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Request an Independent Appraisal Review
            </h2>
            <p className="text-ink-black-200 text-lg mb-2 max-w-xl mx-auto">
              TruClaims Appraisal Group is available for amount of loss disputes in Texas and Louisiana.
            </p>
            <p className="text-steel-blue-300 text-sm mb-10">
              Serving Texas & Louisiana · Travel available for CAT events
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary w-full sm:w-auto">
                Request Appraisal
              </Link>
              <Link to="/contact" className="btn-outline border-white/60 text-white hover:bg-white/10 hover:text-white w-full sm:w-auto">
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
