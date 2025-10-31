// LabEquipmentSection.jsx
import React, { useState, useEffect } from "react";

// --- Image Carousel ---
const ImageCarousel = ({ currentIndex, goToPrevious, goToNext, goToSlide, images }) => {
    return (
        <div className="relative w-full h-auto overflow-hidden">
            {/* Main image */}
            <div>
                <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className="w-full h-auto transition-opacity duration-500"
                />
            </div>
            {/* Dots indicator (opcional) */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 
                            ${index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50 hover:bg-opacity-75'}`}
                        aria-label={`Ir a imagen ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

// --- Main Section ---
const LabEquipmentSection = () => {
    const images = [
        {
            src: "https://megaequipamiento.com/wp-content/uploads/2023/09/capacitaciion-y-asesorias-2.webp",
            alt: "Capacitación y asesorías"
        },
        {
            src: "https://megaequipamiento.com/wp-content/uploads/2023/09/servicio-de-mantenimiento-y-calibracion-2.webp",
            alt: "Servicio de mantenimiento y calibración"
        },
        {
            src: "https://megaequipamiento.com/wp-content/uploads/2023/09/desarrollo-de-proyectos-2.webp",
            alt: "Desarrollo de proyectos"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    const goToSlide = (index) => setCurrentIndex(index);
    const goToPrevious = () => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    const goToNext = () => setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);

    return (
        <section className="flex flex-col lg:flex-row relative w-full">
            {/* Text + Navigation */}
            <div className="bg-[#006ba0] w-full lg:w-1/2 p-4 md:p-6 lg:p-8 flex flex-col gap-4 mt-6 md:mt-8 lg:mt-10 text-white relative z-0">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold pt-4 md:pt-8 lg:pt-12">
                    10 AÑOS MOVIENDO EL PERÚ CON FUERZA  Y CONFIANZA
                </h3>
                <p className="text-xs md:text-sm lg:text-base pr-2 md:pr-8 lg:pr-36 pb-4 md:pb-8 lg:pb-12">
                    Desde hace una década, nos hemos consolidado como una empresa líder en el <b>alquiler, reparación y mantenimiento de maquinaria pesada</b>, así 
                    como en la venta de repuestos originales y alternativos para las marcas más reconocidas del mercado: <b>John Deere, Caterpillar, Hidrokhan, Volvo</b>, entre otras.
                    Nuestro compromiso con la <b>calidad, la eficiencia y la atención personalizada</b> nos ha permitido acompañar proyectos de construcción, minería, agricultura e 
                    industria en todo el <b>territorio peruano</b>, brindando soluciones técnicas que mantienen a nuestros clientes siempre en marcha.
                    Contamos con un equipo altamente calificado, infraestructura especializada y un catálogo completo de maquinaria y repuestos que se adapta a tus 
                    necesidades operativas, sin importar la magnitud del desafío.
                    <b>10 años no solo hablan de experiencia, sino de confianza construida con cada cliente, cada proyecto y cada máquina puesta en funcionamiento.</b>

                </p>

                {/* Navigation Buttons - Bottom right position */}
                <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 flex flex-row items-center gap-2 md:gap-4">
                    <button
                        onClick={goToPrevious}
                        className="border-2 border-white rounded-full w-8 h-8 md:w-10 md:h-10 grid place-items-center hover:bg-white/20 transition"
                        aria-label="Anterior"
                    >
                        {/* Izquierda */}
                        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={goToNext}
                        className="border-2 border-white rounded-full w-8 h-8 md:w-10 md:h-10 grid place-items-center hover:bg-white/20 transition"
                        aria-label="Siguiente"
                    >
                        {/* Derecha */}
                        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Slider Imagenes - Centrado verticalmente */}
            <div className="w-full md:w-full lg:w-7/12 relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 z-10 md:mt-4 lg:mt-0">
                <ImageCarousel
                    currentIndex={currentIndex}
                    goToPrevious={goToPrevious}
                    goToNext={goToNext}
                    goToSlide={goToSlide}
                    images={images}
                />
            </div>
        </section>
    );
};

export default LabEquipmentSection;
