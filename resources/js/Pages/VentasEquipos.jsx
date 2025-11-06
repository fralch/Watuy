import { Head, usePage, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { FiLogIn, FiUser, FiLogOut, FiX, FiChevronLeft, FiChevronRight, FiMaximize2, FiPhoneCall, FiDollarSign, FiCheckCircle, FiTruck, FiLifeBuoy, FiStar, FiEye, FiSettings } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "@/Components/home/Menu";
import Footer from "@/Components/home/Footer";
import Header from "@/Components/home/Header";
import ErrorBoundary from "@/Components/ErrorBoundary";
import { useTheme } from "@/storage/ThemeContext";
import UserProfileModal from "@/Components/UserProfileModal";

export default function VentasEquipos() {
    const { auth } = usePage().props;
    const { isDarkMode } = useTheme();
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentGallery, setCurrentGallery] = useState("maquinaria");

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

    const openLightbox = (index, gallery) => {
        setCurrentIndex(index);
        setCurrentGallery(gallery);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = 'unset';
    };

    const nextImage = () => {
        const list = currentGallery === "maquinaria" ? equiposVenta : repuestosVenta;
        setCurrentIndex((prev) => (prev + 1) % list.length);
    };

    const prevImage = () => {
        const list = currentGallery === "maquinaria" ? equiposVenta : repuestosVenta;
        setCurrentIndex((prev) => (prev - 1 + list.length) % list.length);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightboxOpen) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, currentIndex, currentGallery]);

    // Directorios y datos de galerías desde /public/img (similar a AlquilerEquipos)
    const GALERIA_MAQ_PATH = "/img/IMAGENES_VENTA_DE MAQUINARIA PESADA";
    const GALERIA_REP_PATH = "/img/IMAGENES_VENTAS DE REPUESTOS";

    // Maquinaria en venta: usar objetos con nombre y archivo
    const equiposVenta = [
        { nombre: "Excavadora Doossan 225", archivo: "VENTA_EXCAVADORA DOOSSAN 225 1de4.jpeg", categoria: "Excavadora" },
        { nombre: "Excavadora Doossan 225 (2)", archivo: "VENTA_EXCAVADORA DOOSSAN 225 2de4.jpeg", categoria: "Excavadora" },
    ];

    // Repuestos en venta: derivar nombre legible del nombre de archivo
    const repuestosArchivos = [
        "Adaptador de uñas.jpg",
        "CANTONERAS .png",
        "Cadenas_Excavadora.jpg",
        "Esproker .jpg",
        "KIT DE SELLOS.jpg",
        "RUEDAS GUIA.png",
        "Rodillos.png",
        "UÑAS.jpg",
        "bocina.jpg",
        "pines.jpeg",
    ];

    const formatTitle = (name) =>
        name.replace(/\.[^.]+$/, "").replace(/_/g, " ").replace(/\s+/g, " ").trim();

    const repuestosVenta = repuestosArchivos.map((archivo) => ({
        archivo,
        nombre: formatTitle(archivo),
        categoria: "Repuesto",
    }));

    const buildWaLink = (message) => `https://wa.me/51970714696?text=${encodeURIComponent(message)}`;

    const handleWhatsAppContact = (itemName, type = "maquinaria") => {
        const message = `Hola, estoy interesado en obtener más información sobre: ${itemName} (${type === "maquinaria" ? "Maquinaria Pesada" : "Repuesto"}). ¿Podrían proporcionarme detalles sobre disponibilidad y precio?`;
        const whatsappUrl = `https://wa.me/51970714696?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <>
            <Head title="Ventas de Equipos - MegaEquipamiento" />

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
                                        Venta de Maquinaria Pesada
                                    </h1>
                                    <p className="text-xl md:text-2xl text-[#006ba0]/70 mb-8 max-w-3xl mx-auto">
                                        Maquinaria industrial nueva y usada certificada. Excavadoras, bulldozers, cargadores y más equipos para construcción y minería.
                                    </p>
                                    {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                                            className="bg-white text-[#006ba0] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300"
                                        >
                                            Solicitar Cotización
                                        </motion.button>
                                    </div> */}
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
                                             <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#006ba0] to-[#004d73] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <FiEye className="w-10 h-10 text-white" />
                                            </div>
                                             <div className="text-3xl font-bold text-[#006ba0] mb-2">S/ 5,000</div>
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
                                             {/* <button className="w-full bg-[#006ba0] hover:bg-[#004d73] text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                                                 Ver Detalles
                                             </button> */}
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ y: -10 }}
                                        className={`group p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl ${
                                            isDarkMode ? 'bg-gray-800 border border-gray-700 hover:border-blue-500' : 'bg-white border border-gray-200 hover:border-blue-400'
                                        }`}
                                    >
                                        <div className="text-center mb-6">
                                            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#006ba0] to-[#004d73] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <FiSettings className="w-10 h-10 text-white" />
                                            </div>
                                            <div className="text-3xl font-bold text-[#006ba0] mb-2">S/ 12,000</div>
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
                                        {/* <button className="w-full bg-[#006ba0] hover:bg-[#004d73] text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                                            Ver Detalles
                                        </button> */}
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ y: -10 }}
                                        className={`group p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl ${
                                            isDarkMode ? 'bg-gray-800 border border-gray-700 hover:border-green-500' : 'bg-white border border-gray-200 hover:border-green-400'
                                        }`}
                                    >
                                        <div className="text-center mb-6">
                                            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <FiTruck className="w-10 h-10 text-white" />
                                            </div>
                                             <div className="text-3xl font-bold text-[#006ba0] mb-2">S/ 6,000</div>
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
                                             {/* <button className="w-full bg-[#006ba0] hover:bg-[#004d73] text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                                                 Ver Detalles
                                             </button> */}
                                    </motion.div>
                                </div>

                                {/* Galería de Maquinaria Pesada */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                                    {equiposVenta.map((item, idx) => (
                                        <motion.div
                                            key={`maq-${idx}`}
                                            whileHover={{ y: -8, scale: 1.02 }}
                                            className={`group rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ${
                                                isDarkMode ? 'bg-gray-800 border-2 border-gray-700 hover:border-[#006ba0]' : 'bg-white border-2 border-gray-200 hover:border-[#006ba0]'
                                            }`}
                                        >
                                            <div className="relative w-full pt-[70%] cursor-pointer" onClick={() => openLightbox(idx, "maquinaria")}>
                                                <img
                                                    src={`${GALERIA_MAQ_PATH}/${item.archivo}`}
                                                    alt={item.nombre}
                                                    loading="lazy"
                                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                                                {/* Zoom Icon */}
                                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                                                    <FiMaximize2 className="w-5 h-5 text-[#006ba0]" />
                                                </div>

                                                {/* Datos y CTA */}
                                                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between">
                                                    <div>
                                                        <div className="text-xs font-semibold text-white/80">{item.categoria}</div>
                                                        <h3 className="text-lg font-bold text-white drop-shadow-lg">{item.nombre}</h3>
                                                    </div>
                                                    <a
                                                        href={buildWaLink(`Hola, quiero cotizar el equipo ${item.nombre} (${item.categoria}).`)}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="ml-3 flex items-center gap-2 bg-[#006ba0] hover:bg-[#004d73] text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg transition-all duration-300"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <FaWhatsapp className="w-5 h-5" />
                                                        Cotizar
                                                    </a>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Galería de Repuestos */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="text-center mb-12"
                                >
                                    <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                        Repuestos en Venta
                                    </h2>
                                    <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
                                        Repuestos originales y compatibles de alta calidad para todo tipo de maquinaria pesada
                                    </p>
                                </motion.div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-16">
                                    {repuestosVenta.map((item, idx) => (
                                        <motion.div
                                            key={`rep-${idx}`}
                                            whileHover={{ y: -6, scale: 1.03 }}
                                            className={`group rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                                                isDarkMode ? 'bg-gray-800 border-2 border-gray-700 hover:border-[#006ba0]' : 'bg-white border-2 border-gray-200 hover:border-[#006ba0]'
                                            }`}
                                        >
                                            <div className="relative aspect-square w-full cursor-pointer" onClick={() => openLightbox(idx, "repuestos")}>
                                                <img
                                                    src={`${GALERIA_REP_PATH}/${item.archivo}`}
                                                    alt={item.nombre}
                                                    loading="lazy"
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

                                                {/* Zoom Icon */}
                                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                                                    <FiMaximize2 className="w-4 h-4 text-[#006ba0]" />
                                                </div>

                                                {/* Datos y CTA */}
                                                <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                                                    <div className="text-xs font-semibold text-white/80">{item.categoria}</div>
                                                    <div className="text-sm font-bold text-white mb-2 drop-shadow-lg line-clamp-2">{item.nombre}</div>
                                                    <a
                                                        href={buildWaLink(`Hola, quiero consultar el repuesto ${item.nombre}.`)}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-1.5 bg-[#006ba0] hover:bg-[#004d73] text-white px-3 py-1.5 rounded-lg font-semibold text-xs shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 w-full justify-center"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <FaWhatsapp className="w-4 h-4" />
                                                        Consultar
                                                    </a>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
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
                                                isDarkMode ? 'bg-[#006ba0] group-hover:bg-[#004d73]' : 'bg-[#006ba0] group-hover:bg-[#004d73]'
                                            }`}>
                                                <FiCheckCircle className="w-8 h-8 text-white" />
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
                                                <FiDollarSign className="w-8 h-8 text-white" />
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
                                                 isDarkMode ? 'bg-[#006ba0] group-hover:bg-[#004d73]' : 'bg-[#006ba0] group-hover:bg-[#004d73]'
                                             }`}>
                                                <FiLifeBuoy className="w-8 h-8 text-white" />
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
                                                <FiTruck className="w-8 h-8 text-white" />
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
                                                    <FiStar key={i} className="w-5 h-5 text-yellow-400" />
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
                                     className="text-center bg-gradient-to-r from-[#006ba0] to-[#004d73] rounded-2xl p-12 text-white shadow-2xl"
                                >
                                    <h2 className="text-4xl font-bold mb-6">¿Necesitas Asesoría?</h2>
                                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                                        Nuestros expertos están listos para ayudarte a encontrar el equipo perfecto para tu proyecto
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-white text-[#006ba0] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 flex items-center gap-2 justify-center"
                                        >
                                            <FiPhoneCall className="w-5 h-5" />
                                            Llamar Ahora
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 justify-center"
                                            onClick={() => window.open('https://wa.me/51970714696', '_blank')}
                                        >
                                            <FaWhatsapp className="w-5 h-5" />
                                            WhatsApp
                                        </motion.button>
                                    </div>
                                </motion.div>

                                

                               
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {lightboxOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center"
                            onClick={closeLightbox}
                        >
                            {/* Close Button */}
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={closeLightbox}
                                className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all duration-300 z-10"
                            >
                                <FiX className="w-6 h-6 text-white" />
                            </motion.button>

                            {/* Navigation Buttons */}
                            <motion.button
                                whileHover={{ scale: 1.1, x: -5 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    prevImage();
                                }}
                                className="absolute left-6 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all duration-300 z-10"
                            >
                                <FiChevronLeft className="w-6 h-6 text-white" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.1, x: 5 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    nextImage();
                                }}
                                className="absolute right-6 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all duration-300 z-10"
                            >
                                <FiChevronRight className="w-6 h-6 text-white" />
                            </motion.button>

                            {/* Image Container */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="relative max-w-7xl max-h-[90vh] w-full mx-4"
                            >
                                <img
                                    src={`${currentGallery === 'maquinaria' ? GALERIA_MAQ_PATH : GALERIA_REP_PATH}/${
                                        currentGallery === 'maquinaria' ? equiposVenta[currentIndex].archivo : repuestosVenta[currentIndex].archivo
                                    }`}
                                    alt={currentGallery === 'maquinaria' ? equiposVenta[currentIndex].nombre : repuestosVenta[currentIndex].nombre}
                                    className="w-full h-full object-contain rounded-2xl shadow-2xl"
                                />

                                {/* Image Info */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl"
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">
                                                {currentGallery === 'maquinaria' ? equiposVenta[currentIndex].nombre : repuestosVenta[currentIndex].nombre}
                                            </h3>
                                            <p className="text-sm text-gray-300">
                                                {currentIndex + 1} de {currentGallery === 'maquinaria' ? equiposVenta.length : repuestosVenta.length}
                                            </p>
                                        </div>
                                        <a
                                            href={buildWaLink(
                                                `Hola, quiero cotizar el ${currentGallery === 'maquinaria' ? 'equipo' : 'repuesto'} ${
                                                    currentGallery === 'maquinaria' ? equiposVenta[currentIndex].nombre : repuestosVenta[currentIndex].nombre
                                                }.`
                                            )}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-[#006ba0] hover:bg-[#004d73] text-white px-6 py-3 rounded-lg font-semibold shadow-xl transition-all duration-300"
                                        >
                                            <FaWhatsapp className="w-5 h-5" />
                                            Cotizar Ahora
                                        </a>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

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
