import { motion } from 'framer-motion';
import { Shield, Users, Heart, Scale, Building2, Handshake, TrendingUp, CheckCircle } from 'lucide-react';

const philosophyPoints = [
  {
    icon: Scale,
    title: 'Independence Equals Unbiased Advocacy',
    description: 'When you partner with an independent brokerage, you can be sure that your broker is acting in your best interest—not working behind the scenes to prioritize certain carriers. Independent brokers have access to multiple carriers, allowing them to bring you true choice.',
  },
  {
    icon: Shield,
    title: 'No Conflicts of Interest',
    description: 'When an insurance company owns a brokerage, there is always the question of whose interest comes first. Independent brokers don\'t have these inherent conflicts. They\'re free to stand by your side and work for you.',
  },
  {
    icon: Heart,
    title: 'Community-First Approach',
    description: 'While private equity firms focus on generating returns, independent brokerages are rooted in the communities they serve. We\'re not beholden to shareholders; we\'re accountable to our clients.',
  },
  {
    icon: Users,
    title: 'Personal Relationships',
    description: 'There\'s something to be said about the difference in service when you can pick up the phone and talk to someone who knows your situation. It\'s that level of familiarity and care that sets family-run independent brokerages apart.',
  },
];

const consolidationFacts = [
  'In 2022 alone, Ontario saw 48 brokerage transactions—a 60% increase over the previous year',
  'Large regional brokerages may look independent but are often backed by insurance companies',
  '83% of customers prefer interacting with a human agent rather than navigating automated systems',
  'Independent brokers often offer the same products at the same price—or better—with superior service',
];

export default function Philosophy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-royal-800 via-royal-900 to-royal-950 py-24 relative overflow-hidden">
        {/* Sun rays background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]">
            <div className="absolute inset-0" style={{
              background: 'radial-gradient(ellipse at center top, rgba(212,175,55,0.4) 0%, transparent 70%)',
            }} />
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute top-0 left-1/2 h-full w-1 bg-gradient-to-b from-gold-500/30 to-transparent origin-top"
                style={{ transform: `translateX(-50%) rotate(${i * 15 - 82.5}deg)` }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Our Philosophy
            </h1>
            <p className="text-xl md:text-2xl text-gold-400 mb-4 font-medium">
              Why Independence Matters
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              In an era of accelerating mergers and acquisitions, staying independent isn't just
              about business—it's about doing what's right for our clients, our community, and our future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">The Changing Landscape</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Consolidation is reshaping the insurance industry. For consumers, it's increasingly
              difficult to know who's really advocating for their best interests.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {consolidationFacts.map((fact, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-gold-500"
              >
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{fact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Points */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">What We Believe</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              The personalized service, unbiased advice, and genuine community connection you receive
              from an independent brokerage is something no consolidated entity can replicate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophyPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-royal-100 rounded-xl flex-shrink-0">
                    <point.icon className="w-8 h-8 text-royal-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-royal-800 mb-3">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The ISG Difference */}
      <section className="py-20 bg-gradient-to-br from-royal-800 to-royal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">The ISG Difference</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our 11 member brokerages share these core values while maintaining their unique identities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: 'Locally Owned',
                description: 'Each brokerage is independently owned and operated by local families who are invested in their communities.',
              },
              {
                icon: Handshake,
                title: 'Client-First Service',
                description: 'You\'re not just another policy number—you\'re a valued member of our community who deserves personalized attention.',
              },
              {
                icon: CheckCircle,
                title: 'True Choice',
                description: 'Access to 75+ insurance carriers means we find the right coverage for you, not the right sale for us.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-500 rounded-2xl mb-4">
                  <item.icon className="w-8 h-8 text-royal-900" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">The Choice Is Yours</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto mt-4">
              Choosing an independent insurance broker is about more than just buying a policy—it's
              about investing in your community and in a relationship built on trust. When you choose
              an ISG brokerage, you choose a partner who will be there for you when it matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/brokerages" className="btn-secondary">
                Find Your Local Brokerage
              </a>
              <a href="/contact" className="btn-primary">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
