import { Head, usePage, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { FiLogIn, FiUser, FiLogOut } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import NavVertical from "@/Components/home/NavVertical";
import Menu from "@/Components/home/Menu";
import Footer from "@/Components/home/Footer";
import Header from "@/Components/home/Header";
import ErrorBoundary from "@/Components/ErrorBoundary";
import { useTheme } from "@/storage/ThemeContext";
import UserProfileModal from "@/Components/UserProfileModal";

export default function VentasEquipos() {
    const { auth } = usePage().props;
    const { isDarkMode } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false);

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

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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

    const shouldHideButton = isOpen;

    return (
        <>
            <Head title="Ventas de Equipos - MegaEquipamiento" />

            <div>
                <Header />

                <AnimatePresence>
                    {!shouldHideButton && (
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
                                            ? "bg-blue-600 hover:bg-blue-700"
                                            : "bg-blue-500 hover:bg-blue-600"
                                    } text-white text-sm font-medium`}
                                >
                                    <FiLogIn size={18} />
                                    <span className="hidden sm:inline">Iniciar Sesión</span>
                                </Link>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                <div
                    className={`min-w-screen min-h-screen ${
                        isDarkMode ? "bg-gray-900" : "bg-gray-200"
                    } transition-colors duration-300`}
                    style={{ marginTop: "-20px" }}
                >
                    <Menu toggleMenu={toggleMenu} />
                    <ErrorBoundary>
                        <NavVertical isOpen={isOpen} onClose={toggleMenu} />
                    </ErrorBoundary>

                    <main className="mt-0 w-full">
                        {/* Hero Section */}
                        <div className={`relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden ${
                            isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-600 to-blue-800'
                        } shadow-2xl`}>
                            <div className="absolute inset-0 bg-black opacity-20"></div>
                            <div className="relative max-w-7xl mx-auto text-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                                        Venta de Maquinaria Pesada
                                    </h1>
                                    <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                                        Maquinaria industrial nueva y usada certificada. Excavadoras, bulldozers, cargadores y más equipos para construcción y minería.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300"
                                        >
                                            Ver Catálogo Completo
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300"
                                        >
                                            Solicitar Cotización
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Featured Equipment Section */}
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
                                    }`}>Equipos Destacados</h2>
                                    <p className={`text-xl ${
                                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                    } max-w-2xl mx-auto`}>
                                        Selección premium de maquinaria pesada certificada y lista para trabajar
                                    </p>
                                </motion.div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                                    <motion.div
                                        whileHover={{ y: -10 }}
                                        className={`group p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl ${
                                            isDarkMode ? 'bg-gray-800 border border-gray-700 hover:border-orange-500' : 'bg-white border border-gray-200 hover:border-orange-400'
                                        }`}
                                    >
                                        <div className="text-center mb-6">
                                            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                            <div className="text-3xl font-bold text-orange-500 mb-2">$85,000</div>
                                        </div>
                                        <h3 className={`text-2xl font-bold mb-4 text-center ${
                                            isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>Excavadora CAT 320</h3>
                                        <div className="space-y-2 mb-6">
                                            <div className="flex justify-between">
                                                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Modelo:</span>
                                                <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>2020</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Horas:</span>
                                                <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>2,500</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Estado:</span>
                                                <span className="font-semibold text-green-500">Excelente</span>
                                            </div>
                                        </div>
                                        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                                            Ver Detalles
                                        </button>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ y: -10 }}
                                        className={`group p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl ${
                                            isDarkMode ? 'bg-gray-800 border border-gray-700 hover:border-blue-500' : 'bg-white border border-gray-200 hover:border-blue-400'
                                        }`}
                                    >
                                        <div className="text-center mb-6">
                                            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                                </svg>
                                            </div>
                                            <div className="text-3xl font-bold text-blue-500 mb-2">$120,000</div>
                                        </div>
                                        <h3 className={`text-2xl font-bold mb-4 text-center ${
                                            isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>Bulldozer D6</h3>
                                        <div className="space-y-2 mb-6">
                                            <div className="flex justify-between">
                                                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Modelo:</span>
                                                <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>2019</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Horas:</span>
                                                <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>3,200</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Estado:</span>
                                                <span className="font-semibold text-green-500">Excelente</span>
                                            </div>
                                        </div>
                                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                                            Ver Detalles
                                        </button>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ y: -10 }}
                                        className={`group p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl ${
                                            isDarkMode ? 'bg-gray-800 border border-gray-700 hover:border-green-500' : 'bg-white border border-gray-200 hover:border-green-400'
                                        }`}
                                    >
                                        <div className="text-center mb-6">
                                            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                                </svg>
                                            </div>
                                            <div className="text-3xl font-bold text-green-500 mb-2">$65,000</div>
                                        </div>
                                        <h3 className={`text-2xl font-bold mb-4 text-center ${
                                            isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>Cargador Frontal 966</h3>
                                        <div className="space-y-2 mb-6">
                                            <div className="flex justify-between">
                                                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Modelo:</span>
                                                <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>2021</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Horas:</span>
                                                <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>1,800</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Estado:</span>
                                                <span className="font-semibold text-green-500">Nuevo</span>
                                            </div>
                                        </div>
                                        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                                            Ver Detalles
                                        </button>
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
                                    }`}>¿Por qué elegirnos?</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="text-center group"
                                        >
                                            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                                                isDarkMode ? 'bg-blue-600 group-hover:bg-blue-500' : 'bg-blue-500 group-hover:bg-blue-600'
                                            }`}>
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <h3 className={`text-xl font-bold mb-3 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Certificación Total</h3>
                                            <p className={`text-sm leading-relaxed ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                Todos nuestros equipos pasan rigurosas inspecciones y certificaciones de calidad
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
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            </div>
                                            <h3 className={`text-xl font-bold mb-3 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Financiamiento</h3>
                                            <p className={`text-sm leading-relaxed ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                Opciones de financiamiento flexibles con tasas preferenciales y plazos extendidos
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
                                            }`}>Soporte 24/7</h3>
                                            <p className={`text-sm leading-relaxed ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                Asistencia técnica especializada disponible las 24 horas del día, todos los días
                                            </p>
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="text-center group"
                                        >
                                            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                                                isDarkMode ? 'bg-purple-600 group-hover:bg-purple-500' : 'bg-purple-500 group-hover:bg-purple-600'
                                            }`}>
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <h3 className={`text-xl font-bold mb-3 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Entrega Rápida</h3>
                                            <p className={`text-sm leading-relaxed ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                Logística especializada para entrega rápida y segura en cualquier punto del país
                                            </p>
                                        </motion.div>
                                    </div>
                                </motion.div>

                                {/* Testimonials Section */}
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
                                    }`}>Lo que dicen nuestros clientes</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        <div className={`p-6 rounded-xl ${
                                            isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                                        }`}>
                                            <div className="flex items-center mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                            <p className={`text-sm mb-4 italic ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                "Excelente servicio. Compré una excavadora CAT 320 en perfectas condiciones. El proceso fue transparente y el financiamiento muy accesible."
                                            </p>
                                            <div className={`font-semibold ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Carlos Mendoza</div>
                                            <div className={`text-sm ${
                                                isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                            }`}>Constructora Mendoza S.A.</div>
                                        </div>

                                        <div className={`p-6 rounded-xl ${
                                            isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                                        }`}>
                                            <div className="flex items-center mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                            <p className={`text-sm mb-4 italic ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                "La bulldozer D6 que adquirí superó todas mis expectativas. Precio justo y entrega en tiempo récord."
                                            </p>
                                            <div className={`font-semibold ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Ana García</div>
                                            <div className={`text-sm ${
                                                isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                            }`}>Minera del Norte</div>
                                        </div>

                                        <div className={`p-6 rounded-xl ${
                                            isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                                        }`}>
                                            <div className="flex items-center mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                            <p className={`text-sm mb-4 italic ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                "Profesionalismo total. El equipo de soporte técnico nos ayudó en todo momento. Altamente recomendados."
                                            </p>
                                            <div className={`font-semibold ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Roberto Silva</div>
                                            <div className={`text-sm ${
                                                isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                            }`}>Construcciones Silva Ltda.</div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Contact CTA Section */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="text-center bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-12 text-white shadow-2xl"
                                >
                                    <h2 className="text-4xl font-bold mb-6">¿Necesitas Asesoría?</h2>
                                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                                        Nuestros expertos están listos para ayudarte a encontrar el equipo perfecto para tu proyecto
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300"
                                        >
                                            📞 Llamar Ahora
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                                        >
                                            💬 WhatsApp
                                        </motion.button>
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