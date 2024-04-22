import React from 'react';
import Logo from "../assets/img/LogoLacoste.png"; 
import Img1 from "../assets/img/pesquisa30.png"; 
import Img2 from "../assets/img/usuario30.png"; 
import Img3 from "../assets/img/localizacao30.png"; 
import Img4 from "../assets/img/compras30.png"; 

const Header: React.FC = () => {
    return (
        <nav>
            <div>
                <img src={Logo} alt="logo lacoste" />
            </div>
            <ul>
                <li>
                    <a href="#">Homme</a>
                    <ul>
                        <li><a href="#">Vêtements</a></li>
                        <li><a href="#">Chaussures</a></li>
                        <li><a href="#">Accessoires</a></li>
                        <li><a href="#">Sport</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Femme</a>
                    <ul>
                        <li><a href="#">Vêtements</a></li>
                        <li><a href="#">Chaussures</a></li>
                        <li><a href="#">Sacs & Petite Maroquinerie</a></li>
                        <li><a href="#">Accessoires</a></li>
                        <li><a href="#">Sport</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Enfant</a>
                    <ul>
                        <li><a href="#">Bébés - 6-18 mois</a></li>
                        <li><a href="#">Enfants - 2-8 ans</a></li>
                        <li><a href="#">Adolescents - 10-16 ans</a></li>
                        <li><a href="#">Coffrets Cadeaux</a></li>
                        <li><a href="#">Sélection de rentrée</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Collection</a>
                    <ul>
                        <li><a href="#">Now Trending</a></li>
                        <li><a href="#">Lacoste Styles</a></li>
                        <li><a href="#">Sport Collections</a></li>
                    </ul>
                </li>
                <li>
                    <img src={Img1} alt="" />
                    <ul>
                        <li><input type="search" placeholder="" /></li>
                    </ul>
                </li>
            </ul>
            <ul>
                <li><a href="#"><abbr title="User"><img src={Img2} alt="" /></abbr></a></li>
                <li><a href="#"><abbr title="Localisation"><img src={Img3} alt="" /></abbr></a></li>
                <li><a href="#"><abbr title="Panier"><img src={Img4} alt="" /></abbr></a></li>
            </ul>
        </nav>
    );
};

export default Header;

