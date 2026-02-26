import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-royal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-400 rounded-full flex items-center justify-center">
                <span className="text-royal-900 font-bold text-xl">TAG</span>
              </div>
              <span className="font-display font-bold text-2xl">TruClaims Appraisal Group</span>
            </div>
            <p className="text-royal-200 max-w-md">
              TruClaims Appraisal Group provides insurance adjusting appraisals and umpiring for individuals and insurance carriers across Texas and Louisiana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gold-500">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-royal-200 hover:text-white transition">Home</Link></li>
              <li><Link to="/services" className="text-royal-200 hover:text-white transition">Services</Link></li>
              <li><Link to="/about" className="text-royal-200 hover:text-white transition">About</Link></li>
              <li><Link to="/contact" className="text-royal-200 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gold-500">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-royal-200">
                <MapPin size={18} className="mt-1" />
                <span>Serving TX, LA &amp; Beyond</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-royal-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-royal-300 text-sm">
            &copy; {new Date().getFullYear()} TruClaims Appraisal Group. All rights reserved.
          </p>
          <p className="text-royal-400 text-sm mt-2 md:mt-0">
            truclaimsadvisorygroup.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
