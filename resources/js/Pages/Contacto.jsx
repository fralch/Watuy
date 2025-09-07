import React, { useState } from 'react';
import { Phone, Mail, MapPin, Star, CheckCircle, Users, Award, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Head, usePage } from '@inertiajs/react';
import Header from "../Components/home/Header";
import Footer from "../Components/home/Footer";
import Menu from "../Components/home/Menu";
import NavVertical from "../Components/home/NavVertical";
import { useTheme } from '../storage/ThemeContext';

// Componente de galería mejorado con dos filas
const GallerySection = ({ galleryImages, isDarkMode }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Configuración: 8 imágenes por página (2 filas de 4)
  const imagesPerPage = 8;
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Obtener las imágenes de la página actual
  const getCurrentPageImages = () => {
    const startIndex = currentPage * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    return galleryImages.slice(startIndex, endIndex);
  };

  return (
    <section className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-200`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          Nuestros Talleres y Equipos
        </h2>
        
        {/* Controles de navegación superiores */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mb-8">
            <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Página {currentPage + 1} de {totalPages} ({galleryImages.length} imágenes en total)
            </div>
            <div className="flex space-x-2">
              <button
                onClick={prevPage}
                className={`p-2 rounded-full transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
                disabled={totalPages <= 1}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextPage}
                className={`p-2 rounded-full transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
                disabled={totalPages <= 1}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Grid de imágenes - 2 filas de 4 columnas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {getCurrentPageImages().map((image, index) => (
            <div 
              key={`${currentPage}-${index}`} 
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => openModal(image)}
            >
              <img 
                src={image} 
                alt={`Taller y maquinaria ${currentPage * imagesPerPage + index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Indicadores de página */}
        {totalPages > 1 && (
          <div className="flex justify-center space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentPage === index
                    ? 'bg-blue-600'
                    : isDarkMode
                    ? 'bg-gray-600 hover:bg-gray-500'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}

        {/* Modal para vista ampliada */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl font-bold"
              >
                ✕
              </button>
              <img 
                src={selectedImage} 
                alt="Vista ampliada"
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Componente principal ContactPage con Header y Footer
const ContactPage = () => {
  const { isDarkMode } = useTheme();
  const { auth } = usePage().props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const galleryImages = [
    // Imágenes de talleres y maquinaria - Actualizar con las imágenes de Watuy
    '/img/gallery/taller-1.jpg',
    '/img/gallery/taller-2.jpg',
    '/img/gallery/maquinaria-1.jpg',
    '/img/gallery/maquinaria-2.jpg',
    '/img/gallery/reparacion-1.jpg',
    '/img/gallery/reparacion-2.jpg'
  ];

  const services = [
    {
      title: "Reparación Especializada",
      description: "Reparación integral de excavadoras, bulldozers, grúas y toda maquinaria pesada",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Mantenimiento Preventivo",
      description: "Servicio preventivo y correctivo 24/7 para maximizar la vida útil de sus equipos",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Servicio en Campo",
      description: "Atención técnica directa en obra con unidades móviles completamente equipadas",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
      <Head title="Contacto - WATUY" />
      
      {/* Header */}
      <Header />
      
      {/* Menu */}
      <Menu toggleMenu={toggleMenu} className="mt-0" />
      
      {/* Navegación Vertical */}
      <NavVertical isOpen={isOpen} onClose={toggleMenu} />

      {/* Contenido Principal */}
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-[#006ba0] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              WATUY
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Su socio confiable para la reparación y mantenimiento de maquinaria pesada
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-2" />
                <span>20+ años de experiencia</span>
              </div>
              <div className="flex items-center">
                <Award className="w-6 h-6 mr-2" />
                <span>Servicio especializado</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-200`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  WATUY es una empresa líder en la reparación, mantenimiento y servicio técnico 
                  de maquinaria pesada para construcción, minería y agricultura en Perú.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {services.map((service, index) => (
                  <div key={index} className={`p-6 rounded-xl hover:shadow-lg transition-shadow ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                    <div className="text-blue-600 mb-4">{service.icon}</div>
                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{service.title}</h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{service.description}</p>
                  </div>
                ))}
              </div>

              <div className={`prose max-w-none ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="text-lg leading-relaxed mb-6">
                  Con un equipo de más de 20 años de experiencia en el sector, nos dedicamos a ofrecer 
                  a nuestros clientes las mejores soluciones para el mantenimiento de su maquinaria pesada.
                </p>
                <p className="text-lg leading-relaxed">
                  Nuestro equipo de expertos está formado por ingenieros mecánicos y técnicos especializados, 
                  capacitados en las últimas tecnologías de diagnóstico y reparación de maquinaria pesada.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Map Section */}
        <section className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} transition-colors duration-200`}>
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Info */}
              <div>
                <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Información de Contacto</h2>
                
                <div className="space-y-6">
                  <div className={`flex items-start space-x-4 p-6 rounded-xl shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <Phone className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Teléfonos</h3>
                      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>01 123 4567</p>
                      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>+51 987 654 321</p>
                    </div>
                  </div>

                  <div className={`flex items-start space-x-4 p-6 rounded-xl shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <Mail className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Correos</h3>
                      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>ventas@watuy.com</p>
                      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>info@watuy.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a 
                    href="https://wa.me/51987654321" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contactar por WhatsApp
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className={`rounded-xl shadow-md overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15610.137128397255!2d-77.0792346!3d-12.0066935!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf441e4b9bc3%3A0xe06a0030338de733!2sEQUINLAB%20SAC!5e0!3m2!1ses!2spe!4v1693919874450!5m2!1ses!2spe" 
                  width="100%" 
                  height="400" 
                  style={{border: 0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section - Usando el nuevo componente */}
        <GallerySection galleryImages={galleryImages} isDarkMode={isDarkMode} />

        {/* Services Detail Section */}
        <section className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className={`p-8 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="text-blue-600 mb-4">
                    <Star className="w-12 h-12" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Reparación de maquinaria pesada</h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    En Watuy ofrecemos servicios especializados de reparación para todo tipo de maquinaria pesada. 
                    Trabajamos con excavadoras, bulldozers, grúas, cargadores frontales y equipos de construcción.
                  </p>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Nuestros servicios están diseñados para devolver a sus equipos el máximo rendimiento. 
                    Garantizamos reparaciones duraderas con repuestos originales y de alta calidad.
                  </p>
                </div>

                <div className={`p-8 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="text-green-600 mb-4">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Mantenimiento de maquinaria pesada</h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    En Watuy llevamos a cabo el mantenimiento preventivo y correctivo de maquinaria pesada de todo tipo.
                  </p>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Nuestro servicio de mantenimiento preventivo está diseñado para evitar averías costosas y maximizar la vida útil de sus equipos.
                  </p>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Nuestro servicio de emergencia está disponible las 24 horas del día, los 7 días de la semana para atender cualquier falla crítica.
                  </p>
                </div>

                <div className={`p-8 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="text-purple-600 mb-4">
                    <Award className="w-12 h-12" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Servicio Técnico Especializado</h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    En Watuy contamos con técnicos especializados en diagnóstico y reparación de sistemas hidráulicos, 
                    motores diesel, transmisiones y sistemas eléctricos.
                  </p>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Nuestro equipo técnico está certificado por las principales marcas de maquinaria pesada, 
                    lo que garantiza servicios de la más alta calidad y confiabilidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;