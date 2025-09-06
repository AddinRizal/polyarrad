
import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Services from '@/components/Services';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>PT. Poly Arrad Pusaka - Solusi Kimia Terpadu untuk Sistem Air</title>
        <meta name="description" content="PT. Poly Arrad Pusaka adalah perusahaan kimia terkemuka yang menyediakan bahan kimia berkualitas tinggi untuk sistem air dan pengolahan limbah sejak 1998." />
        <meta property="og:title" content="PT. Poly Arrad Pusaka - Solusi Kimia Terpadu untuk Sistem Air" />
        <meta property="og:description" content="Perusahaan kimia terkemuka yang menyediakan bahan kimia berkualitas tinggi untuk sistem air dan pengolahan limbah sejak 1998." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Products />
        <Services />
        <Clients />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
