
import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Zap, Shield, Recycle, Filter, Beaker } from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      icon: Droplets,
      title: "Influent & Effluent Treatment",
      description: "Koagulan, flokulan, antiscalant, dan antifoam untuk pengolahan air masuk dan keluar",
      color: "bg-blue-500"
    },
    {
      icon: Zap,
      title: "Boiler Treatment",
      description: "Oxygen scavenger dan condensate treatment untuk sistem boiler",
      color: "bg-orange-500"
    },
    {
      icon: Shield,
      title: "Cooling System",
      description: "Corrosion inhibitor dan microbiological control untuk sistem pendingin",
      color: "bg-green-500"
    },
    {
      icon: Filter,
      title: "Reverse Osmosis",
      description: "Bahan kimia khusus untuk sistem reverse osmosis",
      color: "bg-purple-500"
    },
    {
      icon: Recycle,
      title: "Wastewater Treatment",
      description: "Solusi lengkap untuk pengolahan air limbah industri",
      color: "bg-teal-500"
    },
    {
      icon: Beaker,
      title: "Komoditas Perdagangan",
      description: "Membran, sulfur, quicklime, batu bara, dan nikel",
      color: "bg-red-500"
    }
  ];

  const applications = [
    "Pembangkit Listrik",
    "Hotel & Bangunan",
    "Pulp & Paper",
    "Makanan",
    "Kimia",
    "Pupuk",
    "Elektronik",
    "Karet & Ban"
  ];

  return (
    <section id="produk" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Produk Arrad Chemicals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rangkaian lengkap bahan kimia berkualitas tinggi untuk berbagai
            kebutuhan industri dengan teknologi terdepan dan standar
            internasional.
          </p>
        </motion.div>

        {/* Product Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {productCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-xl card-hover border border-gray-100"
            >
              <div
                className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mb-6`}
              >
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Applications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ruang Lingkup Aplikasi
            </h3>
            <p className="text-gray-600 text-lg">
              Produk kami telah dipercaya oleh berbagai sektor industri di
              Indonesia
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg card-hover"
              >
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">
                    {index + 1}
                  </span>
                </div>
                <h4 className="font-semibold text-gray-900">{app}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Butuh Solusi Kimia Khusus?
            </h3>
            <p className="text-gray-600 mb-6">
              Tim ahli kami siap membantu Anda menemukan solusi terbaik untuk
              kebutuhan industri Anda
            </p>
            <img
              className="w-full h-50 object-cover rounded-xl mb-6"
              alt="Laboratorium penelitian dan pengembangan produk kimia"
              src="https://images.unsplash.com/photo-1582719471863-f4c7006280cd?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
