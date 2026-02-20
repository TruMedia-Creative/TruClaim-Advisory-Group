import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Shield, Building2, Handshake } from 'lucide-react';
import Hero from '../components/home/Hero';
import StatsSection from '../components/home/StatsSection';
import ServiceAreaSection from '../components/home/ServiceAreaSection';

const Home = () => {
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  const values = [
    { icon: Building2, title: "Independent & Neutral", desc: "We serve as independent appraisal professionals, providing objective loss valuations based solely on evidence, policy terms, and industry standards." },
    { icon: Users, title: "Evidence-Based Valuation", desc: "Our appraisal process relies on detailed inspection, documentation, and professional estimating methods to determine accurate repair and replacement costs." },
    { icon: Shield, title: "Dispute Resolution Expertise", desc: "We specialize in resolving complex claim disagreements between insurers and policyholders through the formal appraisal process." },
    { icon: Handshake, title: "Catastrophic Loss Experience", desc: "From severe weather events to major commercial losses, we provide valuation expertise where stakes are high and accuracy matters." },
  ];

  return (
    <div>
      {/* Hero Section with Sun/Water Logo */}
      <Hero />

      {/* Stats Section with 75+ Partners, $600M */}
      <StatsSection />

      {/* Service Area Section */}
      <ServiceAreaSection />

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Why TruClaims Advisory Group?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Independent expertise. Objective valuation. Defensible results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-royal-800 to-royal-600 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="text-gold-400" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-royal-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
