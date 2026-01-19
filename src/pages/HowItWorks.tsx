import React from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  ClipboardList,
  Wrench,
  CheckCircle,
  ArrowRight,
  Phone,
  DollarSign,
  Shield
} from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Our proven process ensures professional service from start to finish. Learn how we solve your foundation problems.
          </p>
        </div>
      </section>

      {/* Step by Step Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {[
            {
              icon: Binoculars,
              step: '1',
              title: 'Free Inspection',
              description: 'We begin with a comprehensive inspection of your foundation. Our certified technicians will examine both the interior and exterior, looking for signs of damage, settling, or structural issues. This assessment is completely free and carries no obligation.',
              details: ['Visual inspection', 'Moisture testing', 'Structural analysis', 'Photo documentation']
            },
            {
              icon: ClipboardList,
              step: '2',
              title: 'Detailed Assessment',
              description: 'After the inspection, we provide a detailed written report explaining our findings. We\'ll identify all issues, explain what\'s causing them, and discuss how they might affect your home if left untreated. This report helps you understand the scope of work needed.',
              details: ['Written report', 'Issue prioritization', 'Photo evidence', 'Expert recommendations']
            },
            {
              icon: DollarSign,
              step: '3',
              title: 'Custom Estimate',
              description: 'We\'ll provide a transparent, itemized estimate for all recommended repairs. Our pricing is competitive, and we work with you to find solutions that fit your budget. We also offer flexible financing options to make repairs more affordable.',
              details: ['Transparent pricing', 'Multiple options', 'Financing available', 'No hidden fees']
            },
            {
              icon: Wrench,
              step: '4',
              title: 'Professional Repair',
              description: 'Once you approve the estimate, our skilled technicians begin work. We use industry-leading techniques and materials to ensure the highest quality repairs. We keep you informed throughout the process and maintain a clean work site.',
              details: ['Licensed technicians', 'Quality materials', 'Regular updates', 'Safety compliance']
            },
            {
              icon: CheckCircle,
              step: '5',
              title: 'Quality Inspection',
              description: 'Before we consider the job complete, we perform a final quality inspection. We verify that all work meets our high standards and that you\'re completely satisfied with the results. Your satisfaction is our priority.',
              details: ['Final walkthrough', 'Quality verification', 'Documentation', 'Satisfaction guaranteed']
            },
            {
              icon: Shield,
              step: '6',
              title: 'Warranty & Support',
              description: 'Your repair comes with a comprehensive warranty that protects your investment. We provide ongoing support and maintenance recommendations to keep your foundation in excellent condition for years to come.',
              details: ['Lifetime warranty', 'Follow-up inspections', 'Maintenance tips', '24/7 support']
            }
          ].map((item, idx) => (
            <div key={idx} className="mb-16 pb-16 border-b border-gray-200 last:border-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className={`${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-900 text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl mr-4">
                      {item.step}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{item.title}</h2>
                  </div>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {item.details.map((detail, didx) => (
                      <div key={didx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`${idx % 2 === 1 ? 'md:order-1' : ''} hidden md:block`}>
                  <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-12 flex items-center justify-center h-96">
                    <item.icon className="w-32 h-32 text-blue-200" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Our Process Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Thorough Inspection',
                description: 'We don\'t just look at the obvious. Our detailed inspection catches hidden issues before they become major problems.'
              },
              {
                title: 'Transparent Communication',
                description: 'You\'ll understand exactly what\'s wrong, why it matters, and what we recommend. No jargon, no surprises.'
              },
              {
                title: 'Professional Execution',
                description: 'Our certified technicians use proven techniques and quality materials to ensure repairs last for decades.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-blue-900 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Typical Timeline</h2>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Initial Contact</h3>
                  <p className="text-gray-600">Call us to schedule your free inspection</p>
                  <p className="text-sm text-gray-500 mt-1">Usually available within 2-3 days</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Inspection</h3>
                  <p className="text-gray-600">Our technician performs a thorough assessment</p>
                  <p className="text-sm text-gray-500 mt-1">Takes 1-2 hours depending on property size</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Report & Estimate</h3>
                  <p className="text-gray-600">Receive detailed findings and repair estimates</p>
                  <p className="text-sm text-gray-500 mt-1">Usually within 24 hours after inspection</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Repair Work</h3>
                  <p className="text-gray-600">Professional repair and installation begins</p>
                  <p className="text-sm text-gray-500 mt-1">Timeline varies based on scope of work</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Final Inspection</h3>
                  <p className="text-gray-600">We verify quality and your satisfaction</p>
                  <p className="text-sm text-gray-500 mt-1">Warranty protection begins upon completion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to schedule your free foundation inspection. We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 inline-flex items-center justify-center"
            >
              Schedule Inspection
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:+14695551234"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-600 inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
