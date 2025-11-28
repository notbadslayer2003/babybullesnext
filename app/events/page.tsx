'use client';

import { useState } from 'react';
import Link from 'next/link';
import InternalNavbar from '@/components/InternalNavbar';

interface Event {
    id: number;
    title: string;
    description: string;
    fullDescription: string;
    lieu: string;
    date: string;
    image: string;
    categorie: string;
}

export default function Events() {
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    const events: Event[] = [
        {
            id: 1,
            title: "Le salon du bébé et des futurs parents",
            description: "Découvrez un salon dédié aux futurs parents et aux bébés, rempli d’ateliers, de conseils et de moments de partage pour préparer sereinement l’arrivée de votre enfant.",
            fullDescription: "Plongez dans un univers entièrement consacré aux futurs parents et à leurs tout-petits : ateliers interactifs, conseils personnalisés, démonstrations, rencontres avec des professionnels de la petite enfance et espaces dédiés au bien-être. Ce salon vous guidera à chaque étape pour vivre une grossesse épanouie, préparer l’arrivée de votre bébé en toute sérénité et repartir avec de précieuses ressources pour la suite de votre aventure parentale.",
            lieu: "Baby Bulles, Mons",
            date: "07-08 Décembre 2025",
            image: "/babydays.png",
            categorie: "Événement"
        },
        {
            id: 2,
            title: "Discover Mons",
            description: "Participez à une journée exceptionnelle pour découvrir nos installations, nos services et l’univers Baby Bulles.",
            fullDescription: "Explorez l’univers Baby Bulles lors d’une journée portes ouvertes au sein de la Base Militaire du Shape. Profitez d’une visite guidée de nos installations, de démonstrations de soins, de conseils personnalisés et d’une séance découverte offerte. C’est l’occasion idéale pour rencontrer notre équipe, poser toutes vos questions et vivre un moment chaleureux au cœur de nos activités.",
            lieu: "Base Militaire du Shape",
            date: "03 Décembre 2025",
            image: "/discover.png",
            categorie: "Événement"
        }
    ];

    const openModal = (event: Event) => {
        setSelectedEvent(event);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedEvent(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Karla:wght@300;400;500&display=swap');
            `}</style>

            <InternalNavbar />

            <section className="relative min-h-screen py-20 lg:py-32 bg-gradient-to-br from-[#faf8f5] via-[#f8f6f3] to-[#f5ede7] overflow-hidden">

                {/* Background decorative elements */}
                <div className="absolute top-20 right-0 w-96 h-96 bg-[#d4b5a0]/5 blur-3xl rounded-full" />
                <div className="absolute bottom-40 left-0 w-80 h-80 bg-[#d4b5a0]/3 blur-3xl rounded-full" />

                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #2a2520 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />

                <div className="relative max-w-7xl mx-auto px-8 lg:px-16">

                    {/* Header */}
                    <div className="max-w-3xl mb-16 lg:mb-24">
                        <div className="flex items-center gap-3 mb-6 opacity-0 animate-[fadeIn_1s_ease_0.2s_forwards]">
                            <span className="font-['Karla'] text-[0.7rem] tracking-[0.3em] uppercase text-[#9d8b7e]">
                                Événements
                            </span>
                            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#d4b5a0]/50 to-transparent" />
                        </div>

                        <h1 className="font-['Libre_Caslon_Text'] text-5xl md:text-6xl lg:text-7xl font-normal text-[#2a2520] mb-8 leading-[1.05] opacity-0 animate-[fadeIn_1.2s_ease_0.3s_forwards]">
                            Nos Prochains<br />
                            <span className="text-[#d4b5a0]">Événements</span>
                        </h1>

                        <p className="font-['Karla'] text-lg lg:text-xl font-light text-[#5a524d] leading-relaxed opacity-0 animate-[fadeIn_1.2s_ease_0.4s_forwards]">
                            Découvrez nos ateliers et événements spéciaux conçus pour vous accompagner dans votre aventure parentale.
                        </p>
                    </div>

                    {/* Events Grid */}
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {events.map((event, index) => (
                            <div
                                key={event.id}
                                onClick={() => openModal(event)}
                                className="group relative bg-white cursor-pointer overflow-hidden shadow-lg shadow-[#2a2520]/5 transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#d4b5a0]/20"
                                style={{
                                    animation: `fadeInUp 0.8s ease ${index * 0.15}s forwards`,
                                    opacity: 0
                                }}
                            >
                                {/* Decorative corner */}
                                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#d4b5a0]/10 to-transparent" />

                                {/* Image */}
                                <div className="relative aspect-[16/11] overflow-hidden">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2a2520]/70 via-[#2a2520]/30 to-transparent" />

                                    {/* Categorie badge */}
                                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm border border-[#d4b5a0]/20">
                                        <span className="font-['Karla'] text-xs tracking-[0.1em] uppercase text-[#d4b5a0]">
                                            {event.categorie}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 lg:p-8">
                                    <div className="flex items-start gap-3 mb-4 pb-4 border-b border-[#f3ede7]">
                                        <svg className="w-5 h-5 text-[#d4b5a0] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <div>
                                            <p className="font-['Karla'] text-sm font-medium text-[#2a2520]">{event.date}</p>
                                            <p className="font-['Karla'] text-xs text-[#9d8b7e] mt-1 flex items-center gap-1.5">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {event.lieu}
                                            </p>
                                        </div>
                                    </div>

                                    <h3 className="font-['Libre_Caslon_Text'] text-2xl lg:text-3xl font-normal text-[#2a2520] mb-4 group-hover:text-[#d4b5a0] transition-colors duration-300">
                                        {event.title}
                                    </h3>

                                    <p className="font-['Karla'] text-sm lg:text-base font-light text-[#5a524d] leading-relaxed mb-6">
                                        {event.description}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-[#d4b5a0] font-['Karla'] text-sm font-medium group-hover:gap-3 transition-all duration-300">
                                            <span>En savoir plus</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover accent line */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4b5a0] via-[#c5a591] to-[#d4b5a0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal */}
                {selectedEvent && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2a2520]/90 backdrop-blur-md"
                        onClick={closeModal}
                        style={{ animation: 'fadeIn 0.3s ease forwards' }}
                    >
                        <div
                            className="relative w-full max-w-5xl max-h-[90vh] bg-white overflow-y-auto shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                            style={{ animation: 'slideUp 0.4s ease forwards' }}
                        >
                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#d4b5a0]/10 to-transparent pointer-events-none" />

                            {/* Close button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center bg-white/95 backdrop-blur-sm hover:bg-[#d4b5a0] group transition-all duration-300 shadow-lg"
                            >
                                <svg className="w-6 h-6 text-[#2a2520] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Modal Image */}
                            <div className="relative aspect-[21/9] overflow-hidden">
                                <img
                                    src={selectedEvent.image}
                                    alt={selectedEvent.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2a2520]/80 via-[#2a2520]/40 to-transparent" />

                                {/* Categorie badge */}
                                <div className="absolute top-6 left-6 flex items-center gap-3">
                                    <div className="px-4 py-2 bg-white/95 backdrop-blur-sm border border-[#d4b5a0]/20">
                                        <span className="font-['Karla'] text-xs tracking-[0.1em] uppercase text-[#d4b5a0]">
                                            {selectedEvent.categorie}
                                        </span>
                                    </div>
                                </div>

                                {/* Title overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                                    <h2 className="font-['Libre_Caslon_Text'] text-3xl lg:text-5xl font-normal text-white leading-tight">
                                        {selectedEvent.title}
                                    </h2>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-8 lg:p-12">
                                {/* Info grid */}
                                <div className="grid sm:grid-cols-2 gap-8 mb-10 pb-10 border-b-2 border-[#f3ede7]">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 flex items-center justify-center bg-[#d4b5a0]/10 flex-shrink-0">
                                            <svg className="w-6 h-6 text-[#d4b5a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-['Karla'] text-xs tracking-[0.15em] uppercase text-[#9d8b7e] mb-2">Date</p>
                                            <p className="font-['Karla'] text-base text-[#2a2520] font-medium">{selectedEvent.date}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 flex items-center justify-center bg-[#d4b5a0]/10 flex-shrink-0">
                                            <svg className="w-6 h-6 text-[#d4b5a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-['Karla'] text-xs tracking-[0.15em] uppercase text-[#9d8b7e] mb-2">Lieu</p>
                                            <p className="font-['Karla'] text-base text-[#2a2520] font-medium">{selectedEvent.lieu}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="mb-10">
                                    <h3 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520] mb-5 flex items-center gap-3">
                                        <div className="w-1 h-8 bg-[#d4b5a0]" />
                                        À propos de l'événement
                                    </h3>
                                    <p className="font-['Karla'] text-base lg:text-lg font-light text-[#5a524d] leading-relaxed">
                                        {selectedEvent.fullDescription}
                                    </p>
                                </div>

                                {/* CTA Section */}
                                <div className="bg-gradient-to-br from-[#faf8f5] to-[#f5ede7] p-8 -mx-8 lg:-mx-12 -mb-8 lg:-mb-12">
                                    <div className="max-w-3xl mx-auto">
                                        <p className="font-['Karla'] text-sm text-[#5a524d] mb-6 text-center">
                                            Ne manquez pas cette opportunité unique
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <Link
                                                href="/contact"
                                                className="flex-1 group relative px-8 py-4 bg-[#d4b5a0] text-white font-['Karla'] text-sm tracking-[0.08em] uppercase overflow-hidden transition-all duration-500 hover:bg-[#c5a591] hover:shadow-2xl hover:shadow-[#d4b5a0]/40 hover:-translate-y-1 text-center"
                                            >
                                                <span className="relative z-10 flex items-center justify-center gap-2">
                                                    Réserver ma place
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </span>
                                                <div className="absolute inset-0 bg-[#c5a591] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                            </Link>

                                            <Link
                                                href="/contact"
                                                className="px-8 py-4 border-2 border-[#d4b5a0] text-[#2a2520] font-['Karla'] text-sm tracking-[0.08em] uppercase transition-all duration-500 hover:bg-[#d4b5a0]/5 hover:border-[#c5a591] hover:-translate-y-1 text-center"
                                            >
                                                Nous contacter
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
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
}