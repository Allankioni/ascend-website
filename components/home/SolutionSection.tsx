'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SolutionSection() {
  const steps = [
    { number: "1", label: "Emergency Call", time: "0:00" },
    { number: "2", label: "Drone Dispatched", time: "0:30" },
    { number: "3", label: "In Flight", time: "1:00" },
    { number: "4", label: "Delivery Complete", time: "8:00" }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-linear-to-br from-[#003D82] to-[#0055AA] text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technology That Closes the Gap Between Life and Loss
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Faster, smarter delivery when minutes matter most
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/30 transform -translate-y-1/2 hidden md:block"></div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  <div className="w-20 h-20 bg-[#FF5722] rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.label}</h3>
                  <p className="text-2xl font-bold text-[#FF5722]">{step.time}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 max-w-4xl mx-auto"
        >
          <p className="text-lg leading-relaxed text-center mb-8">
            Ascend provides a faster, smarter way to deliver life-saving medical supplies. 
            Using drone technology, we bypass traffic, poor roads, and difficult terrain to ensure 
            critical items such as blood, antivenom, and vaccines arrive within minutes, not hours. 
            Our drones maintain cold-chain integrity, protecting sensitive medicines from spoilage and waste.
          </p>
          <div className="text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 bg-[#FF5722] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#E84A27] transition-all"
            >
              Learn More About Our Technology
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
