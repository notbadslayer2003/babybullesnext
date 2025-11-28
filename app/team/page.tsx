'use client';

import Link from 'next/link';
import InternalNavbar from '@/components/InternalNavbar';

export default function Team() {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Karla:wght@300;400;500&display=swap');
            `}</style>

            <InternalNavbar />

            <section className="relative min-h-screen bg-gradient-to-br from-[#faf8f5] via-[#f8f6f3] to-[#f5ede7] overflow-hidden">

                {/* Background decorative elements */}
                <div className="absolute top-20 left-0 w-96 h-96 bg-[#d4b5a0]/5 blur-3xl rounded-full" />
                <div className="absolute bottom-40 right-0 w-80 h-80 bg-[#d4b5a0]/3 blur-3xl rounded-full" />

                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #2a2520 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />

                <div className="relative">

                    {/* Hero Section */}
                    <div className="relative py-20 lg:py-32 px-8 lg:px-16">
                        <div className="max-w-7xl mx-auto">

                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                {/* Text */}
                                <div className="opacity-0 animate-[fadeIn_1.2s_ease_0.3s_forwards]">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="font-['Karla'] text-[0.7rem] tracking-[0.3em] uppercase text-[#9d8b7e]">
                                            Notre Équipe
                                        </span>
                                        <div className="flex-1 h-[1px] bg-gradient-to-r from-[#d4b5a0]/50 to-transparent" />
                                    </div>

                                    <h1 className="font-['Libre_Caslon_Text'] text-5xl md:text-6xl lg:text-7xl font-normal text-[#2a2520] mb-6 leading-[1.05]">
                                        Rencontrez<br />
                                        <span className="text-[#d4b5a0]">Caroline</span>
                                    </h1>

                                    <p className="font-['Karla'] text-lg lg:text-xl font-light text-[#5a524d] leading-relaxed mb-8">
                                        Sage-femme passionnée et fondatrice de Baby Bulles, je vous accompagne avec douceur et bienveillance dans votre aventure parentale.
                                    </p>

                                    {/* Quote */}
                                    <div className="relative pl-6 border-l-2 border-[#d4b5a0]">
                                        <p className="font-['Libre_Caslon_Text'] text-xl italic text-[#5a524d] leading-relaxed">
                                            « On ne naît pas parent, on le devient, et l'on apprend chaque jour. »
                                        </p>
                                    </div>
                                </div>

                                {/* Image */}
                                <div className="relative opacity-0 animate-[fadeIn_1.2s_ease_0.5s_forwards]">
                                    <div className="relative aspect-[3/4] overflow-hidden rounded-tl-[100px] rounded-br-[100px] shadow-2xl shadow-[#2a2520]/10">
                                        <img
                                            src="/profil.jpg"
                                            alt="Caroline - Sage-femme Baby Bulles"
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Subtle overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#2a2520]/10 to-transparent" />
                                    </div>

                                    {/* Decorative element */}
                                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#d4b5a0]/20 rounded-full blur-2xl" />
                                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#d4b5a0]/20 rounded-full blur-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 1: Qui suis-je */}
                    <div className="py-20 lg:py-32 px-8 lg:px-16 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                {/* Image left */}
                                <div className="order-2 lg:order-1 opacity-0 animate-[fadeIn_1s_ease_0.3s_forwards]">
                                    <div
                                        className="relative aspect-[4/5] overflow-hidden rounded-tl-[80px] rounded-br-[80px] shadow-xl shadow-[#2a2520]/10">
                                        <img
                                            src="/profil.jpg"
                                            alt="Baby Bulles - Le spa"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Text right */}
                                <div className="order-1 lg:order-2 opacity-0 animate-[fadeIn_1s_ease_0.5s_forwards]">
                                    <h2 className="font-['Libre_Caslon_Text'] text-4xl lg:text-5xl font-normal text-[#2a2520] mb-8 flex items-center gap-4">
                                        <div className="w-1 h-12 bg-[#d4b5a0]"/>
                                        Qui suis-je ?
                                    </h2>

                                    <div
                                        className="space-y-6 font-['Karla'] text-base lg:text-lg font-light text-[#5a524d] leading-relaxed">
                                        <p>
                                            Je m'appelle Caroline, je suis maman de deux merveilleux petits garçons qui
                                            me comblent de bonheur et m'inspirent chaque jour. Sage-femme de formation,
                                            j'ai toujours été fascinée par le monde de la périnatalité et par tout ce
                                            qui entoure l'arrivée d'un bébé dans une famille.
                                        </p>
                                        <p>
                                            Mon parcours professionnel m'a permis d'explorer de nombreux aspects de
                                            l'accompagnement à la parentalité. J'ai travaillé en médecine scolaire, puis
                                            comme infirmière pour l'ONE au sein de trois crèches pendant six ans. J'ai
                                            aussi eu la chance d'exercer en service de néonatalogie et en maternité, des
                                            lieux où se vivent les tout premiers instants, avec leur lot d'émotions
                                            intenses.
                                        </p>
                                        <p>
                                            Au fil de ces expériences, j'ai constaté à quel point les jeunes parents ont
                                            besoin d'un espace de confiance pour poser leurs questions, exprimer leurs
                                            doutes et vivre pleinement cette période unique, sans pression ni jugement.
                                            Ce constat, associé à mon envie d'offrir un cocon bienveillant aux familles,
                                            m'a menée à créer Baby Bulles.
                                        </p>
                                        <p>
                                            J'aime apprendre et me former en continu pour enrichir ma pratique. Massages
                                            bébé, portage physiologique, soins postnataux, accompagnement émotionnel…
                                            chaque nouvelle compétence me permet de mieux répondre aux besoins des
                                            parents et des bébés que je rencontre.
                                        </p>
                                        <p className="font-medium text-[#d4b5a0]">
                                            Pour moi, chaque famille est unique, et mérite une attention sur-mesure et
                                            pleine de douceur.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Mon activité de sage-femme */}
                    <div className="py-20 lg:py-32 px-8 lg:px-16 bg-gradient-to-br from-[#faf8f5] to-[#f5ede7]">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                {/* Text left */}
                                <div className="opacity-0 animate-[fadeIn_1s_ease_0.3s_forwards]">
                                    <h2 className="font-['Libre_Caslon_Text'] text-4xl lg:text-5xl font-normal text-[#2a2520] mb-8 flex items-center gap-4">
                                        <div className="w-1 h-12 bg-[#d4b5a0]" />
                                        Mon activité de sage-femme
                                    </h2>

                                    <div className="space-y-6 font-['Karla'] text-base lg:text-lg font-light text-[#5a524d] leading-relaxed">
                                        <p>
                                            Je suis sage-femme de formation et mon souhait est de vous accompagner avant, pendant et après votre grossesse. Au-delà des soins proposés au spa, je mets à votre disposition un accompagnement complet : préparation à la naissance, suivi et soins après la maternité, conseils autour de l'alimentation de l'enfant (allaitement maternel, alimentation artificielle, diversification, sevrage…), soutien concernant le sommeil et le rythme de bébé, ou encore l'entrée en crèche.
                                        </p>
                                        <p>
                                            Je suis là pour répondre à vos questions, vous rassurer et vous guider dans votre nouveau rôle de parent, tout au long des premiers jours et des mois qui suivront l'arrivée de votre enfant.
                                        </p>
                                        <p>
                                            Je vous accueille au spa sur rendez-vous, ou me déplace à domicile dans un rayon de 10 km autour de Mons.
                                        </p>
                                        <p>
                                            Le métier de sage-femme libérale, encore trop méconnu, englobe l'accompagnement prénatal, la naissance ainsi que le suivi postnatal jusqu'aux un an de votre enfant.
                                        </p>
                                        <p className="font-medium text-[#d4b5a0]">
                                            C'est avec joie et bienveillance que j'ai hâte de vous rencontrer et de partager avec vous cette étape unique : le plus beau moment d'une vie.
                                        </p>
                                    </div>
                                </div>

                                {/* Image right */}
                                <div className="opacity-0 animate-[fadeIn_1s_ease_0.5s_forwards]">
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-tr-[80px] rounded-bl-[80px] shadow-xl shadow-[#2a2520]/10">
                                        <img
                                            src="/sagefemme.jpg"
                                            alt="Caroline en consultation sage-femme"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Mon baby spa */}
                    <div className="py-20 lg:py-32 px-8 lg:px-16 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                {/* Image left */}
                                <div className="order-2 lg:order-1 opacity-0 animate-[fadeIn_1s_ease_0.3s_forwards]">
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-tl-[80px] rounded-br-[80px] shadow-xl shadow-[#2a2520]/10">
                                        <img
                                            src="/spa.jpg"
                                            alt="Baby Bulles - Le spa"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Text right */}
                                <div className="order-1 lg:order-2 opacity-0 animate-[fadeIn_1s_ease_0.5s_forwards]">
                                    <h2 className="font-['Libre_Caslon_Text'] text-4xl lg:text-5xl font-normal text-[#2a2520] mb-8 flex items-center gap-4">
                                        <div className="w-1 h-12 bg-[#d4b5a0]" />
                                        Mon baby spa
                                    </h2>

                                    <div className="space-y-6 font-['Karla'] text-base lg:text-lg font-light text-[#5a524d] leading-relaxed">
                                        <p>
                                            En avril 2021, j'ai réalisé un rêve : ouvrir Baby Bulles, un baby spa pensé comme un véritable cocon de bien-être pour les bébés, les jeunes mamans et leurs familles.
                                        </p>
                                        <p>
                                            Baby Bulles, c'est bien plus qu'un simple spa : c'est un lieu d'écoute, d'échange et de douceur, où chaque parent et chaque enfant peut se sentir accueilli tel qu'il est, sans jugement.
                                        </p>
                                        <p>
                                            Dans cet espace chaleureux, je propose différents soins et ateliers pour accompagner les familles dès la naissance :
                                        </p>

                                        <div className="pl-6 space-y-3">
                                            <div className="flex items-start gap-3">
                                                <span className="text-[#d4b5a0] mt-1">✨</span>
                                                <p>Bains enveloppés, pour offrir aux bébés une transition douce entre la vie intra-utérine et le monde extérieur.</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-[#d4b5a0] mt-1">✨</span>
                                                <p>Massages bébé, pour favoriser le lien d'attachement et offrir aux parents des outils concrets pour soulager les petits maux du quotidien.</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-[#d4b5a0] mt-1">✨</span>
                                                <p>Soins postnataux, pour prendre soin des mamans, trop souvent oubliées après l'accouchement.</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-[#d4b5a0] mt-1">✨</span>
                                                <p>Ateliers et moments de partage, pour se retrouver, poser des questions et se sentir moins seul dans cette grande aventure qu'est la parentalité.</p>
                                            </div>
                                        </div>

                                        <p className="font-medium text-[#d4b5a0]">
                                            Mon objectif ? Que chaque famille reparte de Baby Bulles avec le sourire, plus confiante, plus apaisée, et surtout pleine de beaux souvenirs à créer ensemble.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="py-20 lg:py-32 px-8 lg:px-16 bg-gradient-to-br from-[#d4b5a0]/10 to-[#c5a591]/5">
                        <div className="max-w-4xl mx-auto text-center">
                            <h3 className="font-['Libre_Caslon_Text'] text-3xl lg:text-4xl font-normal text-[#2a2520] mb-6">
                                Envie de Découvrir Baby Bulles ?
                            </h3>
                            <p className="font-['Karla'] text-lg text-[#5a524d] mb-10 max-w-2xl mx-auto">
                                Je serais ravie de vous accueillir et de répondre à toutes vos questions. Prenons contact pour échanger ensemble.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#d4b5a0] text-white font-['Karla'] text-sm tracking-[0.08em] uppercase transition-all duration-500 hover:bg-[#c5a591] hover:shadow-2xl hover:shadow-[#d4b5a0]/30 hover:-translate-y-1"
                                >
                                    Me Contacter
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>

                                <Link
                                    href="/services"
                                    className="inline-flex items-center justify-center gap-3 px-10 py-4 border-2 border-[#d4b5a0] text-[#2a2520] font-['Karla'] text-sm tracking-[0.08em] uppercase transition-all duration-500 hover:bg-white hover:border-[#c5a591] hover:-translate-y-1"
                                >
                                    Découvrir les Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
            `}</style>
        </>
    );
}