import { motion } from 'framer-motion';
import { MapPin, Droplets, Layers, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageMetadata, { SITE_URL } from '../components/PageMetadata';
import { PHONE_TEL } from '../lib/contact';

const parishes = [
  'Orleans, Jefferson, Plaquemines, and St. Bernard Parishes',
  'Calcasieu, Cameron, Jeff Davis, and Vermilion Parishes',
  'East Baton Rouge, Ascension, Livingston, and Tangipahoa Parishes',
  'Caddo, Bossier, Ouachita, and Rapides Parishes',
  'Lafayette, Iberia, St. Mary, and St. Landry Parishes',
];

const specialties = [
  'Hurricane and tropical system appraisal (Laura, Delta, Ida)',
  'Commercial large-loss and industrial facilities',
  'Residential hail, wind, and flood disputes',
  'Neutral umpire appointments statewide',
  'NFIP flood claim estimating and Proof of Loss support',
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'TruClaims Advisory Group — Louisiana Insurance Appraisal Services',
  url: `${SITE_URL}/louisiana`,
  areaServed: 'Louisiana',
  serviceType: ['Insurance appraisal', 'Umpire services', 'Flood loss valuation'],
  telephone: PHONE_TEL,
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'LA',
    addressCountry: 'US',
  },
};

export default function Louisiana() {
  return (
    <div className="min-h-screen bg-parchment-50">
      <PageMetadata
        title="Louisiana Insurance Appraisal Services"
        description="Independent insurance appraisal, umpire, and NFIP flood claim support throughout Louisiana — serving New Orleans, Baton Rouge, Lake Charles, Lafayette, and Shreveport."
        canonicalPath="/louisiana"
        keywords="louisiana insurance appraiser, new orleans appraisal services, baton rouge appraisal services, louisiana umpire"
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
              <MapPin size={18} /> Louisiana Service Area
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Insurance Appraisal & Umpire Services in Louisiana
            </h1>
            <p className="text-ink-black-200 text-lg max-w-3xl mx-auto">
              Serving South Louisiana parishes impacted by hurricanes Laura, Delta, Ida, and ongoing
              coastal flood events — as well as North Louisiana hail, wind, and commercial losses.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="section-title mb-4">Priority Parishes</h2>
            <p className="text-gray-600 mb-6">
              Deployment-ready within 24 hours for hurricane or catastrophic declarations; routine
              inspections scheduled weekly across the parishes below.
            </p>
            <ul className="space-y-4">
              {parishes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <MapPin className="text-steel-blue-500 mt-1" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-ink-black-800 mb-6">Louisiana Specialties</h3>
            <ul className="space-y-3 mb-6">
              {specialties.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="text-steel-blue-500 mt-0.5" size={18} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="space-y-3 text-sm text-gray-500">
              <p className="flex items-center gap-2">
                <Droplets size={16} className="text-steel-blue-500" />
                NFIP Flood Certified #0070011243
              </p>
              <p className="flex items-center gap-2">
                <Layers size={16} className="text-steel-blue-500" />
                Rope & harness — steep and high roof inspections
              </p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary flex-1 text-center">
                Submit Louisiana Claim
              </Link>
              <Link to="/process" className="btn-outline flex-1 text-center">
                Understand the Process
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-parchment-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl font-display font-bold mb-4">
              Need an Umpire After a Stalemate?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              TruClaims Advisory Group accepts neutral umpire appointments throughout Louisiana when
              two appraisers cannot agree on the award. Documentation reviews and pre-hearing
              coordination keep the process efficient and defensible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="btn-secondary">
                Review Our Capabilities
              </Link>
              <Link to="/contact" className="btn-primary">
                Request Availability
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
