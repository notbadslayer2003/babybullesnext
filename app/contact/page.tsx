'use client';

import { useState } from 'react';
import Link from 'next/link';
import InternalNavbar from '@/components/InternalNavbar';

export default function Contact() {
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        telephone: '',
        sujet: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simuler l'envoi du formulaire
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ nom: '', email: '', telephone: '', sujet: '', message: '' });

            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);
        }, 1500);
    };

    const horaires = [
        { jour: "Lundi", heures: "10h - 18h", ouvert: true },
        { jour: "Mardi", heures: "10h - 18h", ouvert: true },
        { jour: "Mercredi", heures: "Ouvert 2x/mois", ouvert: true },
        { jour: "Jeudi", heures: "Fermé", ouvert: false },
        { jour: "Vendredi", heures: "10h - 18h", ouvert: true },
        { jour: "Samedi", heures: "Ouvert 3x/mois", ouvert: true },
        { jour: "Dimanche", heures: "Ouvert 1x/mois", ouvert: true }
    ];

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
                    <div className="max-w-3xl mb-16 lg:mb-20">
                        <div className="flex items-center gap-3 mb-6 opacity-0 animate-[fadeIn_1s_ease_0.2s_forwards]">
                            <span className="font-['Karla'] text-[0.7rem] tracking-[0.3em] uppercase text-[#9d8b7e]">
                                Contact
                            </span>
                            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#d4b5a0]/50 to-transparent" />
                        </div>

                        <h1 className="font-['Libre_Caslon_Text'] text-5xl md:text-6xl lg:text-7xl font-normal text-[#2a2520] mb-8 leading-[1.05] opacity-0 animate-[fadeIn_1.2s_ease_0.3s_forwards]">
                            Prenons Contact<br />
                            <span className="text-[#d4b5a0]">Ensemble</span>
                        </h1>

                        <p className="font-['Karla'] text-lg lg:text-xl font-light text-[#5a524d] leading-relaxed opacity-0 animate-[fadeIn_1.2s_ease_0.4s_forwards]">
                            Notre équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner dans votre projet.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

                        {/* Formulaire - 3 colonnes */}
                        <div className="lg:col-span-3 opacity-0 animate-[fadeInUp_0.8s_ease_0.5s_forwards]">
                            <div className="bg-white p-8 lg:p-10 shadow-lg shadow-[#2a2520]/5">
                                <h2 className="font-['Libre_Caslon_Text'] text-3xl font-normal text-[#2a2520] mb-6 flex items-center gap-3">
                                    <div className="w-1 h-8 bg-[#d4b5a0]" />
                                    Envoyez-nous un Message
                                </h2>

                                {submitSuccess && (
                                    <div className="mb-6 p-4 bg-[#d4b5a0]/10 border-l-4 border-[#d4b5a0]">
                                        <p className="font-['Karla'] text-sm text-[#2a2520]">
                                            ✓ Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                                        </p>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Nom */}
                                    <div>
                                        <label className="block font-['Karla'] text-sm text-[#2a2520] mb-2">
                                            Nom complet <span className="text-[#d4b5a0]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="nom"
                                            value={formData.nom}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-[#f3ede7] bg-[#faf8f5] font-['Karla'] text-sm text-[#2a2520] focus:outline-none focus:border-[#d4b5a0] transition-colors duration-300"
                                            placeholder="Votre nom et prénom"
                                        />
                                    </div>

                                    {/* Email & Téléphone */}
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block font-['Karla'] text-sm text-[#2a2520] mb-2">
                                                Email <span className="text-[#d4b5a0]">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-[#f3ede7] bg-[#faf8f5] font-['Karla'] text-sm text-[#2a2520] focus:outline-none focus:border-[#d4b5a0] transition-colors duration-300"
                                                placeholder="votre@email.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-['Karla'] text-sm text-[#2a2520] mb-2">
                                                Téléphone
                                            </label>
                                            <input
                                                type="tel"
                                                name="telephone"
                                                value={formData.telephone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-[#f3ede7] bg-[#faf8f5] font-['Karla'] text-sm text-[#2a2520] focus:outline-none focus:border-[#d4b5a0] transition-colors duration-300"
                                                placeholder="+32 XXX XX XX XX"
                                            />
                                        </div>
                                    </div>

                                    {/* Sujet */}
                                    <div>
                                        <label className="block font-['Karla'] text-sm text-[#2a2520] mb-2">
                                            Sujet <span className="text-[#d4b5a0]">*</span>
                                        </label>
                                        <select
                                            name="sujet"
                                            value={formData.sujet}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-[#f3ede7] bg-[#faf8f5] font-['Karla'] text-sm text-[#2a2520] focus:outline-none focus:border-[#d4b5a0] transition-colors duration-300"
                                        >
                                            <option value="">Sélectionnez un sujet</option>
                                            <option value="reservation">Réservation d'une séance</option>
                                            <option value="information">Demande d'information</option>
                                            <option value="tarif">Question sur les tarifs</option>
                                            <option value="evenement">Inscription à un événement</option>
                                            <option value="autre">Autre</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block font-['Karla'] text-sm text-[#2a2520] mb-2">
                                            Message <span className="text-[#d4b5a0]">*</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 border border-[#f3ede7] bg-[#faf8f5] font-['Karla'] text-sm text-[#2a2520] focus:outline-none focus:border-[#d4b5a0] transition-colors duration-300 resize-none"
                                            placeholder="Décrivez votre demande..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group relative w-full px-8 py-4 bg-[#d4b5a0] text-white font-['Karla'] text-sm tracking-[0.08em] uppercase overflow-hidden transition-all duration-500 hover:bg-[#c5a591] hover:shadow-2xl hover:shadow-[#d4b5a0]/40 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                    </svg>
                                                    Envoi en cours...
                                                </>
                                            ) : (
                                                <>
                                                    Envoyer le Message
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </>
                                            )}
                                        </span>
                                        <div className="absolute inset-0 bg-[#c5a591] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Informations - 2 colonnes */}
                        <div className="lg:col-span-2 space-y-8 opacity-0 animate-[fadeInUp_0.8s_ease_0.6s_forwards]">

                            {/* Coordonnées */}
                            <div className="bg-white p-8 shadow-lg shadow-[#2a2520]/5">
                                <h3 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520] mb-6">
                                    Nos Coordonnées
                                </h3>
                                <div className="space-y-6">
                                    {/* Adresse */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 flex items-center justify-center bg-[#d4b5a0]/10 flex-shrink-0">
                                            <svg className="w-5 h-5 text-[#d4b5a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-['Karla'] text-xs tracking-[0.1em] uppercase text-[#9d8b7e] mb-2">Adresse</p>
                                            <p className="font-['Karla'] text-sm text-[#2a2520] leading-relaxed">
                                                Boulevard Gendebien 7<br />
                                                7000 Mons, Belgique
                                            </p>
                                            <a
                                                href="https://maps.google.com/?q=Boulevard+Gendebien+7,+7000+Mons"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 mt-2 font-['Karla'] text-xs text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300"
                                            >
                                                Voir sur Google Maps
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Téléphone */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 flex items-center justify-center bg-[#d4b5a0]/10 flex-shrink-0">
                                            <svg className="w-5 h-5 text-[#d4b5a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-['Karla'] text-xs tracking-[0.1em] uppercase text-[#9d8b7e] mb-2">Téléphone</p>
                                            <a
                                                href="tel:+32492484497"
                                                className="font-['Karla'] text-sm text-[#2a2520] hover:text-[#d4b5a0] transition-colors duration-300"
                                            >
                                                +32 492 48 44 97
                                            </a>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 flex items-center justify-center bg-[#d4b5a0]/10 flex-shrink-0">
                                            <svg className="w-5 h-5 text-[#d4b5a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-['Karla'] text-xs tracking-[0.1em] uppercase text-[#9d8b7e] mb-2">Email</p>
                                            <a
                                                href="mailto:babybullesmons@gmail.com"
                                                className="font-['Karla'] text-sm text-[#2a2520] hover:text-[#d4b5a0] transition-colors duration-300 break-all"
                                            >
                                                babybullesmons@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Horaires */}
                            <div className="bg-white p-8 shadow-lg shadow-[#2a2520]/5">
                                <h3 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520] mb-6">
                                    Horaires d'Ouverture
                                </h3>
                                <div className="space-y-3">
                                    {horaires.map((horaire) => (
                                        <div
                                            key={horaire.jour}
                                            className="flex justify-between items-center pb-3 border-b border-[#f3ede7] last:border-0"
                                        >
                                            <span className="font-['Karla'] text-sm text-[#2a2520]">
                                                {horaire.jour}
                                            </span>
                                            <span className={`font-['Karla'] text-sm ${
                                                horaire.ouvert ? 'text-[#d4b5a0]' : 'text-[#9d8b7e]'
                                            }`}>
                                                {horaire.heures}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Réseaux sociaux */}
                            <div className="bg-white p-8 shadow-lg shadow-[#2a2520]/5">
                                <h3 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520] mb-6">
                                    Suivez-nous
                                </h3>
                                <div className="flex items-center gap-4">
                                    <a
                                        href="https://facebook.com/babybulles"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 flex items-center justify-center border border-[#f3ede7] hover:border-[#d4b5a0] hover:bg-[#d4b5a0]/10 transition-all duration-300"
                                        aria-label="Facebook"
                                    >
                                        <svg className="w-5 h-5 text-[#d4b5a0]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
                                    </a>

                                    <a
                                        href="https://instagram.com/babybulles"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 flex items-center justify-center border border-[#f3ede7] hover:border-[#d4b5a0] hover:bg-[#d4b5a0]/10 transition-all duration-300"
                                        aria-label="Instagram"
                                    >
                                        <svg className="w-5 h-5 text-[#d4b5a0]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Google Maps */}
                    <div className="mt-16 opacity-0 animate-[fadeIn_1s_ease_0.8s_forwards]">
                        <div className="relative aspect-[16/6] overflow-hidden shadow-lg shadow-[#2a2520]/10">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2531.5!2d3.9526!3d50.4541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2398c0!2sBoulevard%20Gendebien%207%2C%207000%20Mons!5e0!3m2!1sfr!2sbe!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>
                </div>
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
            `}</style>
        </>
    );
}