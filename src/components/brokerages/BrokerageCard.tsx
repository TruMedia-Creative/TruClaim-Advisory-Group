import { motion } from 'framer-motion';
import { MapPin, Calendar, ExternalLink, ChevronRight } from 'lucide-react';
import type { Brokerage } from '../../data/brokerages';

interface BrokerageCardProps {
  brokerage: Brokerage;
  onClick: () => void;
  index: number;
}

export default function BrokerageCard({ brokerage, onClick, index }: BrokerageCardProps) {
  // Calculate years in business
  const yearsInBusiness = new Date().getFullYear() - brokerage.founded;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer group border border-gray-100"
      onClick={onClick}
      id={brokerage.id}
    >
      {/* Logo Section - Larger and more prominent */}
      <div className="h-40 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-8 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-32 h-32 bg-royal-500 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold-500 rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <img
          src={brokerage.logo}
          alt={brokerage.name}
          className="max-h-28 max-w-[85%] object-contain group-hover:scale-110 transition-transform duration-500 relative z-10"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 border-t border-gray-100">
        <h3 className="text-lg font-bold text-royal-800 mb-3 group-hover:text-royal-600 transition-colors leading-tight">
          {brokerage.shortName}
        </h3>

        <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1 text-gold-500" />
            <span>{brokerage.city}, {brokerage.province}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1 text-gold-500" />
            <span>{yearsInBusiness} years</span>
          </div>
        </div>

        {/* Specializations */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {brokerage.specializations.slice(0, 3).map((spec) => (
            <span
              key={spec}
              className="text-xs bg-royal-50 text-royal-700 px-2.5 py-1 rounded-full font-medium"
            >
              {spec}
            </span>
          ))}
          {brokerage.specializations.length > 3 && (
            <span className="text-xs bg-gold-50 text-gold-700 px-2.5 py-1 rounded-full font-medium">
              +{brokerage.specializations.length - 3} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <a
            href={brokerage.website}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center text-sm text-gold-600 hover:text-gold-700 font-semibold transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-1.5" />
            Visit Website
          </a>
          <span className="inline-flex items-center text-sm text-royal-600 font-semibold group-hover:text-royal-800">
            View Profile
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
