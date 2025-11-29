'use client';

import InternalNavbar from '@/components/InternalNavbar';
import Footer from '@/components/Footer';

export default function MentionsLegales() {
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
                                Informations Légales
                            </span>
                            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#d4b5a0]/50 to-transparent" />
                        </div>

                        <h1 className="font-['Libre_Caslon_Text'] text-5xl lg:text-6xl font-normal text-[#2a2520] mb-6 leading-tight">
                            Mentions Légales
                        </h1>

                        <p className="font-['Karla'] text-lg text-[#5a524d] font-light">
                            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </p>
                    </div>

                    {/* Content */}
                    <div className="bg-white shadow-lg shadow-[#2a2520]/5 p-8 lg:p-12 space-y-10">

                        {/* Section 1 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    Éditeur du Site
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-2 ml-4">
                                <p><strong className="text-[#2a2520]">Raison sociale :</strong> Baby Bulles</p>
                                <p><strong className="text-[#2a2520]">Forme juridique :</strong> Entreprise individuelle</p>
                                <p><strong className="text-[#2a2520]">Responsable :</strong> Caroline (Sage-femme)</p>
                                <p><strong className="text-[#2a2520]">Adresse :</strong> Boulevard Gendebien 7, 7000 Mons, Belgique</p>
                                <p><strong className="text-[#2a2520]">Email :</strong> <a href="mailto:babybullesmons@gmail.com" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300">babybullesmons@gmail.com</a></p>
                                <p><strong className="text-[#2a2520]">Téléphone :</strong> <a href="tel:+32492484497" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300">+32 492 48 44 97</a></p>
                                <p><strong className="text-[#2a2520]">Numéro d'entreprise :</strong> [À compléter]</p>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    Hébergement du Site
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-2 ml-4">
                                <p><strong className="text-[#2a2520]">Hébergeur :</strong> [Nom de l'hébergeur]</p>
                                <p><strong className="text-[#2a2520]">Adresse :</strong> [Adresse complète de l'hébergeur]</p>
                                <p><strong className="text-[#2a2520]">Contact :</strong> [Contact de l'hébergeur]</p>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    Propriété Intellectuelle
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-4 ml-4">
                                <p>
                                    L'ensemble de ce site relève de la législation belge et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                                </p>
                                <p>
                                    La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                                </p>
                                <p>
                                    Les marques et logos figurant sur le site sont des marques déposées. Toute reproduction totale ou partielle de ces marques ou de ces logos effectuées à partir des éléments du site sans l'autorisation expresse de Baby Bulles est donc prohibée.
                                </p>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    Protection des Données Personnelles
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-4 ml-4">
                                <p>
                                    Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi belge du 30 juillet 2018 relative à la protection des personnes physiques à l'égard des traitements de données à caractère personnel, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                                </p>
                                <p>
                                    Pour exercer ces droits, vous pouvez nous contacter par email à <a href="mailto:babybullesmons@gmail.com" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300">babybullesmons@gmail.com</a> ou par courrier à l'adresse : Boulevard Gendebien 7, 7000 Mons, Belgique.
                                </p>
                                <p>
                                    Pour plus d'informations, consultez notre <a href="/politique-confidentialite" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300 underline">Politique de Confidentialité</a>.
                                </p>
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    Responsabilité
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-4 ml-4">
                                <p>
                                    Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
                                </p>
                                <p>
                                    Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, merci de bien vouloir le signaler par email à <a href="mailto:babybullesmons@gmail.com" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300">babybullesmons@gmail.com</a>, en décrivant le problème de la manière la plus précise possible.
                                </p>
                                <p>
                                    Baby Bulles décline toute responsabilité en cas de dommage direct ou indirect causé aux utilisateurs lors de l'utilisation du site, et découlant soit de l'impossibilité d'accès, soit d'un défaut de fonctionnement de ce site.
                                </p>
                            </div>
                        </div>

                        {/* Section 6 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    Cookies
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-4 ml-4">
                                <p>
                                    Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de cookies.
                                </p>
                                <p>
                                    Pour en savoir plus sur notre utilisation des cookies, consultez notre <a href="/cookies" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300 underline">Politique relative aux Cookies</a>.
                                </p>
                            </div>
                        </div>

                        {/* Section 7 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    Droit Applicable
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed ml-4">
                                <p>
                                    Les présentes mentions légales sont régies par le droit belge. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux belges conformément aux règles de compétence en vigueur.
                                </p>
                            </div>
                        </div>

                        {/* Section 8 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    Crédits
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-2 ml-4">
                                <p><strong className="text-[#2a2520]">Conception et développement :</strong> WebDeveloppement.Style</p>
                                <p><strong className="text-[#2a2520]">Photographies :</strong> Baby Bulles (sauf mention contraire)</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact CTA */}
                    <div className="mt-16 text-center">
                        <div className="inline-block bg-gradient-to-br from-[#faf8f5] to-[#f5ede7] p-8 border-l-4 border-[#d4b5a0]">
                            <p className="font-['Karla'] text-base text-[#5a524d] mb-4">
                                Une question concernant nos mentions légales ?
                            </p>
                            <a
                                href="mailto:babybullesmons@gmail.com"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-[#d4b5a0] text-white font-['Karla'] text-sm tracking-[0.08em] uppercase transition-all duration-300 hover:bg-[#c5a591] hover:shadow-xl hover:-translate-y-1"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Nous Contacter
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}