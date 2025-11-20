'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="section-padding bg-linear-to-r from-[#003D82] to-[#0055AA] text-white">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Healthcare Delivery?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-200">
            Join us in building a world where no life is lost because help arrived too late
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/partners#contact"
              className="bg-[#FF5722] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#E84A27] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
            >
              Become a Partner
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/about"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#003D82] transition-all flex items-center gap-2"
            >
              Learn More About Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
