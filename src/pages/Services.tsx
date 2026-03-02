import { motion } from 'framer-motion';
import { Scale, Search, FileText, Gavel, Home, Building2, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Scale,
    title: 'Insurance Appraisal',
    description:
      'When you and your insurer disagree on the value of a loss, the appraisal process provides a structured, binding resolution. We represent both insureds and carriers as your independent appraiser, conducting a thorough on-site inspection and preparing detailed, defensible Xactimate estimates to determine the accurate repair or replacement cost.',
    bullets: [
      'On-site property inspection and photo documentation',
      'Detailed Xactimate estimates with narrative summaries',
      'Scope comparison and line-item reconciliation',
      'Carrier and insured representation available',
      'Binding appraisal award through the umpire process',
    ],
  },
  {
    icon: Gavel,
    title: 'Appraisal Umpire Services',
    description:
      'As a neutral umpire, TruClaims Appraisal Group resolves disputes between two appraisers who cannot agree on the scope or value of a loss. We bring impartiality, technical expertise, and deep construction knowledge to every umpire engagement — producing clear, defensible written awards.',
    bullets: [
      'Independent and neutral claim evaluation',
      'Scope comparison and line-item reconciliation',
      'Xactimate estimate analysis and validation',
      'On-site inspection when required',
      'Supplement and pricing dispute resolution',
      'Timely, defensible umpire award documentation',
    ],
  },
  {
    icon: Search,
    title: 'Catastrophic Loss Valuation',
    description:
      'We have hands-on deployment experience across major hurricane, hail, wind, and freeze events including Hurricanes Beryl, Laura, Ian, Ida, and Isaias. We mobilize quickly for CAT surges — providing systematic, high-volume loss documentation and defensible Xactimate estimates for both insureds and carriers.',
    bullets: [
      'Rapid deployment to catastrophe zones',
      'Wind, hail, hurricane, freeze, and water damage expertise',
      'Systematic multi-property inspection programs',
      'High-volume CAT file management',
      'Detailed scope-of-loss reporting and supplements',
      'Carrier compliance and SLA management',
    ],
  },
  {
    icon: Droplets,
    title: 'NFIP Flood Claims',
    description:
      'We are NFIP Flood Certified (#0070011243) with hands-on deployment experience handling residential flood losses under FEMA guidelines. From elevation certificate review to Proof of Loss documentation, we bring the technical depth required for accurate NFIP flood claim resolution.',
    bullets: [
      'NFIP residential flood claims — building and contents',
      'FEMA guidelines compliance and Proof of Loss review',
      'Elevation certificate review and flood zone analysis',
      'Substantial damage evaluation and ICC awareness',
      'Moisture mapping and scope documentation',
      'Xactimate flood estimating and RAPS reporting',
    ],
  },
  {
    icon: FileText,
    title: 'Estimate Review',
    description:
      'We review existing contractor estimates and insurance settlements to identify deficiencies, missed line items, or undervalued repairs. Our independent Xactimate review helps ensure the scope of loss is complete and accurate before any appraisal is filed.',
    bullets: [
      'Review of carrier\'s scope, settlement, and pricing',
      'Xactimate estimate validation and gap analysis',
      'Review of contractor estimates for completeness',
      'Identification of omissions and undervalued repairs',
      'Recommendations to proceed with appraisal if warranted',
    ],
  },
  {
    icon: Home,
    title: 'Residential Property Claims',
    description:
      'Residential claims are our primary focus. From hail-damaged roofing to water-damaged interiors, we provide independent valuations for all types of residential property losses. Our steep-roof rope &amp; harness certification means we can inspect what others cannot — ensuring a complete scope every time.',
    bullets: [
      'Single-family homes and condominiums',
      'Wind, hail, hurricane, freeze, fire, and water damage',
      'Steep and high-roof inspections (rope & harness certified)',
      'On-site inspection for every engagement',
      'Scope of loss reconciliation with insurer',
    ],
  },
  {
    icon: Building2,
    title: 'Commercial Property Claims',
    description:
      'Commercial losses involve complex construction considerations and high-stakes negotiations. We bring the technical depth — backed by 20+ years of construction and project management experience — required to value commercial claims accurately.',
    bullets: [
      'Office, retail, industrial, and multi-family properties',
      'Wind, hail, water, and flood damage',
      'Large-loss and complex structural assessments',
      'Coordination with contractors, carriers, and counsel',
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-parchment-100">
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
              Our Services
            </h1>
            <p className="text-ink-black-200 text-lg max-w-2xl mx-auto">
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
                  <div className="w-14 h-14 bg-gradient-to-br from-ink-black-800 to-ink-black-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="text-steel-blue-400" size={26} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-ink-black-800">{service.title}</h2>
                  </div>
                </div>
                <p className="text-gray-600 mb-5 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-steel-blue-500 font-bold mt-0.5">✓</span>
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
      <section className="py-16 bg-ink-black-800 text-white">
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
            <p className="text-ink-black-200 text-lg mb-8 max-w-xl mx-auto">
              Contact us today to discuss your claim and learn how TruClaims Appraisal Group can help you reach a fair, just settlement.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-steel-blue-500 text-ink-black-900 rounded-lg font-semibold text-lg hover:bg-steel-blue-400 transition-colors"
            >
              Request an Appraisal
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
