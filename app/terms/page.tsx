'use client';

import InternalNavbar from '@/components/InternalNavbar';
import Footer from '@/components/Footer';

export default function CGV() {
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
                                Conditions de Vente
                            </span>
                            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#d4b5a0]/50 to-transparent" />
                        </div>

                        <h1 className="font-['Libre_Caslon_Text'] text-5xl lg:text-6xl font-normal text-[#2a2520] mb-6 leading-tight">
                            Conditions Générales<br />de Vente
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
                                    Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre <strong className="text-[#2a2520]">Baby Bulles</strong> et ses clients pour la prestation de services de spa et bien-être pour bébés et mamans.
                                </p>
                                <p>
                                    Toute commande ou réservation de prestation implique l'acceptation sans réserve des présentes conditions générales de vente.
                                </p>
                            </div>
                        </div>

                        {/* Section 1 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    1. Identification du Prestataire
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-2 ml-4">
                                <p><strong className="text-[#2a2520]">Dénomination :</strong> Baby Bulles</p>
                                <p><strong className="text-[#2a2520]">Forme juridique :</strong> Entreprise individuelle</p>
                                <p><strong className="text-[#2a2520]">Responsable :</strong> Caroline (Sage-femme diplômée)</p>
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
                                    2. Services Proposés
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-4 ml-4">
                                <p>Baby Bulles propose les prestations suivantes :</p>
                                <div className="space-y-3">
                                    <div className="bg-[#faf8f5] p-4 border-l-2 border-[#d4b5a0]">
                                        <h3 className="font-medium text-[#2a2520] mb-2">Pour les bébés</h3>
                                        <ul className="text-sm space-y-1 list-disc list-inside">
                                            <li>Bain enveloppant emmailloté</li>
                                            <li>Hydrothérapie bébé</li>
                                            <li>Massage bébé</li>
                                            <li>Réflexologie plantaire pédiatrique</li>
                                            <li>Baby yoga</li>
                                        </ul>
                                    </div>
                                    <div className="bg-[#faf8f5] p-4 border-l-2 border-[#d4b5a0]">
                                        <h3 className="font-medium text-[#2a2520] mb-2">Pour les mamans</h3>
                                        <ul className="text-sm space-y-1 list-disc list-inside">
                                            <li>Réflexologie plantaire</li>
                                            <li>Massage femme enceinte</li>
                                            <li>Massage postnatal et harmonisant</li>
                                            <li>Massage métamorphique</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="mt-4">
                                    Les descriptions détaillées de chaque prestation sont disponibles sur notre site web et peuvent être consultées avant toute réservation.
                                </p>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    3. Réservations et Rendez-vous
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-4 ml-4">
                                <p>
                                    <strong className="text-[#2a2520]">3.1. Modalités de réservation :</strong> Les réservations peuvent être effectuées par téléphone au +32 492 48 44 97, par email à babybullesmons@gmail.com ou via le formulaire de contact sur notre site web.
                                </p>
                                <p>
                                    <strong className="text-[#2a2520]">3.2. Confirmation :</strong> Toute réservation fera l'objet d'une confirmation par email ou téléphone. La prestation est définitivement réservée à réception de cette confirmation.
                                </p>
                                <p>
                                    <strong className="text-[#2a2520]">3.3. Informations requises :</strong> Lors de la réservation, le client devra communiquer les informations nécessaires à la prestation (nom, prénom, coordonnées, informations sur le bébé, éventuelles contre-indications médicales).
                                </p>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    4. Tarifs et Paiement
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-4 ml-4">
                                <p>
                                    <strong className="text-[#2a2520]">4.1. Tarifs :</strong> Les tarifs de nos prestations sont indiqués en euros (€), toutes taxes comprises. Ils sont disponibles sur notre site web, par téléphone ou sur place. Baby Bulles se réserve le droit de modifier ses tarifs à tout moment, mais les prestations seront facturées sur la base des tarifs en vigueur au moment de la réservation.
                                </p>
                                <p>
                                    <strong className="text-[#2a2520]">4.2. Modalités de paiement :</strong> Le paiement s'effectue sur place, à l'issue de la prestation, par :
                                </p>
                                <ul className="space-y-2 list-none ml-4">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#d4b5a0] rounded-full mt-2 flex-shrink-0" />
                                        <span>Espèces</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#d4b5a0] rounded-full mt-2 flex-shrink-0" />
                                        <span>Carte bancaire</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#d4b5a0] rounded-full mt-2 flex-shrink-0" />
                                        <span>Virement bancaire (sous réserve d'accord préalable)</span>
                                    </li>
                                </ul>
                                <p>
                                    <strong className="text-[#2a2520]">4.3. Bons cadeaux :</strong> Baby Bulles propose des bons cadeaux valables 1 an à compter de leur date d'émission. Ils sont utilisables pour toutes nos prestations et ne peuvent être ni remboursés ni échangés contre de l'argent.
                                </p>
                                <p>
                                    <strong className="text-[#2a2520]">4.4. Facture :</strong> Une facture sera remise au client sur demande.
                                </p>
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    5. Annulation et Modification
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-4 ml-4">
                                <p>
                                    <strong className="text-[#2a2520]">5.1. Par le client :</strong>
                                </p>
                                <ul className="space-y-2 list-none ml-4">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#d4b5a0] rounded-full mt-2 flex-shrink-0" />
                                        <span>Toute annulation ou modification doit être notifiée au moins <strong className="text-[#2a2520]">24 heures</strong> avant l'heure prévue du rendez-vous</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#d4b5a0] rounded-full mt-2 flex-shrink-0" />
                                        <span>Une annulation dans les délais permet de reporter la séance sans frais</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#d4b5a0] rounded-full mt-2 flex-shrink-0" />
                                        <span>En cas d'annulation tardive (moins de 24h) ou d'absence non justifiée, la prestation sera due à hauteur de <strong className="text-[#2a2520]">50%</strong> de son tarif</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#d4b5a0] rounded-full mt-2 flex-shrink-0" />
                                        <span>Les cas de force majeure ou de maladie (justificatif médical requis) ne donnent pas lieu à facturation</span>
                                    </li>
                                </ul>
                                <p>
                                    <strong className="text-[#2a2520]">5.2. Par Baby Bulles :</strong> Baby Bulles se réserve le droit d'annuler ou de reporter un rendez-vous en cas de force majeure, de maladie du praticien ou de circonstances exceptionnelles. Le client sera prévenu dans les meilleurs délais et pourra reprogrammer sa séance sans frais supplémentaires.
                                </p>
                            </div>
                        </div>

                        {/* Section 6 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    6. Contre-indications et Responsabilités
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-4 ml-4">
                                <p>
                                    <strong className="text-[#2a2520]">6.1. Informations médicales :</strong> Le client s'engage à communiquer toute information médicale pertinente concernant son bébé ou lui-même (allergies, pathologies, traitements en cours, etc.).
                                </p>
                                <p>
                                    <strong className="text-[#2a2520]">6.2. Contre-indications :</strong> Certaines prestations peuvent être contre-indiquées dans certains cas. Le praticien se réserve le droit de refuser une prestation si l'état de santé du client ou du bébé le justifie.
                                </p>
                                <p>
                                    <strong className="text-[#2a2520]">6.3. Nature des prestations :</strong> Les prestations proposées par Baby Bulles relèvent du bien-être et de la détente. Elles ne constituent en aucun cas un acte médical et ne se substituent pas à un suivi médical approprié.
                                </p>
                                <p>
                                    <strong className="text-[#2a2520]">6.4. Responsabilité :</strong> Baby Bulles s'engage à apporter le plus grand soin à la réalisation de ses prestations. Notre responsabilité ne pourra être engagée qu'en cas de faute prouvée. Le client est responsable de la surveillance de son bébé pendant toute la durée de la prestation.
                                </p>
                            </div>
                        </div>

                        {/* Section 7 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    7. Hygiène et Sécurité
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-4 ml-4">
                                <p>
                                    Baby Bulles s'engage à respecter les normes d'hygiène et de sécurité les plus strictes :
                                </p>
                                <ul className="space-y-2 list-none">
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-[#d4b5a0] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Nettoyage et désinfection systématiques du matériel entre chaque séance</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-[#d4b5a0] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Utilisation de produits hypoallergéniques et adaptés aux bébés</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-[#d4b5a0] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Contrôle rigoureux de la température de l'eau et de l'ambiance</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-[#d4b5a0] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Respect des protocoles sanitaires en vigueur</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 8 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    8. Protection des Données Personnelles
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-4 ml-4">
                                <p>
                                    Les données personnelles collectées lors de la réservation sont traitées conformément au RGPD et à notre <a href="/politique-confidentialite" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300 underline">Politique de Confidentialité</a>.
                                </p>
                                <p>
                                    Vous disposez d'un droit d'accès, de rectification, d'opposition et de suppression de vos données personnelles. Pour exercer ces droits, contactez-nous à <a href="mailto:babybullesmons@gmail.com" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300">babybullesmons@gmail.com</a>.
                                </p>
                            </div>
                        </div>

                        {/* Section 9 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    9. Photographies et Témoignages
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-4 ml-4">
                                <p>
                                    Baby Bulles peut être amené à prendre des photographies pendant les séances à des fins de communication (site web, réseaux sociaux, supports promotionnels).
                                </p>
                                <p>
                                    Ces photographies ne seront prises et utilisées qu'avec le consentement écrit préalable des parents. Ce consentement peut être retiré à tout moment.
                                </p>
                            </div>
                        </div>

                        {/* Section 10 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    10. Droit de Rétractation
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed ml-4">
                                <p>
                                    Conformément à l'article VI.53 du Code de droit économique belge, le droit de rétractation de 14 jours ne s'applique pas aux prestations de services dont l'exécution a commencé, avec l'accord du consommateur, avant la fin du délai de rétractation.
                                </p>
                            </div>
                        </div>

                        {/* Section 11 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    11. Réclamations et Litiges
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed space-y-4 ml-4">
                                <p>
                                    <strong className="text-[#2a2520]">11.1. Réclamations :</strong> Toute réclamation doit être adressée par email à <a href="mailto:babybullesmons@gmail.com" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300">babybullesmons@gmail.com</a> ou par courrier à Boulevard Gendebien 7, 7000 Mons, dans un délai de 7 jours suivant la prestation.
                                </p>
                                <p>
                                    <strong className="text-[#2a2520]">11.2. Médiation :</strong> En cas de litige, le client peut avoir recours au Service de Médiation pour le Consommateur :
                                </p>
                                <div className="ml-4 space-y-1 text-sm">
                                    <p>North Gate II, Boulevard du Roi Albert II, 8 Bte 1</p>
                                    <p>1000 Bruxelles</p>
                                    <p>Tél : +32 2 702 52 00</p>
                                    <p>Email : contact@mediationconsommateur.be</p>
                                    <p>Web : <a href="https://www.mediationconsommateur.be" target="_blank" rel="noopener noreferrer" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300">www.mediationconsommateur.be</a></p>
                                </div>
                                <p>
                                    <strong className="text-[#2a2520]">11.3. Droit applicable :</strong> Les présentes CGV sont soumises au droit belge. En cas de litige et à défaut de résolution amiable, les tribunaux de l'arrondissement de Mons seront seuls compétents.
                                </p>
                            </div>
                        </div>

                        {/* Section 12 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    12. Modifications des CGV
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed ml-4">
                                <p>
                                    Baby Bulles se réserve le droit de modifier les présentes CGV à tout moment. Les CGV applicables sont celles en vigueur à la date de la réservation. Toute modification sera publiée sur notre site web.
                                </p>
                            </div>
                        </div>

                        {/* Section 13 */}
                        <div className="pt-8 border-t border-[#f3ede7]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-[#d4b5a0]" />
                                <h2 className="font-['Libre_Caslon_Text'] text-2xl font-normal text-[#2a2520]">
                                    13. Contact
                                </h2>
                            </div>
                            <div className="font-['Karla'] text-base text-[#5a524d] leading-relaxed ml-4">
                                <p className="mb-4">
                                    Pour toute question concernant nos conditions générales de vente :
                                </p>
                                <div className="space-y-2">
                                    <p><strong className="text-[#2a2520]">Email :</strong> <a href="mailto:babybullesmons@gmail.com" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300">babybullesmons@gmail.com</a></p>
                                    <p><strong className="text-[#2a2520]">Téléphone :</strong> <a href="tel:+32492484497" className="text-[#d4b5a0] hover:text-[#c5a591] transition-colors duration-300">+32 492 48 44 97</a></p>
                                    <p><strong className="text-[#2a2520]">Adresse :</strong> Boulevard Gendebien 7, 7000 Mons, Belgique</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Important Notice */}
                    <div className="mt-16 bg-gradient-to-br from-[#faf8f5] to-[#f5ede7] p-8 border-l-4 border-[#d4b5a0]">
                        <div className="flex items-start gap-4">
                            <svg className="w-6 h-6 text-[#d4b5a0] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <h3 className="font-['Libre_Caslon_Text'] text-xl font-normal text-[#2a2520] mb-3">
                                    Information Importante
                                </h3>
                                <p className="font-['Karla'] text-sm text-[#5a524d] leading-relaxed">
                                    En réservant une prestation chez Baby Bulles, vous reconnaissez avoir pris connaissance des présentes Conditions Générales de Vente et les accepter sans réserve. Ces conditions sont également disponibles sur simple demande à notre établissement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}