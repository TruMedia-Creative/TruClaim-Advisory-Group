import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL } from '../../lib/contact';

const Footer = () => {
  return (
    <footer className="bg-ink-black-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link
              to="/"
              aria-label="TruClaims Advisory Group home"
              className="mb-4 inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel-blue-500"
            >
              <img
                src="/TCAG-logos/TruClaimsAdvisoryGroup-Horizontal-navbar.png"
                alt="TruClaims Advisory Group"
                className="h-10 w-auto max-w-full object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-ink-black-200 max-w-md mb-6">
              TruClaims Advisory Group provides insurance adjusting appraisals and umpiring for
              individuals and insurance carriers across Texas and Louisiana.
            </p>
            {/* Social links */}
            <a
              href="https://www.linkedin.com/company/truclaims-advisory-group"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TruClaims Advisory Group on LinkedIn"
              className="inline-flex items-center gap-2 text-ink-black-200 hover:text-white transition text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel-blue-500 rounded"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                width={18}
                height={18}
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-steel-blue-500">Quick Links</h3>
            <nav aria-label="Quick links">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-ink-black-200 hover:text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel-blue-500 rounded"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-ink-black-200 hover:text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel-blue-500 rounded"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/process"
                    className="text-ink-black-200 hover:text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel-blue-500 rounded"
                  >
                    Process
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-ink-black-200 hover:text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel-blue-500 rounded"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-ink-black-200 hover:text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel-blue-500 rounded"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/texas"
                    className="text-ink-black-200 hover:text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel-blue-500 rounded"
                  >
                    Texas Service Area
                  </Link>
                </li>
                <li>
                  <Link
                    to="/louisiana"
                    className="text-ink-black-200 hover:text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel-blue-500 rounded"
                  >
                    Louisiana Service Area
                  </Link>
                </li>
              </ul>
            </nav>
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
                <a
                  href={PHONE_TEL}
                  className="hover:text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel-blue-500 rounded"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ink-black-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-ink-black-300 text-sm">
            &copy; {new Date().getFullYear()} TruClaims Advisory Group. All rights reserved.
          </p>
          <p className="text-ink-black-400 text-sm mt-2 md:mt-0 flex flex-col md:flex-row md:items-center md:space-x-2 text-center md:text-left">
            <span>truclaimsadvisorygroup.com</span>
            <a
              href="https://www.trumediacreative.com"
              className="text-steel-blue-400 hover:text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel-blue-500 rounded"
              target="_blank"
              rel="noreferrer"
            >
              | Site by TruMedia Creative
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
