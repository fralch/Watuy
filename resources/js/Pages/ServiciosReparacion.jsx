import { Head, usePage, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { FiLogIn, FiUser, FiLogOut } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "@/Components/home/Menu";
import Footer from "@/Components/home/Footer";
import Header from "@/Components/home/Header";
import ErrorBoundary from "@/Components/ErrorBoundary";
import { useTheme } from "@/storage/ThemeContext";
import UserProfileModal from "@/Components/UserProfileModal";

export default function ServiciosReparacion() {
    const { auth } = usePage().props;
    const { isDarkMode } = useTheme();
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false);
    // Galería de servicios (imágenes en carpeta pública)
    const baseGalleryPath = "/img/IMAGENES_VENTAS%20DE%20SERVICIOS/";
    const galleryFiles = [
        "CAMBIO DE PINES Y BOCINAS.jpeg",
        "INSTALACIÓN DE ACOPLES RAPIDOS.jpeg",
        "PLANCHADO Y PINTADO DE EQUIPOS.jpeg",
        "REFORZAMIENTO DE CUCHARONES.jpeg",
        "REPARACIÓN DE APIZONADORES Y PLANCHAS COMPACTADORAS.jpeg",
        "REPARACIÓN DE BOMBAS HIDRAULICAS.jpeg",
        "REPARACIÓN DE CILINDROS HIDRAULICOS.jpeg",
        "REPARACIÓN DE EMBRAGUES DE MOTOR.jpeg",
        "REPARACIÓN DE MANDOS FINALES DE TREN DE CARRILERIA.jpeg",
        "REPARACIÓN DE RUEDAS GUIAS.jpeg",
        "REPARACIÓN DE SISTEMAS ELECTRICOS Y ELETRONICOS.jpeg",
        "REPARACIÓN EN GENERAL DE MARTILLOS HIDRAULICOS.jpeg",
    ];
    const formatTitle = (name) => name.replace(/\.[^.]+$/, "");
    const galleryImages = galleryFiles.map((name) => ({
        title: formatTitle(name),
        src: baseGalleryPath + encodeURI(name),
    }));
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

    // Navegación por teclado para el lightbox
    useEffect(() => {
        if (!lightboxOpen) return;
        const handleKey = (e) => {
            if (e.key === "Escape") setLightboxOpen(false);
            if (e.key === "ArrowRight") setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
            if (e.key === "ArrowLeft") setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [lightboxOpen, galleryImages.length]);

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

    return (
        <>
            <Head title="Servicios de Reparación - MegaEquipamiento" />

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
                                                ? "bg-[#006ba0] hover:bg-[#004d73]"
                                                : "bg-[#006ba0] hover:bg-[#004d73]"
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
                                        Reparación de Maquinaria Pesada
                                    </h1>
                                     <p className="text-xl md:text-2xl text-[#006ba0]/70 mb-8 max-w-3xl mx-auto">
                                         Servicio técnico especializado para excavadoras, bulldozers, cargadores y toda la maquinaria pesada industrial
                                     </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300"
                                        >
                                            🚛 Servicio a Domicilio
                                        </motion.button>
                                         <motion.button
                                             whileHover={{ scale: 1.05 }}
                                             whileTap={{ scale: 0.95 }}
                                             className="bg-white text-[#006ba0] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300"
                                         >
                                             📞 Diagnóstico Gratuito
                                         </motion.button>
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
                                    }`}>Nuestros Servicios Especializados</h2>
                                    <p className={`text-xl ${
                                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                    } max-w-2xl mx-auto`}>
                                        Reparación completa de motores, transmisiones, sistemas hidráulicos y componentes electrónicos
                                    </p>
                                </motion.div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                                    <motion.div
                                        whileHover={{ y: -10, scale: 1.02 }}
                                        className={`group p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl ${
                                            isDarkMode ? 'bg-gray-800 border border-gray-700 hover:border-orange-500' : 'bg-white border border-gray-200 hover:border-orange-400'
                                        }`}
                                    >
                                        <div className="text-center mb-6">
                                             <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#006ba0] to-[#004d73] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <div className="text-2xl font-bold text-orange-500 mb-2">⚙️</div>
                                        </div>
                                        <h3 className={`text-2xl font-bold mb-4 text-center ${
                                            isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>Reparación de Motores</h3>
                                        <ul className="space-y-2 mb-6">
                                            <li className={`flex items-center text-sm ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                                Reconstrucción completa de motores diésel
                                            </li>
                                            <li className={`flex items-center text-sm ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                                Reparación de turbocompresores
                                            </li>
                                            <li className={`flex items-center text-sm ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                                Sistemas de inyección electrónica
                                            </li>
                                        </ul>
                                        <div className="text-center">
                                           
                                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                                                Solicitar Servicio
                                            </button>
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
                                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                                </svg>
                                            </div>
                                            <div className="text-2xl font-bold text-[#006ba0] mb-2">🔧</div>
                                        </div>
                                        <h3 className={`text-2xl font-bold mb-4 text-center ${
                                            isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>Sistemas Hidráulicos</h3>
                                        <ul className="space-y-2 mb-6">
                                            <li className={`flex items-center text-sm ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                <span className="w-2 h-2 bg-[#006ba0] rounded-full mr-3"></span>
                                                Reparación de bombas hidráulicas
                                            </li>
                                            <li className={`flex items-center text-sm ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                <span className="w-2 h-2 bg-[#006ba0] rounded-full mr-3"></span>
                                                Válvulas y cilindros hidráulicos
                                            </li>
                                            <li className={`flex items-center text-sm ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                <span className="w-2 h-2 bg-[#006ba0] rounded-full mr-3"></span>
                                                Mantenimiento de sistemas completos
                                            </li>
                                        </ul>
                                        <div className="text-center">
                                           
                                            <button className="w-full bg-[#006ba0] hover:bg-[#004d73] text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                                                Solicitar Servicio
                                            </button>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ y: -10, scale: 1.02 }}
                                        className={`group p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl ${
                                            isDarkMode ? 'bg-gray-800 border border-gray-700 hover:border-green-500' : 'bg-white border border-gray-200 hover:border-green-400'
                                        }`}
                                    >
                                        <div className="text-center mb-6">
                                            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                                </svg>
                                            </div>
                                            <div className="text-2xl font-bold text-green-500 mb-2">⚡</div>
                                        </div>
                                        <h3 className={`text-2xl font-bold mb-4 text-center ${
                                            isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>Sistemas Eléctricos</h3>
                                        <ul className="space-y-2 mb-6">
                                            <li className={`flex items-center text-sm ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                                Reparación de alternadores y motores de arranque
                                            </li>
                                            <li className={`flex items-center text-sm ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                                Sistemas de control electrónico
                                            </li>
                                            <li className={`flex items-center text-sm ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                                Diagnóstico computarizado
                                            </li>
                                        </ul>
                                        <div className="text-center">
                                           
                                            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                                                Solicitar Servicio
                                            </button>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Why Choose Us Section */}
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
                                    }`}>¿Por qué somos los mejores?</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="text-center group"
                                        >
                                             <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                                                 isDarkMode ? 'bg-[#006ba0] group-hover:bg-[#004d73]' : 'bg-[#006ba0] group-hover:bg-[#004d73]'
                                             }`}>
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <h3 className={`text-xl font-bold mb-3 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Técnicos CAT Certificados</h3>
                                            <p className={`text-sm leading-relaxed ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                Equipo técnico certificado por Caterpillar con años de experiencia en maquinaria pesada
                                            </p>
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="text-center group"
                                        >
                                            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                                                isDarkMode ? 'bg-[#006ba0] group-hover:bg-[#004d73]' : 'bg-[#006ba0] group-hover:bg-[#004d73]'
                                            }`}>
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            </div>
                                            <h3 className={`text-xl font-bold mb-3 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Repuestos Originales</h3>
                                            <p className={`text-sm leading-relaxed ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                Solo utilizamos repuestos originales OEM garantizados por el fabricante
                                            </p>
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="text-center group"
                                        >
                                            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                                                isDarkMode ? 'bg-green-600 group-hover:bg-green-500' : 'bg-green-500 group-hover:bg-green-600'
                                            }`}>
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <h3 className={`text-xl font-bold mb-3 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Servicio Express</h3>
                                            <p className={`text-sm leading-relaxed ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                Reparaciones prioritarias en menos de 48 horas para casos urgentes
                                            </p>
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="text-center group"
                                        >
                                            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                                                isDarkMode ? 'bg-orange-600 group-hover:bg-orange-500' : 'bg-orange-500 group-hover:bg-orange-600'
                                            }`}>
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <h3 className={`text-xl font-bold mb-3 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Garantía Extendida</h3>
                                            <p className={`text-sm leading-relaxed ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                Hasta 24 meses de garantía en todas nuestras reparaciones y servicios
                                            </p>
                                        </motion.div>
                                    </div>
                                </motion.div>

                                {/* Gallery Section */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className={`p-12 rounded-2xl shadow-2xl mb-16 ${
                                        isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                                    }`}
                                >
                                    <h2 className={`text-4xl font-bold mb-6 text-center ${
                                        isDarkMode ? 'text-white' : 'text-gray-900'
                                    }`}>Galería de Servicios Realizados</h2>
                                    <p className={`text-center mb-10 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                        Muestras reales de nuestro trabajo en campo: soldadura, hidráulica, pintura y más.
                                    </p>

                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                                        {galleryImages.map((img, idx) => (
                                            <motion.button
                                                key={img.src}
                                                type="button"
                                                onClick={() => { setCurrentIndex(idx); setLightboxOpen(true); }}
                                                className={`relative group rounded-xl overflow-hidden focus:outline-none focus:ring-2 ${
                                                    isDarkMode ? 'focus:ring-[#006ba0]' : 'focus:ring-[#006ba0]'
                                                }`}
                                                initial={{ opacity: 0, scale: 0.98 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.4 }}
                                            >
                                                <div className="aspect-[4/3] w-full">
                                                    <img
                                                        src={img.src}
                                                        alt={img.title}
                                                        loading="lazy"
                                                        className="w-full h-full object-cover object-center select-none"
                                                    />
                                                </div>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                                                    <div className={`inline-flex items-center rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium shadow-md ${
                                                        isDarkMode ? 'bg-black/60 text-white' : 'bg-white/80 text-gray-900'
                                                    }`}>
                                                        <span className="truncate">{img.title}</span>
                                                    </div>
                                                </div>
                                            </motion.button>
                                        ))}
                                    </div>

                                    <AnimatePresence>
                                        {lightboxOpen && (
                                            <motion.div
                                                className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            >
                                                <div className="absolute inset-0" onClick={() => setLightboxOpen(false)} aria-hidden="true"></div>
                                                <div className="relative z-[61] w-full max-w-6xl px-4">
                                                    <div className={`rounded-2xl overflow-hidden shadow-2xl ${
                                                        isDarkMode ? 'bg-gray-900' : 'bg-white'
                                                    }`}>
                                                        <div className="p-2 sm:p-4 flex items-center justify-between">
                                                            <div className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{galleryImages[currentIndex]?.title}</div>
                                                            <button
                                                                type="button"
                                                                onClick={() => setLightboxOpen(false)}
                                                                className={`rounded-full p-2 transition-colors ${isDarkMode ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-100 text-gray-700'}`}
                                                                aria-label="Cerrar"
                                                            >
                                                                ✕
                                                            </button>
                                                        </div>
                                                        <div className="max-h-[80vh] flex items-center justify-center bg-black/10">
                                                            <img
                                                                src={galleryImages[currentIndex]?.src}
                                                                alt={galleryImages[currentIndex]?.title}
                                                                className="max-h-[78vh] w-auto object-contain"
                                                            />
                                                        </div>
                                                        <div className="p-3 sm:p-4 flex items-center justify-between">
                                                            <button
                                                                type="button"
                                                                onClick={() => setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                                                                className={`px-4 py-2 rounded-lg font-medium ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                                                                aria-label="Anterior"
                                                            >
                                                                ◀ Anterior
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={() => setCurrentIndex((prev) => (prev + 1) % galleryImages.length)}
                                                                className={`px-4 py-2 rounded-lg font-medium ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                                                                aria-label="Siguiente"
                                                            >
                                                                Siguiente ▶
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                {/* Process Section */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className={`p-12 rounded-2xl shadow-2xl mb-16 ${
                                        isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                                    }`}
                                >
                                    <h2 className={`text-4xl font-bold mb-12 text-center ${
                                        isDarkMode ? 'text-white' : 'text-gray-900'
                                    }`}>Nuestro Proceso de Trabajo</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="text-center group"
                                        >
                                            <div className="relative">
                                             <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                                                 isDarkMode ? 'bg-[#006ba0] group-hover:bg-[#004d73]' : 'bg-[#006ba0] group-hover:bg-[#004d73]'
                                             } text-white text-2xl font-bold`}>
                                                     1
                                                 </div>
                                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                                                    <span className="text-white text-sm font-bold">📱</span>
                                                </div>
                                            </div>
                                            <h4 className={`text-xl font-bold mb-3 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Contacto Inicial</h4>
                                            <p className={`text-sm leading-relaxed ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                Llamada o WhatsApp para entender el problema y coordinar la visita técnica
                                            </p>
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="text-center group"
                                        >
                                            <div className="relative">
                                                <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                                                    isDarkMode ? 'bg-[#006ba0] group-hover:bg-[#004d73]' : 'bg-[#006ba0] group-hover:bg-[#004d73]'
                                                } text-white text-2xl font-bold`}>
                                                    2
                                                </div>
                                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                                                    <span className="text-white text-sm font-bold">🔍</span>
                                                </div>
                                            </div>
                                            <h4 className={`text-xl font-bold mb-3 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Diagnóstico Completo</h4>
                                            <p className={`text-sm leading-relaxed ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                Inspección detallada con equipos especializados y software de diagnóstico
                                            </p>
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="text-center group"
                                        >
                                            <div className="relative">
                                             <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                                                 isDarkMode ? 'bg-[#006ba0] group-hover:bg-[#004d73]' : 'bg-[#006ba0] group-hover:bg-[#004d73]'
                                             } text-white text-2xl font-bold`}>
                                                     3
                                                 </div>
                                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                                                    <span className="text-white text-sm font-bold">🛠️</span>
                                                </div>
                                            </div>
                                            <h4 className={`text-xl font-bold mb-3 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Reparación Profesional</h4>
                                            <p className={`text-sm leading-relaxed ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                Ejecución de la reparación con técnicas especializadas y repuestos originales
                                            </p>
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="text-center group"
                                        >
                                            <div className="relative">
                                                <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                                                    isDarkMode ? 'bg-orange-600 group-hover:bg-orange-500' : 'bg-orange-500 group-hover:bg-orange-600'
                                                } text-white text-2xl font-bold`}>
                                                    4
                                                </div>
                                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                                                    <span className="text-white text-sm font-bold">✅</span>
                                                </div>
                                            </div>
                                            <h4 className={`text-xl font-bold mb-3 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Entrega y Garantía</h4>
                                            <p className={`text-sm leading-relaxed ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                Pruebas finales, entrega del equipo y garantía completa del servicio
                                            </p>
                                        </motion.div>
                                    </div>
                                </motion.div>

                                {/* Emergency Service Section */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                     className="text-center bg-gradient-to-r from-[#006ba0] to-[#004d73] rounded-2xl p-12 text-white shadow-2xl mb-16"
                                >
                                    <div className="flex items-center justify-center mb-6">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                                            <span className="text-red-600 text-2xl">🚨</span>
                                        </div>
                                        <h2 className="text-4xl font-bold">Servicio de Emergencia 24/7</h2>
                                    </div>
                                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                                        ¿Tu maquinaria se detuvo? Nuestro equipo de respuesta rápida está disponible las 24 horas del día, todos los días del año
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                        <div className="bg-white bg-opacity-10 rounded-lg p-6">
                                            <div className="text-3xl font-bold mb-2">15 min</div>
                                             <div className="text-[#006ba0]/70">Tiempo de respuesta promedio</div>
                                        </div>
                                        <div className="bg-white bg-opacity-10 rounded-lg p-6">
                                            <div className="text-3xl font-bold mb-2">98%</div>
                                             <div className="text-[#006ba0]/70">Tasa de resolución exitosa</div>
                                        </div>
                                        <div className="bg-white bg-opacity-10 rounded-lg p-6">
                                            <div className="text-3xl font-bold mb-2">365</div>
                                             <div className="text-[#006ba0]/70">Días al año disponibles</div>
                                        </div>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                             className="bg-white text-[#006ba0] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300"
                                    >
                                        🚨 LLAMAR EMERGENCIA
                                    </motion.button>
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
