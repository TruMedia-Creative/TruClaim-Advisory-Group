import { motion } from 'framer-motion';
import { Shield, Award, Scale, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const credentials = [
  'Certified Appraiser – Property & Casualty',
  'Member, National Association of Public Insurance Adjusters (NAPIA)',
  '20+ years of field appraisal experience',
  'Qualified Expert Witness – State & Federal Courts',
  'Xactimate Certified Estimator',
  'Catastrophic Loss Deployment Specialist',
];

const values = [
  {
    icon: Shield,
    title: 'Independence',
    description:
      'We have no financial relationship with insurance companies. Our sole obligation is to provide an accurate, objective valuation — whoever retains us.',
  },
  {
    icon: Scale,
    title: 'Objectivity',
    description:
      'Every appraisal is grounded in verifiable evidence: inspection findings, industry pricing databases, and applicable policy language. Our conclusions are defensible at every stage.',
  },
  {
    icon: Award,
    title: 'Professionalism',
    description:
      'We maintain the highest ethical standards in every engagement. Our written reports are clear, well-documented, and designed to withstand scrutiny from all parties.',
  },
  {
    icon: CheckCircle,
    title: 'Accuracy',
    description:
      'We take the time to properly scope and value each loss. Accurate results protect policyholders, reduce litigation, and support fair claim resolution.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-royal-800 via-royal-900 to-royal-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              About TruClaim Advisory Group
            </h1>
            <p className="text-royal-200 text-lg max-w-2xl mx-auto">
              Independent. Objective. Evidence-based.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="section-title mb-6">Who We Are</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                TruClaim Advisory Group is an independent insurance appraisal and catastrophic loss valuation firm serving property owners, insurance carriers, and legal professionals across the Gulf Coast region and beyond.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                We were founded on a simple principle: every property loss deserves an accurate, unbiased valuation. Too often, the appraisal process is rushed, politically influenced, or conducted by parties with conflicting interests. We exist to change that.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you are a homeowner disputing a claim, an insurer seeking an independent scope of loss, or an attorney preparing for litigation, TruClaim Advisory Group delivers the reliable, defensible valuations your case depends on.
              </p>
            </motion.div>

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold text-royal-800 mb-6">Credentials & Experience</h3>
              <ul className="space-y-3">
                {credentials.map((cred) => (
                  <li key={cred} className="flex items-start gap-3">
                    <CheckCircle className="text-gold-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700">{cred}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
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
              Every engagement is guided by four principles that define how we work and what our clients can expect from us.
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
                <div className="w-14 h-14 bg-gradient-to-br from-royal-800 to-royal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <value.icon className="text-gold-400" size={26} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-royal-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="section-title mb-4">Work With Us</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
              Whether you need an independent appraiser, a neutral umpire, or expert witness support, TruClaim Advisory Group is ready to assist.
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
