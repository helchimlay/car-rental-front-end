import React from 'react';
import './Car.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Car = (props) => {

    const {car} = props;



    return ( 
        <main>
            <section className="introduction">
                <div className="photos">
                    <OwlCarousel className='owl-theme owl-carousel' items="1" loop dots={false}>
                        <div className="item">
                            <img src={car.images[0].src} alt={car.images[0].alt} />
                        </div>
                        <div className="item">
                            <img src={car.images[1].src} alt={car.images[0].alt} />
                        </div>
                        <div className="item">
                            <img src={car.images[2].src} alt={car.images[0].alt} />
                        </div>
                        <div className="item">
                            <img src={car.images[3].src} alt={car.images[0].alt} />
                        </div>
                        <div className="item">
                            <img src={car.images[4].src} alt={car.images[0].alt} />
                        </div>
                        <div className="item">
                            <img src={car.images[5].src} alt={car.images[0].alt} />
                        </div>
                    </OwlCarousel>
                </div>
                <div className="car-info">
                    <h2>{car.brand} {car.model} {car.generate} {car.year_of_production}</h2>
                    <h2>Cena: {car.price} PLN</h2>
                    <h3>Opis:</h3>
                    <p>{car.description}</p>
                </div>
            </section>

            <section className="car-content">
                <h3>Szczegóły pojazdu:</h3>

                    <div className="sides">
                        <div className="left">
                            <p>Marka: {car.brand}</p>
                            <p>Model: {car.model}</p>
                            <p>Generacja: {car.generate}</p>
                            <p>Rok produkcji: {car.year_of_production}</p>
                            <p>Przebieg: {car.mileage}km</p>
                            <p>Pojemność skokowa: {car.displacement} cm<sup>3</sup></p>
                            <p>Rodzaj paliwa: {car.fuel}</p>
                            <p>Moc: {car.power}</p>
                        </div>
                        <div className="right">
                            <p>Napęd: {car.drive}</p>
                            <p>Liczba drzwi: {car.number_of_doors}</p>
                            <p>Liczba miejsc: {car.number_of_places}</p>
                            <p>Kolor: {car.color}</p>
                            <p>Kraj pochodzenia: {car.country_of_origin}</p>
                            <p>Data pierwszej rejestracji: {car.first_registration}</p>
                            <p>Stan: {car.car_condition}</p>
                        </div>
                    </div>
            </section>
            <section className="video">
                <h3>Hej, chcesz zobaczyć samochód w akcji? Oto on!</h3>
                <iframe src={car.video} frameBorder="0" title="Film z wybranym samochodem"></iframe>
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