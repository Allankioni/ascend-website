import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#003D82] text-white">
      <div className="container-custom px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ASCEND</h3>
            <p className="text-gray-300 mb-4">
              Every Second Counts
            </p>
            <p className="text-gray-300 mb-6">
              Building a seamless medical logistics ecosystem powered by drone technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#FF5722] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#FF5722] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-[#FF5722] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-[#FF5722] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-[#FF5722] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#FF5722] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-300 hover:text-[#FF5722] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#FF5722] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-gray-300 hover:text-[#FF5722] transition-colors">
                  Impact
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-300 hover:text-[#FF5722] transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#emergency" className="text-gray-300 hover:text-[#FF5722] transition-colors">
                  Emergency Deliveries
                </Link>
              </li>
              <li>
                <Link href="/services#cold-chain" className="text-gray-300 hover:text-[#FF5722] transition-colors">
                  Cold-Chain Logistics
                </Link>
              </li>
              <li>
                <Link href="/services#lab-samples" className="text-gray-300 hover:text-[#FF5722] transition-colors">
                  Lab Sample Transport
                </Link>
              </li>
              <li>
                <Link href="/services#routine" className="text-gray-300 hover:text-[#FF5722] transition-colors">
                  Routine Distribution
                </Link>
              </li>
              <li>
                <Link href="/services#remote-access" className="text-gray-300 hover:text-[#FF5722] transition-colors">
                  Remote Access
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <a href="mailto:contact@ascend.com" className="text-gray-300 hover:text-[#FF5722] transition-colors">
                  contact@ascend.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Innovation Drive<br />
                  Tech City, TC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Ascend. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-300 hover:text-[#FF5722] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-[#FF5722] transition-colors">
              Terms of Service
            </Link>
            <Link href="/partners#press" className="text-gray-300 hover:text-[#FF5722] transition-colors">
              Press Kit
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
