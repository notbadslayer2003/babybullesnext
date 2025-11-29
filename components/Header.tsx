'use client';

import Link from 'next/link';
import Navbar from './Navbar';

export default function Header() {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Karla:wght@300;400;500&display=swap');
            `}</style>

            <header className="relative h-screen w-full overflow-hidden bg-[#2a2520]">

                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/imgheaderaccueil.jpg"
                        alt="Baby Bulles"
                        className="w-full h-full object-cover opacity-70"
                    />
                    {/* Gradient overlay subtil */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2a2520]/80 via-[#2a2520]/60 to-transparent" />
                </div>

                {/* Navbar */}
                <Navbar />

                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                    <div className="px-8 lg:px-16 max-w-[80%] mx-auto w-full">
                        <div className="max-w-2xl opacity-0 animate-[fadeInUp_1.2s_ease_0.3s_forwards]">

                            {/* Badge subtil */}
                            <span className="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 font-['Karla'] text-[0.7rem] tracking-[0.25em] uppercase rounded-full mb-8">
                                <span className="w-1.5 h-1.5 bg-[#d4b5a0] rounded-full animate-pulse" />
                                Spa bien-être pour bébés
                            </span>

                            {/* Titre élégant */}
                            <h1 className="font-['Libre_Caslon_Text'] text-6xl md:text-7xl lg:text-8xl font-normal text-white mb-6 leading-[0.95]">
                                Baby Bulles
                            </h1>

                            {/* Slogan */}
                            <h2 className="font-['Karla'] text-xl md:text-2xl font-light text-white/90 mb-8 tracking-wide">
                                Un cocon pour bébé et sa famille
                            </h2>

                            {/* Ligne décorative minimaliste */}
                            <div className="w-20 h-[1px] bg-gradient-to-r from-[#d4b5a0] to-transparent mb-10" />

                            {/* Description épurée */}
                            <p className="font-['Karla'] text-white/70 text-base md:text-lg leading-relaxed mb-12 max-w-xl font-light">
                                Chez Baby Bulles, nous offrons aux bébés et à leurs parents un cocon de douceur avec des soins et ateliers bien-être favorisant le développement, le sommeil et le lien d&apos;attachement.
                            </p>

                            {/* Boutons CTA */}
                            <div className="hidden md:flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/services"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#d4b5a0] text-white font-['Karla'] text-sm tracking-[0.08em] uppercase overflow-hidden transition-all duration-500 hover:bg-[#c5a591] hover:shadow-2xl hover:shadow-[#d4b5a0]/30 hover:-translate-y-0.5"
                                >
                                    <span className="relative z-10">Nos services</span>
                                    <div className="absolute inset-0 bg-[#c5a591] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                </Link>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-['Karla'] text-sm tracking-[0.08em] uppercase backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-500 hover:-translate-y-0.5"
                                >
                                    Nous contacter
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator élégant */}
                <div className="hidden md:absolute bottom-10 left-1/2 -translate-x-1/2 md:flex flex-col items-center gap-3 opacity-0 animate-[fadeIn_1.5s_ease_1s_forwards]">
                    <span className="font-['Karla'] text-[0.65rem] tracking-[0.3em] uppercase text-white/40">
                        Scroll
                    </span>
                    <div className="relative w-[1px] h-12 bg-gradient-to-b from-white/40 via-white/20 to-transparent">
                        <div className="absolute top-0 left-0 w-full h-4 bg-white/60 animate-scroll-down" />
                    </div>
                </div>
            </header>

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

                @keyframes scroll-down {
                    0% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(32px);
                        opacity: 0;
                    }
                }

                .animate-scroll-down {
                    animation: scroll-down 2s ease-in-out infinite;
                }
            `}</style>
        </>
    );
}