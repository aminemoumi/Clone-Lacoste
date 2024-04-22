
import React from 'react';
import collec1Image from "../assets/img/collec1.png"; 
import collec2Image from "../assets/img/collec2.png"; 
import collec3Image from "../assets/img/collec3.png";
import Img from "../assets/img/01ajustado.png"; 
import Live from "../assets/img/live.png";
import Video from "../assets/videos/Lacoste Match Point.mp4";
import Reco1 from "../assets/img/recomendado1.png";
import Reco2 from "../assets/img/recomendado2.png";
import Reco3 from "../assets/img/recomendado3.png";
import Reco4 from "../assets/img/recomendado4.png";
import Img1 from "../assets/img/catepolo.png"; 
import Img2 from "../assets/img/catecalcado.png"; 
import Img3 from "../assets/img/cateesporte.png"; 
import Img4 from "../assets/img/catecamisetas.png"; 


const MainPage: React.FC = () => {
    return (
        <main>
            <div>
                <a href="#"><img src={Img}/></a>
            </div>

            <div>
                <p>Des Classiques <br/> L'élégance</p>
                <button>La Tchitchi</button>
            </div>

            <div>
                <h2>Wow. C'est nouveau.</h2>
            </div>

            <div>
                <div>
                    <a href="#"><img src={collec1Image} alt="" /></a>
                    <a href="#">Sweat Life</a>
                </div>
                <div>
                    <a href="#"><img src={collec2Image} alt="" /></a>
                    <a href="#">Lacoste X</a>
                </div>
                <div>
                    <a href="#"><img src={collec3Image} alt="" /></a>
                    <a href="#">Chemise</a>
                </div>
                <div>
                    <a href="#"><img src={Live} alt="" /></a>
                    <a href="#">Live</a>
                </div>
            </div>

            <div>
                <video src={Video} controls loop preload="auto"></video>
                <div>
                    <div>
                        <h2>La Nouvelle <br/> Match Point</h2>
                        <button>Acheter !</button>
                    </div>
                </div>
            </div>

            <div>
                <h2>Recommandé pour vous</h2>
                <div>
                    <div>
                        <a href="#"><img src={Reco1} alt="" /></a>
                        <a href="#">T-shirt en jersey pour hommes</a>
                    </div>
                    <div>
                        <a href="#"><img src={Reco2} alt="" /></a>
                        <a href="#">Polo Homme L.12.12</a>
                    </div>
                    <div>
                        <a href="#"><img src={Reco3} alt="" /></a>
                        <a href="#">Casquette légère homme Lacoste SPORT</a>
                    </div>
                    <div>
                        <a href="#"><img src={Reco4} alt="" /></a>
                    </div>
                </div>
            </div>

            <div>
                <h2>Categories Lacoste</h2>
                <div>
                    <div>
                        <a href="#"><img src={Img1} alt="" /></a>
                        <div>
                            <p>Polos</p>
                            <button><a href="#">➝</a></button>
                        </div>
                    </div>
                    <div>
                        <a href="#"><img src={Img2} alt="" /></a>
                        <div>
                            <p>Chaussures</p>
                            <button><a href="#">➝</a></button>
                        </div>
                    </div>
                    <div>
                        <a href="#"><img src={Img3} alt="" /></a>
                        <div>
                            <p>Sport</p>
                            <button><a href="#">➝</a></button>
                        </div>
                    </div>
                    <div>
                        <a href="#"><img src={Img4} alt="" /></a>
                        <div>
                            <p>T-shirts</p>
                            <button><a href="#">➝</a></button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <ul>
                    <li><a href="#">retour facile et gratuit</a></li>
                    <li><a href="#">paiement sécurisé</a></li>
                    <li><a href="#">livraison gratuite</a></li>
                    <li><a href="#">Besoin d'aide?</a></li>
                </ul>
            </div>
        </main>
    );
};

export default MainPage;

