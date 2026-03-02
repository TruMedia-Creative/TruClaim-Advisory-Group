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
    { icon: Building2, title: "Independent & Neutral", desc: "We serve both insureds and insurance carriers as independent appraisal professionals, providing objective loss valuations based on evidence, policy terms, and industry standards." },
    { icon: Users, title: "Empathy & Fairness", desc: "We treat every claim with empathy and fairness. Our goal is to ensure every client feels heard and has someone in their corner working with integrity." },
    { icon: Shield, title: "Preloss Restoration", desc: "We are committed to helping individuals and businesses obtain a fair and just settlement to restore them to their preloss condition." },
    { icon: Handshake, title: "Catastrophe Experience", desc: "From Hurricane Beryl to Hurricane Ida, we have hands-on experience mobilizing quickly for major events — providing accurate scope and valuation when it matters most." },
  ];

  return (
    <div>
      {/* Hero Section with Sun/Water Logo */}
      <Hero />

      {/* Service Area Section */}
      <ServiceAreaSection />

      {/* Stats Section with 75+ Partners, $600M */}
      <StatsSection />

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-parchment-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Why TruClaims Appraisal Group?</h2>
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
                className="bg-steel-blue-500 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-ink-black-800 to-ink-black-600 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="text-steel-blue-400" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-white/80">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
