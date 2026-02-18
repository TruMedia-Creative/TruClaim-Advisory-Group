import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Mail, Globe, Award, Target, Heart, History } from 'lucide-react';
import type { Brokerage } from '../../data/brokerages';

interface DetailModalProps {
  brokerage: Brokerage | null;
  onClose: () => void;
}

export default function DetailModal({ brokerage, onClose }: DetailModalProps) {
  if (!brokerage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b z-10">
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center gap-4">
                <img
                  src={brokerage.logo}
                  alt={brokerage.name}
                  className="h-16 w-auto object-contain"
                />
                <div>
                  <h2 className="text-2xl font-bold text-royal-800">{brokerage.name}</h2>
                  <p className="text-gray-500">Est. {brokerage.founded} • {brokerage.region}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
          </div>

          <div className="p-6">
            {/* Overview */}
            <section className="mb-8">
              <h3 className="text-lg font-semibold text-royal-800 mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-gold-500" />
                About
              </h3>
              <p className="text-gray-600 leading-relaxed">{brokerage.overview}</p>
            </section>

            {/* Mission, Vision, Values */}
            {(brokerage.mission || brokerage.vision || brokerage.values) && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {brokerage.mission && (
                  <div className="bg-royal-50 rounded-xl p-4">
                    <h4 className="font-semibold text-royal-800 mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Mission
                    </h4>
                    <p className="text-sm text-gray-600">{brokerage.mission}</p>
                  </div>
                )}
                {brokerage.vision && (
                  <div className="bg-gold-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gold-700 mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Vision
                    </h4>
                    <p className="text-sm text-gray-600">{brokerage.vision}</p>
                  </div>
                )}
                {brokerage.values && (
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      Values
                    </h4>
                    <ul className="text-sm text-gray-600">
                      {brokerage.values.map((value, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                          {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Specializations */}
            <section className="mb-8">
              <h3 className="text-lg font-semibold text-royal-800 mb-3">Specializations</h3>
              <div className="flex flex-wrap gap-2">
                {brokerage.specializations.map((spec) => (
                  <span
                    key={spec}
                    className="bg-royal-100 text-royal-800 px-3 py-1.5 rounded-full text-sm font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </section>

            {/* Locations */}
            <section className="mb-8">
              <h3 className="text-lg font-semibold text-royal-800 mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gold-500" />
                Areas Served
              </h3>
              <div className="flex flex-wrap gap-2">
                {brokerage.locations.map((location) => (
                  <span
                    key={location}
                    className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </section>

            {/* Milestones */}
            {brokerage.milestones && brokerage.milestones.length > 0 && (
              <section className="mb-8">
                <h3 className="text-lg font-semibold text-royal-800 mb-3 flex items-center gap-2">
                  <History className="w-5 h-5 text-gold-500" />
                  Key Milestones
                </h3>
                <div className="space-y-3">
                  {brokerage.milestones.map((milestone, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <span className="text-sm font-bold text-gold-600 whitespace-nowrap">
                        {milestone.year}
                      </span>
                      <div className="flex-1 pb-3 border-b border-gray-100 last:border-0">
                        <p className="text-gray-600">{milestone.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Contact Information */}
            <section className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-royal-800 mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`mailto:${brokerage.email}`}
                  className="flex items-center gap-3 text-gray-600 hover:text-royal-800 transition-colors"
                >
                  <Mail className="w-5 h-5 text-gold-500" />
                  <span>{brokerage.email}</span>
                </a>
                <a
                  href={brokerage.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-royal-800 transition-colors"
                >
                  <Globe className="w-5 h-5 text-gold-500" />
                  <span>Visit Website</span>
                </a>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-gold-500" />
                  <span>{brokerage.city}, {brokerage.province}</span>
                </div>
              </div>
            </section>
          </div>

          {/* Footer Actions */}
          <div className="sticky bottom-0 bg-white border-t p-4 flex justify-end gap-4">
            <button onClick={onClose} className="px-6 py-2 text-gray-600 hover:text-gray-800 font-medium">
              Close
            </button>
            <a
              href={brokerage.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Visit Website
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
