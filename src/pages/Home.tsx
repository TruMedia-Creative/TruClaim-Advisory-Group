import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Users,
  Shield,
  Building2,
  Handshake,
  Droplets,
  FileSearch,
  HelpCircle,
  UserCheck,
  ChevronDown,
  Quote,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import ServiceAreaSection from '../components/home/ServiceAreaSection';
import CarrierLogoGrid from '../components/home/CarrierLogoGrid';
import PageMetadata from '../components/PageMetadata';

const values = [
  {
    icon: Building2,
    title: 'Independent & Neutral',
    desc: 'TruClaim Advisory Group serves both policyholders and insurance carriers as an independent insurance appraiser. Our obligation is to provide an accurate, objective valuation based on evidence, policy terms, and industry standards — not advocacy.',
  },
  {
    icon: Shield,
    title: 'Evidence-Based Methodology',
    desc: 'Every appraisal is grounded in on-site inspection, photo documentation, and detailed Xactimate estimates. Our valuations are defensible, policy-consistent, and built to withstand scrutiny from all parties.',
  },
  {
    icon: Handshake,
    title: 'Credentialed & Licensed',
    desc: 'Licensed in Texas and 12 additional states, NFIP certified, State Farm, USAA, and TWIA certified — with extensive CAT and daily claims experience.',
  },
  {
    icon: Users,
    title: 'Catastrophe Deployment Experience',
    desc: 'From Hurricane Beryl to Hurricane Ian, TruClaim Advisory Group has direct deployment experience across major CAT events in TX, LA, FL, and beyond — providing systematic scope and valuation under surge conditions.',
  },
  {
    icon: Droplets,
    title: 'NFIP Flood Expertise',
    desc: 'NFIP Flood Certified (#0070011243) with deployment experience handling residential flood losses under FEMA guidelines, including elevation certificate review, Proof of Loss, and Substantial Damage evaluations.',
  },
  {
    icon: FileSearch,
    title: 'Preloss Restoration Standard',
    desc: 'The appraisal process is designed to restore the insured property to its preloss condition. That is the valuation standard applied to every inspection, estimate, and award.',
  },
];

const claimPainPoints = [
  'Is my scope of loss incomplete or undervalued?',
  'Are there disagreements about causation, matching, or the appropriate repair methodology?',
  'Are there delayed supplements or settlement timelines that have left my property in limbo?',
  'Why is collaboration between myself, the carrier, and contractors strained on-site?',
];

const faqItems = [
  {
    question: 'When should I invoke the appraisal clause?',
    answer:
      'Invoke appraisal after you have a written carrier estimate or settlement that you believe is inaccurate. The clause addresses the amount of loss only, so confirm coverage issues are resolved first and then submit your documentation for an independent review.',
  },
  {
    question: 'Do you serve both policyholders and insurance carriers?',
    answer:
      'Yes. TruClaim Advisory Group is retained by policyholders, carriers, attorneys, and as a neutral umpire. The same inspection methodology and valuation standard apply regardless of who engages us.',
  },
  {
    question: 'What documentation should I send with my request?',
    answer:
      'Share your carrier scope or settlement summary, any contractor estimates, claim photos, and correspondence that outlines the disputed items. This allows us to confirm eligibility and prepare for the on-site inspection.',
  },
  {
    question: 'How long does the appraisal process take?',
    answer:
      'Timeline varies based on property complexity, scheduling availability, and the responsiveness of all parties. After receiving your documentation, we typically complete an initial review within 5–7 business days and coordinate the on-site inspection shortly thereafter.',
  },
  {
    question: 'What states do you operate in?',
    answer:
      'TruClaim Advisory Group is based in Texas and maintains primary service coverage in Texas and Louisiana. We are also licensed in 12 additional states, enabling multi-state CAT deployment and appraisal engagements beyond the Gulf Coast region.',
  },
];

const testimonials = [
  {
    quote:
      'TruClaim Advisory Group provided an objective, well-documented appraisal that held up through the entire process. The estimate was thorough and the methodology was clearly explained at every step.',
    name: 'Commercial Property Owner',
    location: 'Houston, TX',
  },
  {
    quote:
      'After months of back-and-forth with my carrier, engaging an independent appraiser was the right move. The process was professional and the final award accurately reflected the scope of our loss.',
    name: 'Residential Policyholder',
    location: 'Beaumont, TX',
  },
  {
    quote:
      'We retained TruClaim Advisory Group as our umpire and appreciated their impartiality. They reviewed both estimates carefully and delivered a well-reasoned award that both appraisers could stand behind.',
    name: 'Insurance Carrier Representative',
    location: 'Baton Rouge, LA',
  },
];

const homeStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'TruClaim Advisory Group',
    url: 'https://www.truclaimsadvisorygroup.com/',
    description:
      'Independent insurance appraisal, umpire, and catastrophic loss valuation services for policyholders and carriers across Texas and Louisiana.',
    areaServed: ['Texas', 'Louisiana'],
    telephone: '+1-903-315-0136',
    email: 'info@truclaimsadvisorygroup.com',
    sameAs: ['https://www.linkedin.com/company/truclaims-advisory-group'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lumberton',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    founder: {
      '@type': 'Person',
      name: 'Larryon Truman',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  },
];

const Home = () => {
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: '-100px' });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <PageMetadata
        title="Independent Insurance Appraisal & Umpire Services"
        description="Independent, evidence-based insurance appraisal, umpire, and catastrophic loss valuation services for policyholders, carriers, and attorneys across Texas and Louisiana."
        canonicalPath="/"
        keywords="insurance appraisal texas, insurance appraisal louisiana, umpire services, catastrophe loss valuation, independent appraiser"
        structuredData={homeStructuredData}
      />
      {/* Hero Section */}
      <Hero />

      {/* When a Claim Doesn't Feel Right */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4 }}
          >
            <HelpCircle className="mx-auto text-steel-blue-500 mb-4" size={36} />
            <h2 className="section-title mb-4">When a Claim Doesn't Feel Right...</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              After a catastrophic event or significant property loss, the last thing you expect is
              to feel unheard. Yet many policyholders, contractors and even carriers find themselves
              in disagreement over the scope and value of a claim with no clear path to resolution.
              <br />
              You may find yourself asking:
            </p>
            <ul className="grid gap-4 sm:grid-cols-2 text-left my-8">
              {claimPainPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 p-4 rounded-2xl border border-parchment-200 bg-parchment-50 shadow-sm"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-steel-blue-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              When estimates do not align, restoration stalls and properties remain short of their
              preloss condition.
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed">
              You deserve a process that is structured, professional, and fair.
            </p>
            <h2 className="section-title mb-4">A Structured Path to Fair Resolution</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              TruClaim Advisory Group provides neutral, integrity-driven insurance appraisal and
              umpire services across Texas and Louisiana.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We don’t advocate. We don’t escalate unnecessarily. We evaluate. Through detailed
              estimate review, on-site inspection, and measured negotiation, we help both sides
              arrive at a fair and equitable settlement. Our objective is simple: Restore the
              property to pre-loss condition, fairly and professionally.
            </p>
            <div className="mt-8">
              <Link
                to="/services"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Learn About Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Area Section */}
      <ServiceAreaSection />
      {/* Who We Serve */}
      {/* Carrier Logo Grid */}
      <CarrierLogoGrid />
      <section className="py-20 bg-parchment-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <UserCheck className="mx-auto text-steel-blue-500 mb-4" size={36} />
            <h2 className="section-title mb-4">Who We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              As an independent insurance appraiser and umpire, TruClaim Advisory Group maintains
              strict neutrality. We serve both sides of the appraisal process with the same
              procedural discipline and evidentiary standards.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold text-ink-black-800 mb-4">For Policyholders</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                If your insurance carrier has issued a settlement you believe is incomplete or
                inaccurate, invoking the appraisal clause provides a policy-prescribed path to a
                binding resolution. TruClaim Advisory Group conducts an independent on-site
                inspection, prepares a detailed Xactimate estimate, and participates in the
                appraisal process as your appointed independent appraiser.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We serve residential and commercial policyholders across Texas and Louisiana —
                including those with hail, wind, hurricane, flood, and fire losses.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold text-ink-black-800 mb-4">For Insurance Carriers</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Insurance carriers require independent appraisers who understand policy language,
                construction methodology, and the procedural framework of the appraisal clause.
                TruClaim Advisory Group provides carriers with accurate, defensible Xactimate
                estimates and unbiased field documentation — supporting a fair and efficient
                appraisal process.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our umpire services are also available to facilitate resolution when two appointed
                appraisers reach an impasse on scope or value.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Stats Section */}
      {/* <StatsSection /> */}

      {/* Testimonials Section */}
      <section className="py-20 bg-parchment-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <Quote className="mx-auto text-steel-blue-500 mb-4" size={36} />
            <h2 className="section-title mb-4">What Clients Are Saying</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Independent, evidence-based appraisals that hold up — for policyholders, carriers, and
              attorneys across Texas and Louisiana.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                className="bg-white rounded-2xl p-8 shadow-lg flex flex-col"
              >
                <Quote className="text-steel-blue-400 mb-4 flex-shrink-0" size={24} />
                <p className="text-gray-700 leading-relaxed text-sm flex-grow italic">
                  "{t.quote}"
                </p>
                <div className="mt-6 pt-4 border-t border-parchment-200">
                  <p className="font-semibold text-ink-black-800 text-sm">{t.name}</p>
                  <p className="text-steel-blue-500 text-xs mt-0.5">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="section-title mb-4">Insurance Appraisal FAQ</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about invoking appraisal, required documentation,
              and how neutrality is maintained throughout the process.
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-2xl border border-parchment-200 bg-parchment-50 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  <span className="text-base font-semibold text-ink-black-800 leading-snug">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0 text-steel-blue-500"
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/process" className="btn-outline mr-0 sm:mr-4 inline-flex mb-4 sm:mb-0">
              Understand the Appraisal Clause
            </Link>
            <Link to="/contact" className="btn-primary inline-flex">
              Start Review
            </Link>
          </div>
        </div>
      </section>

      {/* Why TruClaim Advisory */}
      <section ref={valuesRef} className="py-20 bg-parchment-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Why TruClaim Advisory Group?</h2>
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
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-white/80">{value.desc}</p>
              </motion.div>
            ))}
          </div>
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
              If you are facing a dispute over the amount of loss in Texas or Louisiana, submit your
              documentation for an independent appraisal review.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/process" className="btn-outline-light">
                View the Appraisal Process
              </Link>
              <Link to="/contact" className="btn-primary px-8 py-4 text-lg">
                Request an Appraisal Review
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
