import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, Wrench, Shield, ArrowRight, Home } from 'lucide-react';

export default function FoundationRepairPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Foundation Repair Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive foundation repair solutions for Dallas-Fort Worth homeowners. Professional assessment and expert repairs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is Foundation Repair?</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Foundation repair involves assessing, stabilizing, and restoring the foundation of your home. Whether dealing with cracks, settling, or structural movement, our expert technicians provide solutions tailored to your specific needs.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Early detection and repair can prevent minor issues from becoming major, costly problems. Our comprehensive repair services address the root causes, not just the symptoms.
              </p>
            </div>

            {/* Common Issues */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Foundation Issues We Repair</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Cracks', desc: 'Hairline to major cracks in foundation walls and slabs' },
                  { title: 'Settlement', desc: 'Uneven foundation settling causing floor slopes' },
                  { title: 'Bowing Walls', desc: 'Foundation walls pushing inward due to soil pressure' },
                  { title: 'Moisture Intrusion', desc: 'Water seeping into basement or crawl space' },
                  { title: 'Shifting Foundation', desc: 'Movement caused by soil changes and weather' },
                  { title: 'Stair-Step Cracks', desc: 'Diagonal brick or concrete cracks indicating movement' }
                ].map((issue, idx) => (
                  <div key={idx} className="border border-gray-200 p-4 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">{issue.title}</h3>
                    <p className="text-gray-600 text-sm">{issue.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Repair Process */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Foundation Repair Process</h2>
              <div className="space-y-6">
                {[
                  {
                    step: '1',
                    title: 'Thorough Inspection',
                    desc: 'We examine your foundation for cracks, settlement, and structural issues using professional diagnostic tools.'
                  },
                  {
                    step: '2',
                    title: 'Root Cause Analysis',
                    desc: 'We identify what\'s causing the problem - soil conditions, moisture, structural issues, or other factors.'
                  },
                  {
                    step: '3',
                    title: 'Customized Solution',
                    desc: 'Based on findings, we develop a targeted repair plan using proven techniques and quality materials.'
                  },
                  {
                    step: '4',
                    title: 'Professional Installation',
                    desc: 'Our certified technicians execute repairs with precision and care, minimizing disruption to your home.'
                  },
                  {
                    step: '5',
                    title: 'Quality Verification',
                    desc: 'Final inspection ensures all work meets our high standards and provides lasting protection.'
                  },
                  {
                    step: '6',
                    title: 'Warranty Protection',
                    desc: 'All repairs backed by our comprehensive lifetime warranty for your complete peace of mind.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <div className="bg-blue-900 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Service Box */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-lg shadow-md mb-8">
              <Home className="w-12 h-12 mb-4 text-blue-200" />
              <h3 className="text-2xl font-bold mb-4">Foundation Repair</h3>
              <p className="text-blue-100 mb-6">
                Professional foundation repair services for structural issues, settling, and cracks.
              </p>
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-6 py-2 rounded-lg font-bold hover:bg-blue-50 inline-flex items-center"
              >
                Schedule Inspection
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Why Choose */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Foundation Repair Matters</h3>
              <ul className="space-y-3">
                {[
                  'Prevents major structural damage',
                  'Protects property value',
                  'Stops water intrusion',
                  'Increases home safety',
                  'Prevents future settling',
                  'Extends foundation life'
                ].map((reason, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Warning Signs */}
            <div className="bg-red-50 border border-red-200 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2" />
                Warning Signs
              </h3>
              <ul className="space-y-2 text-red-800 text-sm">
                {[
                  'Visible cracks',
                  'Sloping floors',
                  'Door/window problems',
                  'Water intrusion',
                  'Bowing walls',
                  'Sticking doors'
                ].map((sign, idx) => (
                  <li key={idx}>• {sign}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Techniques */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Materials & Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Polyurethane Injection',
                description: 'High-pressure polyurethane injection closes cracks and seals foundation leaks'
              },
              {
                title: 'Concrete Patching',
                description: 'Professional concrete patching and coating for durability and waterproofing'
              },
              {
                title: 'Epoxy Injection',
                description: 'Structural epoxy injections repair deep cracks and restore foundation strength'
              },
              {
                title: 'Helical Piles',
                description: 'State-of-the-art helical pile installation for foundation underpinning'
              },
              {
                title: 'Steel Reinforcement',
                description: 'Steel beams and bracing for structural support and stabilization'
              },
              {
                title: 'Hydraulic Jacking',
                description: 'Controlled lifting and leveling of settled foundations'
              }
            ].map((tech, idx) => (
              <div key={idx} className="bg-blue-900 p-6 rounded-lg hover:bg-blue-800 transition-colors">
                <Wrench className="w-8 h-8 text-blue-300 mb-3" />
                <h3 className="font-bold mb-2">{tech.title}</h3>
                <p className="text-blue-100 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-blue-50 border border-blue-200 p-8 rounded-lg">
          <div className="flex items-start space-x-4">
            <Shield className="w-12 h-12 text-blue-900 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Lifetime Warranty</h2>
              <p className="text-gray-700 mb-3">
                All foundation repairs are backed by our comprehensive lifetime warranty. We stand behind our work completely.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" /> Covers all materials and labor</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" /> Transferable to new homeowners</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" /> No time limit on coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for Professional Foundation Repair?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule your free foundation inspection today and let our experts assess your needs.
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
