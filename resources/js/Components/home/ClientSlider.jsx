import React, { useState, useEffect } from "react";
import { useTheme } from "@/storage/ThemeContext";
import "../../../css/ClientSlider.css";

const ClientSlider = () => {
    const [clients, setClients] = useState([]);
    const { isDarkMode } = useTheme();

    useEffect(() => {
        const images = import.meta.glob("/public/img/nuestros_clientes/**/*.{jpg,png}");
        const clientsData = Object.keys(images).map((path) => {
            const segments = path.split("/");
            const fileName = segments.pop() || "cliente";
            const name = fileName.split(".")[0] || "Cliente";
            return {
                image: path.replace("/public", ""),
                name,
            };
        });

        setClients(clientsData);
    }, []);

    const containerClasses = `client-slider mx-auto overflow-hidden relative rounded-2xl border transition-colors duration-300 ${
        isDarkMode
            ? "bg-gray-900 border-gray-800 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.9)]"
            : "bg-white border-gray-200 shadow-[0_25px_55px_-30px_rgba(30,64,175,0.35)]"
    }`;

    const titleClasses = `text-xl md:text-2xl font-bold text-center mb-5 transition-colors duration-300 ${
        isDarkMode ? "text-white" : "text-gray-900"
    }`;

    const trackClasses = "client-slide-track flex items-center space-x-6 md:space-x-10 animate-scroll";

    const slideClasses = `client-slide flex-shrink-0 w-28 md:w-36 h-14 md:h-20 flex items-center justify-center rounded-xl border transition-colors duration-300 ${
        isDarkMode ? "bg-gray-800/80 border-gray-700" : "bg-white border-gray-200"
    }`;

    return (
        <div
            className={containerClasses}
            style={{
                "--client-slider-fade-base": isDarkMode ? "rgba(17, 24, 39, 1)" : "#ffffff",
                "--client-slider-fade-transparent": isDarkMode ? "rgba(17, 24, 39, 0)" : "rgba(255, 255, 255, 0)",
                "--client-slide-width": "180px",
            }}
        >
            <div className="px-5 py-7">
                <h2 className={titleClasses}>Nuestros Clientes</h2>
                {clients.length === 0 ? (
                    <div className={`text-center text-sm transition-colors duration-300 ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}>
                        Aún no hay logotipos disponibles.
                    </div>
                ) : (
                    <div className={trackClasses} role="list" aria-label="Lista de clientes">
                        {clients.map((client, index) => (
                            <div key={index} className={slideClasses} role="listitem">
                                <img
                                    src={client.image}
                                    className="h-full w-auto max-w-full object-contain"
                                    alt={client.name}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ClientSlider;
