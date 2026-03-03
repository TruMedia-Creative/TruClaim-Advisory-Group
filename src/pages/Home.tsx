import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Shield, Building2, Handshake, Droplets, FileSearch, HelpCircle, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import StatsSection from '../components/home/StatsSection';
import ServiceAreaSection from '../components/home/ServiceAreaSection';
import CarrierLogoGrid from '../components/home/CarrierLogoGrid';
import PageMetadata from '../components/PageMetadata';

const values = [
    { icon: Building2, title: "Independent & Neutral", desc: "TruClaims Appraisal Group serves both policyholders and insurance carriers as an independent insurance appraiser. Our obligation is to provide an accurate, objective valuation based on evidence, policy terms, and industry standards — not advocacy." },
    { icon: Shield, title: "Evidence-Based Methodology", desc: "Every appraisal is grounded in on-site inspection, photo documentation, and detailed Xactimate estimates. Our valuations are defensible, policy-consistent, and built to withstand scrutiny from all parties." },
    { icon: Handshake, title: "Credentialed & Licensed", desc: "Licensed in Texas and 12 additional states, NFIP certified, State Farm, USAA, and TWIA certified — with 6+ years of CAT and daily claims experience and certified Xactimate expertise." },
    { icon: Users, title: "Catastrophe Deployment Experience", desc: "From Hurricane Beryl to Hurricane Ian, TruClaims Appraisal Group has direct deployment experience across major CAT events in TX, LA, FL, and beyond — providing systematic scope and valuation under surge conditions." },
    { icon: Droplets, title: "NFIP Flood Expertise", desc: "NFIP Flood Certified (#0070011243) with deployment experience handling residential flood losses under FEMA guidelines, including elevation certificate review, Proof of Loss, and Substantial Damage evaluations." },
    { icon: FileSearch, title: "Preloss Restoration Standard", desc: "The appraisal process is designed to restore the insured property to its preloss condition. That is the valuation standard applied to every inspection, estimate, and award." },
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
        'Yes. TruClaims Appraisal Group is retained by policyholders, carriers, attorneys, and as a neutral umpire. The same inspection methodology and valuation standard apply regardless of who engages us.',
    },
    {
      question: 'What documentation should I send with my request?',
      answer:
        'Share your carrier scope or settlement summary, any contractor estimates, claim photos, and correspondence that outlines the disputed items. This allows us to confirm eligibility and prepare for the on-site inspection.',
    },
  ];

const homeStructuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'TruClaims Appraisal Group',
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
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  return (
    <div>
      <PageMetadata
        title="Independent Insurance Appraisal & Umpire Services"
        description="Independent, evidence-based insurance appraisal, umpire, and catastrophic loss valuation services for policyholders, carriers, and attorneys across Texas and Louisiana."
        canonicalPath="/"
        structuredData={homeStructuredData}
      />
      {/* Hero Section */}
      <Hero />

      {/* What Is an Amount of Loss Dispute? */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4 }}
          >
            <HelpCircle className="mx-auto text-steel-blue-500 mb-4" size={36} />
            <h2 className="section-title mb-4">What Is an Amount of Loss Dispute?</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              When a policyholder and an insurance carrier cannot agree on the dollar value of a covered loss, an <strong>amount of loss dispute</strong> exists. The <Link to="/process" className="text-steel-blue-600 font-semibold">appraisal clause</Link> — found in most property insurance policies — provides a structured, binding process to resolve that disagreement without litigation.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              An appraisal addresses the <em>amount of loss only</em>. It does not resolve coverage disputes, determine liability, or override policy exclusions. Both parties appoint an independent appraiser; if the two appraisers cannot agree, they jointly select a neutral umpire whose decision, combined with either appraiser's agreement, becomes the binding appraisal award.
            </p>
            <p className="text-gray-600 leading-relaxed">
              TruClaims Appraisal Group serves as the independent appraiser for policyholders and carriers, and as a neutral umpire when the two appointed appraisers reach an impasse. Share your documentation through the <Link to="/contact" className="text-steel-blue-600 font-semibold">contact form</Link> to confirm eligibility.
            </p>
            <div className="mt-8">
              <Link to="/services" className="btn-secondary inline-flex items-center justify-center">
                Learn About Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Serve */}
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
              As an independent insurance appraiser and umpire, TruClaims Appraisal Group maintains strict neutrality. We serve both sides of the appraisal process with the same procedural discipline and evidentiary standards.
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
                If your insurance carrier has issued a settlement you believe is incomplete or inaccurate, invoking the appraisal clause provides a policy-prescribed path to a binding resolution. TruClaims Appraisal Group conducts an independent on-site inspection, prepares a detailed Xactimate estimate, and participates in the appraisal process as your appointed independent appraiser.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We serve residential and commercial policyholders across Texas and Louisiana — including those with hail, wind, hurricane, flood, and fire losses.
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
                Insurance carriers require independent appraisers who understand policy language, construction methodology, and the procedural framework of the appraisal clause. TruClaims Appraisal Group provides carriers with accurate, defensible Xactimate estimates and unbiased field documentation — supporting a fair and efficient appraisal process.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our umpire services are also available to facilitate resolution when two appointed appraisers reach an impasse on scope or value.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Area Section */}
      <ServiceAreaSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Carrier Logo Grid */}
      <CarrierLogoGrid />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="section-title mb-4">Insurance Appraisal FAQ</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about invoking appraisal, required documentation, and how neutrality is maintained throughout the process.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-parchment-50 border border-parchment-200 rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-ink-black-800 mb-3">{item.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/process" className="btn-outline mr-0 sm:mr-4 inline-flex mb-4 sm:mb-0">
              Understand the Appraisal Clause
            </Link>
            <Link to="/contact" className="btn-primary inline-flex">
              Submit Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Why TruClaims */}
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
