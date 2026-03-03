import { motion } from 'framer-motion';
import { MapPin, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceAreas = [
  {
    region: 'Texas',
    cities: [
      'Houston', 'Dallas–Fort Worth', 'San Antonio', 'Austin', 'Corpus Christi',
      'Beaumont', 'Port Arthur', 'Lubbock', 'McAllen', 'El Paso',
    ],
    cta: { label: 'Texas Coverage Details', href: '/texas' },
  },
  {
    region: 'Louisiana',
    cities: [
      'New Orleans', 'Baton Rouge', 'Lake Charles', 'Lafayette', 'Shreveport',
      'Metairie', 'Kenner', 'Bossier City', 'Houma', 'Monroe',
    ],
    cta: { label: 'Louisiana Coverage Details', href: '/louisiana' },
  },
];

const serviceTypes = [
  'Residential Property Claims',
  'Commercial Property Claims',
  'Catastrophic Loss Events',
  'Hail & Wind Damage',
  'Flood & Water Damage',
  'Fire & Smoke Damage',
  'Estimate Review',
  'Disputed Insurance Claims',
];

export default function ServiceAreaSection() {
  return (
    <section id="service-area" className="py-20 bg-parchment-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Independent Appraisal Services for Policyholders and Carriers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            TruClaims Appraisal Group provides independent insurance appraisal and umpire services across Texas and Louisiana, with travel available nationwide for large-loss and catastrophic events.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Service Areas */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-ink-black-800 mb-6 flex items-center gap-2">
              <MapPin className="text-steel-blue-500" size={24} />
              Primary Service Areas
            </h3>
            <div className="space-y-4">
              {serviceAreas.map((area) => (
                <div key={area.region} className="bg-white rounded-xl p-5 shadow-md border border-gray-100 space-y-2">
                  <h4 className="font-semibold text-ink-black-800 text-lg mb-2">{area.region}</h4>
                  <p className="text-gray-600 text-sm">{area.cities.join(' · ')}</p>
                  {area.cta && (
                    <Link to={area.cta.href} className="text-sm font-semibold text-steel-blue-600 hover:text-steel-blue-500">
                      {area.cta.label} →
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-4 italic">
              * Travel available for large-loss and catastrophic events nationwide.
            </p>
          </motion.div>

          {/* Claim Types */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-ink-black-800 mb-6">Types of Claims We Handle</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {serviceTypes.map((type) => (
                <div key={type} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <CheckCircle className="text-steel-blue-500 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700 text-sm">{type}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-ink-black-800 text-white rounded-lg font-semibold hover:bg-ink-black-700 transition-colors"
              >
                Request Appraisal Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
