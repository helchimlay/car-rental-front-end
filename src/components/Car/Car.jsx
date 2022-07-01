import React from 'react';
import './Car.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Car = (props) => {

    const {car} = props;

    const video = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);

        return (match && match[2].length === 11) ? match[2] : null;
    }

    const videoId = video(car.video);
    const iframeMarkup =`//www.youtube.com/embed/${videoId} `;

    return ( 

        <main>
            <section className="introduction">
                <div className="photos">
                    <OwlCarousel className='owl-theme owl-carousel' items="1" loop dots>
                        {car && car.images.map((item,index) => 
                        <div key={index} className="item">
                            <img src={item.src} alt={item.alt} />
                        </div>
                        )}
                    </OwlCarousel>
                </div>
                <div className="car-info">
                    <h2>{car.brand} {car.model} {car.generate} {car.year_of_production}</h2>
                    <span>
                        <ul>
                            <li>{car.year_of_production}</li>
                            <li className='details-list'>{car.mileage}km</li>
                            <li className='details-list'>{car.fuel}</li>
                        </ul>
                    </span>
                    <p className='price'>
                        <span>{car.price} PLN</span>
                        <span><a href="#">Oblicz {'>'}</a></span>
                    </p>
                    <h3>Opis:</h3>
                    <p>{car.description}</p>
                </div>
            </section>

            <section className="car-content">
                <h3>Szczegóły pojazdu:</h3>

                    <div className="sides">
                        <div className="left">
                            <p><b>Marka:</b> {car.brand}</p>
                            <p><b>Model:</b> {car.model}</p>
                            <p><b>Generacja:</b> {car.generate}</p>
                            <p><b>Rok produkcji:</b> {car.year_of_production}</p>
                            <p><b>Przebieg:</b> {car.mileage}km</p>
                            <p><b>Pojemność skokowa:</b> {car.displacement} cm<sup>3</sup></p>
                            <p><b>Rodzaj paliwa:</b> {car.fuel}</p>
                            <p><b>Moc:</b> {car.power}</p>
                        </div>
                        <div className="right">
                            <p><b>Napęd:</b> {car.drive}</p>
                            <p><b>Liczba drzwi:</b> {car.number_of_doors}</p>
                            <p><b>Liczba miejsc:</b> {car.number_of_places}</p>
                            <p><b>Kolor:</b> {car.color}</p>
                            <p><b>Kraj pochodzenia:</b> {car.country_of_origin}</p>
                            <p><b>Data pierwszej rejestracji:</b> {car.first_registration}</p>
                            <p><b>Stan:</b> {car.car_condition}</p>
                        </div>
                    </div>
            </section>
            <section className="video">
                <h3>Hej, chcesz zobaczyć samochód w akcji? Oto on!</h3>
                <div className="container">
                    <iframe src={iframeMarkup} frameBorder="0" allowFullScreen title="Prezentacja samochodu">Twoja przeglądarka nie wspiera iframe!</iframe>
                </div>
            </section>
            <section className="other-info">
                    <div className="left">
                        <h3>Dowiedz się na jakiej zasadzie produkt jest wyceniany</h3>
                        <p>Analizujemy wszystkie cechy pojazdu i porównujemy je z podobnymi ogłoszeniami. Jeżeli chcesz dowiedzieć się więcej kliknij w przycisk!</p>
                        <button className='button-first'>Nasz kalkulator</button>
                    </div>
                    <div className="right">
                        <h3>Zasięgnij rady eksperta</h3>
                        <p>Zadaj nam pytanie a my postaramy się na nie odpowiedzieć. Możesz również umówić się na oględziny pojazdu oraz na jazdę próbną!</p>
                        <button className='button-second'>Skontaktuj się z nami</button>
                    </div>
            </section>  
        
    </main>
     );
}
 
export default Car;