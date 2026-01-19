import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, HelpCircle, TrendingUp, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

export default function ResourcesPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How much does a foundation inspection cost?',
      answer: 'Foundation inspections are completely free! We believe in providing thorough assessments at no cost or obligation. There are no hidden fees or charges for this service.'
    },
    {
      question: 'What is the average cost of foundation repair?',
      answer: 'Foundation repair costs vary widely depending on the severity and type of damage. Small repairs might cost $2,000-$5,000, while more extensive work could range from $10,000-$30,000+. We provide transparent estimates after a thorough inspection.'
    },
    {
      question: 'How long does foundation repair take?',
      answer: 'The timeline depends on the scope of work. Simple repairs might take a few days, while major projects could take 2-4 weeks. We\'ll provide a detailed timeline in your estimate.'
    },
    {
      question: 'Do you offer financing options?',
      answer: 'Yes! We offer multiple financing options to make repairs more affordable. We work with several financing companies to provide flexible payment plans. Ask us about current rates and terms.'
    },
    {
      question: 'What warranty do you provide?',
      answer: 'All our repairs come with a lifetime warranty. This protects your investment and gives you peace of mind that your foundation is secure.'
    },
    {
      question: 'Are you available for emergency repairs?',
      answer: 'Absolutely! We offer 24/7 emergency service for urgent foundation issues. Call us anytime if you experience a foundation emergency.'
    },
    {
      question: 'How do I know if I need foundation repair?',
      answer: 'Common signs include visible cracks, uneven floors, doors/windows that won\'t close properly, or water in your basement. If you notice any warning signs, schedule a free inspection.'
    },
    {
      question: 'How often should I have my foundation inspected?',
      answer: 'We recommend annual inspections for all homes. If you notice warning signs, schedule an inspection immediately. Regular inspections can catch problems early and save money.'
    },
    {
      question: 'Are you licensed and insured?',
      answer: 'Yes, we are fully licensed, insured, and certified. Our team consists of trained professionals who meet all industry standards and regulations.'
    },
    {
      question: 'Can foundation problems be prevented?',
      answer: 'While some foundation issues are inevitable, proper maintenance helps prevent many problems. Good drainage, moisture control, and regular inspections are key preventative measures.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Learn about foundation repair costs, financing options, and answers to common questions.
          </p>
        </div>
      </section>

      {/* Cost Guide Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Foundation Repair Cost Guide</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                service: 'Crack Repair',
                costRange: '$500 - $2,000',
                description: 'Minor to moderate crack sealing and repair',
                factors: ['Crack length', 'Severity', 'Material needed']
              },
              {
                service: 'Foundation Stabilization',
                costRange: '$5,000 - $15,000',
                description: 'Addressing settling and minor foundation movement',
                factors: ['Area affected', 'Soil conditions', 'Access difficulty']
              },
              {
                service: 'Pier Installation',
                costRange: '$8,000 - $20,000+',
                description: 'New pier and beam foundation installation',
                factors: ['Number of piers', 'Depth required', 'Foundation type']
              },
              {
                service: 'Underpinning',
                costRange: '$10,000 - $25,000+',
                description: 'Complete foundation reinforcement and support',
                factors: ['Foundation size', 'Damage severity', 'Construction type']
              },
              {
                service: 'Crawl Space Encapsulation',
                costRange: '$3,000 - $8,000',
                description: 'Moisture control and structural encapsulation',
                factors: ['Square footage', 'Current condition', 'Ventilation needs']
              },
              {
                service: 'Waterproofing',
                costRange: '$2,000 - $6,000',
                description: 'Interior and exterior waterproofing systems',
                factors: ['Damage extent', 'Methods needed', 'Area size']
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-900">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.service}</h3>
                <div className="text-3xl font-bold text-blue-900 mb-3">{item.costRange}</div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Cost Factors:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {item.factors.map((factor, fidx) => (
                      <li key={fidx}>• {factor}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 p-8 rounded-lg">
            <p className="text-gray-800">
              <strong>Important Note:</strong> These are estimated price ranges. Actual costs depend on your specific situation.
              Schedule your free inspection for an accurate estimate tailored to your foundation needs.
            </p>
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Flexible Financing Options</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Flexible Payment Plans',
                description: 'We offer customized payment plans to fit your budget. Work with our team to create a schedule that works for you.',
                icon: TrendingUp
              },
              {
                title: 'Third-Party Financing',
                description: 'Access to multiple financing partners with competitive rates and terms. Approval is often quick and easy.',
                icon: DollarSign
              },
              {
                title: 'No Interest Options',
                description: 'Selected financing programs offer promotional no-interest periods, making repairs more affordable.',
                icon: HelpCircle
              }
            ].map((option, idx) => {
              const Icon = option.icon;
              return (
                <div key={idx} className="bg-blue-900 p-8 rounded-lg hover:bg-blue-800 transition-colors">
                  <Icon className="w-12 h-12 text-blue-300 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                  <p className="text-blue-100">{option.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-xl text-blue-100 mb-8">
              Don't let cost prevent necessary repairs. Contact us to discuss financing options.
            </p>
            <Link
              to="/contact"
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-600 inline-flex items-center"
            >
              Learn About Financing
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cost Saving Tips */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Ways to Save on Foundation Repair</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Act Early',
                description: 'Catching problems early prevents expensive damage. Small repairs today save major expenses later.'
              },
              {
                title: 'Regular Maintenance',
                description: 'Proper drainage and moisture control prevent many foundation problems. Preventative maintenance is cost-effective.'
              },
              {
                title: 'Get Free Inspections',
                description: 'Regular free inspections help identify issues before they escalate. We offer no-cost assessments.'
              },
              {
                title: 'Ask About Discounts',
                description: 'We offer discounts for multiple services or referrals. Ask about current promotions when you call.'
              },
              {
                title: 'Consider Bundled Services',
                description: 'Combining multiple repairs often reduces total costs. Let us design an efficient solution plan.'
              },
              {
                title: 'Plan Ahead',
                description: 'Plan repairs during off-season months for potential pricing advantages. Emergency work costs more.'
              }
            ].map((tip, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                  {expandedFAQ === idx ? (
                    <ChevronUp className="w-6 h-6 text-blue-900 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-blue-900 flex-shrink-0" />
                  )}
                </button>
                {expandedFAQ === idx && (
                  <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-blue-50 border border-blue-200 rounded-lg text-center">
            <p className="text-gray-800 mb-4">
              Can't find the answer you're looking for?
            </p>
            <Link
              to="/contact"
              className="text-blue-900 font-bold hover:text-blue-700 inline-flex items-center"
            >
              Contact us directly
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Learn More?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule your free inspection today and get personalized answers to your foundation questions.
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
