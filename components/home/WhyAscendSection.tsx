'use client';

import { motion } from 'framer-motion';
import { Timer, Map, Thermometer, TrendingDown, Shield } from 'lucide-react';

export default function WhyAscendSection() {
  const reasons = [
    {
      icon: <Timer className="w-12 h-12" />,
      title: "Speed that Saves Lives",
      description: "Delivering critical medical supplies in minutes when every second counts."
    },
    {
      icon: <Map className="w-12 h-12" />,
      title: "Reach Beyond Roads",
      description: "Serving remote and underserved areas where ground transport can't."
    },
    {
      icon: <Thermometer className="w-12 h-12" />,
      title: "Cold-Chain Assurance",
      description: "Safe, reliable delivery of temperature-sensitive medicines and vaccines."
    },
    {
      icon: <TrendingDown className="w-12 h-12" />,
      title: "Cost-Effective at Scale",
      description: "Reducing dependency on expensive and unsustainable emergency couriers."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Trusted Partnerships",
      description: "Collaborating with governments, NGOs, and healthcare providers to strengthen health systems."
    }
  ];

  return (
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
            Why Choose Ascend
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Five key reasons why organizations trust us to transform healthcare delivery
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-[#FF5722]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#FF5722]">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-[#003D82] mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
