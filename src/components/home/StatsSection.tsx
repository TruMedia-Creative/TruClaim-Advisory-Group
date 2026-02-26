import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Users, DollarSign, Shield, TrendingUp, Award } from 'lucide-react';

// Animated counter hook
function useCounter(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!startOnView || isInView) {
      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }
  }, [end, duration, isInView, startOnView]);

  return { count, ref };
}

const stats = [
  {
    icon: Shield,
    value: 6,
    suffix: '+',
    label: 'Years of Experience',
    description: 'Years of insurance appraisal expertise',
    color: 'from-ink-black-600 to-ink-black-800',
  },
  {
    icon: DollarSign,
    value: 500,
    suffix: 'M+',
    label: 'Claims Appraised',
    description: 'Total value of losses evaluated',
    color: 'from-rosy-copper-500 to-rosy-copper-600',
  },
  {
    icon: Building2,
    value: 1000,
    suffix: '+',
    label: 'Properties Appraised',
    description: 'Residential, commercial, and large-loss',
    color: 'from-ink-black-600 to-ink-black-800',
  },
  {
    icon: Users,
    value: 100,
    suffix: '+',
    label: 'Clients Served',
    description: 'Homeowners, carriers, attorneys & more',
    color: 'from-rosy-copper-500 to-rosy-copper-600',
  },
];

function AnimatedStat({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { count, ref } = useCounter(stat.value, 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative group"
    >
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 overflow-hidden">
        {/* Animated background gradient on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

        {/* Icon with pulse animation */}
        <motion.div
          className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <stat.icon className="w-7 h-7 text-white" />
        </motion.div>

        {/* Animated counter */}
        <div className="mb-2">
          <span className="text-4xl md:text-5xl font-bold text-ink-black-800">
            {stat.value === 500 ? (
              <>${count}</>
            ) : (
              count
            )}
          </span>
          <span className="text-3xl md:text-4xl font-bold text-rosy-copper-500">{stat.suffix}</span>
        </div>

        <h3 className="text-lg font-semibold text-ink-black-800 mb-1">{stat.label}</h3>
        <p className="text-gray-500 text-sm">{stat.description}</p>
      </div>
    </motion.div>
  );
}

// Sun rays SVG component
function SunRays() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none overflow-hidden">
      <svg viewBox="0 0 600 300" className="w-full h-full">
        {/* Sun circle */}
        <defs>
          <linearGradient id="sunGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d23d2d" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#d23d2d" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="rayGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d23d2d" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#d23d2d" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Rays */}
        {[...Array(12)].map((_, i) => (
          <motion.line
            key={i}
            x1="300"
            y1="0"
            x2="300"
            y2="200"
            stroke="url(#rayGradient)"
            strokeWidth="2"
            transform={`rotate(${i * 15 - 82.5} 300 0)`}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, delay: i * 0.1, repeat: Infinity }}
          />
        ))}

        {/* Sun semi-circle */}
        <motion.ellipse
          cx="300"
          cy="0"
          rx="80"
          ry="40"
          fill="url(#sunGradient)"
          initial={{ scale: 0.9 }}
          animate={{ scale: [0.9, 1, 0.9] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </svg>
    </div>
  );
}

// Water waves SVG component
function WaterWaves() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none overflow-hidden">
      <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-full">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#19324d" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#19324d" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,50 Q150,30 300,50 T600,50 T900,50 T1200,50 L1200,100 L0,100 Z"
          fill="url(#waveGradient)"
          initial={{ d: "M0,50 Q150,30 300,50 T600,50 T900,50 T1200,50 L1200,100 L0,100 Z" }}
          animate={{
            d: [
              "M0,50 Q150,30 300,50 T600,50 T900,50 T1200,50 L1200,100 L0,100 Z",
              "M0,50 Q150,70 300,50 T600,50 T900,50 T1200,50 L1200,100 L0,100 Z",
              "M0,50 Q150,30 300,50 T600,50 T900,50 T1200,50 L1200,100 L0,100 Z"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section id="stats-section" className="py-24 bg-gradient-to-b from-parchment-100 to-parchment-50 relative overflow-hidden">
      {/* Sun rays decoration */}
      <SunRays />

      {/* Water waves decoration */}
      <WaterWaves />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-rosy-copper-100 text-rosy-copper-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <TrendingUp className="w-4 h-4" />
            By The Numbers
          </motion.div>
          <h2 className="section-title">Experience That Resolves Complex Claims</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our expertise allows us to deliver accurate, defensible valuations across a wide range of property loss scenarios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* Additional trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-gray-100">
            <Award className="w-5 h-5 text-rosy-copper-500" />
            <span className="text-gray-600">
              Trusted by leading <span className="font-semibold text-ink-black-800">insurers, adjusters & attorneys</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
