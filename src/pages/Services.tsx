import { motion } from 'framer-motion';
import { Scale, Search, FileText, Gavel, Home, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Scale,
    title: 'Insurance Appraisal',
    description:
      'When you and your insurer disagree on the value of a loss, the appraisal process provides a structured, binding resolution. We serve as your independent appraiser, conducting a thorough, evidence-based evaluation to determine the accurate repair or replacement cost.',
    bullets: [
      'Detailed property inspection and documentation',
      'Professional repair and replacement cost estimates',
      'Coordination with the insurer\'s appraiser',
      'Binding appraisal award through the umpire process',
    ],
  },
  {
    icon: Gavel,
    title: 'Appraisal Umpire Services',
    description:
      'As a neutral umpire, TruClaim Advisory Group resolves disputes between two appraisers who cannot agree on the scope or value of a loss. We bring impartiality, technical expertise, and decisiveness to every umpire engagement.',
    bullets: [
      'Neutral, credentialed umpire services',
      'Review of both appraisers\' submissions',
      'On-site inspection when required',
      'Timely, defensible umpire award issuance',
    ],
  },
  {
    icon: Search,
    title: 'Catastrophic Loss Valuation',
    description:
      'Large-scale disasters demand rapid, accurate assessment. Our team is experienced in mobilizing quickly for hurricane, hail, tornado, and flood events — providing comprehensive loss documentation for both insureds and carriers.',
    bullets: [
      'Rapid deployment to catastrophe zones',
      'Systematic multi-property inspection programs',
      'Drone and aerial inspection capabilities',
      'Detailed scope-of-loss reporting',
    ],
  },
  {
    icon: FileText,
    title: 'Litigation Support & Expert Witness',
    description:
      'For insurance disputes that proceed to litigation, we provide expert witness testimony, coverage analysis support, and written expert reports. Our opinions are grounded in industry standards and withstand rigorous cross-examination.',
    bullets: [
      'Expert witness testimony (deposition & trial)',
      'Written expert reports and declarations',
      'Review and rebuttal of opposing expert opinions',
      'Consultation with attorneys on property loss issues',
    ],
  },
  {
    icon: Home,
    title: 'Residential Property Claims',
    description:
      'From hail-damaged roofing to fire-gutted interiors, we provide independent valuations for all types of residential property losses — ensuring homeowners receive a fair and accurate settlement.',
    bullets: [
      'Single-family homes and condominiums',
      'Wind, hail, fire, water, and mold damage',
      'Accurate Xactimate and Marshall & Swift estimates',
      'Scope of loss reconciliation with insurer',
    ],
  },
  {
    icon: Building2,
    title: 'Commercial Property Claims',
    description:
      'Commercial losses involve complex construction, business interruption considerations, and high-stakes negotiations. We bring the technical depth required to value large-loss commercial claims accurately and defensibly.',
    bullets: [
      'Office, retail, industrial, and multi-family properties',
      'Business interruption and extra expense support',
      'Large-loss and complex structural assessments',
      'Coordination with engineers, contractors, and counsel',
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
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
              Our Services
            </h1>
            <p className="text-royal-200 text-lg max-w-2xl mx-auto">
              Independent, evidence-based appraisal and dispute resolution services for residential, commercial, and catastrophic property losses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-royal-800 to-royal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="text-gold-400" size={26} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-royal-800">{service.title}</h2>
                  </div>
                </div>
                <p className="text-gray-600 mb-5 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-gold-500 font-bold mt-0.5">✓</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-royal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-royal-200 text-lg mb-8 max-w-xl mx-auto">
              Contact us today to discuss your claim and learn how TruClaim Advisory Group can help you reach a fair, defensible resolution.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gold-500 text-royal-900 rounded-lg font-semibold text-lg hover:bg-gold-400 transition-colors"
            >
              Request an Appraisal
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
