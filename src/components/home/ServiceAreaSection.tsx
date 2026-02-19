import { motion } from 'framer-motion';
import { MapPin, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceAreas = [
  { region: 'Texas', cities: ['Houston', 'Dallas', 'San Antonio', 'Austin', 'Fort Worth'] },
  { region: 'Louisiana', cities: ['New Orleans', 'Baton Rouge', 'Shreveport'] },
  { region: 'Oklahoma', cities: ['Oklahoma City', 'Tulsa'] },
  { region: 'Arkansas', cities: ['Little Rock', 'Fayetteville'] },
  { region: 'Mississippi', cities: ['Jackson', 'Biloxi', 'Gulfport'] },
];

const serviceTypes = [
  'Residential Property Claims',
  'Commercial Property Claims',
  'Catastrophic Loss Events',
  'Hail & Wind Damage',
  'Flood & Water Damage',
  'Fire & Smoke Damage',
  'Large-Loss Industrial',
  'Disputed Insurance Claims',
];

export default function ServiceAreaSection() {
  return (
    <section id="service-area" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Serving Property Owners, Insurers, and Legal Professionals</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            TruClaim Advisory Group provides independent appraisal and dispute resolution services across residential, commercial, and large-loss claims throughout the Gulf Coast region and beyond.
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
            <h3 className="text-2xl font-bold text-royal-800 mb-6 flex items-center gap-2">
              <MapPin className="text-gold-500" size={24} />
              Primary Service Areas
            </h3>
            <div className="space-y-4">
              {serviceAreas.map((area) => (
                <div key={area.region} className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
                  <h4 className="font-semibold text-royal-800 text-lg mb-2">{area.region}</h4>
                  <p className="text-gray-600 text-sm">{area.cities.join(' · ')}</p>
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
            <h3 className="text-2xl font-bold text-royal-800 mb-6">Types of Claims We Handle</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {serviceTypes.map((type) => (
                <div key={type} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <CheckCircle className="text-gold-500 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700 text-sm">{type}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-royal-800 text-white rounded-lg font-semibold hover:bg-royal-700 transition-colors"
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
