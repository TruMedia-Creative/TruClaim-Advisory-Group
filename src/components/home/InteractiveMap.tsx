import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import { motion } from 'framer-motion';
import { brokerages } from '../../data/brokerages';
import { ExternalLink } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// Custom pulsing marker icon
const createPulsingIcon = (isHovered: boolean) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div class="relative">
        <div class="marker-pin ${isHovered ? 'scale-125' : ''}"></div>
        <div class="absolute inset-0 marker-pin opacity-50" style="animation-delay: 0.5s;"></div>
      </div>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });
};

// Component to handle map bounds
function MapBoundsHandler() {
  const map = useMap();

  useEffect(() => {
    const bounds = L.latLngBounds(brokerages.map(b => b.coordinates));
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [map]);

  return null;
}

// Connection lines between brokerages (creating a network effect)
function NetworkLines() {
  // Create connections (simplified hub-and-spoke pattern)
  const connections: [number, number][][] = [];

  // Connect nearby brokerages to create a network effect
  for (let i = 0; i < brokerages.length; i++) {
    for (let j = i + 1; j < brokerages.length; j++) {
      const dist = Math.sqrt(
        Math.pow(brokerages[i].coordinates[0] - brokerages[j].coordinates[0], 2) +
        Math.pow(brokerages[i].coordinates[1] - brokerages[j].coordinates[1], 2)
      );
      // Connect if within reasonable distance (roughly 3 degrees)
      if (dist < 3) {
        connections.push([
          brokerages[i].coordinates,
          brokerages[j].coordinates
        ]);
      }
    }
  }

  return (
    <>
      {connections.map((line, idx) => (
        <Polyline
          key={idx}
          positions={line}
          pathOptions={{
            color: '#d4af37',
            weight: 2,
            opacity: 0.4,
            dashArray: '10, 10',
            className: 'connection-line'
          }}
        />
      ))}
    </>
  );
}

export default function InteractiveMap() {
  const [hoveredBrokerage, setHoveredBrokerage] = useState<string | null>(null);

  // Center of Eastern Canada - adjusted for better view
  const centerPosition: [number, number] = [44.8, -78];

  return (
    <section id="map-section" className="py-20 bg-gray-50">
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
            TruClaim Appraisal Group provides independent appraisal and dispute resolution services across residential, commercial, and large-loss claims.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <MapContainer
            center={centerPosition}
            zoom={5}
            scrollWheelZoom={false}
            style={{ height: '600px', width: '100%' }}
            className="z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapBoundsHandler />
            <NetworkLines />

            {brokerages.map((brokerage) => (
              <Marker
                key={brokerage.id}
                position={brokerage.coordinates}
                icon={createPulsingIcon(hoveredBrokerage === brokerage.id)}
                eventHandlers={{
                  mouseover: () => setHoveredBrokerage(brokerage.id),
                  mouseout: () => setHoveredBrokerage(null),
                }}
              >
                <Popup>
                  <div className="p-2 min-w-[220px]">
                    <h3 className="font-bold text-royal-800 text-base mb-1 leading-tight">
                      {brokerage.shortName}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Est. {brokerage.founded} • {brokerage.city}, {brokerage.province}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {brokerage.specializations.slice(0, 3).map((spec) => (
                        <span
                          key={spec}
                          className="text-xs bg-royal-100 text-royal-800 px-2 py-0.5 rounded"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`/brokerages#${brokerage.id}`}
                      className="inline-flex items-center text-sm text-gold-600 hover:text-gold-700 font-medium"
                    >
                      View Profile <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          {/* Map Legend */}
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 z-[1000]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 bg-gold-500 rounded-full border-2 border-royal-800" />
              <span className="text-sm text-gray-700">ISG Brokerage</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-gold-500 opacity-60" style={{ borderStyle: 'dashed' }} />
              <span className="text-sm text-gray-700">Network Connection</span>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { value: '11', label: 'Brokerages' },
            { value: '4', label: 'Provinces Served' },
            { value: '950+', label: 'Years Combined Experience' },
            { value: '50+', label: 'Locations' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-royal-800">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
