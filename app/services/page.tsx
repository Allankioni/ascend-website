'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Zap, Snowflake, TestTube, Calendar, Mountain, Handshake, ArrowRight, CheckCircle } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      id: "emergency",
      icon: <Zap className="w-16 h-16" />,
      title: "Emergency Medical Deliveries",
      tagline: "When Every Second Matters",
      description: "Rapid drone-powered delivery of critical supplies such as blood, antivenom, and life-saving medicines to hospitals and clinics when every second matters.",
      longDescription: "When emergencies strike, every second counts. Our emergency delivery service ensures that critical medical supplies reach healthcare facilities in minutes, not hours. Whether it's blood for an emergency surgery, antivenom for a snakebite victim, or emergency medications for a critical patient, Ascend's drones bypass all ground obstacles to deliver hope at unprecedented speed.",
      useCases: [
        "Emergency blood transfusions for surgical procedures",
        "Antivenom delivery for snakebite emergencies",
        "Critical medications for life-threatening conditions",
        "Emergency contraceptives and reproductive health supplies",
        "Trauma care supplies for accident victims"
      ],
      benefits: [
        "Average delivery time: 8-15 minutes",
        "Available 24/7/365",
        "Weather-resilient operations",
        "No traffic or road dependency",
        "Eliminates preventable deaths due to delay"
      ],
      emoji: "⚡"
    },
    {
      id: "cold-chain",
      icon: <Snowflake className="w-16 h-16" />,
      title: "Vaccine & Cold-Chain Logistics",
      tagline: "Protecting Life-Saving Medicines",
      description: "Safe and reliable transportation of vaccines, blood, and other temperature-sensitive medicines with drones equipped to maintain cold-chain integrity.",
      longDescription: "Maintaining the cold chain is critical for vaccine efficacy and blood safety. Our specialized drones are equipped with temperature-controlled payload compartments that ensure medicines remain at optimal temperatures from departure to delivery. Real-time monitoring alerts our team to any deviations, and our rapid delivery times minimize exposure to temperature fluctuations.",
      useCases: [
        "Routine immunization campaigns",
        "COVID-19 and pandemic response vaccines",
        "Blood product transportation",
        "Insulin and temperature-sensitive biologics",
        "Emergency vaccine deployment during outbreaks"
      ],
      benefits: [
        "Maintains 2-8°C for vaccines",
        "Real-time temperature monitoring",
        "Reduces vaccine wastage",
        "Extends reach to remote communities",
        "Compliance with WHO cold-chain standards"
      ],
      emoji: "❄️"
    },
    {
      id: "lab-samples",
      icon: <TestTube className="w-16 h-16" />,
      title: "Laboratory Sample Transport",
      tagline: "Faster Diagnosis, Better Outcomes",
      description: "Fast, secure movement of diagnostic samples (blood tests, biopsies, etc.) from remote clinics to central laboratories, speeding up diagnosis and treatment.",
      longDescription: "Timely diagnosis is the first step to effective treatment. Our laboratory sample transport service connects remote health facilities with central diagnostic laboratories, dramatically reducing turnaround times for test results. Samples are transported securely and quickly, maintaining integrity and enabling faster clinical decisions.",
      useCases: [
        "Blood samples for diagnostic testing",
        "Biopsy specimens for cancer diagnosis",
        "COVID-19 and infectious disease testing",
        "Prenatal screening samples",
        "Tuberculosis and malaria diagnostics"
      ],
      benefits: [
        "Reduces diagnosis time from days to hours",
        "Maintains sample integrity",
        "Enables faster treatment decisions",
        "Expands diagnostic access to remote areas",
        "Secure, tracked transport"
      ],
      emoji: "🔬"
    },
    {
      id: "routine",
      icon: <Calendar className="w-16 h-16" />,
      title: "Routine Medical Supply Distribution",
      tagline: "Ensuring Uninterrupted Care",
      description: "Scheduled deliveries of essential drugs, consumables, and test kits to hospitals, pharmacies, and rural health facilities, ensuring uninterrupted care.",
      longDescription: "Beyond emergencies, healthcare facilities need reliable, regular supply of essential medicines and consumables. Our scheduled delivery service ensures that clinics never run out of the supplies they need to provide continuous care. From antiretrovirals to antimalarials, from bandages to diagnostic kits, we keep healthcare flowing.",
      useCases: [
        "Weekly medication restocking for rural clinics",
        "Pharmaceutical distribution to pharmacies",
        "Consumables and supplies for primary care",
        "Antiretroviral drugs for HIV/AIDS treatment",
        "Antimalarial medications for endemic regions"
      ],
      benefits: [
        "Predictable, reliable delivery schedules",
        "Reduces stockouts and overstocking",
        "Lower logistics costs than traditional methods",
        "Frees up healthcare workers from supply runs",
        "Enables better inventory management"
      ],
      emoji: "📦"
    },
    {
      id: "remote-access",
      icon: <Mountain className="w-16 h-16" />,
      title: "Remote & Hard-to-Reach Access",
      tagline: "Where Roads End, We Begin",
      description: "Specialized last-mile delivery solutions for clinics and communities isolated by poor infrastructure, rough terrain, or long travel times.",
      longDescription: "No community should be beyond reach of healthcare. Our specialized service targets the most isolated areas—communities separated by mountains, rivers, dense forests, or simply impassable roads during rainy seasons. Where ground vehicles take hours or can't go at all, our drones arrive in minutes, ensuring geographic isolation never means healthcare isolation.",
      useCases: [
        "Island communities without ferry access",
        "Mountain villages with seasonal road access",
        "Flood-prone areas during rainy season",
        "Conflict or disaster zones with damaged infrastructure",
        "Pastoral nomadic communities"
      ],
      benefits: [
        "Overcomes all terrain barriers",
        "Year-round access regardless of weather",
        "Serves populations previously unreachable",
        "Reduces health inequity",
        "Enables consistent care in crisis zones"
      ],
      emoji: "⛰️"
    },
    {
      id: "partnerships",
      icon: <Handshake className="w-16 h-16" />,
      title: "Partnership & Integration Services",
      tagline: "Building Sustainable Solutions Together",
      description: "Collaborating with governments, NGOs, and healthcare providers to embed drone logistics into national supply chains for long-term sustainability and scale.",
      longDescription: "Transforming healthcare logistics requires more than technology—it requires partnership. We work closely with governments, health ministries, NGOs, and healthcare networks to integrate drone delivery into existing health systems. Our approach ensures sustainability, builds local capacity, and creates lasting impact at scale.",
      useCases: [
        "Government health ministry partnerships for national integration",
        "NGO collaborations for humanitarian and development programs",
        "Hospital network partnerships for regional logistics hubs",
        "Pharmaceutical company partnerships for last-mile access",
        "International organization partnerships for emergency response"
      ],
      benefits: [
        "Long-term sustainability beyond pilot projects",
        "Integration with national health information systems",
        "Capacity building and knowledge transfer",
        "Scalable solutions from district to national level",
        "Aligned with government health priorities"
      ],
      emoji: "🤝"
    }
  ];

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
              Comprehensive Medical Logistics Solutions
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-200">
              Six specialized services designed to save lives and strengthen healthcare systems
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-white sticky top-20 z-40 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="text-[#003D82] hover:text-[#FF5722] font-medium transition-colors"
              >
                {service.title.split(' ')[0]} →
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Details */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F5]'}`}
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-[#FF5722]">{service.icon}</div>
                  <div>
                    <h2 className="text-4xl font-bold text-[#003D82]">{service.title}</h2>
                    <p className="text-xl text-[#FF5722] mt-2">{service.tagline}</p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {service.longDescription}
                </p>

                <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                  <h3 className="text-xl font-bold text-[#003D82] mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#FF5722] flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-linear-to-br from-[#003D82] to-[#0055AA] text-white p-10 rounded-2xl mb-8">
                  <div className="text-8xl text-center mb-6">{service.emoji}</div>
                  <p className="text-center text-xl italic">{service.description}</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-[#003D82] mb-4">Use Cases</h3>
                  <ul className="space-y-3">
                    {service.useCases.map((useCase, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#FF5722] font-bold flex-shrink-0">•</span>
                        <span className="text-gray-700">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

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
              Ready to Transform Your Healthcare Delivery?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let's discuss which services best meet your community's needs
            </p>
            <Link
              href="/partners#contact"
              className="inline-flex items-center gap-2 bg-white text-[#FF5722] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
