import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { brokerages } from '../data/brokerages';
import type { Brokerage } from '../data/brokerages';
import { BrokerageCard, SearchFilter, DetailModal } from '../components/brokerages';

export default function Brokerages() {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [selectedBrokerage, setSelectedBrokerage] = useState<Brokerage | null>(null);

  // Handle URL hash for direct linking to a brokerage
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const brokerage = brokerages.find(b => b.id === hash);
      if (brokerage) {
        setSelectedBrokerage(brokerage);
      }
    }
  }, [location.hash]);

  const filteredBrokerages = useMemo(() => {
    return brokerages.filter((brokerage) => {
      const matchesSearch =
        searchTerm === '' ||
        brokerage.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        brokerage.shortName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        brokerage.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        brokerage.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
        brokerage.specializations.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesRegion = selectedRegion === '' || brokerage.region === selectedRegion;
      const matchesSpecialization =
        selectedSpecialization === '' ||
        brokerage.specializations.includes(selectedSpecialization);

      return matchesSearch && matchesRegion && matchesSpecialization;
    });
  }, [searchTerm, selectedRegion, selectedSpecialization]);

  const hasActiveFilters = searchTerm !== '' || selectedRegion !== '' || selectedSpecialization !== '';

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedRegion('');
    setSelectedSpecialization('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-royal-800 to-royal-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 font-display"
          >
            Our Brokerages
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            11 independently owned insurance brokerages across Eastern Canada,
            each with unique expertise and deep local roots.
          </motion.p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <SearchFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedRegion={selectedRegion}
          onRegionChange={setSelectedRegion}
          selectedSpecialization={selectedSpecialization}
          onSpecializationChange={setSelectedSpecialization}
          onClearFilters={clearFilters}
          hasActiveFilters={hasActiveFilters}
        />
      </section>

      {/* Brokerages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredBrokerages.length > 0 ? (
          <>
            <p className="text-gray-600 mb-6">
              Showing {filteredBrokerages.length} of {brokerages.length} brokerages
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBrokerages.map((brokerage, index) => (
                <BrokerageCard
                  key={brokerage.id}
                  brokerage={brokerage}
                  onClick={() => setSelectedBrokerage(brokerage)}
                  index={index}
                />
              ))}
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-500 text-lg mb-4">
              No brokerages match your search criteria.
            </p>
            <button
              onClick={clearFilters}
              className="text-royal-600 hover:text-royal-800 font-medium"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </section>

      {/* Detail Modal */}
      {selectedBrokerage && (
        <DetailModal
          brokerage={selectedBrokerage}
          onClose={() => setSelectedBrokerage(null)}
        />
      )}
    </div>
  );
}
