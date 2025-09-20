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
                        <div className={`py-16 px-4 sm:px-6 lg:px-8 ${
                            isDarkMode ? 'bg-gray-800' : 'bg-white'
                        } shadow-lg`}>
                            <div className="max-w-7xl mx-auto text-center">
                                <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${
                                    isDarkMode ? 'text-white' : 'text-gray-900'
                                }`}>Ventas de Equipos</h1>
                                <p className={`text-xl md:text-2xl ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                    Equipos de laboratorio nuevos y usados de las mejores marcas
                                </p>
                            </div>
                        </div>

                        {/* Services Section */}
                        <div className={`py-16 px-4 sm:px-6 lg:px-8 ${
                            isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
                        }`}>
                            <div className="max-w-7xl mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                                    <div className={`p-8 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                                        isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                                    }`}>
                                        <div className="text-center mb-6">
                                            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                                                isDarkMode ? 'bg-emerald-600' : 'bg-emerald-500'
                                            }`}>
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className={`text-xl font-bold mb-4 text-center ${
                                            isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>Equipos Nuevos</h3>
                                        <p className={`text-center leading-relaxed ${
                                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                            Equipos de última generación con garantía completa del fabricante y soporte técnico.
                                        </p>
                                    </div>

                                    <div className={`p-8 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                                        isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                                    }`}>
                                        <div className="text-center mb-6">
                                            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                                                isDarkMode ? 'bg-amber-600' : 'bg-amber-500'
                                            }`}>
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className={`text-xl font-bold mb-4 text-center ${
                                            isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>Equipos Reacondicionados</h3>
                                        <p className={`text-center leading-relaxed ${
                                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                            Equipos usados certificados, revisados y con garantía extendida a precios competitivos.
                                        </p>
                                    </div>

                                    <div className={`p-8 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                                        isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                                    }`}>
                                        <div className="text-center mb-6">
                                            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                                                isDarkMode ? 'bg-indigo-600' : 'bg-indigo-500'
                                            }`}>
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className={`text-xl font-bold mb-4 text-center ${
                                            isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>Financiamiento</h3>
                                        <p className={`text-center leading-relaxed ${
                                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                            Opciones de financiamiento flexibles para adquirir los equipos que necesita.
                                        </p>
                                    </div>
                                </div>

                                {/* Why Choose Us Section */}
                                <div className={`p-10 rounded-xl shadow-xl mb-16 transition-colors duration-300 ${
                                    isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                                }`}>
                                    <h2 className={`text-3xl font-bold mb-8 text-center ${
                                        isDarkMode ? 'text-white' : 'text-gray-900'
                                    }`}>¿Por qué comprar con nosotros?</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <ul className="space-y-4">
                                            <li className="flex items-center">
                                                <div className={`w-3 h-3 rounded-full mr-4 ${
                                                    isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                                                }`}></div>
                                                <span className={`text-lg ${
                                                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                                                }`}>Marcas reconocidas mundialmente</span>
                                            </li>
                                            <li className="flex items-center">
                                                <div className={`w-3 h-3 rounded-full mr-4 ${
                                                    isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                                                }`}></div>
                                                <span className={`text-lg ${
                                                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                                                }`}>Garantía extendida disponible</span>
                                            </li>
                                            <li className="flex items-center">
                                                <div className={`w-3 h-3 rounded-full mr-4 ${
                                                    isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                                                }`}></div>
                                                <span className={`text-lg ${
                                                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                                                }`}>Instalación y puesta en marcha</span>
                                            </li>
                                            <li className="flex items-center">
                                                <div className={`w-3 h-3 rounded-full mr-4 ${
                                                    isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                                                }`}></div>
                                                <span className={`text-lg ${
                                                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                                                }`}>Capacitación para usuarios</span>
                                            </li>
                                        </ul>
                                        <ul className="space-y-4">
                                            <li className="flex items-center">
                                                <div className={`w-3 h-3 rounded-full mr-4 ${
                                                    isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                                                }`}></div>
                                                <span className={`text-lg ${
                                                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                                                }`}>Soporte técnico especializado</span>
                                            </li>
                                            <li className="flex items-center">
                                                <div className={`w-3 h-3 rounded-full mr-4 ${
                                                    isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                                                }`}></div>
                                                <span className={`text-lg ${
                                                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                                                }`}>Precios competitivos</span>
                                            </li>
                                            <li className="flex items-center">
                                                <div className={`w-3 h-3 rounded-full mr-4 ${
                                                    isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                                                }`}></div>
                                                <span className={`text-lg ${
                                                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                                                }`}>Entrega e instalación incluida</span>
                                            </li>
                                            <li className="flex items-center">
                                                <div className={`w-3 h-3 rounded-full mr-4 ${
                                                    isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                                                }`}></div>
                                                <span className={`text-lg ${
                                                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                                                }`}>Asesoría técnica personalizada</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                               

                               
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