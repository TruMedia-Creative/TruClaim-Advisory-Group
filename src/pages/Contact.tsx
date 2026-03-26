import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ClipboardList, Search, MapPin, Award } from 'lucide-react';
import PageMetadata from '../components/PageMetadata';

const contactStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Request an Insurance Appraisal Review',
  url: 'https://www.truclaimsadvisorygroup.com/contact',
  description:
    'Submit documentation for an independent insurance appraisal or umpire review covering Texas and Louisiana property claims.',
};

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Submit Documentation',
    description:
      'Complete the form and upload your carrier estimate or settlement summary, contractor estimate (if applicable), and photos of the damage.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Initial Scope Review',
    description:
      "We review the submitted documentation, evaluate the full scope of loss, and identify any deficiencies in pricing, missed line items, or scope inconsistencies.",
  },
  {
    number: '03',
    icon: MapPin,
    title: 'On-Site Inspection',
    description:
      'If the claim qualifies, we schedule and complete a field inspection to document the loss and support an accurate, defensible appraisal position.',
  },
  {
    number: '04',
    icon: Award,
    title: 'Appraisal & Award Resolution',
    description:
      'We represent your position in the appraisal clause process and work toward a binding appraisal award. The award addresses the amount of loss only.',
  },
];

interface FormFields {
  // Section 1 — Contact Information
  name: string;
  phone: string;
  email: string;
  propertyAddress: string;
  state: string;
  // Section 2 — Claim Information
  insuranceCompany: string;
  claimNumber: string;
  dateOfLoss: string;
  typeOfLoss: string;
  carrierIssuedPayment: string;
  settlementAmount: string;
  // Section 4 — Qualification Questions
  whatWasMissed: string;
  appraisalInvoked: string;
  hasRepresentation: string;
  // Optional
  deadline: string;
  inspectionAvailability: string;
  referralSource: string;
}

interface FileFields {
  // Section 3 — Document Uploads
  carrierEstimate: File | null;
  settlementLetter: File | null;
  /** Multiple files allowed */
  damagePhotos: FileList | null;
  contractorEstimate: File | null;
}

const inputClass =
  'w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-ink-black-500 focus:border-transparent bg-white text-sm';
const labelClass = 'block text-sm font-medium text-gray-700 mb-1';
const sectionHeadingClass = 'text-sm font-bold text-ink-black-800 uppercase tracking-wider mb-4 pb-2 border-b border-gray-200';

const Contact = () => {
  const [formData, setFormData] = useState<FormFields>({
    name: '',
    phone: '',
    email: '',
    propertyAddress: '',
    state: '',
    insuranceCompany: '',
    claimNumber: '',
    dateOfLoss: '',
    typeOfLoss: '',
    carrierIssuedPayment: '',
    settlementAmount: '',
    whatWasMissed: '',
    appraisalInvoked: '',
    hasRepresentation: '',
    deadline: '',
    inspectionAvailability: '',
    referralSource: '',
  });

  const [fileData, setFileData] = useState<FileFields>({
    carrierEstimate: null,
    settlementLetter: null,
    damagePhotos: null,
    contractorEstimate: null,
  });

  const [fileError, setFileError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    setFileError(null);

    if (name === 'damagePhotos') {
      // Validate each selected file against the 10 MB limit
      if (files) {
        for (const f of Array.from(files)) {
          if (f.size > 10 * 1024 * 1024) {
            setFileError(`"${f.name}" exceeds the 10 MB limit. Please select a smaller file.`);
            e.target.value = '';
            return;
          }
        }
      }
      setFileData({ ...fileData, damagePhotos: files && files.length > 0 ? files : null });
    } else {
      const file = files?.[0] ?? null;
      if (file && file.size > 10 * 1024 * 1024) {
        setFileError(`"${file.name}" exceeds the 10 MB limit. Please select a smaller file.`);
        e.target.value = '';
        return;
      }
      setFileData({ ...fileData, [name]: file });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const payload = new FormData();

      // Append text fields
      (Object.keys(formData) as (keyof FormFields)[]).forEach((key) => {
        payload.append(key, formData[key]);
      });

      // Append files (damagePhotos supports multiple)
      (Object.keys(fileData) as (keyof FileFields)[]).forEach((key) => {
        if (key === 'damagePhotos' && fileData.damagePhotos) {
          Array.from(fileData.damagePhotos).forEach((f) => payload.append('damagePhotos', f));
        } else {
          const file = fileData[key] as File | null;
          if (file) payload.append(key, file);
        }
      });

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: payload,
      });

      if (!response.ok) throw new Error('Failed to submit contact form');

      setSubmitSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        propertyAddress: '',
        state: '',
        insuranceCompany: '',
        claimNumber: '',
        dateOfLoss: '',
        typeOfLoss: '',
        carrierIssuedPayment: '',
        settlementAmount: '',
        whatWasMissed: '',
        appraisalInvoked: '',
        hasRepresentation: '',
        deadline: '',
        inspectionAvailability: '',
        referralSource: '',
      });
      setFileData({ carrierEstimate: null, settlementLetter: null, damagePhotos: null, contractorEstimate: null });
      // File inputs cannot be reset via state; clear them via the DOM
      document.querySelectorAll<HTMLInputElement>('input[type="file"]').forEach((input) => {
        input.value = '';
      });
    } catch {
      setSubmitError('Something went wrong while submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-screen bg-parchment-100">
      <PageMetadata
        title="Request an Insurance Appraisal Review"
        description="Submit your settlement summary, estimates, and claim documentation for an independent insurance appraisal serving Texas and Louisiana."
        canonicalPath="/contact"
        structuredData={contactStructuredData}
      />
      {/* Header */}
      <section className="bg-gradient-to-br from-ink-black-800 via-ink-black-900 to-ink-black-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Request an Insurance Appraisal Review</h1>
          <p className="text-ink-black-200 text-lg max-w-2xl">
            If you are facing an amount of loss dispute in Texas or Louisiana, submit your documentation below for an independent appraisal review. Please include your carrier estimate, settlement summary, contractor estimate (if applicable), and claim photos.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 items-start">

            {/* Left — 4-Step Process */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-bold text-ink-black-800 mb-2"
              >
                The Insurance Appraisal Process
              </motion.h2>
              <motion.p variants={itemVariants} className="text-gray-500 text-sm mb-8">
                Here is what to expect after you submit your documentation.
              </motion.p>

              <div className="space-y-8">
                {steps.map(({ number, icon: Icon, title, description }) => (
                  <motion.div key={number} variants={itemVariants} className="flex gap-5">
                    {/* Step number + connector line */}
                    <div className="flex flex-col items-center">
                      <div className="w-11 h-11 rounded-full bg-ink-black-800 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                        {number}
                      </div>
                      {number !== '04' && (
                        <div className="w-px flex-1 bg-ink-black-200 mt-2" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-8">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon size={16} className="text-steel-blue-500" />
                        <h3 className="font-semibold text-ink-black-800 text-sm">{title}</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right — Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-ink-black-800 mb-6">Request Appraisal Services</h2>

                <form onSubmit={handleSubmit} className="space-y-8">

                  {/* Section 1 — Contact Information */}
                  <div>
                    <h3 className={sectionHeadingClass}>Contact Information</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="Jane Smith"
                          />
                        </div>
                        <div>
                          <label className={labelClass}>Phone Number *</label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="(555) 000-0000"
                          />
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="you@example.com"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Property Address (Loss Location) *</label>
                        <input
                          type="text"
                          name="propertyAddress"
                          required
                          value={formData.propertyAddress}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="123 Main St, City"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>State *</label>
                        <select
                          name="state"
                          required
                          value={formData.state}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="" disabled>Select state…</option>
                          <option value="AL">Alabama</option>
                          <option value="AK">Alaska</option>
                          <option value="AZ">Arizona</option>
                          <option value="AR">Arkansas</option>
                          <option value="CA">California</option>
                          <option value="CO">Colorado</option>
                          <option value="CT">Connecticut</option>
                          <option value="DE">Delaware</option>
                          <option value="DC">District of Columbia</option>
                          <option value="FL">Florida</option>
                          <option value="GA">Georgia</option>
                          <option value="HI">Hawaii</option>
                          <option value="ID">Idaho</option>
                          <option value="IL">Illinois</option>
                          <option value="IN">Indiana</option>
                          <option value="IA">Iowa</option>
                          <option value="KS">Kansas</option>
                          <option value="KY">Kentucky</option>
                          <option value="LA">Louisiana</option>
                          <option value="ME">Maine</option>
                          <option value="MD">Maryland</option>
                          <option value="MA">Massachusetts</option>
                          <option value="MI">Michigan</option>
                          <option value="MN">Minnesota</option>
                          <option value="MS">Mississippi</option>
                          <option value="MO">Missouri</option>
                          <option value="MT">Montana</option>
                          <option value="NE">Nebraska</option>
                          <option value="NV">Nevada</option>
                          <option value="NH">New Hampshire</option>
                          <option value="NJ">New Jersey</option>
                          <option value="NM">New Mexico</option>
                          <option value="NY">New York</option>
                          <option value="NC">North Carolina</option>
                          <option value="ND">North Dakota</option>
                          <option value="OH">Ohio</option>
                          <option value="OK">Oklahoma</option>
                          <option value="OR">Oregon</option>
                          <option value="PA">Pennsylvania</option>
                          <option value="RI">Rhode Island</option>
                          <option value="SC">South Carolina</option>
                          <option value="SD">South Dakota</option>
                          <option value="TN">Tennessee</option>
                          <option value="TX">Texas</option>
                          <option value="UT">Utah</option>
                          <option value="VT">Vermont</option>
                          <option value="VA">Virginia</option>
                          <option value="WA">Washington</option>
                          <option value="WV">West Virginia</option>
                          <option value="WI">Wisconsin</option>
                          <option value="WY">Wyoming</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Section 2 — Claim Information */}
                  <div>
                    <h3 className={sectionHeadingClass}>Claim Information</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Insurance Company *</label>
                          <input
                            type="text"
                            name="insuranceCompany"
                            required
                            value={formData.insuranceCompany}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="e.g. State Farm"
                          />
                        </div>
                        <div>
                          <label className={labelClass}>Claim Number *</label>
                          <input
                            type="text"
                            name="claimNumber"
                            required
                            value={formData.claimNumber}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="Claim #"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Date of Loss *</label>
                          <input
                            type="date"
                            name="dateOfLoss"
                            required
                            value={formData.dateOfLoss}
                            onChange={handleChange}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className={labelClass}>Type of Loss *</label>
                          <select
                            name="typeOfLoss"
                            required
                            value={formData.typeOfLoss}
                            onChange={handleChange}
                            className={inputClass}
                          >
                            <option value="">Select type…</option>
                            <option value="storm">Storm</option>
                            <option value="fire">Fire</option>
                            <option value="water">Water</option>
                            <option value="vandalism">Vandalism</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Has the carrier issued a payment? *</label>
                          <select
                            name="carrierIssuedPayment"
                            required
                            value={formData.carrierIssuedPayment}
                            onChange={handleChange}
                            className={inputClass}
                          >
                            <option value="">Select…</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                        <div>
                          <label className={labelClass}>Total settlement amount received</label>
                          <input
                            type="text"
                            name="settlementAmount"
                            value={formData.settlementAmount}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="e.g. $12,500 (if applicable)"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 3 — Uploads */}
                  <div>
                    <h3 className={sectionHeadingClass}>Document Uploads</h3>
                    <p className="text-xs text-gray-400 mb-4">
                      PDF, JPG, or PNG accepted. Max 10 MB per file.
                    </p>
                    <div className="space-y-4">
                      {([
                        { name: 'carrierEstimate', label: 'Carrier Estimate (PDF) *', accept: '.pdf', required: true, multiple: false },
                        { name: 'settlementLetter', label: 'Settlement Letter (if separate)', accept: '.pdf,.jpg,.jpeg,.png', required: false, multiple: false },
                        { name: 'damagePhotos', label: 'Photos of the Damage *', accept: '.jpg,.jpeg,.png', required: true, multiple: true },
                        { name: 'contractorEstimate', label: 'Contractor Estimate (if available)', accept: '.pdf,.jpg,.jpeg,.png', required: false, multiple: false },
                      ] as const).map(({ name, label, accept, required, multiple }) => (
                        <div key={name}>
                          <label className={labelClass}>{label}</label>
                          <input
                            type="file"
                            name={name}
                            required={required}
                            aria-required={required}
                            accept={accept}
                            multiple={multiple}
                            onChange={handleFileChange}
                            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-ink-black-50 file:text-ink-black-800 hover:file:bg-ink-black-100 cursor-pointer"
                          />
                        </div>
                      ))}
                      {fileError && (
                        <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg px-4 py-3 text-sm">
                          {fileError}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Section 4 — Qualification Questions */}
                  <div>
                    <h3 className={sectionHeadingClass}>Qualification Questions</h3>
                    <div className="space-y-4">
                      <div>
                        <label className={labelClass}>Describe the amount of loss dispute or scope discrepancy *</label>
                        <textarea
                          name="whatWasMissed"
                          required
                          rows={3}
                          value={formData.whatWasMissed}
                          onChange={handleChange}
                          className={`${inputClass} resize-none`}
                          placeholder="Briefly describe the disputed items or scope differences between the carrier estimate and contractor estimate…"
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Has appraisal been formally invoked? *</label>
                          <select
                            name="appraisalInvoked"
                            required
                            value={formData.appraisalInvoked}
                            onChange={handleChange}
                            className={inputClass}
                          >
                            <option value="">Select…</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            <option value="unsure">Unsure</option>
                          </select>
                        </div>
                        <div>
                          <label className={labelClass}>Represented by a public adjuster or attorney? *</label>
                          <select
                            name="hasRepresentation"
                            required
                            value={formData.hasRepresentation}
                            onChange={handleChange}
                            className={inputClass}
                          >
                            <option value="">Select…</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Optional Fields */}
                  <div>
                    <h3 className={`${sectionHeadingClass} text-gray-400`}>Optional — Additional Details</h3>
                    <div className="space-y-4">
                      <div>
                        <label className={labelClass}>Deadline or time sensitivity</label>
                        <input
                          type="text"
                          name="deadline"
                          value={formData.deadline}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="e.g. Hearing scheduled for March 15"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Preferred inspection availability</label>
                        <input
                          type="text"
                          name="inspectionAvailability"
                          value={formData.inspectionAvailability}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="e.g. Weekday mornings"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>How did you hear about us?</label>
                        <input
                          type="text"
                          name="referralSource"
                          value={formData.referralSource}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="e.g. Google, referral, attorney"
                        />
                      </div>
                    </div>
                  </div>

                  {submitSuccess && (
                    <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-800 rounded-lg px-4 py-3">
                      <CheckCircle size={18} className="flex-shrink-0" />
                      <span className="text-sm font-medium">
                        Thank you for your inquiry. We will review your submission and be in touch shortly.
                      </span>
                    </div>
                  )}

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg px-4 py-3 text-sm">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-ink-black-800 text-white py-3 rounded-lg font-semibold hover:bg-ink-black-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending…' : 'Submit Claim Details'}
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
