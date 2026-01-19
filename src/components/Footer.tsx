import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Foundation Experts</h3>
            <p className="text-gray-300 mb-4">
              Professional foundation repair services in the Dallas-Fort Worth area since 2004.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/foundation-repair" className="text-gray-400 hover:text-blue-400">
                  Foundation Repair
                </Link>
              </li>
              <li>
                <Link to="/services/pier-installation" className="text-gray-400 hover:text-blue-400">
                  Pier Installation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-blue-400">
                  Crawl Space Repair
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-blue-400">
                  Waterproofing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-blue-400">
                  Drainage Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-blue-400">
                  Emergency Repairs
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-blue-400">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="text-gray-400 hover:text-blue-400">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/service-areas" className="text-gray-400 hover:text-blue-400">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-blue-400">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <a href="tel:+14695551234" className="text-gray-400 hover:text-blue-400">
                  (469) 555-1234
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <a href="mailto:info@foundationexperts.com" className="text-gray-400 hover:text-blue-400">
                  info@foundationexperts.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Dallas-Fort Worth, TX
                </span>
              </li>
            </ul>
            <p className="text-gray-500 text-sm mt-4">
              Available 24/7 for emergency repairs
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Foundation Experts. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
