'use client';

import { useState } from 'react';
import Link from 'next/link';
import InternalNavbar from '@/components/InternalNavbar';

interface Service {
    id: number;
    nom: string;
    description: string;
    fullDescription: string;
    duree: string;
    age: string;
    benefices: string[];
    image: string;
    categorie: string;
    pourQui: string; // "Bébé" | "Maman" | "Parent-Bébé"
    dureeMinutes: number;
}

export default function Services() {
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [filters, setFilters] = useState({
        pourQui: 'Tous',
        categorie: 'Toutes',
        duree: 'Toutes'
    });
    const [filtersOpen, setFiltersOpen] = useState(false);

    const services: Service[] = [
        {
            id: 1,
            nom: "Bain Bébé Relaxant",
            description: "Un moment de détente aquatique dans une eau à température idéale, favorisant l'éveil sensoriel.",
            fullDescription: "Le bain bébé est bien plus qu'un simple moment d'hygiène. C'est une véritable séance de relaxation et d'éveil sensoriel. Dans notre bassin adapté avec jets et bulles douces, votre bébé retrouve les sensations apaisantes du liquide amniotique. L'eau chauffée à 37°C permet une détente musculaire profonde tout en stimulant les sens de votre enfant.",
            duree: "30 min",
            age: "0-12 mois",
            benefices: [
                "Relaxation et apaisement profond",
                "Stimulation sensorielle et motrice",
                "Amélioration du sommeil",
                "Renforcement du système immunitaire",
                "Moment de complicité parent-bébé"
            ],
            image: "/service-bain.jpg",
            categorie: "Hydrothérapie",
            pourQui: "Bébé",
            dureeMinutes: 30
        },
        {
            id: 2,
            nom: "Massage Bien-être",
            description: "Des gestes doux et enveloppants pour apaiser, détendre et renforcer le lien d'attachement.",
            fullDescription: "Le massage bébé est une pratique ancestrale aux multiples bienfaits. Nos praticiens certifiés utilisent des techniques douces adaptées à l'âge et aux besoins de votre bébé. Huiles naturelles bio, ambiance apaisante, et gestes experts pour un moment de pure détente. Chaque séance est personnalisée pour répondre aux besoins spécifiques de votre enfant.",
            duree: "45 min",
            age: "2 semaines - 12 mois",
            benefices: [
                "Soulagement des coliques et tensions",
                "Amélioration de la digestion",
                "Stimulation de la circulation sanguine",
                "Apaisement et réduction du stress",
                "Renforcement du lien parent-enfant"
            ],
            image: "/service-massage.jpg",
            categorie: "Massage",
            pourQui: "Bébé",
            dureeMinutes: 45
        },
        {
            id: 3,
            nom: "Atelier Éveil Sensoriel",
            description: "Activités sensorielles adaptées pour stimuler le développement moteur et cognitif.",
            fullDescription: "Nos ateliers d'éveil sensoriel sont conçus pour accompagner le développement de votre bébé de manière ludique et stimulante. À travers des activités adaptées à son âge, nous sollicitons tous ses sens : toucher, vue, ouïe, odorat. Matériel Montessori, jeux sensoriels, musique douce, et accompagnement bienveillant pour favoriser l'éveil et l'autonomie.",
            duree: "60 min",
            age: "3-12 mois",
            benefices: [
                "Stimulation du développement cognitif",
                "Éveil des sens et découverte",
                "Développement de la motricité fine",
                "Socialisation et interaction",
                "Confiance en soi et autonomie"
            ],
            image: "/service-eveil.jpg",
            categorie: "Atelier",
            pourQui: "Bébé",
            dureeMinutes: 60
        },
        {
            id: 4,
            nom: "Spa Complet Parent-Bébé",
            description: "Une expérience complète alliant bain relaxant et massage personnalisé.",
            fullDescription: "Notre formule spa complète est l'expérience ultime pour votre bébé. Elle combine les bienfaits de l'hydrothérapie et du massage dans une séance d'une heure et demie. Votre bébé profite d'abord d'un bain relaxant dans notre bassin équipé, puis d'un massage adapté à ses besoins. Un moment privilégié de détente et de complicité dans un cadre chaleureux et sécurisant.",
            duree: "90 min",
            age: "1-12 mois",
            benefices: [
                "Relaxation complète corps et esprit",
                "Expérience sensorielle enrichie",
                "Meilleure qualité de sommeil",
                "Renforcement du système immunitaire",
                "Moment unique parent-bébé"
            ],
            image: "/service-spa.jpg",
            categorie: "Formule Premium",
            pourQui: "Parent-Bébé",
            dureeMinutes: 90
        },
        {
            id: 5,
            nom: "Séance Sommeil & Relaxation",
            description: "Techniques douces pour favoriser l'endormissement et un sommeil réparateur.",
            fullDescription: "Cette séance spéciale sommeil combine massage relaxant, techniques de respiration, et création d'un rituel d'endormissement. Idéale pour les bébés ayant des difficultés d'endormissement ou un sommeil agité. Nous vous transmettons également des conseils pratiques et des techniques à reproduire à la maison pour installer une routine de sommeil apaisante.",
            duree: "50 min",
            age: "1-12 mois",
            benefices: [
                "Facilite l'endormissement",
                "Améliore la qualité du sommeil",
                "Réduit les réveils nocturnes",
                "Apaise l'anxiété de séparation",
                "Crée un rituel apaisant"
            ],
            image: "/service-sommeil.jpg",
            categorie: "Bien-être",
            pourQui: "Bébé",
            dureeMinutes: 50
        },
        {
            id: 6,
            nom: "Réflexologie Plantaire Bébé",
            description: "Stimulation douce des points réflexes pour apaiser et rééquilibrer.",
            fullDescription: "La réflexologie plantaire pour bébé est une approche douce et naturelle qui stimule les zones réflexes situées sous les pieds. Cette technique millénaire adaptée aux tout-petits permet de soulager de nombreux maux du quotidien : coliques, constipation, poussées dentaires, troubles du sommeil. Nos praticiennes certifiées utilisent des pressions légères et adaptées à la sensibilité de votre bébé.",
            duree: "30 min",
            age: "1-12 mois",
            benefices: [
                "Soulagement des coliques et tensions",
                "Amélioration du transit intestinal",
                "Apaisement lors des poussées dentaires",
                "Renforcement du système immunitaire",
                "Détente profonde et bien-être"
            ],
            image: "/service-reflexologie.jpg",
            categorie: "Thérapie douce",
            pourQui: "Bébé",
            dureeMinutes: 30
        },
        {
            id: 7,
            nom: "Massage Postnatal Maman",
            description: "Un moment de détente et de récupération pour les jeunes mamans après l'accouchement.",
            fullDescription: "Le massage postnatal est spécialement conçu pour accompagner les mamans dans leur récupération après l'accouchement. Ce soin doux et enveloppant aide à soulager les tensions musculaires, favorise la détente profonde et accompagne le corps dans sa transformation. Nos techniques adaptées prennent en compte les besoins spécifiques du post-partum : drainage lymphatique léger, détente du dos et des épaules, soin du ventre en douceur.",
            duree: "60 min",
            age: "Post-accouchement",
            benefices: [
                "Soulagement des tensions musculaires",
                "Amélioration de la récupération physique",
                "Moment de détente et de reconnexion à soi",
                "Réduction du stress et de la fatigue",
                "Accompagnement de la transformation du corps"
            ],
            image: "/service-maman-massage.jpg",
            categorie: "Massage",
            pourQui: "Maman",
            dureeMinutes: 60
        },
        {
            id: 8,
            nom: "Atelier Allaitement & Bien-être",
            description: "Conseils personnalisés et soutien pour un allaitement serein et épanouissant.",
            fullDescription: "Cet atelier individuel ou en petit groupe offre un espace bienveillant pour échanger sur l'allaitement maternel. Caroline, sage-femme expérimentée, vous accompagne dans vos questionnements : mise au sein, positions, gestion des montées de lait, sevrage... Chaque séance est adaptée à votre situation et à vos besoins. Un moment privilégié pour recevoir des conseils pratiques, être rassurée et prendre confiance en vous.",
            duree: "45 min",
            age: "Post-accouchement",
            benefices: [
                "Conseils personnalisés par une sage-femme",
                "Soutien dans les difficultés d'allaitement",
                "Techniques de mise au sein optimales",
                "Gestion du sevrage en douceur",
                "Espace d'écoute sans jugement"
            ],
            image: "/service-allaitement.jpg",
            categorie: "Atelier",
            pourQui: "Maman",
            dureeMinutes: 45
        },
        {
            id: 9,
            nom: "Cercle de Parole Mamans",
            description: "Un espace d'échange et de partage entre jeunes mamans dans un cadre bienveillant.",
            fullDescription: "Le cercle de parole est un moment précieux où les mamans peuvent se retrouver, partager leurs joies, leurs doutes et leurs questionnements. Dans un cadre chaleureux et sans jugement, accompagnées par Caroline, vous pourrez échanger sur les défis du quotidien, la fatigue, les émotions du post-partum, l'organisation familiale... Un temps pour soi, pour se sentir moins seule et créer du lien avec d'autres mamans qui vivent la même aventure.",
            duree: "90 min",
            age: "Post-accouchement",
            benefices: [
                "Partage d'expériences entre mamans",
                "Sentiment d'appartenance et soutien",
                "Espace d'écoute bienveillant",
                "Conseils pratiques du quotidien",
                "Réduction du sentiment de solitude"
            ],
            image: "/service-cercle-mamans.jpg",
            categorie: "Atelier",
            pourQui: "Maman",
            dureeMinutes: 90
        }
    ];

    // Filtrer les services
    const filteredServices = services.filter(service => {
        const matchPourQui = filters.pourQui === 'Tous' || service.pourQui === filters.pourQui;
        const matchCategorie = filters.categorie === 'Toutes' || service.categorie === filters.categorie;

        let matchDuree = true;
        if (filters.duree === '-30min') {
            matchDuree = service.dureeMinutes <= 30;
        } else if (filters.duree === '30-60min') {
            matchDuree = service.dureeMinutes > 30 && service.dureeMinutes <= 60;
        } else if (filters.duree === '+60min') {
            matchDuree = service.dureeMinutes > 60;
        }

        return matchPourQui && matchCategorie && matchDuree;
    });

    const handleFilterChange = (filterType: string, value: string) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
    };

    const resetFilters = () => {
        setFilters({
            pourQui: 'Tous',
            categorie: 'Toutes',
            duree: 'Toutes'
        });
    };

    const openModal = (service: Service) => {
        setSelectedService(service);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedService(null);
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
                <div className="absolute top-20 left-0 w-96 h-96 bg-[#d4b5a0]/5 blur-3xl rounded-full" />
                <div className="absolute bottom-40 right-0 w-80 h-80 bg-[#d4b5a0]/3 blur-3xl rounded-full" />

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
                                Nos Services
                            </span>
                            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#d4b5a0]/50 to-transparent" />
                        </div>

                        <h1 className="font-['Libre_Caslon_Text'] text-5xl md:text-6xl lg:text-7xl font-normal text-[#2a2520] mb-8 leading-[1.05] opacity-0 animate-[fadeIn_1.2s_ease_0.3s_forwards]">
                            Des Soins sur Mesure<br />
                            <span className="text-[#d4b5a0]">Pour Votre Bébé</span>
                        </h1>

                        <p className="font-['Karla'] text-lg lg:text-xl font-light text-[#5a524d] leading-relaxed opacity-0 animate-[fadeIn_1.2s_ease_0.4s_forwards]">
                            Découvrez notre gamme complète de soins et d'ateliers conçus pour le bien-être et l'épanouissement de votre enfant.
                        </p>
                    </div>

                    {/* Filters Section - NOUVEAU DESIGN PREMIUM avec système d'ouverture/fermeture */}
                    <div className="mb-16 opacity-0 animate-[fadeIn_1s_ease_0.5s_forwards]">
                        <div className="relative bg-white overflow-hidden shadow-xl shadow-[#2a2520]/10">
                            {/* Decorative top border */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4b5a0] via-[#c5a591] to-[#d4b5a0]" />

                            {/* Header - Toujours visible */}
                            <button
                                onClick={() => setFiltersOpen(!filtersOpen)}
                                className="w-full p-8 lg:p-12 text-left hover:bg-[#faf8f5]/50 transition-colors duration-300"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="w-1 h-10 bg-[#d4b5a0]" />
                                            <h3 className="font-['Libre_Caslon_Text'] text-3xl font-normal text-[#2a2520]">
                                                Filtrer les Services
                                            </h3>
                                        </div>
                                        <p className="font-['Karla'] text-sm text-[#5a524d] ml-6">
                                            {filtersOpen ? 'Cliquez pour fermer' : 'Cliquez pour ouvrir les filtres'}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        {/* Results count badge */}
                                        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#d4b5a0]/10 rounded-full">
                                            <span className="font-['Karla'] text-sm font-medium text-[#d4b5a0]">
                                                {filteredServices.length}
                                            </span>
                                            <span className="font-['Karla'] text-xs text-[#5a524d]">
                                                résultat{filteredServices.length > 1 ? 's' : ''}
                                            </span>
                                        </div>

                                        {/* Toggle icon */}
                                        <div className={`w-10 h-10 flex items-center justify-center bg-[#d4b5a0]/10 rounded-full transition-transform duration-300 ${
                                            filtersOpen ? 'rotate-180' : ''
                                        }`}>
                                            <svg className="w-5 h-5 text-[#d4b5a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </button>

                            {/* Filterable content - Collapsible */}
                            <div className={`transition-all duration-500 overflow-hidden ${
                                filtersOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                                <div className="px-8 lg:px-12 pb-8 lg:pb-12">
                                    {/* Reset button */}
                                    {(filters.pourQui !== 'Tous' || filters.categorie !== 'Toutes' || filters.duree !== 'Toutes') && (
                                        <div className="mb-8 pb-6 border-b-2 border-[#f5ede7]">
                                            <button
                                                onClick={resetFilters}
                                                className="group flex items-center gap-2 px-6 py-3 bg-[#f8f6f3] hover:bg-[#d4b5a0] font-['Karla'] text-sm text-[#2a2520] hover:text-white transition-all duration-300 shadow-sm"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                </svg>
                                                Réinitialiser les filtres
                                            </button>
                                        </div>
                                    )}

                                    <div className="space-y-10">
                                        {/* Pour qui */}
                                        <div>
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-10 h-10 flex items-center justify-center bg-[#d4b5a0]/10">
                                                    <svg className="w-5 h-5 text-[#d4b5a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                    </svg>
                                                </div>
                                                <label className="font-['Karla'] text-base font-medium text-[#2a2520] tracking-wide">
                                                    Pour qui ?
                                                </label>
                                            </div>
                                            <div className="flex flex-wrap gap-4">
                                                {['Tous', 'Bébé', 'Maman', 'Parent-Bébé'].map((option) => {
                                                    const count = services.filter(s => option === 'Tous' || s.pourQui === option).length;
                                                    return (
                                                        <button
                                                            key={option}
                                                            onClick={() => handleFilterChange('pourQui', option)}
                                                            className={`group relative px-6 py-4 font-['Karla'] text-sm font-medium transition-all duration-300 overflow-hidden ${
                                                                filters.pourQui === option
                                                                    ? 'bg-[#d4b5a0] text-white shadow-xl shadow-[#d4b5a0]/30 scale-105'
                                                                    : 'bg-[#faf8f5] text-[#5a524d] hover:bg-[#f3ede7] hover:scale-105 shadow-md hover:shadow-lg'
                                                            }`}
                                                        >
                                                            <span className="relative z-10 flex items-center gap-2">
                                                                {option}
                                                                <span className={`text-xs px-2 py-0.5 rounded-full ${
                                                                    filters.pourQui === option
                                                                        ? 'bg-white/20'
                                                                        : 'bg-[#d4b5a0]/10 text-[#d4b5a0]'
                                                                }`}>
                                                                    {count}
                                                                </span>
                                                            </span>
                                                            {filters.pourQui !== option && (
                                                                <div className="absolute inset-0 bg-[#d4b5a0]/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                                            )}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Catégorie */}
                                        <div>
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-10 h-10 flex items-center justify-center bg-[#d4b5a0]/10">
                                                    <svg className="w-5 h-5 text-[#d4b5a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                                    </svg>
                                                </div>
                                                <label className="font-['Karla'] text-base font-medium text-[#2a2520] tracking-wide">
                                                    Catégorie
                                                </label>
                                            </div>
                                            <div className="flex flex-wrap gap-4">
                                                {['Toutes', 'Hydrothérapie', 'Massage', 'Atelier', 'Formule Premium', 'Bien-être', 'Thérapie douce'].map((option) => {
                                                    const count = services.filter(s => option === 'Toutes' || s.categorie === option).length;
                                                    return (
                                                        <button
                                                            key={option}
                                                            onClick={() => handleFilterChange('categorie', option)}
                                                            className={`group relative px-6 py-4 font-['Karla'] text-sm font-medium transition-all duration-300 overflow-hidden ${
                                                                filters.categorie === option
                                                                    ? 'bg-[#d4b5a0] text-white shadow-xl shadow-[#d4b5a0]/30 scale-105'
                                                                    : 'bg-[#faf8f5] text-[#5a524d] hover:bg-[#f3ede7] hover:scale-105 shadow-md hover:shadow-lg'
                                                            }`}
                                                        >
                                                            <span className="relative z-10 flex items-center gap-2">
                                                                {option}
                                                                <span className={`text-xs px-2 py-0.5 rounded-full ${
                                                                    filters.categorie === option
                                                                        ? 'bg-white/20'
                                                                        : 'bg-[#d4b5a0]/10 text-[#d4b5a0]'
                                                                }`}>
                                                                    {count}
                                                                </span>
                                                            </span>
                                                            {filters.categorie !== option && (
                                                                <div className="absolute inset-0 bg-[#d4b5a0]/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                                            )}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Durée */}
                                        <div>
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-10 h-10 flex items-center justify-center bg-[#d4b5a0]/10">
                                                    <svg className="w-5 h-5 text-[#d4b5a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <label className="font-['Karla'] text-base font-medium text-[#2a2520] tracking-wide">
                                                    Durée de la séance
                                                </label>
                                            </div>
                                            <div className="flex flex-wrap gap-4">
                                                {[
                                                    { value: 'Toutes', label: 'Toutes durées' },
                                                    { value: '-30min', label: '< 30 min', icon: '⚡' },
                                                    { value: '30-60min', label: '30 - 60 min', icon: '⏱️' },
                                                    { value: '+60min', label: '> 60 min', icon: '🌟' }
                                                ].map((option) => {
                                                    let count = 0;
                                                    if (option.value === 'Toutes') count = services.length;
                                                    else if (option.value === '-30min') count = services.filter(s => s.dureeMinutes <= 30).length;
                                                    else if (option.value === '30-60min') count = services.filter(s => s.dureeMinutes > 30 && s.dureeMinutes <= 60).length;
                                                    else if (option.value === '+60min') count = services.filter(s => s.dureeMinutes > 60).length;

                                                    return (
                                                        <button
                                                            key={option.value}
                                                            onClick={() => handleFilterChange('duree', option.value)}
                                                            className={`group relative px-6 py-4 font-['Karla'] text-sm font-medium transition-all duration-300 overflow-hidden ${
                                                                filters.duree === option.value
                                                                    ? 'bg-[#d4b5a0] text-white shadow-xl shadow-[#d4b5a0]/30 scale-105'
                                                                    : 'bg-[#faf8f5] text-[#5a524d] hover:bg-[#f3ede7] hover:scale-105 shadow-md hover:shadow-lg'
                                                            }`}
                                                        >
                                                            <span className="relative z-10 flex items-center gap-2">
                                                                {option.icon && <span className="text-base">{option.icon}</span>}
                                                                {option.label}
                                                                <span className={`text-xs px-2 py-0.5 rounded-full ${
                                                                    filters.duree === option.value
                                                                        ? 'bg-white/20'
                                                                        : 'bg-[#d4b5a0]/10 text-[#d4b5a0]'
                                                                }`}>
                                                                    {count}
                                                                </span>
                                                            </span>
                                                            {filters.duree !== option.value && (
                                                                <div className="absolute inset-0 bg-[#d4b5a0]/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                                            )}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Results count - Design amélioré */}
                                    <div className="mt-10 pt-8 border-t-2 border-[#f5ede7]">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 flex items-center justify-center bg-[#d4b5a0] rounded-full">
                                                    <span className="font-['Karla'] text-lg font-bold text-white">{filteredServices.length}</span>
                                                </div>
                                                <div>
                                                    <p className="font-['Karla'] text-sm font-medium text-[#2a2520]">
                                                        {filteredServices.length} service{filteredServices.length > 1 ? 's' : ''} trouvé{filteredServices.length > 1 ? 's' : ''}
                                                    </p>
                                                    <p className="font-['Karla'] text-xs text-[#9d8b7e]">
                                                        Sur {services.length} services disponibles
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Progress bar */}
                                            <div className="hidden md:block w-48">
                                                <div className="h-2 bg-[#f5ede7] rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-[#d4b5a0] rounded-full transition-all duration-500"
                                                        style={{ width: `${(filteredServices.length / services.length) * 100}%` }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Services Grid */}
                    {filteredServices.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                            {filteredServices.map((service, index) => (
                                <div
                                    key={service.id}
                                    onClick={() => openModal(service)}
                                    className="group relative bg-white cursor-pointer overflow-hidden shadow-lg shadow-[#2a2520]/5 transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#d4b5a0]/20"
                                    style={{
                                        animation: `fadeInUp 0.8s ease ${index * 0.1}s forwards`,
                                        opacity: 0
                                    }}
                                >
                                    {/* Decorative corner */}
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#d4b5a0]/10 to-transparent" />

                                    {/* Image */}
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.nom}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#2a2520]/70 via-[#2a2520]/30 to-transparent" />

                                        {/* Badges */}
                                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                                            {/* Categorie badge */}
                                            <div className="px-3 py-1.5 bg-white/95 backdrop-blur-sm border border-[#d4b5a0]/20">
                                            <span className="font-['Karla'] text-xs tracking-[0.1em] uppercase text-[#d4b5a0]">
                                                {service.categorie}
                                            </span>
                                            </div>
                                            {/* Pour qui badge */}
                                            <div className={`px-3 py-1.5 backdrop-blur-sm border ${
                                                service.pourQui === 'Maman'
                                                    ? 'bg-[#c5a591]/95 border-[#c5a591]/20'
                                                    : service.pourQui === 'Parent-Bébé'
                                                        ? 'bg-[#d4b5a0]/95 border-[#d4b5a0]/20'
                                                        : 'bg-white/95 border-[#d4b5a0]/20'
                                            }`}>
                                            <span className={`font-['Karla'] text-xs tracking-[0.1em] uppercase ${
                                                service.pourQui === 'Maman' || service.pourQui === 'Parent-Bébé'
                                                    ? 'text-white'
                                                    : 'text-[#5a524d]'
                                            }`}>
                                                {service.pourQui}
                                            </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520] mb-3 group-hover:text-[#d4b5a0] transition-colors duration-300">
                                            {service.nom}
                                        </h3>

                                        <p className="font-['Karla'] text-sm font-light text-[#5a524d] leading-relaxed mb-4">
                                            {service.description}
                                        </p>

                                        {/* Info tags */}
                                        <div className="flex flex-wrap gap-2 mb-5 pb-5 border-b border-[#f3ede7]">
                                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f8f6f3]">
                                                <svg className="w-4 h-4 text-[#d4b5a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="font-['Karla'] text-xs text-[#5a524d]">{service.duree}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f8f6f3]">
                                                <svg className="w-4 h-4 text-[#d4b5a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                                <span className="font-['Karla'] text-xs text-[#5a524d]">{service.age}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-[#d4b5a0] font-['Karla'] text-sm font-medium group-hover:gap-3 transition-all duration-300">
                                            <span>Découvrir ce soin</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Hover accent line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4b5a0] via-[#c5a591] to-[#d4b5a0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#f8f6f3] rounded-full mb-6">
                                <svg className="w-10 h-10 text-[#d4b5a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520] mb-3">
                                Aucun service trouvé
                            </h3>
                            <p className="font-['Karla'] text-base text-[#5a524d] mb-6">
                                Essayez de modifier vos critères de recherche
                            </p>
                            <button
                                onClick={resetFilters}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#d4b5a0] text-white font-['Karla'] text-sm tracking-[0.08em] uppercase transition-all duration-300 hover:bg-[#c5a591]"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                Réinitialiser les filtres
                            </button>
                        </div>
                    )}

                    {/* CTA Section */}
                    <div className="mt-20 text-center opacity-0 animate-[fadeIn_1s_ease_1s_forwards]">
                        <div className="max-w-2xl mx-auto">
                            <h3 className="font-['Libre_Caslon_Text'] text-3xl lg:text-4xl font-normal text-[#2a2520] mb-4">
                                Une Question sur Nos Services ?
                            </h3>
                            <p className="font-['Karla'] text-base text-[#5a524d] mb-8">
                                Notre équipe se tient à votre disposition pour vous conseiller et vous accompagner dans le choix du soin idéal pour votre bébé.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 px-10 py-4 bg-[#d4b5a0] text-white font-['Karla'] text-sm tracking-[0.08em] uppercase transition-all duration-500 hover:bg-[#c5a591] hover:shadow-2xl hover:shadow-[#d4b5a0]/30 hover:-translate-y-1"
                            >
                                Nous Contacter
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Modal - Reste du code inchangé...*/}
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