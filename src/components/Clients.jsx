
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, TrendingUp, Users } from 'lucide-react';

const Clients = () => {
  const majorClients = [
    "Sinar Mas Group",
    "Unilever Indonesia", 
    "Gudang Garam",
    "Pertamina",
    "Semen Indonesia",
    "Pupuk Indonesia"
  ];

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Klien Aktif",
      description: "Perusahaan yang mempercayai layanan kami"
    },
    {
      icon: Award,
      number: "25+",
      label: "Tahun Pengalaman",
      description: "Melayani industri Indonesia sejak 1998"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Tingkat Kepuasan",
      description: "Klien yang puas dengan layanan kami"
    },
    {
      icon: Star,
      number: "50+",
      label: "Produk Unggulan",
      description: "Solusi kimia untuk berbagai kebutuhan"
    }
  ];

  return (
    <section id="klien" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Klien Terpercaya
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami bangga melayani perusahaan-perusahaan terkemuka di Indonesia 
            dengan solusi kimia berkualitas tinggi dan layanan profesional.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 card-hover"
            >
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</div>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Major Clients */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Klien Besar Kami
            </h3>
            <p className="text-gray-600 text-lg">
              Perusahaan-perusahaan terkemuka yang telah mempercayai solusi kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {majorClients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg card-hover text-center"
              >
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">{client}</h4>
              </motion.div>
            ))}
          </div>

          {/* Testimonial Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-700 italic mb-6">
                "PT. Poly Arrad Pusaka telah menjadi mitra strategis kami dalam 
                menyediakan solusi kimia berkualitas tinggi. Layanan profesional 
                dan produk yang konsisten membuat kami selalu percaya pada mereka."
              </blockquote>
              <div className="text-gray-600">
                <div className="font-semibold">Manajer Operasional</div>
                <div className="text-sm">Perusahaan Multinasional</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Industries Served */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Industri yang Kami Layani
            </h3>
            <p className="text-gray-600 text-lg">
              Pengalaman luas melayani berbagai sektor industri di Indonesia
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              "Pembangkit Listrik", "Hotel & Bangunan", "Pulp & Paper", "Makanan",
              "Kimia", "Pupuk", "Elektronik", "Karet & Ban"
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-4 shadow-lg text-center card-hover"
              >
                <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-xs">{index + 1}</span>
                </div>
                <p className="text-sm font-medium text-gray-900">{industry}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
