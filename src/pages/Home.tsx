import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Award,
  Users,
  Clock,
  Home,
  Zap,
  Shield
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Professional Foundation Repair Services
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Expert foundation solutions for Dallas-Fort Worth homeowners. 24/7 emergency repairs available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 inline-flex items-center justify-center"
                >
                  Schedule Free Inspection
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-600 inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-blue-700 rounded-lg p-8 text-center">
                <Home className="w-32 h-32 mx-auto text-blue-200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-white py-16 px-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">20+</div>
              <p className="text-gray-600 text-lg">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">10K+</div>
              <p className="text-gray-600 text-lg">Repairs Completed</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">100%</div>
              <p className="text-gray-600 text-lg">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive foundation repair solutions for every need
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: 'Foundation Repair',
                description: 'Complete foundation restoration and stabilization services',
                link: '/services/foundation-repair'
              },
              {
                icon: Award,
                title: 'Pier Installation',
                description: 'Professional pier and beam foundation services',
                link: '/services/pier-installation'
              },
              {
                icon: Zap,
                title: 'Crawl Space Repair',
                description: 'Encapsulation and moisture control solutions',
                link: '/services'
              },
              {
                icon: Shield,
                title: 'Waterproofing',
                description: 'Protect your foundation from water damage',
                link: '/services'
              },
              {
                icon: AlertCircle,
                title: 'Drainage Solutions',
                description: 'Proper drainage to prevent future issues',
                link: '/services'
              },
              {
                icon: Clock,
                title: 'Emergency Repairs',
                description: '24/7 emergency response for urgent needs',
                link: '/services'
              }
            ].map((service, idx) => (
              <Link
                key={idx}
                to={service.link}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <service.icon className="w-12 h-12 text-blue-900 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-blue-900 font-semibold flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Licensed & Insured', description: 'Full licensing and insurance protection for your peace of mind' },
              { title: 'Lifetime Warranties', description: 'We stand behind our work with comprehensive warranties' },
              { title: '24/7 Emergency Service', description: 'Available anytime for urgent foundation emergencies' },
              { title: 'Free Inspections', description: 'Comprehensive assessments at no cost or obligation' },
              { title: 'Expert Technicians', description: 'Certified professionals with extensive experience' },
              { title: 'Flexible Financing', description: 'Affordable payment plans to fit your budget' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Warning Signs Your Foundation Needs Repair</h2>
            <p className="text-xl text-gray-600">
              Don't wait until it's too late. Look for these common indicators.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Cracks in walls or foundation',
              'Uneven or sloping floors',
              'Doors and windows won\'t close',
              'Water in basement or crawl space',
              'Bowing walls',
              'Sticking doors and windows',
              'Gaps around windows',
              'Musty odors'
            ].map((sign, idx) => (
              <div key={idx} className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <AlertCircle className="w-8 h-8 text-red-600 mb-2" />
                <p className="text-gray-900 font-semibold">{sign}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              If you notice any of these signs, schedule a free inspection immediately.
            </p>
            <Link
              to="/contact"
              className="bg-blue-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 inline-flex items-center"
            >
              Get Your Free Inspection
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Don't Risk Your Home's Foundation
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free, no-obligation foundation inspection. Our experts will identify any issues and provide solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 inline-flex items-center justify-center"
            >
              Schedule Free Inspection
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:+14695551234"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-600 inline-flex items-center justify-center"
            >
              Call (469) 555-1234
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
