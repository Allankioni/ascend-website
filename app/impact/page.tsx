'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, MapPin, Clock, Heart, Package } from 'lucide-react';

export default function ImpactPage() {
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
              Measuring What Matters: Lives Saved
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-200">
              Every flight tells a story. Here's our growing impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Launch Message */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-8xl mb-8">🚀</div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003D82] mb-6">
              Building the Future of Healthcare Delivery
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              We're preparing to launch operations that will transform medical logistics for underserved communities. 
              Our technology is ready, our partnerships are forming, and our commitment to saving lives is unwavering.
            </p>
            <div className="bg-[#F5F5F5] p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[#003D82] mb-4">Launch Timeline</h3>
              <p className="text-lg text-gray-600">
                <strong>Phase 1 (Pilot Program):</strong> Targeting Q1 2026<br />
                <strong>Target Region:</strong> Remote and underserved communities<br />
                <strong>Initial Focus:</strong> Emergency blood delivery and vaccine transport
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expected Impact */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#003D82] mb-6">
              Projected Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our evidence-based projections for the first year of operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Package className="w-12 h-12" />,
                metric: "10,000+",
                label: "Projected Deliveries",
                description: "Critical medical supplies delivered in Year 1"
              },
              {
                icon: <Heart className="w-12 h-12" />,
                metric: "500+",
                label: "Lives Saved",
                description: "Direct impact through emergency deliveries"
              },
              {
                icon: <Users className="w-12 h-12" />,
                metric: "50,000+",
                label: "People Served",
                description: "Community members with improved access"
              },
              {
                icon: <MapPin className="w-12 h-12" />,
                metric: "25+",
                label: "Healthcare Facilities",
                description: "Clinics and hospitals connected"
              },
              {
                icon: <Clock className="w-12 h-12" />,
                metric: "12 min",
                label: "Average Delivery",
                description: "From request to delivery"
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                metric: "85%",
                label: "Cost Reduction",
                description: "vs. emergency courier services"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="text-[#FF5722] flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-[#003D82] mb-2">{stat.metric}</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Examples */}
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
              Impact Scenarios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of how Ascend will transform healthcare delivery
            </p>
          </motion.div>

          <div className="space-y-12">
            {/* Scenario 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#F5F5F5] p-10 rounded-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-3xl font-bold text-[#003D82] mb-4">
                    Emergency Antivenom Delivery
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <p><strong className="text-[#FF5722]">The Emergency:</strong> A patient is bitten by a venomous snake at a remote health clinic. The facility has no antivenom in stock.</p>
                    <p><strong className="text-[#FF5722]">The Challenge:</strong> The nearest antivenom supply is 2 hours away by road. The patient's condition is deteriorating rapidly.</p>
                    <p><strong className="text-[#FF5722]">The Ascend Solution:</strong> Drone dispatched with antivenom, delivered in 12 minutes.</p>
                    <p><strong className="text-[#FF5722]">The Outcome:</strong> Patient receives treatment in time, makes full recovery. Time saved: 108 minutes.</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-9xl">⚡</div>
                </div>
              </div>
            </motion.div>

            {/* Scenario 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#F5F5F5] p-10 rounded-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="flex items-center justify-center order-2 lg:order-1">
                  <div className="text-9xl">💉</div>
                </div>
                <div className="lg:col-span-2 order-1 lg:order-2">
                  <h3 className="text-3xl font-bold text-[#003D82] mb-4">
                    Vaccine Campaign in Island Community
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <p><strong className="text-[#FF5722]">The Challenge:</strong> Island community of 5,000 people has ferry access only twice per week. Vaccine cold-chain is compromised during long transport times.</p>
                    <p><strong className="text-[#FF5722]">The Ascend Solution:</strong> Regular drone deliveries maintaining cold-chain integrity, vaccines arrive fresh and ready.</p>
                    <p><strong className="text-[#FF5722]">The Projected Outcome:</strong> Immunization coverage increases from 45% to 85%+, vaccine wastage reduced by 75%, 1,200+ children fully immunized.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Scenario 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#F5F5F5] p-10 rounded-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-3xl font-bold text-[#003D82] mb-4">
                    Emergency Blood for Postpartum Hemorrhage
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <p><strong className="text-[#FF5722]">The Emergency:</strong> A mother experiences postpartum hemorrhage. Immediate blood transfusion needed, but hospital blood bank is depleted.</p>
                    <p><strong className="text-[#FF5722]">The Challenge:</strong> Regional blood bank is 45 minutes away by road during rush hour.</p>
                    <p><strong className="text-[#FF5722]">The Ascend Solution:</strong> Two units of blood type O-negative delivered in 9 minutes via drone.</p>
                    <p><strong className="text-[#FF5722]">The Outcome:</strong> Transfusion completed in time, mother stabilizes, healthy baby, family reunited.</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-9xl">❤️</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Long-term Vision */}
      <section className="section-padding bg-[#003D82] text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Long-Term Vision
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              From pilot program to national scale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                phase: "Year 1-2",
                title: "Pilot & Expansion",
                goals: [
                  "Launch pilot program",
                  "10,000+ deliveries",
                  "25+ facilities connected",
                  "Regional partnerships established"
                ]
              },
              {
                phase: "Year 3-4",
                title: "National Integration",
                goals: [
                  "Scale to national level",
                  "100,000+ deliveries",
                  "200+ facilities connected",
                  "Government health system integration"
                ]
              },
              {
                phase: "Year 5+",
                title: "Multi-Country Operations",
                goals: [
                  "Expand across regions",
                  "1M+ deliveries annually",
                  "Thousands of facilities served",
                  "Millions of lives impacted"
                ]
              }
            ].map((vision, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl"
              >
                <div className="text-[#FF5722] font-bold text-lg mb-2">{vision.phase}</div>
                <h3 className="text-2xl font-bold mb-6">{vision.title}</h3>
                <ul className="space-y-3">
                  {vision.goals.map((goal, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#FF5722] mt-1">✓</span>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-linear-to-r from-[#FF5722] to-[#E84A27] text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Be Part of Our Launch
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join us as a founding partner and help us save lives from day one
            </p>
            <a
              href="/partners#contact"
              className="inline-block bg-white text-[#FF5722] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Partner With Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
