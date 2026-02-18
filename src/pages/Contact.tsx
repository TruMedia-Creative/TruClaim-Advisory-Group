import { motion } from 'framer-motion';
import { Globe, MapPin } from 'lucide-react';
import { brokerages } from '../data/brokerages';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-royal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Contact Us</h1>
          <p className="text-royal-200 text-lg max-w-2xl">
            Get in touch with Insurance Specialty Group or connect directly with one of our member brokerages.
          </p>
        </div>
      </section>

      {/* Brokerage Quick Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Contact Our Brokerages Directly</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {brokerages.map((brokerage) => (
              <motion.div
                key={brokerage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition"
              >
                <h3 className="font-semibold text-royal-800 text-sm">{brokerage.shortName}</h3>
                <p className="text-gray-500 text-xs mb-2 flex items-center gap-1">
                  <MapPin size={12} />
                  {brokerage.city}, {brokerage.province}
                </p>
                <a
                  href={brokerage.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-royal-600 text-sm hover:underline flex items-center gap-1"
                >
                  <Globe size={12} />
                  Visit Website
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
