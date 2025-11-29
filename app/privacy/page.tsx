'use client';

import InternalNavbar from '@/components/InternalNavbar';
import Footer from '@/components/Footer';

export default function PolitiqueConfidentialite() {
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
                                Protection des Données
                            </span>
                            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#d4b5a0]/50 to-transparent" />
                        </div>

                        <h1 className="font-['Libre_Caslon_Text'] text-5xl lg:text-6xl font-normal text-[#2a2520] mb-6 leading-tight">
                            Politique de Confidentialité
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
                                    Chez <strong className="text-[#2a2520]">Baby Bulles</strong>, nous accordons une grande importance à la protection de vos données personnelles et au respect de votre vie privée. Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons, stockons et protégeons vos données personnelles.
                                </p>
                                <p>
                                    Cette politique est conforme au <strong className="text-[#2a2520]">Règlement Général sur la Protection des Données (RGPD)</strong> ainsi qu'à la loi belge du 30 juillet 2018 relative à la protection des personnes physiques à l'égard des traitements de données à caractère personnel.
                                </p>
                            </div>
                        </div>

                        {/* Section 1 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    1. Responsable du Traitement
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-2 ml-4">
                                <p><strong className="text-[#2a2520]">Raison sociale :</strong> Baby Bulles</p>
                                <p><strong className="text-[#2a2520]">Responsable :</strong> Caroline</p>
                                <p><strong className="text-[#2a2520]">Adresse :</strong> Boulevard Gendebien 7, 7000 Mons, Belgique</p>
                                <p><strong className="text-[#2a2520]">Email :</strong> <a href="mailto:babybullesmons@gmail.com" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300">babybullesmons@gmail.com</a></p>
                                <p><strong className="text-[#2a2520]">Téléphone :</strong> <a href="tel:+32492484497" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300">+32 492 48 44 97</a></p>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    2. Données Collectées
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-4 ml-4">
                                <p>Nous collectons les données personnelles suivantes :</p>

                                <div className="space-y-3">
                                    <div className="bg-[#faf8f5] p-4 border-l-2 border-[#d4b5a0]">
                                        <h3 className="font-medium text-[#2a2520] mb-2">Données d'identification</h3>
                                        <ul className="list-disc list-inside space-y-1 text-sm">
                                            <li>Nom et prénom</li>
                                            <li>Adresse email</li>
                                            <li>Numéro de téléphone</li>
                                            <li>Adresse postale</li>
                                        </ul>
                                    </div>

                                    <div className="bg-[#faf8f5] p-4 border-l-2 border-[#d4b5a0]">
                                        <h3 className="font-medium text-[#2a2520] mb-2">Données relatives aux soins</h3>
                                        <ul className="list-disc list-inside space-y-1 text-sm">
                                            <li>Informations sur votre bébé (prénom, date de naissance, âge)</li>
                                            <li>Informations médicales pertinentes (allergies, conditions spécifiques)</li>
                                            <li>Historique des rendez-vous et des soins</li>
                                            <li>Préférences et besoins spécifiques</li>
                                        </ul>
                                    </div>

                                    <div className="bg-[#faf8f5] p-4 border-l-2 border-[#d4b5a0]">
                                        <h3 className="font-medium text-[#2a2520] mb-2">Données de navigation</h3>
                                        <ul className="list-disc list-inside space-y-1 text-sm">
                                            <li>Adresse IP</li>
                                            <li>Type de navigateur</li>
                                            <li>Pages visitées</li>
                                            <li>Données de cookies (si consentement donné)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    3. Finalités du Traitement
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-3 ml-4">
                                <p>Vos données personnelles sont collectées et traitées pour les finalités suivantes :</p>
                                <ul className="space-y-2 list-none">
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-[#d4b5a0] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Gestion des prises de rendez-vous et des réservations</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-[#d4b5a0] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Prestation de nos services de spa pour bébés</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-[#d4b5a0] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Communication avec vous (confirmations, rappels, informations)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-[#d4b5a0] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Gestion de la relation client</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-[#d4b5a0] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Facturation et comptabilité</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-[#d4b5a0] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Amélioration de nos services et de notre site web</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-[#d4b5a0] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Envoi de newsletters (avec votre consentement préalable)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-[#d4b5a0] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Respect des obligations légales et réglementaires</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    4. Base Légale du Traitement
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-4 ml-4">
                                <p>Le traitement de vos données personnelles repose sur les bases légales suivantes :</p>
                                <ul className="space-y-2 list-none">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#d4b5a0] rounded-full mt-2 flex-shrink-0" />
                                        <span><strong className="text-[#2a2520]">Exécution d'un contrat :</strong> pour la gestion de vos rendez-vous et la prestation de nos services</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#d4b5a0] rounded-full mt-2 flex-shrink-0" />
                                        <span><strong className="text-[#2a2520]">Consentement :</strong> pour l'envoi de newsletters et communications marketing</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#d4b5a0] rounded-full mt-2 flex-shrink-0" />
                                        <span><strong className="text-[#2a2520]">Intérêt légitime :</strong> pour l'amélioration de nos services et la sécurité du site</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#d4b5a0] rounded-full mt-2 flex-shrink-0" />
                                        <span><strong className="text-[#2a2520]">Obligation légale :</strong> pour la comptabilité et le respect des obligations fiscales</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    5. Destinataires des Données
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-4 ml-4">
                                <p>Vos données personnelles sont destinées uniquement :</p>
                                <ul className="space-y-2 list-none">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#d4b5a0] rounded-full mt-2 flex-shrink-0" />
                                        <span>Au personnel autorisé de Baby Bulles</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#d4b5a0] rounded-full mt-2 flex-shrink-0" />
                                        <span>À nos prestataires techniques (hébergement, maintenance du site web)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#d4b5a0] rounded-full mt-2 flex-shrink-0" />
                                        <span>Aux autorités compétentes en cas d'obligation légale</span>
                                    </li>
                                </ul>
                                <p className="mt-4">
                                    Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers à des fins commerciales.
                                </p>
                            </div>
                        </div>

                        {/* Section 6 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    6. Durée de Conservation
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-4 ml-4">
                                <p>Nous conservons vos données personnelles pendant les durées suivantes :</p>
                                <ul className="space-y-2 list-none">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#d4b5a0] rounded-full mt-2 flex-shrink-0" />
                                        <span><strong className="text-[#2a2520]">Données client :</strong> pendant la durée de la relation commerciale et 3 ans après le dernier contact</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#d4b5a0] rounded-full mt-2 flex-shrink-0" />
                                        <span><strong className="text-[#2a2520]">Données de santé :</strong> conformément aux obligations légales applicables aux sages-femmes (minimum 30 ans)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#d4b5a0] rounded-full mt-2 flex-shrink-0" />
                                        <span><strong className="text-[#2a2520]">Données de facturation :</strong> 7 ans conformément aux obligations comptables et fiscales</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#d4b5a0] rounded-full mt-2 flex-shrink-0" />
                                        <span><strong className="text-[#2a2520]">Données marketing :</strong> 3 ans à compter du dernier contact ou jusqu'au retrait du consentement</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 7 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    7. Vos Droits
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-4 ml-4">
                                <p>Conformément au RGPD, vous disposez des droits suivants :</p>

                                <div className="space-y-3">
                                    <div className="bg-[#faf8f5] p-4 border-l-2 border-[#d4b5a0]">
                                        <h3 className="font-medium text-[#2a2520] mb-2">✓ Droit d'accès</h3>
                                        <p className="text-sm">Vous pouvez obtenir la confirmation que vos données sont traitées et accéder à vos données personnelles.</p>
                                    </div>

                                    <div className="bg-[#faf8f5] p-4 border-l-2 border-[#d4b5a0]">
                                        <h3 className="font-medium text-[#2a2520] mb-2">✓ Droit de rectification</h3>
                                        <p className="text-sm">Vous pouvez demander la correction de données inexactes ou incomplètes.</p>
                                    </div>

                                    <div className="bg-[#faf8f5] p-4 border-l-2 border-[#d4b5a0]">
                                        <h3 className="font-medium text-[#2a2520] mb-2">✓ Droit à l'effacement (« droit à l'oubli »)</h3>
                                        <p className="text-sm">Vous pouvez demander la suppression de vos données dans certaines conditions.</p>
                                    </div>

                                    <div className="bg-[#faf8f5] p-4 border-l-2 border-[#d4b5a0]">
                                        <h3 className="font-medium text-[#2a2520] mb-2">✓ Droit à la limitation du traitement</h3>
                                        <p className="text-sm">Vous pouvez demander la limitation du traitement de vos données dans certains cas.</p>
                                    </div>

                                    <div className="bg-[#faf8f5] p-4 border-l-2 border-[#d4b5a0]">
                                        <h3 className="font-medium text-[#2a2520] mb-2">✓ Droit à la portabilité</h3>
                                        <p className="text-sm">Vous pouvez recevoir vos données dans un format structuré et les transmettre à un autre responsable.</p>
                                    </div>

                                    <div className="bg-[#faf8f5] p-4 border-l-2 border-[#d4b5a0]">
                                        <h3 className="font-medium text-[#2a2520] mb-2">✓ Droit d'opposition</h3>
                                        <p className="text-sm">Vous pouvez vous opposer au traitement de vos données, notamment à des fins de marketing direct.</p>
                                    </div>

                                    <div className="bg-[#faf8f5] p-4 border-l-2 border-[#d4b5a0]">
                                        <h3 className="font-medium text-[#2a2520] mb-2">✓ Droit de retirer votre consentement</h3>
                                        <p className="text-sm">Vous pouvez retirer votre consentement à tout moment pour les traitements basés sur celui-ci.</p>
                                    </div>

                                    <div className="bg-[#faf8f5] p-4 border-l-2 border-[#d4b5a0]">
                                        <h3 className="font-medium text-[#2a2520] mb-2">✓ Droit d'introduire une réclamation</h3>
                                        <p className="text-sm">Vous pouvez introduire une réclamation auprès de l'Autorité de Protection des Données (APD) belge.</p>
                                    </div>
                                </div>

                                <p className="mt-6">
                                    Pour exercer vos droits, vous pouvez nous contacter :
                                </p>
                                <ul className="space-y-2 list-none">
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-[#d4b5a0] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span>Par email : <a href="mailto:babybullesmons@gmail.com" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300">babybullesmons@gmail.com</a></span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-[#d4b5a0] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span>Par téléphone : <a href="tel:+32492484497" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300">+32 492 48 44 97</a></span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-[#d4b5a0] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                        <span>Par courrier : Boulevard Gendebien 7, 7000 Mons, Belgique</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 8 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    8. Sécurité des Données
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-4 ml-4">
                                <p>
                                    Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la destruction accidentelle ou illicite, la perte accidentelle, l'altération, la diffusion ou l'accès non autorisé.
                                </p>
                                <p>
                                    Ces mesures incluent notamment :
                                </p>
                                <ul className="space-y-2 list-none">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#d4b5a0] rounded-full mt-2 flex-shrink-0" />
                                        <span>Le chiffrement des données sensibles</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#d4b5a0] rounded-full mt-2 flex-shrink-0" />
                                        <span>L'utilisation de protocoles sécurisés (HTTPS)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#d4b5a0] rounded-full mt-2 flex-shrink-0" />
                                        <span>La limitation de l'accès aux données aux seules personnes autorisées</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#d4b5a0] rounded-full mt-2 flex-shrink-0" />
                                        <span>La sauvegarde régulière des données</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#d4b5a0] rounded-full mt-2 flex-shrink-0" />
                                        <span>La formation du personnel à la protection des données</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 9 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    9. Cookies et Technologies Similaires
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-4 ml-4">
                                <p>
                                    Notre site utilise des cookies pour améliorer votre expérience de navigation et analyser le trafic. Pour plus d'informations sur notre utilisation des cookies, consultez notre <a href="/cookies" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300 underline">Politique relative aux Cookies</a>.
                                </p>
                            </div>
                        </div>

                        {/* Section 10 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    10. Modifications de la Politique
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed ml-4">
                                <p>
                                    Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour. Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques en matière de protection des données.
                                </p>
                            </div>
                        </div>

                        {/* Section 11 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    11. Contact
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed ml-4">
                                <p>
                                    Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles, vous pouvez nous contacter :
                                </p>
                                <div className="mt-4 space-y-2">
                                    <p><strong className="text-[#2a2520]">Email :</strong> <a href="mailto:babybullesmons@gmail.com" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300">babybullesmons@gmail.com</a></p>
                                    <p><strong className="text-[#2a2520]">Téléphone :</strong> <a href="tel:+32492484497" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300">+32 492 48 44 97</a></p>
                                    <p><strong className="text-[#2a2520]">Adresse :</strong> Boulevard Gendebien 7, 7000 Mons, Belgique</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* APD Info Box */}
                    <div className="mt-16 bg-gradient-to-br from-[#faf8f5] to-[#f5ede7] p-8 border-l-4 border-[#d4b5a0]">
                        <h3 className="font-['Libre_Caslon_Text'] text-xl font-normal text-[#2a2520] mb-4">
                            Autorité de Protection des Données (Belgique)
                        </h3>
                        <div className="font-['Karla'] text-sm text-[#5a524d] space-y-2">
                            <p>Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de l'Autorité de Protection des Données :</p>
                            <p><strong className="text-[#2a2520]">Adresse :</strong> Rue de la Presse 35, 1000 Bruxelles</p>
                            <p><strong className="text-[#2a2520]">Téléphone :</strong> +32 (0)2 274 48 00</p>
                            <p><strong className="text-[#2a2520]">Email :</strong> contact@apd-gba.be</p>
                            <p><strong className="text-[#2a2520]">Site web :</strong> <a href="https://www.autoriteprotectiondonnees.be" target="_blank" rel="noopener noreferrer" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300">www.autoriteprotectiondonnees.be</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}