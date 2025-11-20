'use client';

import { motion } from 'framer-motion';
import { Phone, Cpu, Plane, MapPin, CheckCircle, Thermometer, Shield, Zap, Radio } from 'lucide-react';

export default function HowItWorksPage() {
  const steps = [
    {
      icon: <Phone className="w-16 h-16" />,
      number: "01",
      title: "Emergency Identified",
      description: "A healthcare facility identifies an urgent need—blood for surgery, antivenom for a snakebite, or vaccines for an outbreak. They submit a request through our integrated platform.",
      details: [
        "24/7 emergency hotline",
        "Integrated with hospital systems",
        "Instant request processing"
      ]
    },
    {
      icon: <Cpu className="w-16 h-16" />,
      number: "02",
      title: "Automated System Activation",
      description: "Our intelligent system instantly selects the optimal drone, calculates the fastest route, and verifies cold-chain requirements. No delays, no human error.",
      details: [
        "AI-powered route optimization",
        "Weather and terrain analysis",
        "Automatic pre-flight checks"
      ]
    },
    {
      icon: <Plane className="w-16 h-16" />,
      number: "03",
      title: "Real-Time Delivery",
      description: "The drone launches autonomously, navigating terrain and weather while maintaining cold-chain integrity. Real-time tracking keeps healthcare providers informed every second.",
      details: [
        "Autonomous navigation",
        "Live GPS tracking",
        "Temperature monitoring"
      ]
    },
    {
      icon: <MapPin className="w-16 h-16" />,
      number: "04",
      title: "Precision Landing",
      description: "Secure landing at the designated location. Healthcare workers retrieve the package immediately—fresh, intact, and ready to save lives.",
      details: [
        "GPS-guided precision landing",
        "Secure payload compartment",
        "Instant package retrieval"
      ]
    },
    {
      icon: <CheckCircle className="w-16 h-16" />,
      number: "05",
      title: "Impact Tracking",
      description: "Digital receipt confirms delivery. Data flows back to strengthen the system, ensuring continuous improvement and accountability.",
      details: [
        "Delivery confirmation",
        "Impact metrics collection",
        "System optimization"
      ]
    }
  ];

  const techFeatures = [
    {
      icon: <Thermometer className="w-12 h-12" />,
      title: "Cold-Chain Technology",
      description: "Temperature-controlled payload compartments maintain optimal conditions from 2-8°C, with real-time monitoring and alerts."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Safety Features",
      description: "Redundant systems, obstacle detection and avoidance, emergency protocols, and fail-safe mechanisms ensure safe operations."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "High Performance",
      description: "Flight range up to 100km, payload capacity of 5kg, speeds up to 100 km/h, and all-weather capabilities."
    },
    {
      icon: <Radio className="w-12 h-12" />,
      title: "Connectivity",
      description: "Real-time telemetry, integrated with health information systems, and secure encrypted communications."
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-linear-to-br from-[#003D82] to-[#0055AA] text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Delivering Hope at 100 Kilometers per Hour
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-200">
              From request to delivery in minutes—here's how Ascend works
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
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
              Step-by-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our seamless delivery workflow ensures maximum speed and reliability
            </p>
          </motion.div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-6 mb-6">
                    <div className="text-[#FF5722]">{step.icon}</div>
                    <div>
                      <div className="text-6xl font-bold text-[#FF5722]/20 mb-2">{step.number}</div>
                      <h3 className="text-3xl font-bold text-[#003D82]">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-600">
                        <CheckCircle className="w-5 h-5 text-[#FF5722] flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-[#F5F5F5] p-12 rounded-2xl text-center">
                    <div className="text-8xl mb-4">
                      {index === 0 && '📱'}
                      {index === 1 && '🤖'}
                      {index === 2 && '🚁'}
                      {index === 3 && '📍'}
                      {index === 4 && '✅'}
                    </div>
                    <p className="text-lg text-gray-600 italic">
                      {index === 0 && 'Instant request processing'}
                      {index === 1 && 'AI-powered dispatch'}
                      {index === 2 && 'Autonomous navigation'}
                      {index === 3 && 'Precision delivery'}
                      {index === 4 && 'Confirmed and tracked'}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Deep Dive */}
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
              Technology Deep Dive
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology designed for life-saving missions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="text-[#FF5722] mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-[#003D82] mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#003D82] mb-6">
              Technical Specifications
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { label: "Flight Range", value: "Up to 100 km" },
              { label: "Payload Capacity", value: "Up to 5 kg" },
              { label: "Maximum Speed", value: "100 km/h" },
              { label: "Average Delivery Time", value: "8-15 minutes" },
              { label: "Temperature Control", value: "2-8°C maintained" },
              { label: "Operating Conditions", value: "All-weather capable" },
              { label: "Safety Systems", value: "Triple redundancy" },
              { label: "Regulatory Compliance", value: "Fully certified" }
            ].map((spec, index) => (
              <div key={index} className="bg-[#F5F5F5] p-6 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">{spec.label}</div>
                <div className="text-2xl font-bold text-[#003D82]">{spec.value}</div>
              </div>
            ))}
          </motion.div>
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
              See Ascend in Action
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
              Partner with us to bring life-saving drone delivery to your community
            </p>
            <a
              href="/partners#contact"
              className="inline-block bg-[#FF5722] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#E84A27] transition-all shadow-lg"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
