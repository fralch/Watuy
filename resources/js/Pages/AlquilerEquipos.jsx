import { Head, usePage, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import {
  FiLogIn,
  FiUser,
  FiLogOut,
  FiFileText,
  FiPhoneCall,
  FiClock,
  FiCalendar,
  FiEye,
  FiDollarSign,
  FiSearch,
  FiTool,
  FiTruck,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiSettings,
  FiMapPin,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "@/Components/home/Menu";
import Footer from "@/Components/home/Footer";
import Header from "@/Components/home/Header";
import ErrorBoundary from "@/Components/ErrorBoundary";
import { useTheme } from "@/storage/ThemeContext";
import UserProfileModal from "@/Components/UserProfileModal";

export default function AlquilerEquipos() {
    const { auth } = usePage().props;
    const { isDarkMode } = useTheme();
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const userButton = document.getElementById("user-menu-button");
            const userMenu = document.getElementById("user-menu");
            if (
                userButton &&
                !userButton.contains(event.target) &&
                userMenu &&
                !userMenu.contains(event.target)
            ) {
                setShowUserMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleUserMenu = () => {
        setShowUserMenu(!showUserMenu);
    };

    const openProfileModal = () => {
        setShowProfileModal(true);
        setShowUserMenu(false);
    };

    const closeProfileModal = () => {
        setShowProfileModal(false);
    };

    // Lightbox handlers
    const openLightbox = (index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + equiposAlquiler.length) % equiposAlquiler.length);
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % equiposAlquiler.length);
    };

    // Navegación por teclado para el lightbox (simplificada sin listeners globales)
    // Nota: Puedes agregar navegación con teclado posteriormente si es necesario.

    // Base de imágenes de alquiler (ubicadas en public/img)
    const GALERIA_BASE_PATH = "/img/IMAGENES_ALQUILER DE MAQUINARIA PESADA";
    const equiposAlquiler = [
        { nombre: "Excavadora Doossan 225", archivo: "Excavadora Doossan 225.jpg", categoria: "Excavadora" },
        { nombre: "Excavadora Volvo EC380DL", archivo: "Excavadora Volvo EC380DL.jpg", categoria: "Excavadora" },
        { nombre: "Minicargador CAT 246D3", archivo: "Minicargador_CAT_246D3.jpg", categoria: "Minicargador" },
        { nombre: "Retroexcavadora JCB", archivo: "Retroexcavadora JCB.jpg", categoria: "Retroexcavadora" },
        { nombre: "UG 400", archivo: "UG_400.jpg", categoria: "Generador" },
        { nombre: "UG 1200", archivo: "UG_1200.jpg", categoria: "Generador" },
        { nombre: "UG 2100", archivo: "UG_2100.jpg", categoria: "Generador" },
        { nombre: "UG 3300", archivo: "UG_3300.jpg", categoria: "Generador" },
    ];

    // Helper para construir enlace de WhatsApp con mensaje
    const buildWaLink = (message) => `https://wa.me/51932401713?text=${encodeURIComponent(message)}`;

    return (
        <>
            <Head title="Alquiler de Equipos - MegaEquipamiento" />

            <div>
                <Header />

                <AnimatePresence>
                        <motion.div
                            id="user-menu-button"
                            className="fixed bottom-5 left-5 z-50"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                        >
                            {auth.user ? (
                                <div className="relative">
                                    <button
                                        onClick={() => setShowUserMenu(!showUserMenu)}
                                        className={`p-3 rounded-full shadow-lg transition-all ${
                                            isDarkMode
                                                ? "bg-[#006ba0] hover:bg-gray-700"
                                                : "bg-[#006ba0] hover:bg-gray-600"
                                        } text-white`}
                                    >
                                        <FiUser size={20} />
                                    </button>

                                    {showUserMenu && (
                                        <motion.div
                                            id="user-menu"
                                            className={`absolute bottom-16 left-0 w-44 rounded-xl ${
                                                isDarkMode
                                                    ? "bg-gray-800 text-white shadow-xl border border-gray-700"
                                                    : "bg-white text-gray-800 shadow-xl border border-gray-200"
                                            } overflow-hidden`}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                        >
                                            <button
                                                onClick={openProfileModal}
                                                className={`w-full text-left px-4 py-3 text-sm hover:${
                                                    isDarkMode ? "bg-gray-700" : "bg-gray-50"
                                                } transition-colors`}
                                            >
                                                Ver perfil
                                            </button>
                                            <button
                                                onClick={() => {
                                                    router.post("/logout");
                                                }}
                                                className={`w-full text-left px-4 py-3 text-sm hover:${
                                                    isDarkMode ? "bg-gray-700" : "bg-gray-50"
                                                } transition-colors border-t ${
                                                    isDarkMode ? "border-gray-700" : "border-gray-200"
                                                }`}
                                            >
                                                Cerrar sesión
                                            </button>
                                        </motion.div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    href="/login"
                                    className={`flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all ${
                                        isDarkMode
                                            ? "bg-[#006ba0] hover:bg-[#004d73]"
                                            : "bg-[#006ba0] hover:bg-[#004d73]"
                                    } text-white text-sm font-medium`}
                                >
                                    <FiLogIn size={18} />
                                    <span className="hidden sm:inline">Iniciar Sesión</span>
                                </Link>
                            )}
                        </motion.div>
                </AnimatePresence>

                <div
                    className={`min-w-screen min-h-screen ${
                        isDarkMode ? "bg-gray-900" : "bg-gray-200"
                    } transition-colors duration-300`}
                    style={{ marginTop: "-20px" }}
                >
                    <Menu />
                    <main className="mt-0 w-full">
                        {/* Hero Section */}
                         <div className={`relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden ${
                             isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-[#006ba0] to-[#004d73]'
                         } shadow-2xl`}>
                            <div className="absolute inset-0 bg-black opacity-20"></div>
                            <div className="relative max-w-7xl mx-auto text-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                                        Alquiler de Maquinaria Pesada
                                    </h1>
                                    <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
                                        Equipos certificados y mantenidos para construcción, minería e industria. Desde excavadoras hasta grúas industriales
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <motion.a
                                            href={buildWaLink("Hola, quisiera ver el catálogo completo de alquiler de maquinaria pesada. ¿Podrías enviarme el catálogo?")}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 inline-flex items-center gap-2"
                                        >
                                            <FiFileText className="text-xl" />
                                            <span>Ver Catálogo Completo</span>
                                        </motion.a>
                                        <motion.a
                                            href={buildWaLink("Hola, necesito una cotización inmediata para alquiler de maquinaria. ¿Pueden ayudarme?")}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 inline-flex items-center gap-2"
                                        >
                                            <FiPhoneCall className="text-xl" />
                                            <span>Cotización Inmediata</span>
                                        </motion.a>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Services Section */}
                        <div className={`py-20 px-4 sm:px-6 lg:px-8 ${
                            isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
                        }`}>
                            <div className="max-w-7xl mx-auto">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="text-center mb-16"
                                >
                                    <h2 className={`text-4xl font-bold mb-6 ${
                                        isDarkMode ? 'text-white' : 'text-gray-900'
                                    }`}>Modalidades de Alquiler</h2>
                                    <p className={`text-xl ${
                                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                    } max-w-2xl mx-auto`}>
                                        Flexibilidad total para adaptarnos a tus necesidades específicas de proyecto
                                    </p>
                                </motion.div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                                    <motion.div
                                        whileHover={{ y: -10, scale: 1.02 }}
                                        className={`group p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl ${
                                            isDarkMode ? 'bg-gray-800 border border-gray-700 hover:border-[#006ba0]' : 'bg-white border border-gray-200 hover:border-[#006ba0]'
                                        }`}
                                    >
                                        <div className="text-center mb-6">
                                            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#006ba0] to-[#004d73] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <FiClock className="w-10 h-10 text-white" />
                                            </div>
                                            <div className="text-2xl font-bold text-[#006ba0] mb-2"><FiClock /></div>
                                        </div>
                                        <h3 className={`text-2xl font-bold mb-4 text-center ${
                                            isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>Alquiler por Día</h3>
                                        <div className="space-y-3 mb-6">
                                            <div className="flex justify-between items-center">
                                                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Excavadoras:</span>
                                                <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>S/ 450/día</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Bulldozers:</span>
                                                <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>S/ 380/día</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Cargadores:</span>
                                                <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>S/ 320/día</span>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-sm text-green-500 mb-3">Mínimo 3 días • Incluye operador</div>
                                            <a
                                                href={buildWaLink("Hola, quiero reservar maquinaria por día. ¿Disponibilidad y condiciones?")}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full bg-[#006ba0] hover:bg-[#004d73] text-white py-3 rounded-lg font-semibold transition-colors duration-300 text-center inline-flex items-center justify-center gap-2"
                                            >
                                                <FiCalendar className="text-xl" />
                                                <span>Reservar Ahora</span>
                                            </a>
                                        </div>
                                    </motion.div>

                                         <motion.div
                                             whileHover={{ y: -10, scale: 1.02 }}
                                             className={`group p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl ${
                                                 isDarkMode ? 'bg-gray-800 border border-gray-700 hover:border-[#006ba0]' : 'bg-white border border-gray-200 hover:border-[#006ba0]'
                                             }`}
                                         >
                                        <div className="text-center mb-6">
                                             <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#006ba0] to-[#004d73] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <FiCalendar className="w-10 h-10 text-white" />
                                            </div>
                                             <div className="text-2xl font-bold text-[#006ba0] mb-2"><FiCalendar /></div>
                                        </div>
                                        <h3 className={`text-2xl font-bold mb-4 text-center ${
                                            isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>Alquiler Mensual</h3>
                                        <div className="space-y-3 mb-6">
                                            <div className="flex justify-between items-center">
                                                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Excavadoras:</span>
                                                <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>S/ 8,500/mes</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Bulldozers:</span>
                                                <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>S/ 7,200/mes</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Cargadores:</span>
                                                <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>S/ 6,100/mes</span>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-sm text-green-500 mb-3">Descuento 25% • Mantenimiento incluido</div>
                                             <a
                                                 href={buildWaLink("Hola, quisiera una cotización mensual de maquinaria. ¿Detalles y precios?")}
                                                 target="_blank"
                                                 rel="noopener noreferrer"
                                                 className="w-full bg-[#006ba0] hover:bg-[#004d73] text-white py-3 rounded-lg font-semibold transition-colors duration-300 text-center inline-flex items-center justify-center gap-2"
                                             >
                                                 <FiDollarSign className="text-xl" />
                                                 <span>Cotizar Mensual</span>
                                             </a>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ y: -10, scale: 1.02 }}
                                        className={`group p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl ${
                                            isDarkMode ? 'bg-gray-800 border border-gray-700 hover:border-purple-500' : 'bg-white border border-gray-200 hover:border-purple-400'
                                        }`}
                                    >
                                        <div className="text-center mb-6">
                                            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <FiSettings className="w-10 h-10 text-white" />
                                            </div>
                                            <div className="text-2xl font-bold text-purple-500 mb-2"><FiSettings /></div>
                                        </div>
                                        <h3 className={`text-2xl font-bold mb-4 text-center ${
                                            isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>Proyectos Especiales</h3>
                                        <div className="space-y-3 mb-6">
                                            <div className="flex justify-between items-center">
                                                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Grúas torre:</span>
                                                <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>S/ 1,200/día</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Excavadoras largas:</span>
                                                <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>S/ 650/día</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Equipos mineros:</span>
                                                <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Consultar</span>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                             <div className="text-sm text-[#006ba0] mb-3">Proyectos personalizados • Equipos especializados</div>
                                            <a
                                                href={buildWaLink("Hola, me interesa un proyecto especial de alquiler. ¿Podemos conversar detalles y opciones?")}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300 text-center inline-flex items-center justify-center gap-2"
                                            >
                                                <FiSearch className="text-xl" />
                                                <span>Consultar Proyecto</span>
                                            </a>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Advantages Section */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className={`p-12 rounded-2xl shadow-2xl mb-16 transition-colors duration-300 ${
                                        isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
                                    }`}
                                >
                                    <h2 className={`text-4xl font-bold mb-12 text-center ${
                                        isDarkMode ? 'text-white' : 'text-gray-900'
                                    }`}>¿Por qué elegir nuestro alquiler?</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="text-center group"
                                        >
                                             <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                                                 isDarkMode ? 'bg-[#006ba0] group-hover:bg-[#004d73]' : 'bg-[#006ba0] group-hover:bg-[#004d73]'
                                             }`}>
                                                <FiDollarSign className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className={`text-xl font-bold mb-3 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Sin Inversión Inicial</h3>
                                            <p className={`text-sm leading-relaxed ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                Evita grandes inversiones iniciales. Solo pagas por el tiempo que utilizas el equipo
                                            </p>
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="text-center group"
                                        >
                                            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                                                isDarkMode ? 'bg-[#006ba0] group-hover:bg-[#004d73]' : 'bg-[#006ba0] group-hover:bg-[#004d73]'
                                            }`}>
                                                <FiTool className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className={`text-xl font-bold mb-3 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Mantenimiento Incluido</h3>
                                            <p className={`text-sm leading-relaxed ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                Todos los equipos incluyen mantenimiento preventivo y correctivo durante el alquiler
                                            </p>
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="text-center group"
                                        >
                                             <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                                                 isDarkMode ? 'bg-[#006ba0] group-hover:bg-[#004d73]' : 'bg-[#006ba0] group-hover:bg-[#004d73]'
                                             }`}>
                                                <FiTruck className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className={`text-xl font-bold mb-3 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Entrega Inmediata</h3>
                                            <p className={`text-sm leading-relaxed ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                Equipos disponibles para entrega en menos de 24 horas en la mayoría de los casos
                                            </p>
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="text-center group"
                                        >
                                             <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                                                 isDarkMode ? 'bg-[#006ba0] group-hover:bg-[#004d73]' : 'bg-[#006ba0] group-hover:bg-[#004d73]'
                                             }`}>
                                                <FiCheckCircle className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className={`text-xl font-bold mb-3 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Operadores Certificados</h3>
                                            <p className={`text-sm leading-relaxed ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                Incluye operadores profesionales certificados con amplia experiencia en el rubro
                                            </p>
                                        </motion.div>
                                    </div>
                                </motion.div>

                                {/* Equipment Categories Section */}
                                {/* <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className={`p-12 rounded-2xl shadow-2xl mb-16 ${
                                        isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                                    }`}
                                >
                                    <h2 className={`text-4xl font-bold mb-12 text-center ${
                                        isDarkMode ? 'text-white' : 'text-gray-900'
                                    }`}>Categorías de Equipos Disponibles</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                        <motion.div
                                            whileHover={{ scale: 1.05, y: -5 }}
                                            className={`group text-center p-8 border-2 rounded-2xl transition-all duration-500 hover:shadow-2xl ${
                                                isDarkMode ? 'border-gray-600 hover:border-orange-500 bg-gray-700' : 'border-gray-200 hover:border-orange-400 bg-gray-50'
                                            }`}
                                        >
                                            <div className="text-4xl mb-4"><FiTool /></div>
                                            <h4 className={`text-xl font-bold mb-3 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Excavadoras</h4>
                                            <p className={`text-sm mb-4 ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>Desde 20 hasta 50 toneladas. Ideales para movimientos de tierra y demolición</p>
                                            <div className="text-lg font-bold text-orange-500 mb-3">$450 - $850/día</div>
                                            <a
                                                href={buildWaLink("Hola, quiero ver modelos disponibles de excavadoras para alquiler.")}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition-colors duration-300 text-center inline-flex items-center justify-center gap-2"
                                            >
                                                <FiEye className="text-lg" />
                                                <span>Ver Modelos</span>
                                            </a>
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ scale: 1.05, y: -5 }}
                                            className={`group text-center p-8 border-2 rounded-2xl transition-all duration-500 hover:shadow-2xl ${
                                                isDarkMode ? 'border-gray-600 hover:border-[#006ba0] bg-gray-700' : 'border-gray-200 hover:border-[#006ba0] bg-gray-50'
                                            }`}
                                        >
                                            <div className="text-4xl mb-4"><FiTool /></div>
                                            <h4 className={`text-xl font-bold mb-3 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Bulldozers</h4>
                                            <p className={`text-sm mb-4 ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>Potentes máquinas para nivelación y movimientos de tierra en grandes volúmenes</p>
                                            <div className="text-lg font-bold text-[#006ba0] mb-3">$380 - $650/día</div>
                                            <a
                                                href={buildWaLink("Hola, quiero ver modelos disponibles de bulldozers para alquiler.")}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full bg-[#006ba0] hover:bg-[#004d73] text-white py-2 rounded-lg font-semibold transition-colors duration-300 text-center inline-flex items-center justify-center gap-2"
                                            >
                                                <FiEye className="text-lg" />
                                                <span>Ver Modelos</span>
                                            </a>
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ scale: 1.05, y: -5 }}
                                            className={`group text-center p-8 border-2 rounded-2xl transition-all duration-500 hover:shadow-2xl ${
                                                isDarkMode ? 'border-gray-600 hover:border-green-500 bg-gray-700' : 'border-gray-200 hover:border-green-400 bg-gray-50'
                                            }`}
                                        >
                                            <div className="text-4xl mb-4"><FiTool /></div>
                                            <h4 className={`text-xl font-bold mb-3 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Cargadores Frontales</h4>
                                            <p className={`text-sm mb-4 ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>Para carga y transporte de materiales. Alta eficiencia en espacios reducidos</p>
                                             <div className="text-lg font-bold text-[#006ba0] mb-3">$320 - $550/día</div>
                                             <a
                                                 href={buildWaLink("Hola, quiero ver modelos disponibles de cargadores frontales para alquiler.")}
                                                 target="_blank"
                                                 rel="noopener noreferrer"
                                                 className="w-full bg-[#006ba0] hover:bg-[#004d73] text-white py-2 rounded-lg font-semibold transition-colors duration-300 text-center inline-flex items-center justify-center gap-2"
                                             >
                                                 <FiEye className="text-lg" />
                                                 <span>Ver Modelos</span>
                                             </a>
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ scale: 1.05, y: -5 }}
                                            className={`group text-center p-8 border-2 rounded-2xl transition-all duration-500 hover:shadow-2xl ${
                                                isDarkMode ? 'border-gray-600 hover:border-purple-500 bg-gray-700' : 'border-gray-200 hover:border-purple-400 bg-gray-50'
                                            }`}
                                        >
                                            <div className="text-4xl mb-4"><FiTool /></div>
                                            <h4 className={`text-xl font-bold mb-3 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Equipos Especializados</h4>
                                            <p className={`text-sm mb-4 ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>Grúas, compactadores, martillos hidráulicos y equipos para minería</p>
                                            <div className="text-lg font-bold text-purple-500 mb-3">Consultar precios</div>
                                            <a
                                                href={buildWaLink("Hola, quiero consultar precios de equipos especializados (grúas, compactadores, martillos hidráulicos, minería).")}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg font-semibold transition-colors duration-300 text-center inline-flex items-center justify-center gap-2"
                                            >
                                                <FiSearch className="text-lg" />
                                                <span>Consultar</span>
                                            </a>
                                        </motion.div>
                                    </div>
                                </motion.div> */}

                                {/* Galería de Equipos en Alquiler */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className={`p-6 sm:p-8 rounded-2xl shadow-2xl mb-16 ${
                                        isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                                    }`}
                                >
                                    <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${
                                        isDarkMode ? 'text-white' : 'text-gray-900'
                                    }`}>Galería de Equipos en Alquiler</h2>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {equiposAlquiler.map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                whileHover={{ y: -4, scale: 1.01 }}
                                                className={`group rounded-2xl overflow-hidden shadow-xl border ${
                                                    isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                                                }`}
                                            >
                                                <div className="relative w-full pt-[70%]">
                                                    <img
                                                        src={`${GALERIA_BASE_PATH}/${item.archivo}`}
                                                        alt={item.nombre}
                                                        loading="lazy"
                                                        className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105 cursor-zoom-in"
                                                        onClick={() => openLightbox(idx)}
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none"></div>
                                                    <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                                                        <div>
                                                            <div className="text-xs sm:text-sm font-semibold text-white/80">{item.categoria}</div>
                                                            <div className="text-base sm:text-lg font-bold text-white">{item.nombre}</div>
                                                        </div>
                                                        <a
                                                            href={buildWaLink(`Hola, quiero cotizar el equipo ${item.nombre} (${item.categoria}).`)}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        className="ml-3 bg-[#006ba0] hover:bg-[#004d73] text-white px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold shadow inline-flex items-center gap-2"
                                                        >
                                                            <FiDollarSign className="text-sm" />
                                                            <span>Cotizar</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {lightboxOpen && (
                                        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
                                            <div className="absolute inset-0 bg-black/80" onClick={closeLightbox} aria-hidden="true"></div>
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.98 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.98 }}
                                                className={`relative max-w-5xl w-full rounded-xl overflow-hidden shadow-2xl ${
                                                    isDarkMode ? 'bg-gray-900' : 'bg-white'
                                                }`}
                                            >
                                                <button
                                                    onClick={closeLightbox}
                                                    className={`absolute top-3 right-3 px-3 py-1 rounded-md text-sm font-semibold ${
                                                        isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                                    }`}
                                                    aria-label="Cerrar"
                                                >
                                                    ×
                                                </button>
                                                <div className="relative w-full bg-black">
                                                    <img
                                                        src={`${GALERIA_BASE_PATH}/${equiposAlquiler[currentIndex].archivo}`}
                                                        alt={equiposAlquiler[currentIndex].nombre}
                                                        className="w-full h-auto max-h-[80vh] object-contain"
                                                    />
                                                    <button
                                                        onClick={prevImage}
                                                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur px-3 py-2 rounded-full"
                                                        aria-label="Anterior"
                                                    >
                                                        <FiChevronLeft className="w-5 h-5" />
                                                    </button>
                                                    <button
                                                        onClick={nextImage}
                                                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur px-3 py-2 rounded-full"
                                                        aria-label="Siguiente"
                                                    >
                                                        <FiChevronRight className="w-5 h-5" />
                                                    </button>
                                                </div>
                                                <div className={`p-4 flex items-center justify-between ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                                    <div>
                                                        <div className="text-sm opacity-80">{equiposAlquiler[currentIndex].categoria}</div>
                                                        <div className="text-lg font-bold">{equiposAlquiler[currentIndex].nombre}</div>
                                                    </div>
                                                    <a
                                                        href={buildWaLink(`Hola, quiero cotizar el equipo ${equiposAlquiler[currentIndex].nombre} (${equiposAlquiler[currentIndex].categoria}).`)}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="ml-3 bg-[#006ba0] hover:bg-[#004d73] text-white px-4 py-2 rounded-lg text-sm font-semibold shadow inline-flex items-center gap-2"
                                                    >
                                                        <FiDollarSign className="text-sm" />
                                                        <span>Cotizar</span>
                                                    </a>
                                                </div>
                                            </motion.div>
                                        </div>
                                    )}

                                    <div className="text-center mt-8">
                                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            Las imágenes corresponden a equipos disponibles para alquiler.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Calculator Section (refactor UI) */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="relative rounded-2xl p-[1px] bg-gradient-to-r from-emerald-500 to-[#006ba0] shadow-xl mb-16"
                                >
                                    <div className="rounded-2xl bg-white/95 backdrop-blur-sm p-10 text-center">
                                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Calcula tu Presupuesto</h2>
                                        <p className="text-base md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                                            Obtén una estimación precisa del costo de alquiler según tus necesidades específicas
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                            <div className="group rounded-xl border border-gray-200 bg-gray-50 p-6 ring-1 ring-black/5 hover:bg-white hover:border-[#006ba0]/30 transition-colors">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="h-10 w-10 grid place-items-center rounded-full bg-[#006ba0]/10 text-[#006ba0]">
                                                        <FiCalendar className="text-xl" />
                                                    </div>
                                                    <div className="text-lg font-semibold text-gray-900">Duración del Proyecto</div>
                                                </div>
                                                <div className="text-sm text-gray-600">Desde 1 día hasta varios meses</div>
                                            </div>

                                            <div className="group rounded-xl border border-gray-200 bg-gray-50 p-6 ring-1 ring-black/5 hover:bg-white hover:border-[#006ba0]/30 transition-colors">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="h-10 w-10 grid place-items-center rounded-full bg-[#006ba0]/10 text-[#006ba0]">
                                                        <FiTool className="text-xl" />
                                                    </div>
                                                    <div className="text-lg font-semibold text-gray-900">Tipo de Equipo</div>
                                                </div>
                                                <div className="text-sm text-gray-600">Más de 50 modelos disponibles</div>
                                            </div>

                                            <div className="group rounded-xl border border-gray-200 bg-gray-50 p-6 ring-1 ring-black/5 hover:bg-white hover:border-[#006ba0]/30 transition-colors">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="h-10 w-10 grid place-items-center rounded-full bg-[#006ba0]/10 text-[#006ba0]">
                                                        <FiMapPin className="text-xl" />
                                                    </div>
                                                    <div className="text-lg font-semibold text-gray-900">Ubicación</div>
                                                </div>
                                                <div className="text-sm text-gray-600">Entrega a todo el país</div>
                                            </div>
                                        </div>

                                        <motion.a
                                            href={buildWaLink("Hola, quiero ayuda para calcular el presupuesto de alquiler según mi proyecto.")}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#006ba0] to-emerald-600 px-6 py-3 text-white font-medium shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#006ba0] transition-all"
                                        >
                                            <FiDollarSign className="text-xl" />
                                            <span>Calcular Presupuesto</span>
                                        </motion.a>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>

                {/* User Profile Modal */}
                <UserProfileModal
                    isOpen={showProfileModal}
                    onClose={() => setShowProfileModal(false)}
                    user={auth.user}
                />
            </div>
        </>
    );
}
