'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function InternalNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: '/', label: 'Accueil' },
        { href: '/events', label: 'Événements' },
        { href: '/services', label: 'Services' },
        { href: '/team', label: 'Équipe' },
        { href: '/contact', label: 'Contact' },
    ];

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Karla:wght@300;400;500&display=swap');
            `}</style>

            <nav className="sticky top-0 z-50 bg-white border-b border-[#f3ede7] shadow-sm">
                <div className="max-w-7xl mx-auto px-8 lg:px-16 py-4 md:py-5 flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="shrink-0 transition-transform duration-300 hover:scale-105">
                        <img
                            src="/logobabybulles.png"
                            alt="Baby Bulles"
                            className="w-14 h-14 md:w-16 md:h-16 object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`font-['Karla'] text-sm tracking-[0.08em] uppercase relative group transition-colors duration-300 ${
                                    isActive(link.href)
                                        ? 'text-[#d4b5a0] font-medium'
                                        : 'text-[#2a2520] hover:text-[#d4b5a0]'
                                }`}
                            >
                                {link.label}
                                <span className={`absolute -bottom-2 left-0 h-[2px] bg-[#d4b5a0] transition-all duration-300 ${
                                    isActive(link.href)
                                        ? 'w-full'
                                        : 'w-0 group-hover:w-full'
                                }`} />
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button Desktop */}
                    <Link
                        href="/contact"
                        className="hidden lg:flex items-center gap-2 px-6 py-3 bg-[#d4b5a0] text-white font-['Karla'] text-xs tracking-[0.08em] uppercase transition-all duration-300 hover:bg-[#c5a591] hover:shadow-lg hover:shadow-[#d4b5a0]/30 hover:-translate-y-0.5"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Réserver
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-colors duration-300"
                        aria-label="Menu"
                    >
                        <span className={`w-6 h-[2px] bg-[#2a2520] transition-all duration-300 ${
                            isOpen ? 'rotate-45 translate-y-2' : ''
                        }`} />
                        <span className={`w-6 h-[2px] bg-[#2a2520] transition-all duration-300 ${
                            isOpen ? 'opacity-0' : 'opacity-100'
                        }`} />
                        <span className={`w-6 h-[2px] bg-[#2a2520] transition-all duration-300 ${
                            isOpen ? '-rotate-45 -translate-y-2' : ''
                        }`} />
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
                                    className={`font-['Libre_Caslon_Text'] text-4xl transition-all duration-300 opacity-0 ${
                                        isActive(link.href)
                                            ? 'text-[#d4b5a0]'
                                            : 'text-white hover:text-[#d4b5a0]'
                                    }`}
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