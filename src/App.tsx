import React, { useState } from 'react';
import { Code2, Rocket, Users, CheckCircle, ArrowRight, Globe, Shield, Zap, DollarSign, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Clock, X } from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [bookingStep, setBookingStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    requirements: '',
    paymentMethod: 'transfer'
  });

  const handleOpenModal = (packageName: string) => {
    setSelectedPackage(packageName);
    setIsModalOpen(true);
    setBookingStep(1);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setBookingStep(1);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      requirements: '',
      paymentMethod: 'transfer'
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookingStep < 3) {
      setBookingStep(prev => prev + 1);
    } else {
      // Here you would typically handle the form submission
      console.log('Form submitted:', { ...formData, package: selectedPackage });
      handleCloseModal();
    }
  };

  const getPackagePrice = () => {
    switch (selectedPackage) {
      case 'Basic':
        return '3.000.000';
      case 'Professional':
        return '8.000.000';
      case 'Enterprise':
        return '15.000.000';
      default:
        return '0';
    }
  };

  const portfolioItems = [
    {
      title: "E-commerce Fashion Store",
      description: "Website toko fashion online dengan fitur pembayaran terintegrasi",
      image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["E-commerce", "React", "Node.js"],
      link: "#"
    },
    {
      title: "Corporate Construction",
      description: "Website perusahaan konstruksi dengan desain modern",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Corporate", "React", "Tailwind"],
      link: "#"
    },
    {
      title: "Inventory System",
      description: "Aplikasi manajemen inventory dengan dashboard admin",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Web App", "React", "Node.js"],
      link: "#"
    },
    {
      title: "Restaurant Website",
      description: "Website restoran dengan sistem pemesanan online",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Restaurant", "React", "Next.js"],
      link: "#"
    },
    {
      title: "Real Estate Platform",
      description: "Platform properti dengan fitur pencarian dan filter",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Real Estate", "React", "Next.js"],
      link: "#"
    },
    {
      title: "School Management",
      description: "Sistem manajemen sekolah dengan fitur lengkap",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Education", "React", "Node.js"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold text-white">Radzdev</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-white hover:text-blue-200">
                Layanan
              </a>
              <a href="#portfolio" className="text-white hover:text-blue-200">
                Portfolio
              </a>
              <a href="#pricing" className="text-white hover:text-blue-200">
                Harga
              </a>
              <a href="#contact" className="text-white hover:text-blue-200">
                Kontak
              </a>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Wujudkan Website Impian Anda</h1>
              <p className="text-xl text-blue-100 mb-8">Kami membantu bisnis Anda berkembang dengan solusi website profesional yang modern dan responsif.</p>
              <a href="#contact" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                Mulai Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Web Development" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Layanan Kami</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Globe className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Website Bisnis</h3>
              <p className="text-gray-600">Website profesional untuk meningkatkan presence bisnis Anda di dunia digital.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Zap className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">E-Commerce</h3>
              <p className="text-gray-600">Solusi toko online lengkap dengan sistem pembayaran dan manajemen produk.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Web Application</h3>
              <p className="text-gray-600">Aplikasi web custom sesuai kebutuhan bisnis dengan performa tinggi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Portfolio Kami</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Berikut adalah beberapa contoh website yang telah kami kembangkan untuk klien kami. Setiap proyek dirancang dengan memperhatikan kebutuhan spesifik dan tujuan bisnis klien.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-gray-200">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Range Harga</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Basic</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold">Rp</span>
                  <span className="text-6xl font-bold text-blue-600">3jt</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Landing Page</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Responsive Design</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>3 Halaman</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Revisi 2x</span>
                  </li>
                </ul>
                <button onClick={() => handleOpenModal('Basic')} className="block w-full py-3 px-6 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Pesan Sekarang
                </button>
              </div>
            </div>

            {/* Professional Package */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform scale-105 border-2 border-blue-600">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Professional</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold">Rp</span>
                  <span className="text-6xl font-bold text-blue-600">8jt</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Custom Design</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>CMS Integration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>8 Halaman</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Revisi 5x</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>SEO Basic</span>
                  </li>
                </ul>
                <button onClick={() => handleOpenModal('Professional')} className="block w-full py-3 px-6 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Pesan Sekarang
                </button>
              </div>
            </div>

            {/* Enterprise Package */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Enterprise</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold">Rp</span>
                  <span className="text-6xl font-bold text-blue-600">15jt+</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Custom Web App</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Database Integration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Unlimited Pages</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Revisi Unlimited</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>SEO Advanced</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Maintenance 1 Tahun</span>
                  </li>
                </ul>
                <button onClick={() => handleOpenModal('Enterprise')} className="block w-full py-3 px-6 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Pesan Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-gray-800">Pemesanan Paket {selectedPackage}</h3>
                <button onClick={handleCloseModal} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <X className="h-6 w-6 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="p-6">
              {/* Progress Steps */}
              <div className="flex justify-between mb-8">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${bookingStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>1</div>
                  <span className="text-sm mt-2">Informasi</span>
                </div>
                <div className="flex-1 flex items-center">
                  <div className={`h-1 w-full ${bookingStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${bookingStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>2</div>
                  <span className="text-sm mt-2">Kebutuhan</span>
                </div>
                <div className="flex-1 flex items-center">
                  <div className={`h-1 w-full ${bookingStep >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${bookingStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>3</div>
                  <span className="text-sm mt-2">Pembayaran</span>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Information */}
                {bookingStep === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nama Perusahaan (Opsional)</label>
                      <input type="text" name="company" value={formData.company} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                  </div>
                )}

                {/* Step 2: Project Requirements */}
                {bookingStep === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi Kebutuhan Website</label>
                      <textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Jelaskan kebutuhan dan fitur yang Anda inginkan untuk website Anda..."
                        required
                      ></textarea>
                    </div>
                  </div>
                )}

                {/* Step 3: Payment Method */}
                {bookingStep === 3 && (
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-lg mb-2">Detail Pembayaran</h4>
                      <div className="flex justify-between items-center">
                        <span>Paket {selectedPackage}</span>
                        <span className="font-semibold">Rp {getPackagePrice()}</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Metode Pembayaran</label>
                      <div className="space-y-3">
                        <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                          <input type="radio" name="paymentMethod" value="transfer" checked={formData.paymentMethod === 'transfer'} onChange={handleInputChange} className="h-4 w-4 text-blue-600" />
                          <span className="ml-3">Transfer Bank (BCA, Mandiri, BNI)</span>
                        </label>
                        <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                          <input type="radio" name="paymentMethod" value="ewallet" checked={formData.paymentMethod === 'ewallet'} onChange={handleInputChange} className="h-4 w-4 text-blue-600" />
                          <span className="ml-3">E-Wallet (DANA, OVO, GoPay)</span>
                        </label>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800">Setelah melakukan pemesanan, tim kami akan menghubungi Anda dalam 1x24 jam untuk konfirmasi dan pembahasan lebih lanjut.</p>
                    </div>
                  </div>
                )}

                <div className="mt-8 flex justify-end space-x-4">
                  {bookingStep > 1 && (
                    <button type="button" onClick={() => setBookingStep((prev) => prev - 1)} className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      Kembali
                    </button>
                  )}
                  <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    {bookingStep === 3 ? 'Selesaikan Pemesanan' : 'Lanjutkan'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Mengapa Memilih Kami?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Rocket className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Performa Tinggi</h3>
              <p className="text-gray-600">Website cepat dan responsif</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Tim Profesional</h3>
              <p className="text-gray-600">Developer berpengalaman</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Kualitas Terjamin</h3>
              <p className="text-gray-600">Hasil kerja berkualitas</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Support 24/7</h3>
              <p className="text-gray-600">Dukungan teknis full-time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Hubungi Kami</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Nama Lengkap</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200" placeholder="Masukkan nama lengkap" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200" placeholder="Masukkan email" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Pesan</label>
                <textarea className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200" rows={4} placeholder="Tuliskan pesan Anda"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500"></div>

        <div className="container mx-auto px-6">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-20 pb-16">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Code2 className="h-8 w-8" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Radzdev</span>
              </div>
              <p className="text-gray-300 leading-relaxed">Membangun solusi digital yang inovatif untuk membantu bisnis Anda berkembang di era digital dengan website profesional dan modern.</p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 relative inline-block">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></div>
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Layanan
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Harga
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Kontak
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6 relative inline-block">
                Layanan
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></div>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300">
                  <Globe className="h-4 w-4 mr-3 text-blue-400" />
                  <span>Website Bisnis</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <DollarSign className="h-4 w-4 mr-3 text-blue-400" />
                  <span>E-commerce</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Shield className="h-4 w-4 mr-3 text-blue-400" />
                  <span>Web Application</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Clock className="h-4 w-4 mr-3 text-blue-400" />
                  <span>24/7 Maintenance</span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6 relative inline-block">
                Kontak Kami
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></div>
              </h3>
              <ul className="space-y-4">
                <li className="group">
                  <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-600/20 transition-colors duration-300">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <span>Jakarta, Indonesia</span>
                  </a>
                </li>
                <li className="group">
                  <a href="tel:+6281234567890" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-600/20 transition-colors duration-300">
                      <Phone className="h-5 w-5" />
                    </div>
                    <span>+62 812 3456 7890</span>
                  </a>
                </li>
                <li className="group">
                  <a href="mailto:contact@radzdev.com" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-600/20 transition-colors duration-300">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span>contact@radzdev.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700/50 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  © 2025 <span className="text-blue-400">Radzdev</span>. All rights reserved.
                </p>
                <p className="text-gray-500 text-sm mt-1">Building digital excellence, one project at a time.</p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;