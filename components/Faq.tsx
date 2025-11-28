'use client';

import { useState } from 'react';

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "Qu'est-ce qu'un baby spa ?",
            answer: "Une séance de baby spa dure environ une heure. Elle comprend 20 minutes d'hydrothérapie dans un bassin adapté avec jets et bulles, suivies d'un massage bébé personnalisé en fonction de son âge et de ses besoins."
        },
        {
            question: "Que dois-je apporter ?",
            answer: "Vous devez simplement prévoir le sac à langer habituel avec l'essentiel et de quoi nourrir votre bébé, car comme après la piscine, la séance ouvre l'appétit. Nous mettons gratuitement à disposition des couches lavables pour l'eau, mais si vous préférez une couche jetable spéciale bain, merci de l'apporter avec vous."
        },
        {
            question: "A quelle tranche d'âge est-ce dédié ?",
            answer: "Nous accueillons les nouveau-nés âgés de minimum 14 jours jusqu'aux jeunes enfants âgés de 1 an."
        },
        {
            question: "Quels paiements sont acceptés ?",
            answer: "Il est possible de payer en liquide ou par Payconiq, un acompte sera demandé lors de la prise de rendez-vous. Si vous possédez un bon-cadeau, il suffit juste de le mentionner lors de la prise de rendez-vous et de l'emporter avec vous lors de votre séance."
        },
        {
            question: "Est-il possible d'avoir un bon-cadeau ?",
            answer: "N'hésitez pas à nous joindre par e-mail ou à nous rendre visite en personne (merci de nous contacter à l'avance). Les bons sont valides jusqu'aux 12 mois de l'enfant et peuvent être utilisés pour un soin spécifique ou pour un montant de votre choix."
        },
        {
            question: "Est-il possible de prendre un abonnement ?",
            answer: "Oui, il existe deux types d'abonnements : un abonnement 3 séances ou un abonnement 5 séances."
        }
    ];

    const toggleQuestion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Karla:wght@300;400;500&display=swap');
            `}</style>

            <section className="relative py-20 lg:py-32 bg-white overflow-hidden">

                {/* Subtle background accent */}
                <div className="absolute bottom-20 right-0 w-1/2 h-1/2 bg-[#d4b5a0]/5 blur-3xl rounded-full" />

                <div className="relative max-w-4xl mx-auto px-8 lg:px-16">

                    {/* Section Header */}
                    <div className="text-center mb-16 lg:mb-20">
                        <span className="inline-block font-['Karla'] text-[0.7rem] tracking-[0.3em] uppercase text-[#9d8b7e] mb-4">
                            FAQ
                        </span>

                        <h2 className="font-['Libre_Caslon_Text'] text-4xl md:text-5xl lg:text-6xl font-normal text-[#2a2520] mb-8 leading-[1.1]">
                            Questions Fréquentes
                        </h2>

                        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#d4b5a0] to-transparent mx-auto mb-8" />

                        <p className="font-['Karla'] text-base lg:text-lg font-light text-[#5a524d] leading-relaxed max-w-2xl mx-auto">
                            Vous trouverez ci-dessous les questions qui nous sont le plus fréquemment posées. Pour toute autre question :
                        </p>

                        {/* Contact Info */}
                        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                            <a
                                href="tel:+32492484497"
                                className="font-['Karla'] text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300 flex items-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +32 492 48 44 97
                            </a>

                            <span className="text-[#d4b5a0]/30">•</span>

                            <a
                                href="mailto:babybullesmons@gmail.com"
                                className="font-['Karla'] text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300 flex items-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                babybullesmons@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border-b border-[#f3ede7] last:border-0 opacity-0"
                                style={{
                                    animation: `fadeInUp 0.6s ease ${index * 0.1}s forwards`
                                }}
                            >
                                <button
                                    onClick={() => toggleQuestion(index)}
                                    className="w-full py-6 flex items-center justify-between gap-6 text-left group"
                                >
                                    <span className="font-['Karla'] text-lg lg:text-xl text-[#2a2520] group-hover:text-[#d4b5a0] transition-colors duration-300">
                                        {faq.question}
                                    </span>

                                    <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center border border-[#d4b5a0]/30 rounded-full transition-all duration-500 ${
                                        openIndex === index
                                            ? 'bg-[#d4b5a0] border-[#d4b5a0] rotate-45'
                                            : 'group-hover:border-[#d4b5a0] group-hover:rotate-90'
                                    }`}>
                                        <svg
                                            className={`w-4 h-4 transition-colors duration-300 ${
                                                openIndex === index ? 'text-white' : 'text-[#d4b5a0]'
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </div>
                                </button>

                                <div className={`overflow-hidden transition-all duration-500 ${
                                    openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                                }`}>
                                    <p className="font-['Karla'] text-base font-light text-[#5a524d] leading-relaxed pr-12">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom decoration */}
                    <div className="mt-16 flex justify-center opacity-0" style={{ animation: 'fadeIn 1s ease 0.8s forwards' }}>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#d4b5a0]/30" />
                            <div className="w-2 h-2 rounded-full bg-[#d4b5a0]/60" />
                            <div className="w-2 h-2 rounded-full bg-[#d4b5a0]" />
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
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