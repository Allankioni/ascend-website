'use client';

import { motion } from 'framer-motion';
import { Target, Compass, Heart, Users, Lightbulb, Zap } from 'lucide-react';

export default function AboutPage() {
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
              Building the Future of Healthcare Delivery
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-200">
              At Ascend, we believe that every second counts. Too often, lives are lost simply because help did not arrive in time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-16 h-16 text-[#FF5722]" />
                <h2 className="text-4xl md:text-5xl font-bold text-[#003D82]">
                  Our Vision
                </h2>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                A world where no life is lost because help arrived too late. We envision a world where no life is lost because help arrived too late. Our dream is to eliminate distance and delay as barriers to healthcare access. By harnessing the power of drone technology and building a connected logistics ecosystem, we strive to ensure that every community — no matter how remote — can receive life-saving medical supplies in minutes. We believe that time should never be the difference between hope and despair, and our vision is to create a future where every second truly counts.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#F5F5F5] p-12 rounded-2xl"
            >
              <div className="text-9xl text-center mb-6">🌍</div>
              <p className="text-lg text-gray-600 text-center italic">
                "A world where distance and delay never stand between patients and the care they deserve"
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 bg-white p-12 rounded-2xl shadow-lg"
            >
              <div className="text-9xl text-center mb-6">🚁</div>
              <p className="text-lg text-gray-600 text-center italic">
                "Building a seamless medical logistics ecosystem that delivers life-saving care in real time"
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <Compass className="w-16 h-16 text-[#FF5722]" />
                <h2 className="text-4xl md:text-5xl font-bold text-[#003D82]">
                  Our Mission
                </h2>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                At Ascend, our mission is to build a seamless medical logistics ecosystem powered by drone technology. We unite healthcare providers, communities, and innovation in a connected network that delivers life-saving care in real time. By overcoming the barriers of distance, terrain, and delay, we ensure that no patient is left waiting when every second matters. More than technology, our mission is about people — creating a future where hope, health, and help arrive from the skies within minutes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
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
              Our Story
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              At Ascend, we believe that every second counts. Too often, lives are lost simply because help did not arrive in time. Our vision is simple yet bold: a world where no life is lost because help arrived too late.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              To achieve this, we are building a seamless medical logistics ecosystem powered by drone technology. By uniting healthcare providers, communities, and innovation, we are creating a connected network that delivers life-saving care in real time. No mountain, no distance, and no delay should ever stand between patients and the treatment they deserve.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              More than technology, Ascend is about people. It's about mothers who can hold on to hope, children who can grow up healthy, and communities that can thrive because access to care is no longer determined by geography. We exist to make sure that when minutes matter most, help is already on the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-[#003D82] text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { icon: <Zap className="w-12 h-12" />, title: "Speed", description: "We move fast because lives depend on it" },
              { icon: <Target className="w-12 h-12" />, title: "Excellence", description: "We hold ourselves to the highest standards" },
              { icon: <Heart className="w-12 h-12" />, title: "Empathy", description: "We never forget the human impact of our work" },
              { icon: <Users className="w-12 h-12" />, title: "Collaboration", description: "We achieve more together" },
              { icon: <Lightbulb className="w-12 h-12" />, title: "Innovation", description: "We constantly seek better solutions" },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-[#FF5722]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#FF5722]">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-linear-to-r from-[#FF5722] to-[#E84A27] text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Us in Saving Lives
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Whether you're a healthcare provider, government agency, or investor, let's work together to transform healthcare delivery
            </p>
            <a
              href="/partners#contact"
              className="inline-block bg-white text-[#FF5722] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Partner With Us
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
