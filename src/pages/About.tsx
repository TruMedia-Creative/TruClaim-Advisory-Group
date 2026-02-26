import { motion } from 'framer-motion';
import { Shield, Award, Scale, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const credentials = [
  'Licensed Insurance Adjuster – Property & Casualty',
  'NFIP Certified (National Flood Insurance Program)',
  'State Farm Certified Appraiser',
  'USAA Certified Appraiser',
  'TWIA Certified Appraiser',
  '6+ years of field appraisal experience',
  'Catastrophic Loss Deployment Specialist',
];

const values = [
  {
    icon: Shield,
    title: 'Independence',
    description:
      'We serve both insureds and insurance carriers as neutral appraisal professionals. Our sole obligation is to provide an accurate, objective valuation — whoever retains us.',
  },
  {
    icon: Scale,
    title: 'Fairness',
    description:
      'We treat every claim with empathy and fairness. Our clients should feel heard and know they have someone in their corner working with integrity to reach a just settlement.',
  },
  {
    icon: Award,
    title: 'Professionalism',
    description:
      'We are licensed insurance adjusters with Property & Casualty credentials and carrier certifications including NFIP, State Farm, USAA, and TWIA. Our work withstands scrutiny from all parties.',
  },
  {
    icon: CheckCircle,
    title: 'Preloss Restoration',
    description:
      'Our goal is to help every client — individual or business — obtain a fair and just settlement that returns them to their preloss condition. That is the standard we hold ourselves to.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-parchment-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-ink-black-800 via-ink-black-900 to-ink-black-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              About TruClaims Appraisal Group
            </h1>
            <p className="text-ink-black-200 text-lg max-w-2xl mx-auto">
              Empathy. Fairness. Integrity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-parchment-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-8">
                <img
                  src="/larryon-truman.jpeg"
                  alt="Larryon Truman, Principal Appraiser at TruClaims Appraisal Group"
                  className="w-48 h-48 rounded-2xl object-cover object-top shadow-lg"
                />
                <p className="mt-3 text-sm font-semibold text-ink-black-800">Larryon Truman</p>
                <p className="text-sm text-gray-500">Principal Appraiser</p>
              </div>
              <h2 className="section-title mb-6">Who We Are</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                TruClaims Appraisal Group provides insurance adjusting appraisals and umpiring for individuals and insurance carriers across Texas and Louisiana — with travel available for large-loss events nationwide.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                We were founded on a straightforward commitment: every client should feel heard and have someone in their corner working with fairness and integrity. Whether you are a homeowner who hasn't received a just settlement, a carrier seeking an independent scope of loss, or an attorney navigating a disputed claim, we are here to help.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our experience spans residential claims, umpire engagements, and catastrophic events including Hurricanes Beryl, Laura, Ian, and Ida. We specialize in hail, wind, and water losses — and we perform on-site inspections for every engagement.
              </p>
            </motion.div>

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold text-ink-black-800 mb-6">Credentials & Experience</h3>
              <ul className="space-y-3">
                {credentials.map((cred) => (
                  <li key={cred} className="flex items-start gap-3">
                    <CheckCircle className="text-steel-blue-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700">{cred}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-parchment-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Every engagement is guided by four principles that define how we work and what our clients can expect.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-8 shadow-lg flex gap-6"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-ink-black-800 to-ink-black-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <value.icon className="text-steel-blue-400" size={26} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink-black-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-parchment-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="section-title mb-4">Work With Us</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
              Whether you need an independent appraiser, a neutral umpire, or an estimate review, TruClaims Appraisal Group is ready to assist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="btn-secondary">
                View Our Services
              </Link>
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
