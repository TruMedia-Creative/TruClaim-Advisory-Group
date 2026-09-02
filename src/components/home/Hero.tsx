import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

// SVG Sun Logo Component
function SunLogo() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.svg
      viewBox="0 0 120 120"
      className="w-28 h-28"
      initial={shouldReduceMotion ? false : { scale: 0, rotate: -180 }}
      animate={shouldReduceMotion ? { scale: 1, rotate: 0 } : { scale: 1, rotate: 0 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { delay: 0.2, type: 'spring', stiffness: 100, damping: 15 }
      }
    >
      <defs>
        <linearGradient id="sunGradientLogo" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#b8960c" />
        </linearGradient>
        <linearGradient id="waterGradientLogo" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#172554" />
        </linearGradient>
        <clipPath id="circleClip">
          <circle cx="60" cy="60" r="50" />
        </clipPath>
      </defs>

      {/* Outer ring */}
      <circle cx="60" cy="60" r="56" fill="none" stroke="url(#sunGradientLogo)" strokeWidth="3" />

      {/* Background circle */}
      <circle cx="60" cy="60" r="50" fill="url(#waterGradientLogo)" />

      {/* Sun rays */}
      <g clipPath="url(#circleClip)">
        {[...Array(12)].map((_, i) => (
          <motion.line
            key={i}
            x1="60"
            y1="20"
            x2="60"
            y2="55"
            stroke="#d4af37"
            strokeWidth="2"
            strokeLinecap="round"
            transform={`rotate(${i * 15 - 82.5} 60 60)`}
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 0.8, pathLength: 1 }}
            transition={{ delay: 0.5 + i * 0.05, duration: 0.5 }}
          />
        ))}

        {/* Sun semi-circle */}
        <motion.ellipse
          cx="60"
          cy="65"
          rx="28"
          ry="28"
          fill="url(#sunGradientLogo)"
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        />

        {/* Water lines */}
        <motion.path
          d="M20 70 Q40 65 60 70 T100 70"
          stroke="#1e3a8a"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        />
        <motion.path
          d="M15 80 Q35 75 60 80 T105 80"
          stroke="#1e3a8a"
          strokeWidth="2.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        />
        <motion.path
          d="M10 90 Q30 85 60 90 T110 90"
          stroke="#1e3a8a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        />
      </g>
    </motion.svg>
  );
}

// Animated background sun rays
function BackgroundRays() {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return null;
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-[600px] bg-gradient-to-b from-steel-blue-500/10 to-transparent origin-bottom"
            style={{
              transform: `rotate(${i * 22.5}deg)`,
              left: '50%',
              bottom: '50%',
            }}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ delay: 1.2 + i * 0.05, duration: 1 }}
          />
        ))}
      </div>
    </div>
  );
}

// Animated water waves at bottom
function WaterWaves() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none overflow-hidden"
    >
      {/* Wave layer 1 - fastest */}
      <motion.svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-[200%] h-20"
        animate={shouldReduceMotion ? {} : { x: [0, -600] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <path
          d="M0,60 Q150,20 300,60 T600,60 T900,60 T1200,60 L1200,120 L0,120 Z"
          fill="rgba(210, 61, 45, 0.15)"
        />
      </motion.svg>

      {/* Wave layer 2 - medium */}
      <motion.svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-[200%] h-24"
        animate={shouldReduceMotion ? {} : { x: [-300, -900] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      >
        <path
          d="M0,70 Q150,40 300,70 T600,70 T900,70 T1200,70 L1200,120 L0,120 Z"
          fill="rgba(25, 50, 77, 0.2)"
        />
      </motion.svg>

      {/* Wave layer 3 - slowest */}
      <motion.svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-[200%] h-28"
        animate={shouldReduceMotion ? {} : { x: [-150, -750] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      >
        <path
          d="M0,80 Q150,50 300,80 T600,80 T900,80 T1200,80 L1200,120 L0,120 Z"
          fill="rgba(210, 61, 45, 0.1)"
        />
      </motion.svg>
    </div>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToStats = () => {
    document
      .getElementById('service-area')
      ?.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink-black-900"
      aria-label="TruClaims Advisory Group hero section"
    >
      <div className="absolute inset-0">
        <picture className="block h-full w-full">
          <source srcSet={`${import.meta.env.BASE_URL}hero-house.webp`} type="image/webp" />
          <img
            src={`${import.meta.env.BASE_URL}hero-house.jpg`}
            alt="Independent insurance appraiser reviewing a residential property exterior damaged by wind and hail"
            className="w-full h-full object-cover"
            width="1920"
            height="1280"
            sizes="100vw"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
      </div>
      {/* Gradient overlay — semi-transparent so the background image shows through */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-black-800/75 via-ink-black-900/80 to-ink-black-950/85" />

      {/* Animated background rays */}
      <BackgroundRays />

      {/* Animated water waves */}
      <WaterWaves />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Sun Logo */}
          <div className="flex justify-center mb-8">
            <SunLogo />
          </div>

          {/* Company name badge */}
          <motion.p
            className="text-xl md:text-2xl text-steel-blue-400 mb-4 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            TruClaims Advisory Group
          </motion.p>

          {/* SEO-optimized H1 */}
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Fair. Neutral. Resolved.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Structured insurance appraisal and umpire services delivering fair, defensible
            settlements for homeowners, businesses, and carriers across Texas and Louisiana.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Link to="/contact" className="btn-secondary inline-flex items-center justify-center">
              Request Appraisal Review
            </Link>
            <Link to="/services" className="btn-primary inline-flex items-center justify-center">
              View Services
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator — positioned relative to section so it sits at the bottom of the viewport */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: [0, 10, 0] }}
        transition={
          shouldReduceMotion ? { delay: 1.5 } : { delay: 1.5, y: { repeat: Infinity, duration: 2 } }
        }
      >
        <button
          type="button"
          onClick={scrollToStats}
          aria-label="Scroll down"
          className="text-steel-blue-400 hover:text-steel-blue-300 transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </motion.div>

      {/* Bottom gradient transition - above waves */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-parchment-100 to-transparent z-20" />
    </section>
  );
}
