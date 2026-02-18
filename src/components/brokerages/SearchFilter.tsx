import { Search, X, Filter } from 'lucide-react';
import { getAllRegions, getAllSpecializations } from '../../data/brokerages';
import { useState } from 'react';

interface SearchFilterProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedRegion: string;
  onRegionChange: (region: string) => void;
  selectedSpecialization: string;
  onSpecializationChange: (spec: string) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

export default function SearchFilter({
  searchTerm,
  onSearchChange,
  selectedRegion,
  onRegionChange,
  selectedSpecialization,
  onSpecializationChange,
  onClearFilters,
  hasActiveFilters,
}: SearchFilterProps) {
  const [showFilters, setShowFilters] = useState(false);
  const regions = getAllRegions();
  const specializations = getAllSpecializations();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search by brokerage name, location, or specialization..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-transparent"
        />
        {searchTerm && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Filter Toggle for Mobile */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="md:hidden flex items-center gap-2 text-royal-800 font-medium mb-4"
      >
        <Filter className="w-4 h-4" />
        {showFilters ? 'Hide Filters' : 'Show Filters'}
      </button>

      {/* Filters */}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${showFilters ? 'block' : 'hidden md:grid'}`}>
        {/* Region Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
          <select
            value={selectedRegion}
            onChange={(e) => onRegionChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-500 bg-white"
          >
            <option value="">All Regions</option>
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        {/* Specialization Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Specialization</label>
          <select
            value={selectedSpecialization}
            onChange={(e) => onSpecializationChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-500 bg-white"
          >
            <option value="">All Specializations</option>
            {specializations.map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          onClick={onClearFilters}
          className="mt-4 inline-flex items-center gap-2 text-sm text-royal-600 hover:text-royal-800 font-medium"
        >
          <X className="w-4 h-4" />
          Clear all filters
        </button>
      )}
    </div>
  );
}
