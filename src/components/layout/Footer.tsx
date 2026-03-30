import { Link } from 'react-router-dom';
import { MapPin, Phone, Linkedin } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL } from '../../lib/contact';

const Footer = () => {
  return (
    <footer className="bg-ink-black-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-steel-blue-500 to-steel-blue-400 rounded-full flex items-center justify-center">
                <span className="text-ink-black-900 font-bold text-xl">TAG</span>
              </div>
              <span className="font-display font-bold text-2xl">TruClaims Appraisal Group</span>
            </div>
            <p className="text-ink-black-200 max-w-md mb-6">
              TruClaims Appraisal Group provides insurance adjusting appraisals and umpiring for individuals and insurance carriers across Texas and Louisiana.
            </p>
            {/* Social links */}
            <a
              href="https://www.linkedin.com/company/truclaims-advisory-group"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TruClaims Appraisal Group on LinkedIn"
              className="inline-flex items-center gap-2 text-ink-black-200 hover:text-white transition text-sm"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-steel-blue-500">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-ink-black-200 hover:text-white transition">Home</Link></li>
              <li><Link to="/services" className="text-ink-black-200 hover:text-white transition">Services</Link></li>
              <li><Link to="/process" className="text-ink-black-200 hover:text-white transition">Process</Link></li>
              <li><Link to="/about" className="text-ink-black-200 hover:text-white transition">About</Link></li>
              <li><Link to="/contact" className="text-ink-black-200 hover:text-white transition">Contact</Link></li>
              <li><Link to="/texas" className="text-ink-black-200 hover:text-white transition">Texas Service Area</Link></li>
              <li><Link to="/louisiana" className="text-ink-black-200 hover:text-white transition">Louisiana Service Area</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-steel-blue-500">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-ink-black-200">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Serving TX, LA &amp; Beyond</span>
              </li>
              <li className="flex items-start space-x-2 text-ink-black-200">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <a href={PHONE_TEL} className="hover:text-white transition">{PHONE_DISPLAY}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ink-black-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-ink-black-300 text-sm">
            &copy; {new Date().getFullYear()} TruClaims Appraisal Group. All rights reserved.
          </p>
          <p className="text-ink-black-400 text-sm mt-2 md:mt-0 flex flex-col md:flex-row md:items-center md:space-x-2 text-center md:text-left">
            <span>truclaimsadvisorygroup.com</span>
            <a
              href="https://www.trumediacreative.com"
              className="text-steel-blue-400 hover:text-white transition"
              target="_blank"
              rel="noreferrer"
            >
              |  Site by TruMedia Creative
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
