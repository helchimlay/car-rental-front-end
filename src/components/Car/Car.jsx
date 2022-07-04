import React from "react";
import "./Car.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


const Car = (props) => {

    const {car} = props;
    const {car_details} = car;
    const {car_equipment} = car;

    const video = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);

        return (match && match[2].length === 11) ? match[2] : null;
    }

    const videoId = video(car_details.video);
    const iframeMarkup =`//www.youtube.com/embed/${videoId} `;


    return ( 

        <main className="car">
            <section className="introduction">
                <div className="photos">
                    <OwlCarousel className="owl-theme owl-carousel" items="1" loop nav>
                        {car_details && car_details.images.map((item,index) => 
                        <div key={index} className="item">
                            <img src={item.src} alt={item.alt} />
                        </div>
                        )}
                    </OwlCarousel>
                </div>
                <div className="car-info">
                    <h2>{car_details.brand} {car_details.model} {car_details.generate}</h2>
                    <span>
                        <ul>
                            <li>{car_details.year_of_production}</li>
                            <li className="details-list">{car_details.mileage} km</li>
                            <li className="details-list">{car_details.fuel}</li>
                        </ul>
                    </span>
                    <p className="price">
                        <span>{car_details.price} PLN</span>
                        <span><a href="#">Oblicz {">"}</a></span> <br />
                        <small>{car_details.to_negotiate ? "Do negocjacji, " : null}Kategoria cenowa: </small>
                    </p>
                    <h3>Opis:</h3>
                    <p className="car-description">{car_details.description}</p>
                </div>
            </section>

            <section className="car-details">
                <h3>Szczegóły pojazdu:</h3>

                    <div className="sides">
                        <div className="left">
                            <p><b>Marka:</b> {car_details.brand}</p>
                            <p><b>Model:</b> {car_details.model}</p>
                            <p><b>Generacja:</b> {car_details.generate}</p>
                            <p><b>Rok produkcji:</b> {car_details.year_of_production}</p>
                            <p><b>Przebieg:</b> {car_details.mileage} km</p>
                            <p><b>Pojemność skokowa:</b> {car_details.displacement} cm<sup>3</sup></p>
                            <p><b>Rodzaj paliwa:</b> {car_details.fuel}</p>
                            <p><b>Moc:</b> {car_details.power}</p>

                        </div>
                        <div className="right">
                            <p><b>Napęd:</b> {car_details.drive}</p>
                            <p><b>Liczba drzwi:</b> {car_details.number_of_doors}</p>
                            <p><b>Liczba miejsc:</b> {car_details.number_of_places}</p>
                            <p><b>Kolor:</b> {car_details.color}</p>
                            <p><b>Kraj pochodzenia:</b> {car_details.country_of_origin}</p>
                            <p><b>Data pierwszej rejestracji:</b> {car_details.first_registration}</p>
                            <p><b>Stan:</b> {car_details.car_condition}</p>
                        </div>
                    </div>
            </section>
            <section className="car-equipment">
                <h3>Wyposażenie:</h3>
                    <ol className="list-equipment">
                        {car_equipment && car_equipment.map((item,index) =>
                            <li key={index}><p >{item}</p></li>
                        )}
                    </ol>


                
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
                        <button className="button-first">Nasz kalkulator</button>
                    </div>
                    <div className="right">
                        <h3>Zasięgnij rady eksperta</h3>
                        <p>Zadaj nam pytanie a my postaramy się na nie odpowiedzieć. Możesz również umówić się na oględziny pojazdu oraz na jazdę próbną!</p>
                        <button className="button-second">Skontaktuj się z nami</button>
                    </div>
            </section>  
        
    </main>
     );
}
 
export default Car;