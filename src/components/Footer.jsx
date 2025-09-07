
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: "Beranda", href: "#beranda" },
    { name: "Tentang Kami", href: "#tentang" },
    { name: "Produk", href: "#produk" },
    { name: "Layanan", href: "#layanan" },
    { name: "Klien", href: "#klien" }
  ];

  const products = [
    "Influent & Effluent Treatment",
    "Boiler Treatment", 
    "Cooling System",
    "Reverse Osmosis",
    "Wastewater Treatment"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", color: "hover:text-sky-500" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-700" },
    { icon: Instagram, href: "#", color: "hover:text-pink-600" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Arrad Chemicals
                </span>
                <p className="text-xs text-gray-400">PT. Poly Arrad Pusaka</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Perusahaan kimia terkemuka yang menyediakan solusi terpadu untuk
              sistem air dan pengolahan limbah sejak 1998.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Surabaya, Jawa Timur, Indonesia
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+62-31-8432268</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  pap_pt@arradchemicals.com
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-lg font-semibold text-white mb-6 block">
              Navigasi
            </span>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-lg font-semibold text-white mb-6 block">
              Produk Kami
            </span>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm">{product}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-lg font-semibold text-white mb-6 block">
              Ikuti Kami
            </span>

            <p className="text-gray-300 text-sm mb-6">
              Dapatkan update terbaru tentang produk dan layanan kami.
            </p>

            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-colors`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <span className="text-sm font-medium text-white block mb-2">
                Jam Operasional
              </span>
              <p className="text-gray-300 text-xs">
                Senin - Jumat: 08:00 - 16:00
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 PT. Poly Arrad Pusaka. Semua hak dilindungi.
            </p>
            <div className="flex space-x-6">
              <span className="text-gray-400 text-sm hover:text-cyan-400 transition-colors cursor-pointer">
                Kebijakan Privasi
              </span>
              <span className="text-gray-400 text-sm hover:text-cyan-400 transition-colors cursor-pointer">
                Syarat & Ketentuan
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
