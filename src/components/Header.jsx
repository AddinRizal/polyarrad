
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleContactClick = () => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀"
    });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">Arrad Chemicals</h1>
              <p className="text-xs text-gray-600">PT. Poly Arrad Pusaka</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('beranda')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection('tentang')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Tentang Kami
            </button>
            <button
              onClick={() => scrollToSection('produk')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Produk
            </button>
            <button
              onClick={() => scrollToSection('layanan')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection('klien')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Klien
            </button>
            <Button
              onClick={handleContactClick}
              className="gradient-bg text-white hover:opacity-90"
            >
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4"
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('beranda')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollToSection('tentang')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Tentang Kami
              </button>
              <button
                onClick={() => scrollToSection('produk')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Produk
              </button>
              <button
                onClick={() => scrollToSection('layanan')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Layanan
              </button>
              <button
                onClick={() => scrollToSection('klien')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Klien
              </button>
              <Button
                onClick={handleContactClick}
                className="gradient-bg text-white hover:opacity-90 w-full"
              >
                Hubungi Kami
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
