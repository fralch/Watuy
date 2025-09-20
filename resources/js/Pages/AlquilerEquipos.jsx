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

export default function AlquilerEquipos() {
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
            <Head title="Alquiler de Equipos - MegaEquipamiento" />

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
                                }`}>Alquiler de Equipos</h1>
                                <p className={`text-xl md:text-2xl ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                    Equipos de laboratorio de alta calidad disponibles para alquiler
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
                                                isDarkMode ? 'bg-blue-600' : 'bg-blue-500'
                                            }`}>
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className={`text-xl font-bold mb-4 text-center ${
                                            isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>Alquiler a Corto Plazo</h3>
                                        <p className={`text-center leading-relaxed ${
                                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                            Ideal para proyectos específicos, desde días hasta semanas. Equipos listos para usar.
                                        </p>
                                    </div>

                                    <div className={`p-8 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                                        isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                                    }`}>
                                        <div className="text-center mb-6">
                                            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                                                isDarkMode ? 'bg-green-600' : 'bg-green-500'
                                            }`}>
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className={`text-xl font-bold mb-4 text-center ${
                                            isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>Alquiler a Largo Plazo</h3>
                                        <p className={`text-center leading-relaxed ${
                                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                            Soluciones económicas para necesidades prolongadas con tarifas preferenciales.
                                        </p>
                                    </div>

                                    <div className={`p-8 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                                        isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                                    }`}>
                                        <div className="text-center mb-6">
                                            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                                                isDarkMode ? 'bg-purple-600' : 'bg-purple-500'
                                            }`}>
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className={`text-xl font-bold mb-4 text-center ${
                                            isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>Equipos Especializados</h3>
                                        <p className={`text-center leading-relaxed ${
                                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                            Equipos de alta gama y especializados para investigación y análisis avanzados.
                                        </p>
                                    </div>
                                </div>

                                {/* Advantages Section */}
                                <div className={`p-10 rounded-xl shadow-xl mb-16 transition-colors duration-300 ${
                                    isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                                }`}>
                                    <h2 className={`text-3xl font-bold mb-8 text-center ${
                                        isDarkMode ? 'text-white' : 'text-gray-900'
                                    }`}>Ventajas del Alquiler</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <ul className="space-y-4">
                                            <li className="flex items-center">
                                                <div className={`w-3 h-3 rounded-full mr-4 ${
                                                    isDarkMode ? 'bg-green-400' : 'bg-green-500'
                                                }`}></div>
                                                <span className={`text-lg ${
                                                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                                                }`}>Sin inversión inicial elevada</span>
                                            </li>
                                            <li className="flex items-center">
                                                <div className={`w-3 h-3 rounded-full mr-4 ${
                                                    isDarkMode ? 'bg-green-400' : 'bg-green-500'
                                                }`}></div>
                                                <span className={`text-lg ${
                                                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                                                }`}>Mantenimiento incluido</span>
                                            </li>
                                            <li className="flex items-center">
                                                <div className={`w-3 h-3 rounded-full mr-4 ${
                                                    isDarkMode ? 'bg-green-400' : 'bg-green-500'
                                                }`}></div>
                                                <span className={`text-lg ${
                                                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                                                }`}>Flexibilidad en duración</span>
                                            </li>
                                        </ul>
                                        <ul className="space-y-4">
                                            <li className="flex items-center">
                                                <div className={`w-3 h-3 rounded-full mr-4 ${
                                                    isDarkMode ? 'bg-green-400' : 'bg-green-500'
                                                }`}></div>
                                                <span className={`text-lg ${
                                                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                                                }`}>Equipos siempre actualizados</span>
                                            </li>
                                            <li className="flex items-center">
                                                <div className={`w-3 h-3 rounded-full mr-4 ${
                                                    isDarkMode ? 'bg-green-400' : 'bg-green-500'
                                                }`}></div>
                                                <span className={`text-lg ${
                                                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                                                }`}>Soporte técnico 24/7</span>
                                            </li>
                                            <li className="flex items-center">
                                                <div className={`w-3 h-3 rounded-full mr-4 ${
                                                    isDarkMode ? 'bg-green-400' : 'bg-green-500'
                                                }`}></div>
                                                <span className={`text-lg ${
                                                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                                                }`}>Opción de compra al final</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Categories Section */}
                                <div className={`p-10 rounded-xl shadow-xl transition-colors duration-300 ${
                                    isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                                }`}>
                                    <h2 className={`text-3xl font-bold mb-8 text-center ${
                                        isDarkMode ? 'text-white' : 'text-gray-900'
                                    }`}>Categorías Disponibles</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                        <div className={`text-center p-6 border-2 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                                            isDarkMode ? 'border-gray-600 hover:border-blue-500' : 'border-gray-200 hover:border-blue-400'
                                        }`}>
                                            <h4 className={`font-bold mb-2 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Microscopios</h4>
                                            <p className={`text-sm ${
                                                isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                            }`}>Ópticos y electrónicos</p>
                                        </div>
                                        <div className={`text-center p-6 border-2 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                                            isDarkMode ? 'border-gray-600 hover:border-blue-500' : 'border-gray-200 hover:border-blue-400'
                                        }`}>
                                            <h4 className={`font-bold mb-2 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Balanzas</h4>
                                            <p className={`text-sm ${
                                                isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                            }`}>Analíticas y precision</p>
                                        </div>
                                        <div className={`text-center p-6 border-2 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                                            isDarkMode ? 'border-gray-600 hover:border-blue-500' : 'border-gray-200 hover:border-blue-400'
                                        }`}>
                                            <h4 className={`font-bold mb-2 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Espectrómetros</h4>
                                            <p className={`text-sm ${
                                                isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                            }`}>UV-Vis, IR, MS</p>
                                        </div>
                                        <div className={`text-center p-6 border-2 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                                            isDarkMode ? 'border-gray-600 hover:border-blue-500' : 'border-gray-200 hover:border-blue-400'
                                        }`}>
                                            <h4 className={`font-bold mb-2 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Centrífugas</h4>
                                            <p className={`text-sm ${
                                                isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                            }`}>Refrigeradas y normales</p>
                                        </div>
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