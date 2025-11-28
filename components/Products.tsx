'use client';

import Link from 'next/link';

export default function Product() {
    const services = [
        {
            title: "Bain Enveloppant Emmailloté",
            description: "Un moment de détente aquatique dans une eau à température idéale, favorisant l'éveil sensoriel et la relaxation.",
            image: "/massageenv.jpg",
            duration: "30 min"
        },
        {
            title: "Massage Femme Enceinte",
            description: "Un massage spécialement adapté à la grossesse pour soulager les tensions, alléger les jambes et favoriser l'apaisement",
            image: "/img2.jpg",
            duration: "45 min"
        },
        {
            title: "Massage Bébé",
            description: "Un massage tout en douceur, adapté à l'âge de votre enfant, pour prolonger la détente, apaiser les inconforts digestifs",
            image: "/img1.jpg",
            duration: "60 min"
        }
    ];

    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Karla:wght@300;400;500&display=swap');
            `}</style>

            <section className="relative py-20 lg:py-32 bg-[#faf8f5] overflow-hidden">

                {/* Subtle background accent */}
                <div className="absolute top-20 left-0 w-1/2 h-1/2 bg-[#d4b5a0]/5 blur-3xl rounded-full" />

                <div className="relative max-w-7xl mx-auto px-8 lg:px-16">

                    {/* Section Header */}
                    <div className="max-w-2xl mb-16 lg:mb-20">
                        <span className="inline-block font-['Karla'] text-[0.7rem] tracking-[0.3em] uppercase text-[#9d8b7e] mb-4">
                            Nos Services
                        </span>

                        <h2 className="font-['Libre_Caslon_Text'] text-4xl md:text-5xl lg:text-6xl font-normal text-[#2a2520] mb-6 leading-[1.1]">
                            Une expérience unique pour chaque moment
                        </h2>

                        <div className="w-20 h-[1px] bg-gradient-to-r from-[#d4b5a0] to-transparent mb-6" />

                        <p className="font-['Karla'] text-lg font-light text-[#5a524d] leading-relaxed">
                            Découvrez nos soins et ateliers conçus pour éveiller, apaiser et accompagner le développement de votre bébé dans un environnement chaleureux.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
                        {services.map((service, index) => (
                            <div
                                key={service.title}
                                className="group relative bg-white overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#d4b5a0]/10"
                                style={{
                                    animation: `fadeInUp 0.8s ease ${index * 0.15}s forwards`,
                                    opacity: 0
                                }}
                            >
                                {/* Image */}
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2a2520]/60 via-[#2a2520]/20 to-transparent" />

                                    {/* Duration badge */}
                                    <div className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm">
                                        <span className="font-['Karla'] text-xs tracking-[0.1em] uppercase text-[#2a2520]">
                                            {service.duration}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 lg:p-8">
                                    <h3 className="font-['Libre_Caslon_Text'] text-2xl lg:text-3xl font-normal text-[#2a2520] mb-4">
                                        {service.title}
                                    </h3>

                                    <p className="font-['Karla'] text-sm lg:text-base font-light text-[#5a524d] leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Hover indicator */}
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d4b5a0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="text-center opacity-0" style={{ animation: 'fadeInUp 0.8s ease 0.6s forwards' }}>
                        <p className="font-['Karla'] text-[#5a524d] mb-8 font-light">
                            Explorez l'ensemble de nos soins et trouvez celui qui correspond à vos besoins
                        </p>

                        <Link
                            href="/services"
                            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-[#d4b5a0] text-white font-['Karla'] text-sm tracking-[0.08em] uppercase overflow-hidden transition-all duration-500 hover:bg-[#c5a591] hover:shadow-2xl hover:shadow-[#d4b5a0]/30 hover:-translate-y-0.5"
                        >
                            <span className="relative z-10">Voir tous nos services</span>
                            <svg
                                className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            <div className="absolute inset-0 bg-[#c5a591] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </Link>
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
            `}</style>
        </>
    );
}