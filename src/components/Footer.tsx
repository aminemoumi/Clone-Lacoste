import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div>
                <h2>Rejoindre le Club Lacoste</h2>
                <input type="email" placeholder="Votre Adresse email" />
                <button>M'inscrire</button>
                <p><strong>412 BOUTIQUES EN FRANCE</strong></p>
                <button>Trouver une boutique</button>
            </div>

            <div>
                <div>
                    <ul>
                        <li><p><strong>À PROPOS DE LACOSTE</strong></p></li>
                        <li><a href="#">Le Club Lacoste</a></li>
                        <li><a href="#">Le Groupe Lacoste</a></li>
                        <li><a href="#">Carrière</a></li>
                        <li><a href="#">Protection de la marque</a></li>
                        <li><a href="#">René Lacoste</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><p><strong>NOS CATÉGORIES</strong></p></li>
                        <li><a href="#">Collection Homme</a></li>
                        <li><a href="#">Collection Femme</a></li>
                        <li><a href="#">Collection Enfant</a></li>
                        <li><a href="#">Les Polos Homme</a></li>
                        <li><a href="#">Les Polos Femme</a></li>
                        <li><a href="#">Les Chaussures</a></li>
                        <li><a href="#">Lacoste Sport</a></li>
                        <li><a href="#">Le Survêtement</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><p><strong>AIDE & CONTACTS</strong></p></li>
                        <li><a href="#"><strong>FAQ</strong></a></li>
                        <li><p><strong>PAR TÉLÉPHONE</strong></p></li>
                        <li><p>(+33) 02 46 94 80 09 *</p></li>
                        <li><p>Pour contacter l'équipe Lacoste : le service relation client est exceptionnellement ouvert pour vous du lundi au samedi de 9h à 14h.</p></li>
                        <li><p>Coût d'un appel local, en fonction de votre opérateur.</p></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
