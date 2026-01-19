import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-blue-900">Foundation Experts</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-900 font-medium">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-900 font-medium">
              Services
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-blue-900 font-medium">
              How It Works
            </Link>
            <Link to="/why-choose-us" className="text-gray-700 hover:text-blue-900 font-medium">
              Why Choose Us
            </Link>
            <Link to="/service-areas" className="text-gray-700 hover:text-blue-900 font-medium">
              Service Areas
            </Link>
            <Link to="/resources" className="text-gray-700 hover:text-blue-900 font-medium">
              Resources
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-900 font-medium">
              About
            </Link>
          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+14695551234"
              className="flex items-center text-blue-900 font-semibold hover:text-blue-700"
            >
              <Phone className="w-5 h-5 mr-2" />
              (469) 555-1234
            </a>
            <Link
              to="/contact"
              className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 font-semibold"
            >
              Free Inspection
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <a
              href="tel:+14695551234"
              className="text-blue-900 font-semibold"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-900 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-blue-900 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/how-it-works"
                className="text-gray-700 hover:text-blue-900 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                to="/why-choose-us"
                className="text-gray-700 hover:text-blue-900 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why Choose Us
              </Link>
              <Link
                to="/service-areas"
                className="text-gray-700 hover:text-blue-900 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Service Areas
              </Link>
              <Link
                to="/resources"
                className="text-gray-700 hover:text-blue-900 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-900 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 font-semibold inline-block mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Free Inspection
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
