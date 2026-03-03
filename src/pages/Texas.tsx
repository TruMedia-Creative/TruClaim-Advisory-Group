import { motion } from 'framer-motion';
import { MapPin, Shield, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageMetadata from '../components/PageMetadata';

const metroAreas = [
  { name: 'Houston Metro', notes: 'Harris, Montgomery, Galveston, and Brazoria Counties' },
  { name: 'Dallas–Fort Worth', notes: 'Collin, Denton, Tarrant, and Dallas Counties' },
  { name: 'Austin & San Antonio', notes: 'I-35 corridor residential and commercial claims' },
  { name: 'Gulf Coast', notes: 'Corpus Christi, Beaumont, Port Arthur, and coastal TWIA zones' },
  { name: 'West & North Texas', notes: 'Lubbock, Amarillo, Wichita Falls, Abilene' },
  { name: 'Rio Grande Valley', notes: 'McAllen, Brownsville, and surrounding communities' },
];

const claimTypes = [
  'Hail and wind-damaged roofing systems',
  'Hurricane and tropical event losses (TWIA / TFPA)',
  'Water, freeze, and burst pipe claims',
  'NFIP flood losses across coastal counties',
  'Commercial property and large-loss valuations',
  'Umpire services for Texas-based disputes',
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'TruClaims Appraisal Group — Texas Insurance Appraisal Services',
  url: 'https://www.truclaimsadvisorygroup.com/texas',
  areaServed: 'Texas',
  serviceType: [
    'Insurance appraisal',
    'Umpire services',
    'Catastrophic loss valuation',
    'NFIP flood claim support',
  ],
  telephone: '+1-903-315-0136',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.linkedin.com/company/truclaims-advisory-group',
  ],
};

export default function Texas() {
  return (
    <div className="min-h-screen bg-parchment-50">
      <PageMetadata
        title="Texas Insurance Appraisal Services"
        description="Independent insurance appraisal, umpire, and catastrophic loss valuation services across Texas — covering Houston, Dallas–Fort Worth, San Antonio, Austin, and the Gulf Coast."
        canonicalPath="/texas"
        structuredData={structuredData}
      />

      <section className="bg-gradient-to-br from-ink-black-800 via-ink-black-900 to-ink-black-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-steel-blue-400 uppercase tracking-wide font-semibold mb-3 flex items-center justify-center gap-2">
              <MapPin size={18} /> Texas Service Area
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Independent Insurance Appraisal in Texas
            </h1>
            <p className="text-ink-black-200 text-lg max-w-3xl mx-auto">
              Serving policyholders, carriers, and counsel across Houston, Dallas–Fort Worth, Austin, San Antonio, the Rio Grande Valley, and the entire Gulf Coast with evidence-based valuations and neutral umpire services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-parchment-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="section-title mb-4">Where We Work Most Often</h2>
            <p className="text-gray-600 mb-6">
              Travel fees are waived inside the highlighted metro areas below. Large-loss and catastrophe deployments are available statewide with rapid mobilization.
            </p>
            <div className="space-y-4">
              {metroAreas.map((area) => (
                <div key={area.name} className="p-4 border border-gray-100 rounded-xl flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-ink-black-800 text-white flex items-center justify-center font-semibold">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-ink-black-800">{area.name}</p>
                    <p className="text-sm text-gray-500">{area.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-ink-black-800 mb-6">Common Claim Types</h3>
            <ul className="space-y-3">
              {claimTypes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="text-steel-blue-500 mt-0.5" size={18} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-3 text-sm text-gray-500">
              <p className="flex items-center gap-2">
                <Shield size={16} className="text-steel-blue-500" />
                Licensed Texas All Lines Adjuster #2532605
              </p>
              <p className="flex items-center gap-2">
                <Users size={16} className="text-steel-blue-500" />
                Available for policyholder, carrier, and umpire engagements
              </p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary flex-1 text-center">
                Request a Texas Appraisal
              </Link>
              <Link to="/services" className="btn-outline flex-1 text-center">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-ink-black-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl font-display font-bold mb-4">Need an Independent Appraiser in Texas?</h2>
            <p className="text-ink-black-200 text-lg mb-8">
              Share your carrier estimate, settlement summary, and claim photos to determine whether the appraisal clause is the correct path. We respond within one business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/process" className="btn-outline">
                Review Our Process
              </Link>
              <Link to="/contact" className="btn-secondary">
                Submit Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
