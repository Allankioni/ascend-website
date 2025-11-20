'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Zap, Snowflake, TestTube, Calendar, Mountain, Handshake } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Emergency Medical Deliveries",
      description: "Rapid drone-powered delivery of critical supplies such as blood, antivenom, and life-saving medicines when every second matters.",
      link: "/services#emergency"
    },
    {
      icon: <Snowflake className="w-12 h-12" />,
      title: "Vaccine & Cold-Chain Logistics",
      description: "Safe and reliable transportation of vaccines and temperature-sensitive medicines with cold-chain integrity.",
      link: "/services#cold-chain"
    },
    {
      icon: <TestTube className="w-12 h-12" />,
      title: "Laboratory Sample Transport",
      description: "Fast, secure movement of diagnostic samples from remote clinics to central laboratories, speeding up diagnosis.",
      link: "/services#lab-samples"
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Routine Medical Supply Distribution",
      description: "Scheduled deliveries of essential drugs, consumables, and test kits ensuring uninterrupted care.",
      link: "/services#routine"
    },
    {
      icon: <Mountain className="w-12 h-12" />,
      title: "Remote & Hard-to-Reach Access",
      description: "Specialized last-mile delivery for communities isolated by poor infrastructure or rough terrain.",
      link: "/services#remote-access"
    },
    {
      icon: <Handshake className="w-12 h-12" />,
      title: "Partnership & Integration Services",
      description: "Collaborating with governments, NGOs, and healthcare providers to embed drone logistics into national supply chains.",
      link: "/services#partnerships"
    }
  ];

  return (
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
            Comprehensive Medical Logistics Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Six specialized services designed to save lives and strengthen healthcare systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={service.link}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full cursor-pointer">
                  <div className="text-[#FF5722] mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#003D82] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="text-[#FF5722] font-semibold hover:underline">
                    Learn More →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
