import React from 'react';
import './Footer.css';

const Footer = () => {
    return ( 
        <footer>
            <div className='footer-info'>
                <h2>Car rental app</h2>
                <h3>Najlepszy serwis z samochodami w Polsce!</h3>
                <p>Dziękujemy że nas odwiedziłeś, mamy nadzieję że niedługo wrócisz.</p>
            </div>
            <div className="footer-copyright">
                <p>Car rental app - wszelkie prawa zastrzeżone</p>
            </div>
        </footer>
     );
}
 
export default Footer;