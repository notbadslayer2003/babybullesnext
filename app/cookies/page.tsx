'use client';

import InternalNavbar from '@/components/InternalNavbar';
import Footer from '@/components/Footer';

export default function Cookies() {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Karla:wght@300;400;500&display=swap');
            `}</style>

            <InternalNavbar />

            <section className="relative min-h-screen py-20 lg:py-32 bg-gradient-to-br from-[#faf8f5] via-[#f8f6f3] to-[#f5ede7]">
                {/* Background decorative elements */}
                <div className="absolute top-20 left-0 w-96 h-96 bg-[#d4b5a0]/5 blur-3xl rounded-full" />
                <div className="absolute bottom-40 right-0 w-80 h-80 bg-[#d4b5a0]/3 blur-3xl rounded-full" />

                <div className="relative max-w-4xl mx-auto px-8 lg:px-16">
                    {/* Header */}
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="font-['Karla'] text-[0.7rem] tracking-[0.3em] uppercase text-[#9d8b7e]">
                                Gestion des Cookies
                            </span>
                            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#d4b5a0]/50 to-transparent" />
                        </div>

                        <h1 className="font-['Libre_Caslon_Text'] text-5xl lg:text-6xl font-normal text-[#2a2520] mb-6 leading-tight">
                            Politique relative<br />aux Cookies
                        </h1>

                        <p className="font-['Karla'] text-lg text-[#5a524d] font-light">
                            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </p>
                    </div>

                    {/* Content */}
                    <div className="bg-white shadow-lg shadow-[#2a2520]/5 p-8 lg:p-12 space-y-10">

                        {/* Introduction */}
                        <div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-4">
                                <p>
                                    Cette politique explique comment <strong className="text-[#2a2520]">Baby Bulles</strong> utilise les cookies et technologies similaires sur notre site web. En utilisant notre site, vous acceptez l'utilisation de cookies conformément à cette politique.
                                </p>
                            </div>
                        </div>

                        {/* Section 1 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    1. Qu'est-ce qu'un Cookie ?
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-4 ml-4">
                                <p>
                                    Un cookie est un petit fichier texte qui est placé sur votre ordinateur, tablette ou smartphone lorsque vous visitez un site web. Les cookies permettent au site de reconnaître votre appareil lors de visites ultérieures.
                                </p>
                                <p>
                                    Les cookies peuvent être utilisés pour diverses finalités, comme améliorer votre expérience de navigation, mémoriser vos préférences, analyser le trafic du site ou diffuser des publicités ciblées.
                                </p>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    2. Types de Cookies Utilisés
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-4 ml-4">
                                <p>Nous utilisons les types de cookies suivants sur notre site :</p>

                                <div className="space-y-4">
                                    <div className="bg-[#faf8f5] p-5 border-l-4 border-[#d4b5a0]">
                                        <h3 className="font-['Libre_Caslon_Text'] text-lg font-normal text-[#2a2520] mb-3">
                                            Cookies Strictement Nécessaires
                                        </h3>
                                        <p className="text-sm mb-3">
                                            Ces cookies sont essentiels pour le fonctionnement du site. Ils vous permettent de naviguer sur le site et d'utiliser ses fonctionnalités essentielles.
                                        </p>
                                        <div className="text-sm space-y-1">
                                            <p><strong className="text-[#2a2520]">Finalité :</strong> Sécurité, authentification, fonctionnement du site</p>
                                            <p><strong className="text-[#2a2520]">Durée :</strong> Session ou persistants</p>
                                            <p><strong className="text-[#2a2520]">Consentement requis :</strong> Non (nécessaires au fonctionnement)</p>
                                        </div>
                                    </div>

                                    <div className="bg-[#faf8f5] p-5 border-l-4 border-[#d4b5a0]">
                                        <h3 className="font-['Libre_Caslon_Text'] text-lg font-normal text-[#2a2520] mb-3">
                                            Cookies de Performance et d'Analyse
                                        </h3>
                                        <p className="text-sm mb-3">
                                            Ces cookies collectent des informations sur la façon dont les visiteurs utilisent notre site, comme les pages les plus visitées ou les messages d'erreur reçus.
                                        </p>
                                        <div className="text-sm space-y-1">
                                            <p><strong className="text-[#2a2520]">Exemples :</strong> Google Analytics</p>
                                            <p><strong className="text-[#2a2520]">Finalité :</strong> Amélioration du site, analyse du trafic</p>
                                            <p><strong className="text-[#2a2520]">Durée :</strong> Jusqu'à 2 ans</p>
                                            <p><strong className="text-[#2a2520]">Consentement requis :</strong> Oui</p>
                                        </div>
                                    </div>

                                    <div className="bg-[#faf8f5] p-5 border-l-4 border-[#d4b5a0]">
                                        <h3 className="font-['Libre_Caslon_Text'] text-lg font-normal text-[#2a2520] mb-3">
                                            Cookies de Fonctionnalité
                                        </h3>
                                        <p className="text-sm mb-3">
                                            Ces cookies permettent au site de mémoriser vos choix (comme votre langue ou votre région) et de fournir des fonctionnalités améliorées et personnalisées.
                                        </p>
                                        <div className="text-sm space-y-1">
                                            <p><strong className="text-[#2a2520]">Finalité :</strong> Personnalisation, mémorisation des préférences</p>
                                            <p><strong className="text-[#2a2520]">Durée :</strong> Variable (jusqu'à 1 an)</p>
                                            <p><strong className="text-[#2a2520]">Consentement requis :</strong> Oui</p>
                                        </div>
                                    </div>

                                    <div className="bg-[#faf8f5] p-5 border-l-4 border-[#d4b5a0]">
                                        <h3 className="font-['Libre_Caslon_Text'] text-lg font-normal text-[#2a2520] mb-3">
                                            Cookies de Réseaux Sociaux
                                        </h3>
                                        <p className="text-sm mb-3">
                                            Ces cookies sont utilisés pour vous permettre de partager du contenu avec vos amis et réseaux via les réseaux sociaux.
                                        </p>
                                        <div className="text-sm space-y-1">
                                            <p><strong className="text-[#2a2520]">Exemples :</strong> Facebook, Instagram</p>
                                            <p><strong className="text-[#2a2520]">Finalité :</strong> Partage sur les réseaux sociaux</p>
                                            <p><strong className="text-[#2a2520]">Durée :</strong> Variable selon le réseau</p>
                                            <p><strong className="text-[#2a2520]">Consentement requis :</strong> Oui</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    3. Cookies Tiers
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-4 ml-4">
                                <p>
                                    Nous pouvons utiliser des services tiers qui déposent des cookies sur votre appareil. Ces services incluent :
                                </p>
                                <ul className="space-y-2 list-none">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#d4b5a0] rounded-full mt-2 flex-shrink-0" />
                                        <div>
                                            <strong className="text-[#2a2520]">Google Analytics :</strong>
                                            <span className="text-sm block mt-1">Pour analyser le trafic et l'utilisation du site. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300 underline">Politique de confidentialité Google</a></span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#d4b5a0] rounded-full mt-2 flex-shrink-0" />
                                        <div>
                                            <strong className="text-[#2a2520]">Facebook Pixel :</strong>
                                            <span className="text-sm block mt-1">Pour mesurer l'efficacité de nos campagnes publicitaires. <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300 underline">Politique de confidentialité Facebook</a></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    4. Gestion de vos Préférences
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-4 ml-4">
                                <p>
                                    Vous pouvez à tout moment modifier vos préférences concernant l'utilisation des cookies. Voici comment :
                                </p>

                                <div className="space-y-4">
                                    <div className="bg-[#faf8f5] p-5 border-l-2 border-[#d4b5a0]">
                                        <h3 className="font-medium text-[#2a2520] mb-2">Via notre bandeau cookies</h3>
                                        <p className="text-sm">
                                            Lors de votre première visite, un bandeau vous permet d'accepter ou de refuser les cookies non essentiels. Vous pouvez modifier vos choix à tout moment en cliquant sur le lien "Gérer les cookies" en bas de page.
                                        </p>
                                    </div>

                                    <div className="bg-[#faf8f5] p-5 border-l-2 border-[#d4b5a0]">
                                        <h3 className="font-medium text-[#2a2520] mb-2">Via votre navigateur</h3>
                                        <p className="text-sm mb-3">
                                            Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour être informé lorsqu'un cookie est déposé :
                                        </p>
                                        <ul className="text-sm space-y-1 list-disc list-inside">
                                            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300">Google Chrome</a></li>
                                            <li><a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" rel="noopener noreferrer" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300">Mozilla Firefox</a></li>
                                            <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300">Safari</a></li>
                                            <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300">Microsoft Edge</a></li>
                                        </ul>
                                    </div>

                                    <div className="bg-[#faf8f5] p-5 border-l-2 border-[#d4b5a0]">
                                        <h3 className="font-medium text-[#2a2520] mb-2">Outils de désactivation</h3>
                                        <p className="text-sm mb-2">
                                            Vous pouvez également utiliser des plateformes de gestion des préférences publicitaires :
                                        </p>
                                        <ul className="text-sm space-y-1 list-disc list-inside">
                                            <li><a href="https://www.youronlinechoices.com/fr/" target="_blank" rel="noopener noreferrer" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300">Your Online Choices</a></li>
                                            <li><a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300">Network Advertising Initiative</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 bg-[#fff8f0] border border-[#d4b5a0]/20 rounded">
                                    <p className="text-sm">
                                        <strong className="text-[#2a2520]">⚠️ Note importante :</strong> Le refus des cookies peut affecter certaines fonctionnalités du site et votre expérience de navigation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    5. Durée de Conservation
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-4 ml-4">
                                <p>
                                    La durée de conservation des cookies varie selon leur type et leur finalité :
                                </p>
                                <ul className="space-y-2 list-none">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#d4b5a0] rounded-full mt-2 flex-shrink-0" />
                                        <span><strong className="text-[#2a2520]">Cookies de session :</strong> Supprimés à la fermeture de votre navigateur</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#d4b5a0] rounded-full mt-2 flex-shrink-0" />
                                        <span><strong className="text-[#2a2520]">Cookies persistants :</strong> Conservés jusqu'à 24 mois maximum selon leur finalité</span>
                                    </li>
                                </ul>
                                <p className="mt-4">
                                    Votre consentement pour les cookies non essentiels est valable 13 mois. Au-delà, il vous sera redemandé.
                                </p>
                            </div>
                        </div>

                        {/* Section 6 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    6. Protection de vos Données
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-4 ml-4">
                                <p>
                                    Les données collectées via les cookies sont traitées conformément à notre <a href="/politique-confidentialite" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300 underline">Politique de Confidentialité</a> et au RGPD.
                                </p>
                                <p>
                                    Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre tout accès, modification, divulgation ou destruction non autorisés.
                                </p>
                            </div>
                        </div>

                        {/* Section 7 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    7. Modifications de cette Politique
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed ml-4">
                                <p>
                                    Nous nous réservons le droit de modifier cette politique relative aux cookies à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour. Nous vous encourageons à consulter régulièrement cette page.
                                </p>
                            </div>
                        </div>

                        {/* Section 8 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    8. Contact
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed ml-4">
                                <p className="mb-4">
                                    Pour toute question concernant notre utilisation des cookies, vous pouvez nous contacter :
                                </p>
                                <div className="space-y-2">
                                    <p><strong className="text-[#2a2520]">Email :</strong> <a href="mailto:babybullesmons@gmail.com" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300">babybullesmons@gmail.com</a></p>
                                    <p><strong className="text-[#2a2520]">Téléphone :</strong> <a href="tel:+32492484497" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300">+32 492 48 44 97</a></p>
                                    <p><strong className="text-[#2a2520]">Adresse :</strong> Boulevard Gendebien 7, 7000 Mons, Belgique</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA gérer les cookies */}
                    <div className="mt-16 text-center">
                        <div className="inline-block bg-gradient-to-br from-[#faf8f5] to-[#f5ede7] p-8 border-l-4 border-[#d4b5a0]">
                            <h3 className="font-['Libre_Caslon_Text'] text-xl font-normal text-[#2a2520] mb-4">
                                Gérer vos Préférences Cookies
                            </h3>
                            <p className="font-['Karla'] text-sm text-[#5a524d] mb-6">
                                Personnalisez vos choix concernant les cookies
                            </p>
                            <button
                                onClick={() => {
                                    // Fonction à implémenter avec le gestionnaire de cookies
                                    alert('Fonctionnalité à venir - Ouvrir le panneau de gestion des cookies');
                                }}
                                className="inline-flex items-center gap-2 px-8 py-3 bg-[#d4b5a0] text-white font-['Karla'] text-sm tracking-[0.08em] uppercase transition-all duration-300 hover:bg-[#c5a591] hover:shadow-xl hover:-translate-y-1"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Gérer mes Cookies
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}