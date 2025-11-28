'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Accueil' },
        { href: '/events', label: 'Événements' },
        { href: '/services', label: 'Services' },
        { href: '/team', label: 'Équipe' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Karla:wght@300;400;500&display=swap');
            `}</style>

            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? 'bg-[#faf8f5]/95 backdrop-blur-md shadow-sm py-4'
                    : 'bg-transparent py-6 md:py-8'
            }`}>
                <div className="max-w-7xl mx-auto px-8 lg:px-16 flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="shrink-0 transition-transform duration-300 hover:scale-105">
                        <img
                            src="/logobabybulles.png"
                            alt="Baby Bulles"
                            className={`object-contain transition-all duration-500 ${
                                scrolled ? 'w-12 h-12 md:w-14 md:h-14' : 'w-16 h-16 md:w-20 md:h-20'
                            }`}
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`font-['Karla'] text-sm tracking-[0.08em] uppercase relative group transition-colors duration-300 ${
                                    scrolled ? 'text-[#2a2520]' : 'text-white'
                                }`}
                            >
                                {link.label}
                                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                                    scrolled ? 'bg-[#d4b5a0]' : 'bg-white'
                                }`} />
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button Desktop */}
                    <Link
                        href="/contact"
                        className={`hidden lg:block px-8 py-3 font-['Karla'] text-xs tracking-[0.08em] uppercase transition-all duration-300 ${
                            scrolled
                                ? 'bg-[#d4b5a0] text-white hover:bg-[#c5a591]'
                                : 'bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-[#2a2520]'
                        }`}
                    >
                        Réserver
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-colors duration-300 ${
                            scrolled ? 'text-[#2a2520]' : 'text-white'
                        }`}
                        aria-label="Menu"
                    >
                        <span className={`w-6 h-[2px] transition-all duration-300 ${
                            isOpen ? 'rotate-45 translate-y-2' : ''
                        } ${scrolled || isOpen ? 'bg-[#2a2520]' : 'bg-white'}`} />
                        <span className={`w-6 h-[2px] transition-all duration-300 ${
                            isOpen ? 'opacity-0' : 'opacity-100'
                        } ${scrolled || isOpen ? 'bg-[#2a2520]' : 'bg-white'}`} />
                        <span className={`w-6 h-[2px] transition-all duration-300 ${
                            isOpen ? '-rotate-45 -translate-y-2' : ''
                        } ${scrolled || isOpen ? 'bg-[#2a2520]' : 'bg-white'}`} />
                    </button>
                </div>

                {/* Mobile Menu Fullscreen */}
                <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-500 ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}>
                    {/* Backdrop */}
                    <div
                        className={`absolute inset-0 bg-[#2a2520]/95 backdrop-blur-md transition-opacity duration-500 ${
                            isOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Menu Content */}
                    <div className={`relative h-full flex flex-col justify-center items-center transition-transform duration-700 ${
                        isOpen ? 'translate-y-0' : '-translate-y-full'
                    }`}>
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-8 right-8 z-50 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors duration-300 rounded-full"
                            aria-label="Fermer"
                        >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Logo */}
                        <div className="absolute top-8 left-8 z-50">
                            <img
                                src="/logobabybulles.png"
                                alt="Baby Bulles"
                                className="w-16 h-16 object-contain opacity-80"
                            />
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex flex-col items-center gap-8 mb-12">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="font-['Libre_Caslon_Text'] text-4xl text-white hover:text-[#d4b5a0] transition-all duration-300 opacity-0"
                                    style={{
                                        animation: isOpen ? `fadeInUp 0.6s ease ${index * 0.1}s forwards` : 'none'
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Button */}
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="px-12 py-4 bg-[#d4b5a0] text-white font-['Karla'] text-sm tracking-[0.08em] uppercase hover:bg-[#c5a591] transition-all duration-300 hover:shadow-2xl hover:shadow-[#d4b5a0]/40 hover:-translate-y-1 opacity-0"
                            style={{
                                animation: isOpen ? `fadeInUp 0.6s ease 0.6s forwards` : 'none'
                            }}
                        >
                            Réserver une séance
                        </Link>

                        {/* Decorative elements */}
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d4b5a0]/10 blur-3xl rounded-full" />
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#d4b5a0]/5 blur-3xl rounded-full" />
                    </div>
                </div>
            </nav>

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
            `}</style>
        </>
    );
}