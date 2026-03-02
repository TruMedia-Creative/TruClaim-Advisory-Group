import { motion } from 'framer-motion';
import { Shield, Award, Scale, CheckCircle, MapPin, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const credentials = [
  'Texas All Lines Adjuster License #2532605',
  'Texas LA&H / P&C License #1917567',
  'NFIP Flood Certification #0070011243',
  'Non-Resident Licensed: AL, FL, GA, IN, KY, LA, MI, MN, MS, NC, OK, SC',
  'State Farm Certified – Rope & Harness / Steep & High Roof',
  'USAA Certified Adjuster',
  'TWIA / TFPA Certified',
  'Xactimate Certified Estimator',
  '6+ years CAT & daily claims experience',
  '20+ years of leadership & operations background',
  'Spanish-speaking adjuster',
];

const values = [
  {
    icon: Shield,
    title: 'Independence',
    description:
      'We serve both insureds and insurance carriers as neutral appraisal professionals. Our sole obligation is to provide an accurate, objective valuation — whoever retains us.',
  },
  {
    icon: Scale,
    title: 'Fairness',
    description:
      'We treat every claim with empathy and fairness. Our clients should feel heard and know they have someone in their corner working with integrity to reach a just settlement.',
  },
  {
    icon: Award,
    title: 'Professionalism',
    description:
      'We are licensed in Texas and 12 additional states with carrier certifications from State Farm, USAA, and TWIA. Our Xactimate estimates are detailed, defensible, and built to withstand scrutiny from all parties.',
  },
  {
    icon: CheckCircle,
    title: 'Preloss Restoration',
    description:
      'Our goal is to help every client — individual or business — obtain a fair and just settlement that returns them to their preloss condition. That is the standard we hold ourselves to.',
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

const carriers = [
  'State Farm', 'USAA', 'TWIA', 'Travelers', 'Nationwide',
  'Assurant', 'Homesite', 'American Integrity', 'Germania', 'Standard Casualty',
  'Farmers', 'Foremost', 'Farm Bureau',
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

export default function About() {
  return (
    <div className="min-h-screen bg-parchment-50">
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
              Empathy. Fairness. Integrity.
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
                TruClaims Appraisal Group provides insurance adjusting appraisals and umpiring for individuals and insurance carriers across Texas and Louisiana — with travel available for large-loss events nationwide.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                We were founded on a straightforward commitment: every client should feel heard and have someone in their corner working with fairness and integrity. Whether you are a homeowner who hasn't received a just settlement, a carrier seeking an independent scope of loss, or an attorney navigating a disputed claim, we are here to help.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Our principal, Larryon Truman, is a licensed multi-state adjuster and certified Xactimate estimator with 6+ years of CAT and daily claims experience and 20+ years of leadership and operations background. He holds a rope &amp; harness steep-roof certification and is a Spanish-speaking adjuster — able to serve a broader range of policyholders across Texas and beyond.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our experience spans residential claims, umpire engagements, and catastrophic events including Hurricanes Beryl, Laura, Ian, and Ida. We specialize in hail, wind, water, and NFIP flood losses — and we perform on-site inspections for every engagement.
              </p>
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

      {/* CAT Events & Carriers */}
      <section className="py-20 bg-parchment-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Field Experience</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Deployed across multiple states for major catastrophic events, working with the nation's largest carriers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* CAT Events */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold text-ink-black-800 mb-6 font-display">
                Major CAT Deployments
              </h3>
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
            </motion.div>

            {/* Carriers */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold text-ink-black-800 mb-6 font-display">
                Carriers We've Worked With
              </h3>
              <div className="flex flex-wrap gap-2">
                {carriers.map((carrier) => (
                  <span
                    key={carrier}
                    className="px-3 py-1.5 bg-parchment-100 text-ink-black-700 rounded-lg text-sm font-medium border border-parchment-200"
                  >
                    {carrier}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-4">
                And others across residential, commercial, and NFIP flood lines.
              </p>
            </motion.div>
          </div>
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
              Every engagement is guided by four principles that define how we work and what our clients can expect.
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
              Whether you need an independent appraiser, a neutral umpire, or an estimate review, TruClaims Appraisal Group is ready to assist.
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
