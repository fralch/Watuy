import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { useTheme } from "../../storage/ThemeContext";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carrusel = () => {
    const { isDarkMode } = useTheme();
    
    return (
        <div className="w-full p-4">
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 }, // Mostrar 4 diapositivas en pantallas muy grandes
                }}
                className={isDarkMode ? "bg-gray-800" : "bg-blue-50"}
            >
                <SwiperSlide>
                    <div
                        className="relative bg-cover bg-center text-white rounded-lg shadow-lg overflow-hidden min-h-[400px]"
                        style={{
                            backgroundImage:
                                "url('https://megaequipamiento.com/wp-content/uploads/2023/09/MANUFACTURA-GIF-OF.gif')", // Reemplaza esta URL con la de tu imagen de fondo
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <div className="relative p-10">
                            <h2 className="text-4xl font-bold text-center mb-6">
                                ALQUILER DE MAQUINARIA
                            </h2> 
                            <ul className="space-y-4 text-xl">
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    
                                    Excavadoras
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Cargadores
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Retroexcavadoras
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Martillos hidráulicos
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Minicargadores
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Autohormigoneras
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Volquetes
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Generadores
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Entre otros
                                </li>
                            </ul>
                            <div className="text-center mt-6">
                                <button className={`px-6 py-3 rounded-full transition-colors duration-200 ${
                                    isDarkMode 
                                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                                        : 'bg-[#006ba0] hover:bg-blue-700 text-white'
                                }`}>
                                    Ver productos
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="relative bg-cover bg-center text-white rounded-lg shadow-lg overflow-hidden min-h-[400px]"
                        style={{
                            backgroundImage:
                                "url('https://megaequipamiento.com/wp-content/uploads/2023/09/EXTRACCION-GIF-OF.gif')", // Reemplaza esta URL con la de tu imagen de fondo
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <div className="relative p-10">
                            <h2 className="text-4xl font-bold text-center mb-6">
                                VENTAS DE REPUESTOS ORIGINALES Y ALTERNATIVOS
                            </h2>
                            <ul className="space-y-4 text-xl">
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    
                                    Volvo
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Hyundai
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Doosan
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Jhon Deere
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Hitachi
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Hidromaq
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Caterpillar
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Komatsu
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Entre otros
                                </li>
                            </ul>
                            <div className="text-center mt-6">
                                <button className={`px-6 py-3 rounded-full transition-colors duration-200 ${
                                    isDarkMode 
                                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                                        : 'bg-[#006ba0] hover:bg-blue-700 text-white'
                                }`}>
                                    Ver productos
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="relative bg-cover bg-center text-white rounded-lg shadow-lg overflow-hidden min-h-[400px]"
                        style={{
                            backgroundImage:
                                "url('https://megaequipamiento.com/wp-content/uploads/2023/09/EDUCACION-GIF-OF.gif')", // Reemplaza esta URL con la de tu imagen de fondo
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <div className="relative p-10">
                            <h2 className="text-4xl font-bold text-center mb-6">
                                REPARACIONES GENERALES
                            </h2>
                            <ul className="space-y-4 text-xl">
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Cambio de pines y bocinas
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Cambio de cadenas
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Cambio de Sproket
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Barrenado
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Torno
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Planchado y pintura
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Reforzamiento de cucharones
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Fabricación de cucharones
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Fabricación de mangueras hidráulicas
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Entre otros
                                </li>
                            </ul>
                            <div className="text-center mt-6">
                                <button className={`px-6 py-3 rounded-full transition-colors duration-200 ${
                                    isDarkMode 
                                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                                        : 'bg-[#006ba0] hover:bg-blue-700 text-white'
                                }`}>
                                    Ver productos
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="relative bg-cover bg-center text-white rounded-lg shadow-lg overflow-hidden min-h-[400px]"
                        style={{
                            backgroundImage:
                                "url('https://megaequipamiento.com/wp-content/uploads/2023/09/ALIMENTOS-GIF-OF.gif')", // Reemplaza esta URL con la de tu imagen de fondo
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <div className="relative p-10">
                            <h2 className="text-4xl font-bold text-center mb-6">
                                REPARACIONES ESPECIALES
                            </h2>
                            <ul className="space-y-4 text-xl">
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Reparación de motor
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Reparación de cilindros hidráulicos
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Reparación de cajas de transmisión
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Reparación de sistemas eléctricos
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Reparación de mandos finales
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Reparación de bombas hidráulicas
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-green-500 mr-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm0 10a1 1 0 112 0v-4a1 1 0 11-2 0v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Entre otros
                                </li>
                            </ul>
                            <div className="text-center mt-6">
                                <button className={`px-6 py-3 rounded-full transition-colors duration-200 ${
                                    isDarkMode 
                                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                                        : 'bg-[#006ba0] hover:bg-blue-700 text-white'
                                }`}>
                                    Ver productos
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Añade más SwiperSlide según sea necesario */}
            </Swiper>
        </div>
    );
};

export default Carrusel;
