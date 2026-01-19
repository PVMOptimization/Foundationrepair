import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Heart, Target, CheckCircle, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Foundation Experts</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Trusted foundation repair professionals serving Dallas-Fort Worth since 2004.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg mb-4">
                Foundation Experts was founded in 2004 with a simple mission: provide Dallas-Fort Worth homeowners with professional, reliable foundation repair services they can trust.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                What started as a small local business has grown into the region's most trusted foundation repair company, serving thousands of satisfied customers across the metroplex. We've built our reputation on quality workmanship, transparent pricing, and genuine care for our customers' homes.
              </p>
              <p className="text-gray-600 text-lg">
                Today, we remain committed to our founding principles: integrity, excellence, and customer satisfaction. Every job, large or small, receives our complete attention and expertise.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-12 flex items-center justify-center h-96">
              <Award className="w-32 h-32 text-blue-200" />
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 bg-white p-8 rounded-lg shadow-md">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">20+</div>
              <p className="text-gray-600">Years in Business</p>
            </div>
            <div className="text-center border-l border-gray-200">
              <div className="text-5xl font-bold text-blue-900 mb-2">10K+</div>
              <p className="text-gray-600">Repairs Completed</p>
            </div>
            <div className="text-center border-l border-gray-200">
              <div className="text-5xl font-bold text-blue-900 mb-2">95%</div>
              <p className="text-gray-600">Repeat Customers</p>
            </div>
            <div className="text-center border-l border-gray-200">
              <div className="text-5xl font-bold text-blue-900 mb-2">100%</div>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Integrity',
                description: 'We operate with complete honesty and transparency in all our dealings with customers.'
              },
              {
                icon: Target,
                title: 'Excellence',
                description: 'We pursue the highest standards in workmanship, materials, and customer service.'
              },
              {
                icon: Users,
                title: 'Community',
                description: 'We\'re invested in our local communities and the success of our neighbors.'
              },
              {
                icon: Award,
                title: 'Accountability',
                description: 'We stand behind our work with comprehensive warranties and lasting support.'
              }
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <value.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Team</h2>
          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
            Our team consists of highly trained, certified professionals dedicated to solving your foundation problems with expertise and professionalism.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Smith',
                title: 'Founder & Owner',
                bio: 'With 25 years of foundation expertise, John founded Foundation Experts to bring professional, trustworthy service to the DFW area.'
              },
              {
                name: 'Maria Garcia',
                title: 'Operations Manager',
                bio: 'Maria ensures every project runs smoothly and our customers receive exceptional service from start to finish.'
              },
              {
                name: 'David Chen',
                title: 'Lead Technician',
                bio: 'David brings 18 years of field experience and leads our technical team through complex foundation challenges.'
              }
            ].map((member, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-blue-900 to-blue-800 h-48 flex items-center justify-center">
                  <Users className="w-24 h-24 text-blue-200" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-900 font-semibold mb-4">{member.title}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Started */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Why We Do What We Do</h2>
          <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-blue-900">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We understand that your home is likely your most valuable investment. When foundation problems appear, it's stressful and concerning. Too many homeowners have experienced dishonest contractors, hidden fees, and poor workmanship.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We started Foundation Experts because we wanted to be different. We wanted to provide honest, professional service that homeowners could trust. We wanted to stand behind our work and truly care about our customers' satisfaction.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Two decades later, that commitment hasn't changed. Every technician, every inspection, every repair reflects our dedication to being the foundation company you can trust with your home.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Local Expertise',
                description: 'Two decades of experience with North Texas foundations gives us unique knowledge of regional challenges and solutions.'
              },
              {
                title: 'Transparent Operations',
                description: 'No hidden fees, no surprises. You know exactly what to expect from inspection through completion.'
              },
              {
                title: 'Professional Team',
                description: 'Our technicians are certified, trained, and passionate about delivering quality work.'
              },
              {
                title: 'Warranty Protection',
                description: 'We stand behind our work with comprehensive warranties that protect your investment.'
              },
              {
                title: 'Customer Focus',
                description: 'Your satisfaction is our priority. We listen, communicate, and ensure your concerns are addressed.'
              },
              {
                title: 'Emergency Service',
                description: '24/7 availability means we\'re here when you need us most, even in urgent situations.'
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

      {/* Commitment */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Commitment to You</h2>
          <p className="text-xl text-blue-100 mb-12">
            We promise to treat your home with the same care we would treat our own. Quality workmanship, transparent pricing, and genuine customer care - that's the Foundation Experts promise.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              'Free, honest inspections',
              'Transparent, fair pricing',
              'Professional, certified technicians',
              'Comprehensive warranties',
              '24/7 emergency service',
              'Customer satisfaction guaranteed'
            ].map((promise, idx) => (
              <div key={idx} className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>{promise}</span>
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 inline-flex items-center"
          >
            Experience the Difference
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
