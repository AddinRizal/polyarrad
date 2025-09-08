
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Award, Users, Beaker } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Hero = () => {
  const handleLearnMore = () => {
    const element = document.getElementById('tentang');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // const handleContactClick = () => {
  //   toast({
  //     title: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀"
  //   });
  // };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-bg"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full floating-animation"></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full floating-animation"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full floating-animation"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6"
            >
              <Award className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Terpercaya Sejak 1998</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Solusi Kimia
              <br />
              <span className="text-cyan-300">Terpadu</span> untuk
              <br />
              Sistem Air
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-200 mb-8 leading-relaxed"
            >
              PT. Poly Arrad Pusaka menyediakan bahan kimia berkualitas tinggi
              untuk sistem air dan pengolahan limbah dengan teknologi terdepan
              dan layanan profesional untuk berbagai industri di Indonesia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                onClick={handleLearnMore}
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
              >
                Pelajari Lebih Lanjut
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                onClick={() => scrollToSection('kontak')}
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold"
              >
                Konsultasi Gratis
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-300">25+</div>
                <div className="text-sm text-gray-300">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-300">500+</div>
                <div className="text-sm text-gray-300">Klien Terpercaya</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-300">50+</div>
                <div className="text-sm text-gray-300">Produk Unggulan</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-0">
              <img
                className="w-full h-auto rounded-2xl shadow-2xl"
                alt="Fasilitas manufaktur PT. Poly Arrad Pusaka"
                src="https://images.unsplash.com/photo-1621921712505-a2228ad77c76"
              />
            </div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -top-6 -left-6 z-20 bg-white/20 backdrop-blur-md rounded-xl p-4 glass-effect pointer-events-none"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-cyan-400 rounded-lg flex items-center justify-center">
                  <Beaker className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Laboratorium</div>
                  <div className="text-cyan-200 text-sm">Fasilitas R&D</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 }}
              className="absolute -bottom-6 -right-6 z-20 bg-white/20 backdrop-blur-md rounded-xl p-4 glass-effect pointer-events-none"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Tim Ahli</div>
                  <div className="text-cyan-200 text-sm">Berpengalaman</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
