import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, Wrench, Shield, ArrowRight, Award } from 'lucide-react';

export default function PierInstallationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pier Installation Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Professional pier and beam foundation installation and replacement. Modern techniques for maximum stability and longevity.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is Pier Installation?</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Pier installation involves placing support structures deep into the ground to stabilize and support your foundation. Piers transfer the weight of your home to stable soil or bedrock below, providing a permanent solution for settling or unstable foundations.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                This is one of the most effective methods for addressing foundation problems, especially for homes experiencing significant settling or requiring additional support. Our technicians use state-of-the-art equipment and proven techniques.
              </p>
            </div>

            {/* Types of Piers */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Piers We Install</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Steel Piers',
                    desc: 'Heavy-duty steel pilings driven deep into stable soil for maximum support'
                  },
                  {
                    title: 'Helical Piers',
                    desc: 'Screw-like piers twisted into the ground for excellent holding power'
                  },
                  {
                    title: 'Push Piers',
                    desc: 'High-capacity piers that can be adjusted for precise leveling'
                  },
                  {
                    title: 'Drilled Piers',
                    desc: 'Deep holes drilled to bedrock for maximum stability in challenging soil'
                  }
                ].map((type, idx) => (
                  <div key={idx} className="border border-gray-200 p-4 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">{type.title}</h3>
                    <p className="text-gray-600 text-sm">{type.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Pier Installation */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Pier Installation?</h2>
              <div className="space-y-4">
                {[
                  'Permanent solution for foundation settling',
                  'Prevents future foundation movement',
                  'Lifts and levels settled foundations',
                  'Works on any soil condition',
                  'Minimal disruption to your home',
                  'Excellent for older homes',
                  'Provides long-term structural support',
                  'Backed by lifetime warranty'
                ].map((reason, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Installation Process */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Installation Process</h2>
              <div className="space-y-6">
                {[
                  {
                    step: '1',
                    title: 'Detailed Assessment',
                    desc: 'We evaluate soil conditions, current foundation damage, and determine optimal pier placement and depth.'
                  },
                  {
                    step: '2',
                    title: 'Design Plan',
                    desc: 'Custom engineered design specifies pier type, quantity, spacing, and load capacity for your home.'
                  },
                  {
                    step: '3',
                    title: 'Precise Installation',
                    desc: 'Technicians install piers to the designed depth and capacity using professional equipment.'
                  },
                  {
                    step: '4',
                    title: 'Connection',
                    desc: 'Piers are securely connected to the foundation structure with engineered connections and brackets.'
                  },
                  {
                    step: '5',
                    title: 'Load Testing',
                    desc: 'Each pier is load tested to verify it meets specifications and provides adequate support.'
                  },
                  {
                    step: '6',
                    title: 'Final Verification',
                    desc: 'Final inspection and documentation ensure all work is complete and warranty protection is activated.'
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
              <Award className="w-12 h-12 mb-4 text-blue-200" />
              <h3 className="text-2xl font-bold mb-4">Pier Installation</h3>
              <p className="text-blue-100 mb-6">
                Professional pier and beam foundation installation for lasting stability and support.
              </p>
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-6 py-2 rounded-lg font-bold hover:bg-blue-50 inline-flex items-center"
              >
                Schedule Inspection
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Benefits */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {[
                  'Permanent solution',
                  'Adjustable and leveling',
                  'Minimal home disruption',
                  'Works in any soil',
                  'High load capacity',
                  'Proven technology',
                  'Long-term stability',
                  'Lifetime warranty'
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* When You Need Piers */}
            <div className="bg-blue-50 border border-blue-200 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2" />
                When to Consider Piers
              </h3>
              <ul className="space-y-2 text-blue-800 text-sm">
                {[
                  'Significant settling',
                  'Multiple foundation issues',
                  'Large cracks',
                  'Bowing walls',
                  'Challenging soil',
                  'Older homes'
                ].map((indicator, idx) => (
                  <li key={idx}>• {indicator}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Advanced Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Laser Leveling',
                description: 'Precision laser technology ensures perfect leveling and alignment'
              },
              {
                title: 'Load Testing',
                description: 'Each pier is pressure tested to verify load capacity and safety'
              },
              {
                title: 'Monitoring Systems',
                description: 'Ongoing monitoring tracks settlement and ensures long-term stability'
              },
              {
                title: 'Geotechnical Analysis',
                description: 'Soil testing determines optimal pier depth and support requirements'
              },
              {
                title: 'Computer Modeling',
                description: 'Engineering simulations predict performance and ensure reliability'
              },
              {
                title: 'Real-Time Tracking',
                description: 'Digital documentation tracks all installation parameters'
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

      {/* Warranty */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-blue-50 border border-blue-200 p-8 rounded-lg">
          <div className="flex items-start space-x-4">
            <Shield className="w-12 h-12 text-blue-900 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Lifetime Warranty Protection</h2>
              <p className="text-gray-700 mb-3">
                All pier installations are backed by our comprehensive lifetime warranty covering materials, labor, and performance.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" /> Full structural guarantee</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" /> Transferable warranty</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" /> No expiration date</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Considering Pier Installation?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule your free consultation with our engineering team to discuss your foundation needs.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 inline-flex items-center"
          >
            Schedule Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
