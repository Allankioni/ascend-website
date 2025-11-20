'use client';

import { motion } from 'framer-motion';
import { AlertCircle, Clock, TrendingDown, Heart } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: <Clock className="w-12 h-12" />,
      stat: "2+ hours",
      label: "Average delay for emergency supplies"
    },
    {
      icon: <AlertCircle className="w-12 h-12" />,
      stat: "45%",
      label: "Of rural clinics lack blood access"
    },
    {
      icon: <TrendingDown className="w-12 h-12" />,
      stat: "30%",
      label: "Vaccine wastage due to cold chain failures"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      stat: "Thousands",
      label: "Lives lost annually to logistics delays"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Stats */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-[#003D82] mb-6"
            >
              When Help Arrives Too Late
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 mb-12"
            >
              When emergencies strike, existing systems are too slow and fragile
            </motion.p>

            <div className="grid grid-cols-2 gap-8">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-[#FF5722] mb-4 flex justify-center">
                    {problem.icon}
                  </div>
                  <div className="text-3xl font-bold text-[#003D82] mb-2">
                    {problem.stat}
                  </div>
                  <div className="text-sm text-gray-600">
                    {problem.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Image/Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#F5F5F5] p-10 rounded-2xl"
          >
            <div className="text-8xl mb-8 text-center">🏥</div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Poor roads, rough terrain, and centralized warehouses create predictable delays. 
              Weak cold chains spoil life-saving supplies, while costly emergency couriers cannot scale. 
              The result is <span className="font-semibold text-[#FF5722]">preventable deaths</span>, 
              wasted resources, and eroding trust in health systems. Without a new last-mile solution, 
              vulnerable communities remain at risk every hour of every day.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
