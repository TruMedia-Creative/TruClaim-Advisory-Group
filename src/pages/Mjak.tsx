import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Shield } from 'lucide-react';

const Mjak = () => {
  const appetiteItems = [
    "Hard-to-place commercial risks",
    "Specialty liability programs",
    "Unique property exposures",
    "Excess and surplus lines",
    "Risks declined by standard markets",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-900 via-royal-800 to-royal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 150, damping: 15 }}
              className="inline-block mb-6 relative"
            >
              {/* Animated glow ring */}
              <motion.div
                className="absolute inset-0 bg-gold-500 rounded-full blur-2xl opacity-30"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.img
                src="/logos/MJAK.png"
                alt="M-JAK Insurance Brokerage"
                className="h-20 md:h-24 w-auto mx-auto relative z-10"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">M-JAK</h1>
            <p className="text-royal-200 text-xl max-w-2xl mx-auto">
              ISG's Collectively Owned Managing General Agency
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title mb-6">About M-JAK</h2>
              <p className="text-gray-600 mb-4">
                M-JAK is the collectively owned MGA (Managing General Agency) of the Insurance Specialty Group.
                We provide creative insurance solutions for risks that require specialized expertise and market access.
              </p>
              <p className="text-gray-600 mb-4">
                As an in-house MGA, M-JAK allows ISG brokerages to access unique markets and develop
                custom programs that traditional insurers cannot accommodate.
              </p>
              <p className="text-gray-600">
                Our team works closely with member brokerages to find solutions for hard-to-place risks,
                ensuring clients receive comprehensive coverage regardless of complexity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Lightbulb, title: "Creative Solutions", desc: "Innovative approaches to complex risks" },
                { icon: Shield, title: "In-House Expertise", desc: "Specialized underwriting knowledge" },
                { icon: Target, title: "Market Access", desc: "Connections to specialty markets" },
                { icon: Users, title: "Broker Support", desc: "Direct support for member brokerages" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-5">
                  <item.icon className="text-gold-500 mb-3" size={28} />
                  <h3 className="font-semibold text-royal-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Appetite Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title mb-4">Our Appetite</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              M-JAK specializes in risks that other markets decline. If you have a challenging
              placement, we want to hear about it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appetiteItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-royal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="text-royal-600" size={20} />
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Mjak;
