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

export default function AlquilerEquipos() {
    const { auth } = usePage().props;
    const { isDarkMode } = useTheme();
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
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300"
                                        >
                                            📋 Ver Catálogo Completo
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300"
                                        >
                                            📞 Cotización Inmediata
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
                                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div className="text-2xl font-bold text-[#006ba0] mb-2">⏱️</div>
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
                                            <button className="w-full bg-[#006ba0] hover:bg-[#004d73] text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                                                Reservar Ahora
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
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                             <div className="text-2xl font-bold text-[#006ba0] mb-2">📅</div>
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
                                             <button className="w-full bg-[#006ba0] hover:bg-[#004d73] text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                                                 Cotizar Mensual
                                             </button>
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
                                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                </svg>
                                            </div>
                                            <div className="text-2xl font-bold text-purple-500 mb-2">🚀</div>
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
                                            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                                                Consultar Proyecto
                                            </button>
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
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
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
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                </svg>
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
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
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
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
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
                                            <div className="text-4xl mb-4">🚜</div>
                                            <h4 className={`text-xl font-bold mb-3 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Excavadoras</h4>
                                            <p className={`text-sm mb-4 ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>Desde 20 hasta 50 toneladas. Ideales para movimientos de tierra y demolición</p>
                                            <div className="text-lg font-bold text-orange-500 mb-3">$450 - $850/día</div>
                                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition-colors duration-300">
                                                Ver Modelos
                                            </button>
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ scale: 1.05, y: -5 }}
                                            className={`group text-center p-8 border-2 rounded-2xl transition-all duration-500 hover:shadow-2xl ${
                                                isDarkMode ? 'border-gray-600 hover:border-[#006ba0] bg-gray-700' : 'border-gray-200 hover:border-[#006ba0] bg-gray-50'
                                            }`}
                                        >
                                            <div className="text-4xl mb-4">🏗️</div>
                                            <h4 className={`text-xl font-bold mb-3 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Bulldozers</h4>
                                            <p className={`text-sm mb-4 ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>Potentes máquinas para nivelación y movimientos de tierra en grandes volúmenes</p>
                                            <div className="text-lg font-bold text-[#006ba0] mb-3">$380 - $650/día</div>
                                            <button className="w-full bg-[#006ba0] hover:bg-[#004d73] text-white py-2 rounded-lg font-semibold transition-colors duration-300">
                                                Ver Modelos
                                            </button>
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ scale: 1.05, y: -5 }}
                                            className={`group text-center p-8 border-2 rounded-2xl transition-all duration-500 hover:shadow-2xl ${
                                                isDarkMode ? 'border-gray-600 hover:border-green-500 bg-gray-700' : 'border-gray-200 hover:border-green-400 bg-gray-50'
                                            }`}
                                        >
                                            <div className="text-4xl mb-4">🛠️</div>
                                            <h4 className={`text-xl font-bold mb-3 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Cargadores Frontales</h4>
                                            <p className={`text-sm mb-4 ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>Para carga y transporte de materiales. Alta eficiencia en espacios reducidos</p>
                                             <div className="text-lg font-bold text-[#006ba0] mb-3">$320 - $550/día</div>
                                             <button className="w-full bg-[#006ba0] hover:bg-[#004d73] text-white py-2 rounded-lg font-semibold transition-colors duration-300">
                                                 Ver Modelos
                                             </button>
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ scale: 1.05, y: -5 }}
                                            className={`group text-center p-8 border-2 rounded-2xl transition-all duration-500 hover:shadow-2xl ${
                                                isDarkMode ? 'border-gray-600 hover:border-purple-500 bg-gray-700' : 'border-gray-200 hover:border-purple-400 bg-gray-50'
                                            }`}
                                        >
                                            <div className="text-4xl mb-4">🏗️</div>
                                            <h4 className={`text-xl font-bold mb-3 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Equipos Especializados</h4>
                                            <p className={`text-sm mb-4 ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>Grúas, compactadores, martillos hidráulicos y equipos para minería</p>
                                            <div className="text-lg font-bold text-purple-500 mb-3">Consultar precios</div>
                                            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg font-semibold transition-colors duration-300">
                                                Consultar
                                            </button>
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
                                                        className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                                                    <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                                                        <div>
                                                            <div className="text-xs sm:text-sm font-semibold text-white/80">{item.categoria}</div>
                                                            <div className="text-base sm:text-lg font-bold text-white">{item.nombre}</div>
                                                        </div>
                                                        <button className="ml-3 bg-[#006ba0] hover:bg-[#004d73] text-white px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold shadow">
                                                            Cotizar
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="text-center mt-8">
                                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            Las imágenes corresponden a equipos disponibles para alquiler.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Calculator Section */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="text-center bg-gradient-to-r from-green-500 to-[#006ba0] rounded-2xl p-12 text-white shadow-2xl mb-16"
                                >
                                    <h2 className="text-4xl font-bold mb-6">Calcula tu Presupuesto</h2>
                                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                                        Obtén una estimación precisa del costo de alquiler según tus necesidades específicas
                                    </p>
                                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                         <div className="bg-white bg-opacity-10 rounded-lg p-6">
                                             <div className="text-2xl mb-2">📅</div>
                                             <div className="text-lg font-bold mb-2">Duración del Proyecto</div>
                                             <div className="text-[#006ba0]/70">Desde 1 día hasta varios meses</div>
                                         </div>
                                         <div className="bg-white bg-opacity-10 rounded-lg p-6">
                                             <div className="text-2xl mb-2">⚙️</div>
                                             <div className="text-lg font-bold mb-2">Tipo de Equipo</div>
                                             <div className="text-[#006ba0]/70">Más de 50 modelos disponibles</div>
                                         </div>
                                         <div className="bg-white bg-opacity-10 rounded-lg p-6">
                                             <div className="text-2xl mb-2">📍</div>
                                             <div className="text-lg font-bold mb-2">Ubicación</div>
                                             <div className="text-[#006ba0]/70">Entrega a todo el país</div>
                                         </div>
                                     </div>
                                     <motion.button
                                         whileHover={{ scale: 1.05 }}
                                         whileTap={{ scale: 0.95 }}
                                         className="bg-white text-[#006ba0] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300"
                                     >
                                         🧮 Calcular Presupuesto
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
