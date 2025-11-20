'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 bg-linear-to-br from-[#003D82] via-[#0055AA] to-[#003D82]">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Placeholder for video background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="text-white text-9xl">🚁</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Every Second Counts
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto font-light">
            Delivering life-saving medical supplies in minutes, not hours
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="#how-it-works"
              className="btn-primary flex items-center gap-2"
            >
              See How It Works
              <Play size={20} />
            </Link>
            <Link
              href="/partners#contact"
              className="btn-secondary flex items-center gap-2"
            >
              Partner With Us
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
