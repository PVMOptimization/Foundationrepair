import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  Users,
  TrendingUp,
  Zap,
  DollarSign,
  Heart,
  CheckCircle,
  Shield,
  Phone,
  ArrowRight
} from 'lucide-react';

export default function WhyChooseUsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Foundation Experts</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            We're not just another foundation repair company. Here's what sets us apart.
          </p>
        </div>
      </section>

      {/* Core Differentiators */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Experience You Can Trust</h2>
              <p className="text-gray-600 text-lg mb-4">
                With over 20 years of foundation repair experience in the Dallas-Fort Worth area, we've seen and solved every type of foundation problem. Our team has completed more than 10,000 successful repairs.
              </p>
              <ul className="space-y-3">
                {[
                  'Licensed and insured professionals',
                  'Certified technicians and engineers',
                  'Extensive warranty protection',
                  'References from thousands of satisfied customers'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-12 flex items-center justify-center h-96">
              <Award className="w-32 h-32 text-blue-200" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-12 flex items-center justify-center h-96 md:order-2">
              <TrendingUp className="w-32 h-32 text-blue-200" />
            </div>
            <div className="md:order-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced Technology</h2>
              <p className="text-gray-600 text-lg mb-4">
                We stay at the forefront of foundation repair technology. Our team uses cutting-edge diagnostic equipment and proven repair methods to ensure the best results.
              </p>
              <ul className="space-y-3">
                {[
                  'Advanced diagnostic equipment',
                  'Modern repair techniques',
                  'Industry-leading materials',
                  'Continuous staff training and certification'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Lifetime Warranty',
                description: 'All repairs come with our comprehensive lifetime warranty, protecting your investment for years to come.'
              },
              {
                icon: DollarSign,
                title: 'Flexible Financing',
                description: 'We offer multiple financing options to fit your budget, making quality repairs more accessible.'
              },
              {
                icon: Zap,
                title: '24/7 Emergency Service',
                description: 'Emergency foundation issues don\'t wait for business hours. We\'re available anytime you need us.'
              },
              {
                icon: Heart,
                title: 'Customer Focused',
                description: 'Your satisfaction is our priority. We maintain transparent communication throughout every project.'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Our certified technicians and engineers bring expertise and professionalism to every job.'
              },
              {
                icon: Award,
                title: 'Free Inspections',
                description: 'Comprehensive foundation assessments are completely free and carry no obligation to hire us.'
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-blue-900 p-8 rounded-lg hover:bg-blue-800 transition-colors">
                <benefit.icon className="w-12 h-12 text-blue-300 mb-4" />
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Commitment to Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: 'Quality',
                description: 'We use only the highest quality materials and industry-best practices for every repair.'
              },
              {
                title: 'Transparency',
                description: 'Honest pricing, clear communication, and no hidden fees. You always know exactly what to expect.'
              },
              {
                title: 'Integrity',
                description: 'We stand behind our work with comprehensive warranties and ongoing customer support.'
              },
              {
                title: 'Service',
                description: 'Your satisfaction is our measure of success. We go above and beyond to ensure you\'re happy.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-900">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Why We're Different</h2>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="grid grid-cols-3 bg-blue-900 text-white">
              <div className="p-4 font-bold">Feature</div>
              <div className="p-4 font-bold text-center border-l border-blue-800">Other Companies</div>
              <div className="p-4 font-bold text-center border-l border-blue-800">Foundation Experts</div>
            </div>
            {[
              { feature: 'Free Inspection', other: 'Some charge', us: 'Always Free' },
              { feature: 'Warranty', other: 'Limited', us: 'Lifetime' },
              { feature: 'Experience', other: '5-10 years', us: '20+ years' },
              { feature: '24/7 Emergency', other: 'No', us: 'Yes' },
              { feature: 'Financing Options', other: 'Limited', us: 'Multiple' },
              { feature: 'Local Team', other: 'Varies', us: 'Always Local' }
            ].map((row, idx) => (
              <div key={idx} className="grid grid-cols-3 border-t border-gray-200">
                <div className="p-4 font-semibold text-gray-900">{row.feature}</div>
                <div className="p-4 text-center border-l border-gray-200 text-gray-600">{row.other}</div>
                <div className="p-4 text-center border-l border-gray-200 text-green-600 font-semibold">{row.us}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                title: 'Homeowner, Dallas',
                quote: 'Foundation Experts provided professional service from start to finish. The inspection was thorough, the estimate was fair, and the repairs were completed on time. Highly recommended!'
              },
              {
                name: 'Michael Chen',
                title: 'Property Owner, Fort Worth',
                quote: 'I\'ve used Foundation Experts multiple times. They always deliver quality work and excellent customer service. Their warranty gives me peace of mind.'
              },
              {
                name: 'Jennifer Williams',
                title: 'Homeowner, Arlington',
                quote: 'When I noticed cracks in my foundation, I called Foundation Experts. They explained everything clearly and fixed the problem with minimal disruption to my home.'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Experience the Difference</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied customers who trust Foundation Experts for their foundation repair needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 inline-flex items-center justify-center"
            >
              Schedule Free Inspection
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:+14695551234"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (469) 555-1234
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
