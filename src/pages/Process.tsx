import { motion } from 'framer-motion';
import { FileText, Search, ClipboardList, Scale, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Send Your Claim Details',
    description:
      'Share your insurance settlement or estimate and any photos or documents you already have so we can understand the situation quickly.',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Initial Scope Review',
    description:
      'We review the overall scope of loss and look for gaps, omissions, or inconsistencies in the carrier\'s or contractor\'s numbers.',
  },
  {
    number: '03',
    icon: Search,
    title: 'On-Site Inspection',
    description:
      'We schedule and complete an on-site inspection to document the loss and confirm what\'s required to restore the property properly.',
  },
  {
    number: '04',
    icon: Scale,
    title: 'Appraisal & Negotiation',
    description:
      'We prepare our appraisal position and work through the appraisal process to reach an agreed award — or proceed to an umpire if needed.',
  },
  {
    number: '05',
    icon: CheckCircle,
    title: 'Award Finalized',
    description:
      'Once the award is set, you\'ll have a clear, defensible outcome you can use to move the claim toward resolution and settlement.',
  },
];

const needItems = [
  'Insurance estimate / settlement documents (carrier scope, payment summary, etc.)',
  'Photos and/or videos of the damage (before/after if you have them)',
  'Any contractor estimates you\'ve received (if applicable)',
  'Your signed contract/authorization to proceed with appraisal services',
];

const nextSteps = [
  'We confirm we have the basics',
  'We schedule a quick call or inspection (depending on the claim)',
  'We tell you, plainly, whether appraisal makes sense for your situation and what the next step is',
];

export default function Process() {
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
              The Appraisal Process
            </h1>
            <p className="text-ink-black-200 text-lg max-w-2xl mx-auto">
              A clear, step-by-step walkthrough of how we take your claim from initial review to a
              finalized, defensible award.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-parchment-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">How the Appraisal Process Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              From the moment you reach out to the day your award is finalized, here is exactly what
              to expect.
            </p>
          </motion.div>

          <div className="space-y-8">
            {steps.map((step) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex gap-6 items-start"
                >
                  {/* Step number + icon */}
                  <div className="flex flex-col items-center gap-2 flex-shrink-0">
                    <span className="text-4xl font-display font-bold text-ink-black-200 leading-none">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 bg-gradient-to-br from-ink-black-800 to-ink-black-600 rounded-xl flex items-center justify-center">
                      <step.icon className="text-steel-blue-400" size={22} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="text-xl font-bold text-ink-black-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* What We Need + What Happens Next */}
      <section className="py-20 bg-parchment-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* What We Need */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-ink-black-800 mb-6 font-display">
                What We Need to Get Started
              </h2>
              <ul className="space-y-4">
                {needItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="text-steel-blue-500 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What Happens After */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-ink-black-800 mb-6 font-display">
                What Happens After You Submit
              </h2>
              <ul className="space-y-4">
                {nextSteps.map((item, index) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-ink-black-800 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="py-16 bg-ink-black-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">
              The Short Version
            </h2>
            <p className="text-ink-black-200">
              Four steps from first contact to final settlement.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {['Submit docs + photos', 'Review scope & gaps', 'On-site inspection', 'Appraisal to award to settlement'].map(
              (label, index) => (
                <motion.div
                  key={label}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                  className="flex items-center gap-3"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-steel-blue-500 text-ink-black-900 flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-sm text-ink-black-200 mt-2 text-center max-w-[100px]">
                      {label}
                    </span>
                  </div>
                  {index < 3 && (
                    <ArrowRight className="text-ink-black-400 flex-shrink-0 hidden sm:block mb-5" size={20} />
                  )}
                </motion.div>
              )
            )}
          </motion.div>
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
            <h2 className="section-title mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
              Submit your claim details and we'll let you know quickly whether appraisal is the right
              path — and exactly what the next step is.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="btn-outline">
                View Our Services
              </Link>
              <Link to="/contact" className="btn-primary">
                Request an Appraisal
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
