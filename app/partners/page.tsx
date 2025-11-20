'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Globe, TrendingUp, Mail, Phone, MapPin, Download, FileText } from 'lucide-react';

export default function PartnersPage() {
  const [activeTab, setActiveTab] = useState('healthcare');

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-linear-to-br from-[#003D82] to-[#0055AA] text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Partner With Us to Transform Healthcare Delivery
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-200">
              Whether you're a healthcare provider, government agency, NGO, or investor, let's save lives together
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#003D82] mb-6">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the partnership model that aligns with your mission
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Building2 className="w-12 h-12" />,
                title: "Healthcare Providers",
                description: "Hospitals, clinics, health centers, and pharmacies",
                benefits: [
                  "Eliminate supply chain delays",
                  "24/7 emergency delivery access",
                  "Reduced logistics costs",
                  "Improved patient outcomes"
                ]
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "Government & NGOs",
                description: "Health ministries, local governments, international organizations",
                benefits: [
                  "National health system integration",
                  "Scalable solutions",
                  "Population health improvement",
                  "Sustainable infrastructure"
                ]
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: "Investors & Funders",
                description: "Impact investors, VC, development finance, foundations",
                benefits: [
                  "Social impact + financial returns",
                  "Proven business model",
                  "Growing market opportunity",
                  "Measurable outcomes"
                ]
              }
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#F5F5F5] p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="text-[#FF5722] mb-4">{partner.icon}</div>
                <h3 className="text-2xl font-bold text-[#003D82] mb-2">{partner.title}</h3>
                <p className="text-gray-600 mb-6">{partner.description}</p>
                <ul className="space-y-2">
                  {partner.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-[#FF5722] mt-1">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="section-padding bg-[#F5F5F5]">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#003D82] mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Let's discuss how we can work together to save lives
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: 'healthcare', label: 'Healthcare Provider' },
              { id: 'government', label: 'Government/NGO' },
              { id: 'investor', label: 'Investor' },
              { id: 'general', label: 'General Inquiry' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#FF5722] text-white'
                    : 'bg-white text-[#003D82] hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Form */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-10 rounded-2xl shadow-lg"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {activeTab === 'investor' ? 'Your Name' : 'Contact Name'} *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5722] focus:border-transparent outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {activeTab === 'general' ? 'Email' : 'Organization'} *
                  </label>
                  <input
                    type={activeTab === 'general' ? 'email' : 'text'}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5722] focus:border-transparent outline-none"
                    placeholder={activeTab === 'general' ? 'john@email.com' : 'Organization Name'}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5722] focus:border-transparent outline-none"
                    placeholder="john@organization.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5722] focus:border-transparent outline-none"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {activeTab === 'healthcare' && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Facility Type *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5722] focus:border-transparent outline-none">
                    <option>Select facility type</option>
                    <option>Hospital</option>
                    <option>Clinic</option>
                    <option>Health Center</option>
                    <option>Pharmacy</option>
                    <option>Other</option>
                  </select>
                </div>
              )}

              {activeTab === 'government' && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Organization Type *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5722] focus:border-transparent outline-none">
                    <option>Select organization type</option>
                    <option>Government Ministry</option>
                    <option>Local Government</option>
                    <option>International NGO</option>
                    <option>UN Agency</option>
                    <option>Other</option>
                  </select>
                </div>
              )}

              {activeTab === 'investor' && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Investor Type *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5722] focus:border-transparent outline-none">
                    <option>Select investor type</option>
                    <option>Angel Investor</option>
                    <option>Venture Capital</option>
                    <option>Impact Fund</option>
                    <option>Foundation</option>
                    <option>Development Finance</option>
                    <option>Other</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Location/Region *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5722] focus:border-transparent outline-none"
                  placeholder="City, Country"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5722] focus:border-transparent outline-none resize-none"
                  placeholder="Tell us about your interest in partnering with Ascend..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF5722] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#E84A27] transition-all shadow-lg"
              >
                Submit Partnership Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Mail className="w-12 h-12 text-[#FF5722] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#003D82] mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">General Inquiries:</p>
              <a href="mailto:contact@ascend.com" className="text-[#FF5722] hover:underline">
                contact@ascend.com
              </a>
              <p className="text-gray-600 mt-4 mb-2">Press & Media:</p>
              <a href="mailto:press@ascend.com" className="text-[#FF5722] hover:underline">
                press@ascend.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Phone className="w-12 h-12 text-[#FF5722] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#003D82] mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">Main Office:</p>
              <a href="tel:+15551234567" className="text-[#FF5722] hover:underline">
                +1 (555) 123-4567
              </a>
              <p className="text-gray-600 mt-4 mb-2">Emergency Hotline:</p>
              <a href="tel:+15559876543" className="text-[#FF5722] hover:underline">
                +1 (555) 987-6543
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <MapPin className="w-12 h-12 text-[#FF5722] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#003D82] mb-2">Visit Us</h3>
              <p className="text-gray-600">
                123 Innovation Drive<br />
                Tech City, TC 12345<br />
                United States
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section id="press" className="section-padding bg-[#F5F5F5]">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#003D82] mb-6">
              Press & Media Resources
            </h2>
            <p className="text-xl text-gray-600">
              Download our media kit and learn more about Ascend
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <Download />, title: "Company Logo Pack", desc: "SVG, PNG formats" },
              { icon: <FileText />, title: "Fact Sheet", desc: "Company overview & stats" },
              { icon: <FileText />, title: "Press Release", desc: "Latest announcements" },
              { icon: <Download />, title: "Drone Photos", desc: "High-resolution images" }
            ].map((item, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-4 text-left"
              >
                <div className="text-[#FF5722]">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-[#003D82] mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-linear-to-r from-[#003D82] to-[#0055AA] text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Save Lives Together
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
              Every partnership brings us closer to a world where no life is lost because help arrived too late
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
