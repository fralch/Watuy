// Menu.jsx
import React, { useState, useEffect } from "react";
import { mdiChevronDown, mdiGauge, mdiLayersOutline, mdiWidgetsOutline, mdiPlus } from "@mdi/js";
import { Link, usePage } from "@inertiajs/react";
import { useTheme } from '../../storage/ThemeContext';
import { useCurrency } from '../../storage/CurrencyContext';
import { useCompare } from '../../hooks/useCompare';
import CompareModal from '../compare/CompareModal';

const Menu = ({ toggleMenu }) => {
    const { auth } = usePage().props;
    const { url } = usePage();
    const { isDarkMode } = useTheme();
    const { changeCurrency } = useCurrency();
    const { compareCount } = useCompare();
    const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('');

    // Determinar el elemento activo basado en la URL
    useEffect(() => {
        const path = url.pathname;
        if (path === '/') {
            setActiveItem('inicio');
        } else if (path === '/servicios-reparacion') {
            setActiveItem('servicios');
        } else if (path === '/alquiler-equipos') {
            setActiveItem('alquiler');
        } else if (path === '/ventas-equipos') {
            setActiveItem('ventas');
        } else if (path === '/crear') {
            setActiveItem('crear');
        } else if (path === '/contacto') {
            setActiveItem('contacto');
        } else {
            setActiveItem('');
        }
    }, [url.pathname]);

    const openCompareModal = () => {
        setIsCompareModalOpen(true);
    };

    const closeCompareModal = () => {
        setIsCompareModalOpen(false);
    };

    // Función para obtener clases del elemento del menú
    const getMenuItemClasses = (itemKey, isSpecial = false) => {
        const baseClasses = "mx-1 flex h-10 cursor-pointer items-center rounded px-4 leading-10 no-underline transition-all duration-200 hover:no-underline";

        if (isSpecial) {
            // Para elementos especiales como categorías
            return `${baseClasses} bg-[#006ba0] text-white hover:bg-[#005a8a]`;
        }

        const isActive = activeItem === itemKey;

        if (isActive) {
            return `${baseClasses} ${isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'} shadow-md`;
        } else {
            return `${baseClasses} ${isDarkMode ? 'text-gray-200 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`;
        }
    };

    return (
        <div className={`rounded px-5 py-3 shadow-xl pb-5 transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`} id="menu">
            <div className="-mx-1 flex flex-col md:flex-row items-center justify-between">
                <ul className="flex flex-col md:flex-row h-10 w-full flex-wrap items-center">
                     <li className="relative block w-full md:w-auto mb-2 md:mb-0">
                         <a
                             href="#"
                             className={`${getMenuItemClasses('', true)} justify-center md:justify-start px-6 md:px-4 text-lg md:text-base h-12 md:h-10`}
                             onClick={toggleMenu}
                             id="category-button"
                         >
                             <span className="mr-3 text-2xl md:text-xl">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 md:w-5 md:h-5 fill-current" >
                                     <path d={mdiLayersOutline} />
                                 </svg>
                             </span>
                             <span className="font-medium">Categorías</span>
                             <span className="ml-2">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 md:w-5 md:h-5 fill-current">
                                     <path d={mdiChevronDown} />
                                 </svg>
                             </span>
                         </a>
                     </li>
                     <li className="relative hidden md:block w-full md:w-auto mb-2 md:mb-0 mt-2 md:mt-0">
                         <Link
                             href="/"
                             className={getMenuItemClasses('inicio')}
                         >
                             <span className="mr-3 text-xl">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current">
                                     <path d={mdiGauge} />
                                 </svg>
                             </span>
                             <span>Inicio</span>
                         </Link>
                     </li>
                     <li className="relative hidden md:block w-full md:w-auto mb-2 md:mb-0">
                         <Link
                             href="/servicios-reparacion"
                             className={getMenuItemClasses('servicios')}
                         >
                             <span className="text-sm font-medium">Servicios de Reparación</span>
                         </Link>
                     </li>
                     <li className="relative hidden md:block w-full md:w-auto mb-2 md:mb-0">
                         <Link
                             href="/alquiler-equipos"
                             className={getMenuItemClasses('alquiler')}
                         >
                             <span className="text-sm font-medium">Alquiler de Equipos</span>
                         </Link>
                     </li>
                     <li className="relative hidden md:block w-full md:w-auto mb-2 md:mb-0">
                         <Link
                             href="/ventas-equipos"
                             className={getMenuItemClasses('ventas')}
                         >
                             <span className="text-sm font-medium">Ventas de Equipos</span>
                         </Link>
                     </li>
                     {auth.user && (
                         <li className="relative hidden md:block w-full md:w-auto mb-2 md:mb-0">
                             <Link
                                 href="/crear"
                                 className={getMenuItemClasses('crear')}
                             >
                                 <span className="mr-3 text-xl">
                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current">
                                         <path d={mdiPlus} />
                                     </svg>
                                 </span>
                                 <span>Crear</span>
                             </Link>
                         </li>
                     )}
                     <li className="relative hidden md:block w-full md:w-auto mb-2 md:mb-0">
                         <Link
                             href="/contacto"
                             className={getMenuItemClasses('contacto')}
                         >
                             <span className="text-sm font-medium">Contáctenos</span>
                         </Link>
                     </li>
                </ul>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto mt-5 md:mt-0">
                    <div className="w-full md:w-28 xl:w-32">
                        <select
                            name="moneda"
                            id="moneda"
                            onChange={(e) => changeCurrency(e.target.value)}
                            className={`text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-colors duration-200 ${
                                isDarkMode 
                                    ? 'bg-gray-700 border-gray-600 text-white' 
                                    : 'bg-gray-50 border-gray-300 text-gray-900'
                            }`}
                        >
                            <option value="dollar">Dolares</option>
                            <option value="sol">Soles</option>
                            <option value="euro">Euros</option>
                        </select>
                    </div>
                    
                     <button
                         onClick={openCompareModal}
                         className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg border w-full md:w-auto transition-all duration-200 hover:scale-105 relative ${
                             isDarkMode
                                 ? 'bg-gray-700 border-gray-600 hover:bg-gray-600 text-gray-200'
                                 : 'bg-gray-50 border-gray-300 hover:bg-gray-100 text-gray-700'
                         }`}
                     >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M11 6h5a2 2 0 0 1 2 2v8" />
                            <path d="M14 9l-3 -3l3 -3" />
                            <path d="M13 18h-5a2 2 0 0 1 -2 -2v-8" />
                            <path d="M10 15l3 3l-3 3" />
                        </svg>
                        <span className={`text-sm font-medium ${
                            isDarkMode ? 'text-gray-200' : 'text-gray-700'
                        }`}>Comparador</span>
                        {compareCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                                {compareCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>
            
            {/* Modal de Comparación */}
            <CompareModal 
                isOpen={isCompareModalOpen} 
                onClose={closeCompareModal} 
            />
        </div>
    );
};

export default Menu;
