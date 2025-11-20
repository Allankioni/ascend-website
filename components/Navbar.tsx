'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/services', label: 'Services' },
    { href: '/impact', label: 'Impact' },
    { href: '/partners', label: 'Partners' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className={`text-3xl font-bold ${isScrolled ? 'text-[#003D82]' : 'text-white'}`}>
            ASCEND
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors whitespace-nowrap ${
                isScrolled
                  ? 'text-[#333333] hover:text-[#FF5722]'
                  : 'text-white hover:text-[#FF5722]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/partners#contact"
            className="bg-[#FF5722] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#E84A27] transition-all"
          >
            Partner With Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden ${isScrolled ? 'text-[#003D82]' : 'text-white'}`}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="flex flex-col space-y-4 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#333333] hover:text-[#FF5722] font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/partners#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-[#FF5722] text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#E84A27] transition-all"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
