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
                className={`${isDarkMode ? "bg-gray-800" : "bg-blue-50"} h-auto`}
            >
                <SwiperSlide className="h-auto">
                    <div
                        className="relative bg-cover bg-center text-white rounded-lg shadow-lg overflow-hidden h-[600px] flex flex-col"
                        style={{
                            backgroundImage:
                                "url('https://multiserviciosprecisur.com/wp-content/uploads/2021/06/Alquiler-y-Venta-de-Maquinaria-Pesada-1.webp')", // Reemplaza esta URL con la de tu imagen de fondo
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <div className="relative p-10 flex flex-col h-full">
                            <h2 className="text-4xl font-bold text-center mb-6 flex-shrink-0">
                                ALQUILER DE MAQUINARIA
                            </h2> 
                            <div className="flex-grow flex flex-col justify-between overflow-hidden">
                                <ul className="space-y-4 text-xl flex-grow overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Excavadoras
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Cargadores
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Retroexcavadoras
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.tr/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Martillos hidráulicos
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Minicargadores
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Autohormigoneras
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Volquetes
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Generadores
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Entre otros
                                    </li>
                                </ul>
                                <div className="mt-6 flex-shrink-0">
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full sm:w-auto">
                                        Ver productos
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="h-auto">
                    <div
                        className="relative bg-cover bg-center text-white rounded-lg shadow-lg overflow-hidden h-[600px] flex flex-col"
                        style={{
                            backgroundImage:
                                "url('https://st.depositphotos.com/2718273/3290/i/450/depositphotos_32906073-stock-photo-old-machine-parts-background.jpg')", // Reemplaza esta URL con la de tu imagen de fondo
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <div className="relative p-10 flex flex-col h-full">
                            <h2 className="text-4xl font-bold text-center mb-6 flex-shrink-0">
                                VENTAS DE REPUESTOS ORIGINALES Y ALTERNATIVOS
                            </h2>
                            <div className="flex-grow flex flex-col justify-between overflow-hidden">
                                <ul className="space-y-4 text-xl flex-grow overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Volvo
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Hyundai
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Doosan
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        John Deere
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Hitachi
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Hidromaq
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Caterpillar
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Komatsu
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Entre otros
                                    </li>
                                </ul>
                                <div className="mt-6 flex-shrink-0">
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full sm:w-auto">
                                        Ver productos
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="h-auto">
                    <div
                        className="relative bg-cover bg-center text-white rounded-lg shadow-lg overflow-hidden h-[600px] flex flex-col"
                        style={{
                            backgroundImage:
                                "url('https://posada.pe/wp-content/uploads/2021/12/reparaciones-integrales-maquinarias.jpg')", // Reemplaza esta URL con la de tu imagen de fondo
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <div className="relative p-10 flex flex-col h-full">
                            <h2 className="text-4xl font-bold text-center mb-6 flex-shrink-0">
                                REPARACIONES GENERALES
                            </h2>
                            <div className="flex-grow flex flex-col justify-between overflow-hidden">
                                <ul className="space-y-4 text-xl flex-grow overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Cambio de pines y bocinas
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Cambio de cadenas
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Cambio de Sprocket
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Barrenado
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Torno
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Punchado y pintura
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Reforzamiento de cucharones
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Fabricación de cucharones
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Fabricación de mangueras hidráulicas
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Entre otros
                                    </li>
                                </ul>
                                <div className="mt-6 flex-shrink-0">
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full sm:w-auto">
                                        Ver productos
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="h-auto">
                    <div
                        className="relative bg-cover bg-center text-white rounded-lg shadow-lg overflow-hidden h-[600px] flex flex-col"
                        style={{
                            backgroundImage:
                                "url('https://www.promp.com.pe/wp-content/uploads/2022/02/servicio-reparacion-cucharones-excavadoras.png')", // Reemplaza esta URL con la de tu imagen de fondo
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <div className="relative p-10 flex flex-col h-full">
                            <h2 className="text-4xl font-bold text-center mb-6 flex-shrink-0">
                                FABRICACIONES
                            </h2>
                            <div className="flex-grow flex flex-col justify-between overflow-hidden">
                                <ul className="space-y-4 text-xl flex-grow overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Fabricación de cucharones
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Fabricación de mangueras hidráulicas
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Entre otros
                                    </li>
                                </ul>
                                <div className="mt-6 flex-shrink-0">
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full sm:w-auto">
                                        Ver productos
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="h-auto">
                    <div
                        className="relative bg-cover bg-center text-white rounded-lg shadow-lg overflow-hidden h-[600px] flex flex-col"
                        style={{
                            backgroundImage:
                                "url('https://servimaqmcdelperusac.com/wp-content/uploads/2022/05/REPARACION-DE-MOTORES.jpg')", // Reemplaza esta URL con la de tu imagen de fondo
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <div className="relative p-10 flex flex-col h-full">
                            <h2 className="text-4xl font-bold text-center mb-6 flex-shrink-0">
                                REPARACIONES ESPECIALES
                            </h2>
                            <div className="flex-grow flex flex-col justify-between overflow-hidden">
                                <ul className="space-y-4 text-xl flex-grow overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Reparación de motor
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Reparación de cilindros hidráulicos
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Reparación de cajas de transmisión
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Reparación de sistemas eléctricos
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Reparación de mandos finales
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Reparación de bombas hidráulicas
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Entre otros
                                    </li>
                                </ul>
                                <div className="mt-6 flex-shrink-0">
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full sm:w-auto">
                                        Ver productos
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carrusel;