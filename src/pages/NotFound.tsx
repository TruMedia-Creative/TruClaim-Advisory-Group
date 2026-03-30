import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL } from '../lib/contact';
import PageMetadata from '../components/PageMetadata';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-parchment-50 px-4">
      <PageMetadata
        title="Page Not Found"
        description="The page you are looking for could not be found. Return to the TruClaims Appraisal Group homepage."
        canonicalPath="/404"
      />

      <div className="max-w-xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 numerals */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-8xl md:text-9xl font-bold font-display text-ink-black-800 leading-none select-none">
              4
            </span>
            {/* Animated circle in the middle of "404" */}
            <motion.div
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-steel-blue-500 to-steel-blue-400 flex items-center justify-center shadow-lg"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.2 }}
            >
              <span className="text-ink-black-900 font-bold text-xl md:text-2xl select-none">
                TAG
              </span>
            </motion.div>
            <span className="text-8xl md:text-9xl font-bold font-display text-ink-black-800 leading-none select-none">
              4
            </span>
          </div>

          <h1 className="section-title mb-4">Page Not Found</h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            The page you are looking for doesn't exist or may have been moved. Use the links below
            to get back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link to="/" className="btn-primary inline-flex items-center justify-center gap-2">
              <Home size={18} />
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="btn-outline inline-flex items-center justify-center gap-2"
            >
              <ArrowLeft size={18} />
              Contact Us
            </Link>
          </div>

          {/* Helpful quick links */}
          <div className="bg-white rounded-2xl p-6 shadow-md text-left">
            <h2 className="text-base font-semibold text-ink-black-800 mb-3">Looking for…</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                { label: 'Our Services', to: '/services' },
                { label: 'The Appraisal Process', to: '/process' },
                { label: 'About', to: '/about' },
                { label: 'Texas Service Area', to: '/texas' },
                { label: 'Louisiana Service Area', to: '/louisiana' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-steel-blue-500 hover:text-steel-blue-600 font-medium transition-colors"
                  >
                    {label} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Need immediate assistance?{' '}
            <a href={PHONE_TEL} className="text-steel-blue-500 hover:text-steel-blue-600 font-medium inline-flex items-center gap-1 transition-colors">
              <Phone size={14} />
              {PHONE_DISPLAY}
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
