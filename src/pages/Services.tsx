import React from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Award,
  Zap,
  Shield,
  AlertCircle,
  Clock,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: 'Foundation Repair',
      description: 'Comprehensive foundation repair and restoration services for all foundation types. We identify and fix structural issues to restore your home\'s integrity.',
      features: ['Crack repair', 'Settlement correction', 'Structural reinforcement', 'Full diagnostics'],
      link: '/services/foundation-repair'
    },
    {
      icon: Award,
      title: 'Pier Installation',
      description: 'Professional pier and beam foundation installation and replacement. Modern techniques ensure long-lasting stability.',
      features: ['Steel pier installation', 'Adjustable pilings', 'Load testing', 'Warranty protection'],
      link: '/services/pier-installation'
    },
    {
      icon: Zap,
      title: 'Crawl Space Repair',
      description: 'Complete crawl space solutions including encapsulation, ventilation, and moisture control.',
      features: ['Vapor barriers', 'Dehumidification', 'Mold remediation', 'Structural repairs'],
      link: '/services'
    },
    {
      icon: Shield,
      title: 'Waterproofing',
      description: 'Protect your foundation from water infiltration and moisture damage with professional waterproofing systems.',
      features: ['Interior sealing', 'Exterior protection', 'Sump pumps', 'Drainage systems'],
      link: '/services'
    },
    {
      icon: AlertCircle,
      title: 'Drainage Solutions',
      description: 'Strategic drainage systems to redirect water away from your foundation and prevent future damage.',
      features: ['French drains', 'Grading solutions', 'Gutter systems', 'Foundation protection'],
      link: '/services'
    },
    {
      icon: Clock,
      title: 'Emergency Repairs',
      description: '24/7 emergency response for urgent foundation issues. We\'re here when you need us most.',
      features: ['Same-day service', 'Weekend availability', 'Temporary solutions', 'Follow-up repairs'],
      link: '/services'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive foundation repair and maintenance solutions tailored to your specific needs. From routine inspections to emergency repairs, we handle it all.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8"
              >
                <service.icon className="w-14 h-14 text-blue-900 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.link}
                  className="text-blue-900 font-semibold flex items-center hover:text-blue-700"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Service Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Inspection', desc: 'Detailed assessment of your foundation' },
              { num: '2', title: 'Analysis', desc: 'Comprehensive report of findings' },
              { num: '3', title: 'Solution', desc: 'Custom repair plan for your needs' },
              { num: '4', title: 'Completion', desc: 'Professional installation and warranty' }
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule your free inspection today and let our experts assess your foundation needs.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 inline-flex items-center"
          >
            Schedule Free Inspection
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
