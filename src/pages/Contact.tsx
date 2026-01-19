import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Send, CheckCircle, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    serviceType: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service';
    }

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: '',
        serviceType: ''
      });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Ready to schedule your free foundation inspection? Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>

            <div className="space-y-8 mb-12">
              <div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+14695551234" className="text-blue-900 hover:text-blue-700 text-lg font-semibold">
                      (469) 555-1234
                    </a>
                    <p className="text-gray-600 text-sm mt-1">24/7 Emergency Service</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@foundationexperts.com" className="text-blue-900 hover:text-blue-700 font-semibold">
                      info@foundationexperts.com
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Response within 24 hours</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Service Area</h3>
                    <p className="text-gray-600">
                      Dallas-Fort Worth Metroplex
                    </p>
                    <p className="text-gray-600 text-sm mt-1">DFW and surrounding areas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">Business Hours</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><span className="font-semibold">Monday - Friday:</span> 7:00 AM - 6:00 PM</li>
                <li><span className="font-semibold">Saturday:</span> 8:00 AM - 4:00 PM</li>
                <li><span className="font-semibold">Sunday:</span> Closed</li>
                <li className="pt-3 border-t border-blue-200">
                  <span className="font-semibold">Emergency:</span> Available 24/7
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-green-900">Thank you!</h3>
                    <p className="text-green-800 text-sm">
                      We've received your request. A team member will contact you shortly to schedule your free inspection.
                    </p>
                  </div>
                </div>
              )}

              <h2 className="text-3xl font-bold text-gray-900 mb-2">Free Inspection Request</h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll contact you to schedule your free foundation inspection.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-900 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-900 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-gray-900 font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="(469) 555-1234"
                  />
                  {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="address" className="block text-gray-900 font-semibold mb-2">
                    Property Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                      errors.address ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="123 Main Street, Dallas, TX 75001"
                  />
                  {errors.address && <p className="text-red-600 text-sm mt-1">{errors.address}</p>}
                </div>

                {/* Service Type */}
                <div>
                  <label htmlFor="serviceType" className="block text-gray-900 font-semibold mb-2">
                    Service Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                      errors.serviceType ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select a service...</option>
                    <option value="general-inspection">General Inspection</option>
                    <option value="foundation-repair">Foundation Repair</option>
                    <option value="pier-installation">Pier Installation</option>
                    <option value="crawl-space">Crawl Space Repair</option>
                    <option value="waterproofing">Waterproofing</option>
                    <option value="drainage">Drainage Solutions</option>
                    <option value="emergency">Emergency Repair</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.serviceType && <p className="text-red-600 text-sm mt-1">{errors.serviceType}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-gray-900 font-semibold mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                    placeholder="Tell us about your foundation concerns..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Schedule Free Inspection
                </button>

                <p className="text-gray-600 text-sm text-center">
                  We'll contact you shortly to confirm your appointment.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose to Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Free Inspection',
                description: 'No obligation, completely free assessment of your foundation'
              },
              {
                title: 'Expert Advice',
                description: 'Speak with certified professionals who understand foundation issues'
              },
              {
                title: 'Quick Response',
                description: 'Prompt communication and scheduling within 2-3 days'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-blue-900 p-6 rounded-lg text-center">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Quick CTA */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
              <p className="text-gray-600 text-lg mb-6">
                Our team is ready to help. Whether you need more information or want to schedule your free inspection, we're here for you.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+14695551234"
                  className="bg-blue-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (469) 555-1234
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-12 h-96 flex items-center justify-center">
              <MapPin className="w-32 h-32 text-blue-200" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
