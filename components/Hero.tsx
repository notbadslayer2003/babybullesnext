'use client';

import React, { useState } from 'react';

const BabySpaHero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Karla:wght@300;400&display=swap');

                * {
                    font-feature-settings: 'kern' 1;
                    text-rendering: optimizeLegibility;
                    -webkit-font-smoothing: antialiased;
                }
            `}</style>

            <section className="relative min-h-screen bg-[#f8f6f3] flex items-center overflow-hidden">
                {/* Simple elegant background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#faf8f5] via-[#f8f6f3] to-[#f3ede7] opacity-60" />

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-20 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Text content */}
                        <div className="max-w-2xl">
                            {/* Eyebrow */}
                            <p className="font-['Karla'] text-[0.75rem] tracking-[0.3em] uppercase text-[#9d8b7e] mb-8 opacity-0 animate-[fadeIn_1s_ease_0.2s_forwards]">
                                Baby Spa pour Bébés
                            </p>

                            {/* Main title */}
                            <h1 className="font-['Libre_Caslon_Text'] text-5xl lg:text-7xl font-normal leading-[0.95] text-[#2a2520] mb-10 opacity-0 animate-[fadeIn_1.2s_ease_0.4s_forwards]">
                                Baby Bulles
                            </h1>

                            {/* Subtitle */}
                            <p className="font-['Karla'] text-lg lg:text-xl font-light leading-relaxed text-[#5a524d] mb-14 opacity-0 animate-[fadeIn_1.2s_ease_0.6s_forwards]">
                                Une expérience sensorielle unique, conçue pour éveiller les sens de votre bébé dans un environnement de luxe et de douceur.
                            </p>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-5 opacity-0 animate-[fadeIn_1.2s_ease_0.8s_forwards]">
                                <button
                                    onClick={openModal}
                                    className="group relative px-10 py-4 bg-[#d4b5a0] text-white font-['Karla'] text-sm tracking-[0.05em] uppercase overflow-hidden transition-all duration-500 hover:bg-[#c5a591] hover:shadow-2xl hover:shadow-[#d4b5a0]/30 hover:-translate-y-0.5"
                                >
                                    <span className="relative z-10">En savoir plus</span>
                                    <div className="absolute inset-0 bg-[#c5a591] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                </button>

                                <button className="px-10 py-4 border-2 border-[#d4b5a0] text-[#2a2520] font-['Karla'] text-sm tracking-[0.05em] uppercase transition-all duration-500 hover:bg-[#d4b5a0]/5 hover:border-[#c5a591] hover:-translate-y-0.5">
                                    Nos Soins
                                </button>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative opacity-0 animate-[fadeIn_1.4s_ease_0.6s_forwards]">
                            <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-tl-[120px] rounded-br-[120px]">
                                <img
                                    src="massagebebe.jpg"
                                    alt="Massage bébé spa"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                                {/* Subtle overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2a2520]/10 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Subtle accent */}
                <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#d4b5a0]/5 blur-3xl rounded-full opacity-0 animate-[fadeIn_2s_ease_0.5s_forwards]" />
            </section>

            {/* Modal "En savoir plus" */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2a2520]/90 backdrop-blur-md"
                    onClick={closeModal}
                    style={{ animation: 'fadeIn 0.3s ease forwards' }}
                >
                    <div
                        className="relative w-full max-w-4xl max-h-[90vh] bg-white overflow-y-auto shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                        style={{ animation: 'slideUp 0.4s ease forwards' }}
                    >
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#d4b5a0]/10 to-transparent pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#d4b5a0]/5 to-transparent pointer-events-none" />

                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center bg-white/95 backdrop-blur-sm hover:bg-[#d4b5a0] group transition-all duration-300 shadow-lg"
                        >
                            <svg className="w-6 h-6 text-[#2a2520] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Content */}
                        <div className="relative p-8 lg:p-16">
                            {/* Decorative line */}
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-1 h-12 bg-[#d4b5a0]" />
                                <span className="font-['Karla'] text-[0.7rem] tracking-[0.3em] uppercase text-[#9d8b7e]">
                                    À Propos
                                </span>
                            </div>

                            {/* Title */}
                            <h2 className="font-['Libre_Caslon_Text'] text-4xl lg:text-5xl font-normal text-[#2a2520] mb-6 leading-tight">
                                Baby Bulles
                            </h2>

                            {/* Subtitle */}
                            <p className="font-['Karla'] text-xl lg:text-2xl font-light text-[#d4b5a0] mb-10 leading-relaxed">
                                Un espace de sérénité pour bébés et parents
                            </p>

                            {/* Divider */}
                            <div className="w-24 h-px bg-gradient-to-r from-[#d4b5a0] to-transparent mb-10" />

                            {/* Main content */}
                            <div className="space-y-6">
                                <p className="font-['Karla'] text-base lg:text-lg font-light text-[#5a524d] leading-relaxed">
                                    Chez <span className="font-medium text-[#2a2520]">Baby Bulles</span>, chaque famille est accueillie avec douceur et bienveillance dans une véritable bulle de sérénité. Nous accompagnons les bébés, les jeunes mamans et les futurs parents à travers des soins et des ateliers uniques : bains enveloppés, massages, conseils personnalisés et instants complices.
                                </p>

                                <p className="font-['Karla'] text-base lg:text-lg font-light text-[#5a524d] leading-relaxed">
                                    Nos accompagnements apportent de <span className="font-medium text-[#2a2520]">nombreux bienfaits</span> : ils favorisent l'autonomie et le développement moteur, renforcent le système immunitaire, soulagent coliques et reflux, améliorent le sommeil et la digestion. Surtout, ils créent un lien d'attachement précieux entre le bébé et ses parents, permettant de grandir ensemble dans le bien-être et la confiance.
                                </p>

                                <p className="font-['Karla'] text-base lg:text-lg font-light text-[#5a524d] leading-relaxed">
                                    Votre bébé souffre de coliques, de reflux, de constipation ou rencontre des difficultés à s'endormir ? Venez découvrir une séance de <span className="font-medium text-[#2a2520]">baby spa</span> : un véritable moment de bien-être, de détente et de confort digestif.
                                </p>

                                {/* Highlight box */}
                                <div className="bg-gradient-to-br from-[#faf8f5] to-[#f5ede7] p-8 border-l-4 border-[#d4b5a0] mt-8">
                                    <p className="font-['Karla'] text-base lg:text-lg font-normal text-[#2a2520] leading-relaxed italic">
                                        Caroline, sage-femme, vous accompagne avec expertise et bienveillance tout au long de la séance.
                                    </p>
                                </div>
                            </div>

                            {/* CTA Section */}
                            <div className="mt-12 pt-10 border-t-2 border-[#f3ede7]">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        onClick={closeModal}
                                        className="flex-1 group relative px-8 py-4 bg-[#d4b5a0] text-white font-['Karla'] text-sm tracking-[0.08em] uppercase overflow-hidden transition-all duration-500 hover:bg-[#c5a591] hover:shadow-2xl hover:shadow-[#d4b5a0]/40 hover:-translate-y-1"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            Découvrir nos services
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </span>
                                        <div className="absolute inset-0 bg-[#c5a591] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                    </button>

                                    <button
                                        onClick={closeModal}
                                        className="px-8 py-4 border-2 border-[#d4b5a0] text-[#2a2520] font-['Karla'] text-sm tracking-[0.08em] uppercase transition-all duration-500 hover:bg-[#d4b5a0]/5 hover:border-[#c5a591] hover:-translate-y-1 text-center"
                                    >
                                        Nous contacter
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </>
    );
};

export default BabySpaHero;