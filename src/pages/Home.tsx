import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Shield, Building2, Handshake, Droplets, FileSearch } from 'lucide-react';
import Hero from '../components/home/Hero';
import StatsSection from '../components/home/StatsSection';
import ServiceAreaSection from '../components/home/ServiceAreaSection';

const Home = () => {
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  const values = [
    { icon: Building2, title: "Independent & Neutral", desc: "We serve both insureds and insurance carriers as independent appraisal professionals. Our sole obligation is to provide an accurate, objective valuation based on evidence, policy terms, and industry standards — never advocacy." },
    { icon: Users, title: "Empathy & Fairness", desc: "We treat every claim with empathy and fairness. Whether you're a homeowner, carrier, or attorney, our goal is to ensure every client feels heard and receives a just, defensible outcome." },
    { icon: Shield, title: "Credentialed & Experienced", desc: "Licensed in Texas and 12 additional states, NFIP certified, State Farm, USAA, and TWIA certified — with 6+ years of CAT and daily claims experience and certified Xactimate expertise." },
    { icon: Handshake, title: "Catastrophe Deployment Ready", desc: "From Hurricane Beryl to Hurricane Ian, we have hands-on experience mobilizing for major CAT events across TX, LA, FL, and beyond — providing accurate scope and valuation when it matters most." },
    { icon: Droplets, title: "NFIP Flood Expertise", desc: "NFIP Flood Certified (#0070011243) with hands-on deployment experience handling residential flood losses under FEMA guidelines, including elevation certificate review, Proof of Loss, and Substantial Damage evaluations." },
    { icon: FileSearch, title: "Preloss Restoration Standard", desc: "We are committed to helping individuals and businesses obtain a fair and just settlement that returns them to their preloss condition. That is the standard we hold every appraisal and award to." },
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
              Independent expertise. Multi-state licensed. NFIP certified. Xactimate proficient.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h3 className="text-xl font-semibold text-ink-black-800 mb-2">{value.title}</h3>
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
