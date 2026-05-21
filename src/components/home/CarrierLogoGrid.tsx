import { motion } from 'framer-motion';

interface Carrier {
  name: string;
  logo: string;
}

const carriers: Carrier[] = [
  { name: 'State Farm', logo: 'logos/1-State-Farm-Logo.png' },
  { name: 'USAA', logo: 'logos/2-USAA-logo.png' },
  { name: 'Travelers', logo: 'logos/3-travelers.png' },
  { name: 'Nationwide Insurance', logo: 'logos/4-Nationwide-Insurance-Logo.png' },
  { name: 'Farmers Insurance', logo: 'logos/5-Farmers-Insurance-Logo.png' },
  { name: 'Assurant', logo: 'logos/6-assurant.png' },
  { name: 'Farm Bureau Insurance', logo: 'logos/7-farm-bureau-insurance-PNG.png' },
  { name: 'TWIA', logo: 'logos/8-TWIA.png' },
  { name: 'Germania', logo: 'logos/9-Germania.png' },
  { name: 'Foremost Insurance Group', logo: 'logos/10-Foremost-Insurance-Group.png' },
  { name: 'American Integrity', logo: 'logos/11-american-integrity.png' },
  { name: 'Homesite Insurance', logo: 'logos/12-Homesite_Insurance_Logo.png' },
  { name: 'Standard Casualty', logo: 'logos/13-Standard-casualty.png' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

interface CarrierLogoGridProps {
  heading?: string;
  subheading?: string;
}

const CarrierLogoGrid = ({
  heading = 'Carriers We Work With',
  subheading = 'TruClaims Advisory Group has direct field experience with the following carriers — serving as a policyholder-appointed appraiser, a carrier-retained appraiser, and a neutral umpire.',
}: CarrierLogoGridProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">{heading}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subheading}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={containerVariants}
        >
          {carriers.map((carrier) => (
            <motion.div
              key={carrier.name}
              variants={itemVariants}
              className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex items-center justify-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-12 w-full max-w-44">
                <img
                  src={`${import.meta.env.BASE_URL}${carrier.logo}`}
                  alt={`${carrier.name} logo`}
                  loading="lazy"
                  decoding="async"
                  width="176"
                  height="48"
                  className="h-full w-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CarrierLogoGrid;
