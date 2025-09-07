
import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, CheckCircle, FileText, GraduationCap, Wrench, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Monitoring Rutin",
      description: "Pemantauan berkala sistem air untuk memastikan kinerja optimal",
      features: ["Analisis parameter air", "Monitoring real-time", "Laporan berkala"]
    },
    {
      icon: CheckCircle,
      title: "Quality Control",
      description: "Kontrol kualitas ketat untuk menjamin standar produk terbaik",
      features: ["Testing laboratorium", "Sertifikasi kualitas", "Audit sistem"]
    },
    {
      icon: FileText,
      title: "Pelaporan",
      description: "Dokumentasi lengkap dan pelaporan hasil monitoring",
      features: ["Laporan detail", "Analisis tren", "Rekomendasi perbaikan"]
    },
    {
      icon: GraduationCap,
      title: "Pelatihan",
      description: "Program pelatihan untuk meningkatkan kompetensi tim Anda",
      features: ["Training teknis", "Sertifikasi", "Workshop praktis"]
    }
  ];

  const handleContactClick = () => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀"
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <section id="layanan" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Layanan Bernilai Tambah
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Selain menyediakan bahan kimia berkualitas, kami juga memberikan layanan 
            komprehensif untuk mendukung operasional sistem air Anda.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-xl card-hover"
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-12 shadow-xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Proses Layanan Kami
            </h3>
            <p className="text-gray-600 text-lg">
              Pendekatan sistematis untuk memberikan solusi terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Konsultasi", desc: "Analisis kebutuhan dan kondisi sistem" },
              { step: "02", title: "Solusi", desc: "Rekomendasi produk dan layanan terbaik" },
              { step: "03", title: "Implementasi", desc: "Penerapan solusi dengan dukungan teknis" },
              { step: "04", title: "Monitoring", desc: "Pemantauan berkelanjutan dan optimasi" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 pulse-glow">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="gradient-bg rounded-2xl p-12 text-white">
            <Wrench className="w-16 h-16 mx-auto mb-6 text-cyan-300" />
            <h3 className="text-3xl font-bold mb-4">
              Siap Meningkatkan Efisiensi Sistem Air Anda?
            </h3>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Hubungi tim ahli kami untuk konsultasi gratis dan temukan solusi terbaik 
              untuk kebutuhan industri Anda.
            </p>
            <Button
              onClick={() => scrollToSection('kontak')}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Konsultasi Sekarang
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
