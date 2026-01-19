import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, Wrench, Shield, ArrowRight, Droplets, Clock, Home } from 'lucide-react';

// CrawlSpace Component
export function CrawlSpace() {
  return (
    <ServicePageTemplate
      title="Crawl Space Repair & Encapsulation"
      subtitle="Professional crawl space solutions including encapsulation, ventilation, and moisture control."
      serviceIcon={Home}
      sections={[
        {
          title: 'What Is Crawl Space Repair?',
          content: 'Crawl space repair involves assessing and addressing moisture, structural, and environmental issues in the crawl space beneath your home. Proper crawl space maintenance prevents foundation problems, mold growth, and energy loss.'
        }
      ]}
      features={[
        'Vapor barrier installation',
        'Mold remediation',
        'Dehumidification systems',
        'Structural repairs',
        'Ventilation solutions',
        'Insulation installation'
      ]}
      benefits={[
        'Prevents moisture damage',
        'Reduces energy costs',
        'Prevents mold growth',
        'Protects structural integrity',
        'Improves air quality',
        'Increases home value'
      ]}
      warningText="Wet or moldy crawl spaces need immediate attention to prevent structural damage."
    />
  );
}

// Waterproofing Component
export function Waterproofing() {
  return (
    <ServicePageTemplate
      title="Waterproofing Services"
      subtitle="Protect your foundation from water infiltration and moisture damage with professional waterproofing systems."
      serviceIcon={Droplets}
      sections={[
        {
          title: 'What Is Foundation Waterproofing?',
          content: 'Foundation waterproofing involves applying protective coatings and installing drainage systems to prevent water from entering your foundation. Water intrusion is one of the leading causes of foundation damage and basement flooding.'
        }
      ]}
      features={[
        'Interior sealants',
        'Exterior waterproof coatings',
        'Sump pump installation',
        'Perimeter drainage',
        'Foundation crack sealing',
        'Moisture barriers'
      ]}
      benefits={[
        'Prevents water damage',
        'Stops basement flooding',
        'Reduces moisture and mold',
        'Protects foundation integrity',
        'Improves air quality',
        'Increases usable space'
      ]}
      warningText="Water stains or dampness indicate waterproofing is needed to prevent serious damage."
    />
  );
}

// Drainage Component
export function Drainage() {
  return (
    <ServicePageTemplate
      title="Drainage Solutions"
      subtitle="Strategic drainage systems to redirect water away from your foundation and prevent future damage."
      serviceIcon={Droplets}
      sections={[
        {
          title: 'What Are Foundation Drainage Solutions?',
          content: 'Proper drainage systems redirect surface and groundwater away from your foundation, preventing water accumulation that causes damage. Strategic grading, gutters, and drainage systems are essential for foundation longevity.'
        }
      ]}
      features={[
        'French drain installation',
        'Foundation grading solutions',
        'Gutter and downspout systems',
        'Perimeter drainage',
        'Sump pump installation',
        'Interior drainage'
      ]}
      benefits={[
        'Prevents water damage',
        'Protects foundation',
        'Reduces settling issues',
        'Prevents flooding',
        'Improves drainage',
        'Long-term protection'
      ]}
      warningText="Poor drainage around your foundation can lead to settlement, cracks, and water intrusion."
    />
  );
}

// Emergency Repairs Component
export function EmergencyRepairs() {
  return (
    <ServicePageTemplate
      title="Emergency Foundation Repairs"
      subtitle="24/7 emergency response for urgent foundation issues. We're here when you need us most."
      serviceIcon={Clock}
      sections={[
        {
          title: 'When Emergencies Happen',
          content: 'Foundation emergencies can occur without warning - major cracks, sudden settling, water flooding, or structural failure. We offer 24/7 emergency service to address urgent issues immediately and prevent further damage.'
        }
      ]}
      features={[
        'Same-day service',
        'Weekend availability',
        'Temporary stabilization',
        'Permanent solutions',
        'Water mitigation',
        'Structural support'
      ]}
      benefits={[
        'Immediate response',
        'Prevents catastrophic damage',
        'Stabilizes structure',
        'Protects occupants',
        'Professional assessment',
        'Temporary and permanent fixes'
      ]}
      warningText="Foundation emergencies require immediate attention. Call us immediately if you notice sudden damage."
    />
  );
}

// Generic Service Page Template
interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  serviceIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  sections: Array<{ title: string; content: string }>;
  features: string[];
  benefits: string[];
  warningText: string;
}

function ServicePageTemplate({
  title,
  subtitle,
  serviceIcon: Icon,
  sections,
  features,
  benefits,
  warningText
}: ServicePageTemplateProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">{subtitle}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description Sections */}
            {sections.map((section, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{section.content}</p>
              </div>
            ))}

            {/* Features */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services Include</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Service Box */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-lg shadow-md mb-8">
              <Icon className="w-12 h-12 mb-4 text-blue-200" />
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className="text-blue-100 mb-6">{subtitle}</p>
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-6 py-2 rounded-lg font-bold hover:bg-blue-50 inline-flex items-center"
              >
                Schedule Inspection
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Why This Service */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why This Matters</h3>
              <ul className="space-y-3">
                {benefits.slice(0, 4).map((benefit, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Warning */}
            <div className="bg-red-50 border border-red-200 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2" />
                Important
              </h3>
              <p className="text-red-800 text-sm">{warningText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Our Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Professional Team',
                description: 'Certified technicians with years of experience in this service'
              },
              {
                title: 'Advanced Equipment',
                description: 'State-of-the-art tools and technology for superior results'
              },
              {
                title: 'Lasting Results',
                description: 'Solutions designed to protect your foundation long-term'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-blue-900 p-6 rounded-lg hover:bg-blue-800 transition-colors">
                <Wrench className="w-8 h-8 text-blue-300 mb-3" />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.description}</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Lifetime Warranty</h2>
              <p className="text-gray-700">
                All our services are backed by our comprehensive lifetime warranty protecting your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Protect Your Foundation?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule your free inspection today and learn how we can help.
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
