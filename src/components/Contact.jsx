import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      details: [
        "PT. Poly Arrad Pusaka",
        "Jl. Jemur Andayani No. 50, Blok D 68–69 Surabaya 60237, East Java, Indonesia",
      ],
      color: "bg-blue-500",
    },
    {
      icon: Phone,
      title: "Telepon",
      details: ["Phone: +62-31-8432268", "Fax: +62-31-8435669"],
      color: "bg-green-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["pap_pt@arradchemicals.com", "ptpap@sby.dnet.net.id"],
      color: "bg-purple-500",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: ["Senin - Jumat: 08:00 - 16:00"],
      color: "bg-orange-500",
    },
  ];

  const handleContactClick = (type) => {
    try {
      if (type === "call") {
        // Telepon kantor (bisa override via .env)
        const phone = (
          import.meta?.env?.VITE_PHONE_NUMBER || "+62318432268"
        ).replace(/[^+\d]/g, "");
        window.location.href = `tel:${phone}`;
        return;
      }
      if (type === "whatsapp") {
        // Nomor WA internasional tanpa "+" (contoh: 6281234567890)
        const wa = (
          import.meta?.env?.VITE_WHATSAPP_NUMBER || "6281234567890"
        ).replace(/\D/g, "");
        const msg = encodeURIComponent(
          "Halo, saya tertarik dengan produk/layanan Anda."
        );
        window.open(
          `https://wa.me/${wa}?text=${msg}`,
          "_blank",
          "noopener,noreferrer"
        );
        return;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name") || "";
    const company = formData.get("company") || "";
    const email = formData.get("email") || "";
    const phone = formData.get("phone") || "";
    const industry = formData.get("industry") || "";
    const message = formData.get("message") || "";

    const to =
      import.meta?.env?.VITE_CONTACT_EMAIL || "pap_pt@arradchemicals.com";
    const subject = `Permintaan dari ${name}${company ? " - " + company : ""}`;
    const body = [
      `Nama: ${name}`,
      `Perusahaan: ${company}`,
      `Email: ${email}`,
      `Telepon: ${phone}`,
      `Jenis Industri: ${industry}`,
      "",
      "Pesan:",
      message,
    ].join("\n");

    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="kontak" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Hubungi Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siap membantu Anda menemukan solusi kimia terbaik untuk kebutuhan
            industri. Tim ahli kami siap memberikan konsultasi profesional.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Informasi Kontak
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Jangan ragu untuk menghubungi kami. Tim profesional kami siap
                memberikan solusi terbaik untuk kebutuhan sistem air Anda.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div
                    className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <Button
                onClick={() => handleContactClick("call")}
                size="lg"
                className="gradient-bg text-white hover:opacity-90"
              >
                <Phone className="w-5 h-5 mr-2" />
                Hubungi Sekarang
              </Button>
              <Button
                onClick={() => handleContactClick("whatsapp")}
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat WhatsApp
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Kirim Pesan
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Masukkan nama lengkap"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Perusahaan
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nama perusahaan"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="email@perusahaan.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telepon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+62 8XX-XXXX-XXXX"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jenis Industri
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Pilih jenis industri</option>
                  <option value="pembangkit-listrik">Pembangkit Listrik</option>
                  <option value="hotel-bangunan">Hotel & Bangunan</option>
                  <option value="pulp-paper">Pulp & Paper</option>
                  <option value="makanan">Makanan</option>
                  <option value="kimia">Kimia</option>
                  <option value="pupuk">Pupuk</option>
                  <option value="elektronik">Elektronik</option>
                  <option value="karet-ban">Karet & Ban</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ceritakan kebutuhan sistem air Anda..."
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gradient-bg text-white hover:opacity-90"
              >
                <Send className="w-5 h-5 mr-2" />
                Kirim Pesan
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Lokasi Kami
            </h3>
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <div className="w-full rounded-xl overflow-hidden h-full">
                <iframe
                  title="Lokasi PT. Poly Arrad Pusaka"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    import.meta?.env?.VITE_MAP_QUERY ||
                      "Jl. Jemur Andayani No. 50, Blok D 68–69 Surabaya 60237, East Java, Indonesia"
                  )}&output=embed`}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
