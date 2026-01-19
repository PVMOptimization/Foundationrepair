import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, CheckCircle, ArrowRight, Phone } from 'lucide-react';

export default function ServiceAreasPage() {
  const dfw_areas = [
    { city: 'Dallas', areas: ['Downtown Dallas', 'Highland Park', 'University Park', 'Preston Hollow', 'Oak Lawn'] },
    { city: 'Fort Worth', areas: ['Downtown Fort Worth', 'TCU Area', 'West Fort Worth', 'North Fort Worth', 'South Fort Worth'] },
    { city: 'Arlington', areas: ['Central Arlington', 'East Arlington', 'North Arlington', 'West Arlington'] },
    { city: 'Irving', areas: ['Las Colinas', 'Coppell', 'Valley Ranch'] },
    { city: 'Plano', areas: ['North Plano', 'Central Plano', 'South Plano'] },
    { city: 'Frisco', areas: ['Frisco', 'McKinney', 'Carrollton'] }
  ];

  const surrounding_areas = [
    'Richardson', 'Garland', 'Mesquite', 'Grand Prairie', 'Mansfield', 'Euless',
    'Grapevine', 'Southlake', 'Farmers Branch', 'Addison', 'Lewisville', 'Denton',
    'Allen', 'Prosper', 'Wylie', 'Rockwall', 'Duncanville', 'Cedar Hill'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Service Areas</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            We proudly serve the entire Dallas-Fort Worth metroplex with professional foundation repair services.
          </p>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">DFW Coverage Areas</h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Serving Dallas, Fort Worth, Arlington, and surrounding communities
          </p>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-12 text-white text-center min-h-96 flex items-center justify-center">
              <MapPin className="w-32 h-32" />
            </div>
          </div>
        </div>
      </section>

      {/* Primary Service Areas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Primary Service Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dfw_areas.map((area, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-lg border-l-4 border-blue-900">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.city}</h3>
                <ul className="space-y-2">
                  {area.areas.map((subarea, sidx) => (
                    <li key={sidx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      {subarea}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Service Areas */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Extended Service Areas</h2>
          <p className="text-gray-600 text-center mb-8">
            We also serve many surrounding communities throughout North Texas. If your area isn't listed, contact us to confirm service availability.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {surrounding_areas.map((area, idx) => (
                <div key={idx} className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Advantages */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Local Service Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Local Expertise',
                description: 'We understand the unique foundation challenges specific to North Texas soil and climate conditions.'
              },
              {
                title: 'Fast Response Times',
                description: 'Local presence means faster response to inspections and emergency calls throughout the DFW area.'
              },
              {
                title: 'Community Trust',
                description: 'We\'re invested in our community with established relationships and a proven track record locally.'
              },
              {
                title: 'Weather Knowledge',
                description: 'We know how Texas weather patterns affect foundations and plan repairs accordingly.'
              },
              {
                title: 'Building Codes',
                description: 'Expert knowledge of local building codes and regulations ensures compliant, approved repairs.'
              },
              {
                title: 'Area References',
                description: 'Local references and testimonials from neighbors you might know throughout the DFW area.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-blue-900 p-8 rounded-lg hover:bg-blue-800 transition-colors">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Information */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Foundation Issues in North Texas</h2>
          <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-blue-900">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Understanding Local Challenges</h3>
            <p className="text-gray-600 mb-6">
              North Texas presents unique foundation challenges due to our expansive clay soils and variable weather patterns. Our area experiences:
            </p>
            <ul className="space-y-3">
              {[
                'Seasonal moisture changes that cause soil expansion and contraction',
                'Extreme heat and drought followed by heavy rains',
                'Shallow bedrock that limits foundation depth in some areas',
                'High clay content in soil leading to settling and movement',
                'Legacy properties with older foundation systems'
              ].map((issue, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{issue}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 mt-6">
              With over 20 years of experience in the DFW area, we understand these regional factors and design solutions specifically suited to North Texas conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Service Hours */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Service Hours</h2>
            <div className="space-y-3">
              <div>
                <p className="font-semibold">Monday - Friday</p>
                <p className="text-blue-100">7:00 AM - 6:00 PM</p>
              </div>
              <div>
                <p className="font-semibold">Saturday</p>
                <p className="text-blue-100">8:00 AM - 4:00 PM</p>
              </div>
              <div>
                <p className="font-semibold">Sunday</p>
                <p className="text-blue-100">Closed</p>
              </div>
              <div className="mt-6 pt-6 border-t border-blue-700">
                <p className="font-semibold">24/7 Emergency Service</p>
                <p className="text-blue-100">Available for urgent foundation emergencies</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Phone</p>
                <a href="tel:+14695551234" className="text-blue-100 hover:text-white">
                  (469) 555-1234
                </a>
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:info@foundationexperts.com" className="text-blue-100 hover:text-white">
                  info@foundationexperts.com
                </a>
              </div>
              <div>
                <p className="font-semibold">Service Area</p>
                <p className="text-blue-100">Dallas-Fort Worth Metroplex</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Don't See Your Area Listed?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to confirm service availability for your specific location.
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
              className="bg-gray-300 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-400 inline-flex items-center justify-center"
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
