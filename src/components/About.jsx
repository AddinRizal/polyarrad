
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, MapPin, Calendar, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Calendar,
      title: "Berdiri Sejak 1998",
      description: "Lebih dari 25 tahun pengalaman dalam industri kimia"
    },
    {
      icon: MapPin,
      title: "Berlokasi di Sidoarjo",
      description: "Fasilitas manufaktur dan laboratorium di Jawa Timur"
    },
    {
      icon: Award,
      title: "Kualitas Terjamin",
      description: "Produk berkualitas tinggi dengan standar internasional"
    },
    {
      icon: Users,
      title: "Tim Profesional",
      description: "Didukung oleh tim ahli berpengalaman"
    }
  ];

  return (
    <section id="tentang" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Tentang PT. Poly Arrad Pusaka
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Perusahaan lokal yang berfokus pada produksi dan pengembangan bahan kimia 
            khusus untuk sistem air dan pengolahan limbah dengan komitmen terhadap 
            kualitas dan inovasi.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img  
              className="w-full h-auto rounded-2xl shadow-xl"
              alt="Tim profesional PT. Poly Arrad Pusaka di laboratorium"
             src="https://images.unsplash.com/photo-1602052577122-f73b9710adba" />
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">25+</div>
                <div className="text-gray-600 text-sm">Tahun Pengalaman</div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Pemimpin Industri Kimia Indonesia
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                PT. Poly Arrad Pusaka telah menjadi mitra terpercaya dalam menyediakan 
                solusi kimia berkualitas tinggi untuk berbagai industri. Dengan fasilitas 
                manufaktur dan laboratorium sendiri, kami mengembangkan produk-produk 
                inovatif yang memenuhi kebutuhan spesifik setiap klien.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 shadow-lg card-hover"
                >
                  <feature.icon className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl card-hover"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Visi Kami</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Menjadi pemimpin pasar dalam penyediaan bahan kimia untuk sistem air 
              di Indonesia dengan mengedepankan kualitas produk serta layanan teknis 
              yang unggul.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl card-hover"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Misi Kami</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Mengembangkan teknologi, riset, dan produk berkualitas tinggi dengan 
              tetap memperhatikan aspek lingkungan, sehingga mampu memberikan 
              kepuasan pelanggan dan meningkatkan profesionalisme.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
