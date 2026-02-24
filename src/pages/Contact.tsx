import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    claimType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit contact form');
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', claimType: '', message: '' });
    } catch {
      setSubmitError('Something went wrong while submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-royal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Contact Us</h1>
          <p className="text-royal-200 text-lg max-w-2xl">
            Request an appraisal, schedule a consultation, or ask any questions about our services.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-royal-800 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-royal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-royal-800" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-royal-800 mb-1">Email</h3>
                    <a href="mailto:info@truclaimadvisory.com" className="text-gray-600 hover:text-royal-700 transition">
                      info@truclaimadvisory.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-royal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-royal-800" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-royal-800 mb-1">Service Area</h3>
                    <p className="text-gray-600">Texas & Louisiana</p>
                    <p className="text-gray-500 text-sm mt-1">Travel available for large-loss events nationwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-royal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-royal-800" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-royal-800 mb-1">Availability</h3>
                    <p className="text-gray-600">Monday – Friday: 8:00 AM – 6:00 PM</p>
                    <p className="text-gray-500 text-sm mt-1">Emergency / catastrophic loss: available 24/7</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-royal-800 mb-6">Request Appraisal Services</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-transparent"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Claim Type</label>
                    <select
                      name="claimType"
                      value={formData.claimType}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-transparent bg-white"
                    >
                      <option value="">Select a claim type...</option>
                      <option value="residential">Residential Property</option>
                      <option value="commercial">Commercial Property</option>
                      <option value="catastrophic">Catastrophic Loss</option>
                      <option value="disputed">Disputed Claim / Appraisal Umpire</option>
                      <option value="estimate">Estimate Review</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-transparent resize-none"
                      placeholder="Briefly describe your claim or inquiry..."
                    />
                  </div>

                  {submitSuccess && (
                    <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-800 rounded-lg px-4 py-3">
                      <CheckCircle size={18} className="flex-shrink-0" />
                      <span className="text-sm font-medium">Thank you for your inquiry. We will be in touch shortly.</span>
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
                    className="w-full bg-royal-800 text-white py-3 rounded-lg font-semibold hover:bg-royal-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending…' : 'Send Inquiry'}
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
