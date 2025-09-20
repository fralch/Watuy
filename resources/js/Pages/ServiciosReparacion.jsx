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

export default function ServiciosReparacion() {
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
            <Head title="Servicios de Reparación - MegaEquipamiento" />

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
                                }`}>Servicios de Reparación</h1>
                                <p className={`text-xl md:text-2xl ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                    Mantenimiento y reparación especializada para equipos de laboratorio
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
                                                isDarkMode ? 'bg-orange-600' : 'bg-orange-500'
                                            }`}>
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className={`text-xl font-bold mb-4 text-center ${
                                            isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>Mantenimiento Preventivo</h3>
                                        <p className={`text-center leading-relaxed ${
                                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                            Programas de mantenimiento preventivo para extender la vida útil de sus equipos y evitar fallas costosas.
                                        </p>
                                    </div>

                                    <div className={`p-8 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                                        isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                                    }`}>
                                        <div className="text-center mb-6">
                                            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                                                isDarkMode ? 'bg-red-600' : 'bg-red-500'
                                            }`}>
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className={`text-xl font-bold mb-4 text-center ${
                                            isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>Reparación Especializada</h3>
                                        <p className={`text-center leading-relaxed ${
                                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                            Técnicos especializados en reparación de equipos de laboratorio con repuestos originales y garantía.
                                        </p>
                                    </div>

                                    <div className={`p-8 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                                        isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                                    }`}>
                                        <div className="text-center mb-6">
                                            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                                                isDarkMode ? 'bg-blue-600' : 'bg-blue-500'
                                            }`}>
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className={`text-xl font-bold mb-4 text-center ${
                                            isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>Calibración</h3>
                                        <p className={`text-center leading-relaxed ${
                                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                            Servicios de calibración certificados para asegurar la precisión y confiabilidad de sus instrumentos.
                                        </p>
                                    </div>
                                </div>

                                {/* Why Choose Us Section */}
                                <div className={`p-10 rounded-xl shadow-xl mb-16 transition-colors duration-300 ${
                                    isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                                }`}>
                                    <h2 className={`text-3xl font-bold mb-8 text-center ${
                                        isDarkMode ? 'text-white' : 'text-gray-900'
                                    }`}>¿Por qué elegir nuestros servicios?</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <ul className="space-y-4">
                                            <li className="flex items-center">
                                                <div className={`w-3 h-3 rounded-full mr-4 ${
                                                    isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                                                }`}></div>
                                                <span className={`text-lg ${
                                                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                                                }`}>Técnicos certificados y especializados</span>
                                            </li>
                                            <li className="flex items-center">
                                                <div className={`w-3 h-3 rounded-full mr-4 ${
                                                    isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                                                }`}></div>
                                                <span className={`text-lg ${
                                                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                                                }`}>Repuestos originales garantizados</span>
                                            </li>
                                            <li className="flex items-center">
                                                <div className={`w-3 h-3 rounded-full mr-4 ${
                                                    isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                                                }`}></div>
                                                <span className={`text-lg ${
                                                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                                                }`}>Servicio a domicilio disponible</span>
                                            </li>
                                        </ul>
                                        <ul className="space-y-4">
                                            <li className="flex items-center">
                                                <div className={`w-3 h-3 rounded-full mr-4 ${
                                                    isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                                                }`}></div>
                                                <span className={`text-lg ${
                                                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                                                }`}>Garantía en todas las reparaciones</span>
                                            </li>
                                            <li className="flex items-center">
                                                <div className={`w-3 h-3 rounded-full mr-4 ${
                                                    isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                                                }`}></div>
                                                <span className={`text-lg ${
                                                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                                                }`}>Atención personalizada 24/7</span>
                                            </li>
                                            <li className="flex items-center">
                                                <div className={`w-3 h-3 rounded-full mr-4 ${
                                                    isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                                                }`}></div>
                                                <span className={`text-lg ${
                                                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                                                }`}>Presupuestos sin compromiso</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Process Section */}
                                <div className={`p-10 rounded-xl shadow-xl transition-colors duration-300 ${
                                    isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                                }`}>
                                    <h2 className={`text-3xl font-bold mb-8 text-center ${
                                        isDarkMode ? 'text-white' : 'text-gray-900'
                                    }`}>Proceso de Reparación</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                        <div className="text-center">
                                            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                                                isDarkMode ? 'bg-orange-600' : 'bg-orange-500'
                                            } text-white text-xl font-bold`}>
                                                1
                                            </div>
                                            <h4 className={`font-bold mb-2 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Diagnóstico</h4>
                                            <p className={`text-sm ${
                                                isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                            }`}>Evaluación completa del equipo y identificación de fallas</p>
                                        </div>
                                        <div className="text-center">
                                            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                                                isDarkMode ? 'bg-orange-600' : 'bg-orange-500'
                                            } text-white text-xl font-bold`}>
                                                2
                                            </div>
                                            <h4 className={`font-bold mb-2 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Presupuesto</h4>
                                            <p className={`text-sm ${
                                                isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                            }`}>Cotización detallada con tiempo estimado de reparación</p>
                                        </div>
                                        <div className="text-center">
                                            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                                                isDarkMode ? 'bg-orange-600' : 'bg-orange-500'
                                            } text-white text-xl font-bold`}>
                                                3
                                            </div>
                                            <h4 className={`font-bold mb-2 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Reparación</h4>
                                            <p className={`text-sm ${
                                                isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                            }`}>Ejecución de la reparación con repuestos originales</p>
                                        </div>
                                        <div className="text-center">
                                            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                                                isDarkMode ? 'bg-orange-600' : 'bg-orange-500'
                                            } text-white text-xl font-bold`}>
                                                4
                                            </div>
                                            <h4 className={`font-bold mb-2 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Entrega</h4>
                                            <p className={`text-sm ${
                                                isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                            }`}>Pruebas finales, calibración y entrega con garantía</p>
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