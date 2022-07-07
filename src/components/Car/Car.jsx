import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Car.css';
import { getCarBySlug } from '../../services/request';

import IFrameVideo from './subcomponents/IFrameVideo/IFrameVideo';
import Slider from './subcomponents/Slider/Slider';
const Car = () => {
  const { carSlug } = useParams();

  const [thisCar, setThisCar] = useState(null);

  useEffect(() => {
    getCarBySlug(carSlug).then(response => {
      setThisCar(response);
    });
  }, [carSlug]);

  return (
    <>
      {thisCar ? (
        <main className='car'>
          <section className='introduction'>
            <div className='photos'>
              <Slider images={thisCar.car_details.images} />
            </div>
            <div className='car-info'>
              <h2>
                {thisCar.car_details.brand} {thisCar.car_details.model}{' '}
                {thisCar.car_details.generate}
              </h2>
              <span>
                <ul>
                  <li>{thisCar.car_details.year_of_production}</li>
                  <li className='details-list'>
                    {thisCar.car_details.mileage} km
                  </li>
                  <li className='details-list'>{thisCar.car_details.fuel}</li>
                </ul>
              </span>
              <p className='calculate'>
                <small>Kategoria cenowa: {thisCar.car_details.category}</small>{' '}
                <br />
                <button className='btn-calculate'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    className='bi bi-calculator-fill'
                    viewBox='0 0 16 16'
                  >
                    <path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2 .5v2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5zm0 4v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zM4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM4 12.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zM7.5 6a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM7 9.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm.5 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM10 6.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm.5 2.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-1z' />
                  </svg>
                  Oblicz cenę wynajmu
                </button>
              </p>
              <h3>Opis:</h3>
              <p className='car-description'>
                {thisCar.car_details.description}
              </p>
            </div>
          </section>

          <section className='car-details'>
            <h3>Szczegóły pojazdu:</h3>

            <div className='sides'>
              <div className='left'>
                <p>
                  <b>Marka:</b> {thisCar.car_details.brand}
                </p>
                <p>
                  <b>Model:</b> {thisCar.car_details.model}
                </p>
                <p>
                  <b>Generacja:</b> {thisCar.car_details.generate}
                </p>
                <p>
                  <b>Rok produkcji:</b> {thisCar.car_details.year_of_production}
                </p>
                <p>
                  <b>Przebieg:</b> {thisCar.car_details.mileage} km
                </p>
                <p>
                  <b>Pojemność skokowa:</b> {thisCar.car_details.displacement}{' '}
                  cm
                  <sup>3</sup>
                </p>
                <p>
                  <b>Rodzaj paliwa:</b> {thisCar.car_details.fuel}
                </p>
                <p>
                  <b>Moc:</b> {thisCar.car_details.power}
                </p>
              </div>
              <div className='right'>
                <p>
                  <b>Napęd:</b> {thisCar.car_details.drive}
                </p>
                <p>
                  <b>Liczba drzwi:</b> {thisCar.car_details.number_of_doors}
                </p>
                <p>
                  <b>Liczba miejsc:</b> {thisCar.car_details.number_of_places}
                </p>
                <p>
                  <b>Kolor:</b> {thisCar.car_details.color}
                </p>
                <p>
                  <b>Kraj pochodzenia:</b>{' '}
                  {thisCar.car_details.country_of_origin}
                </p>
                <p>
                  <b>Data pierwszej rejestracji:</b>{' '}
                  {thisCar.car_details.first_registration}
                </p>
                <p>
                  <b>Stan:</b> {thisCar.car_details.car_condition}
                </p>
              </div>
            </div>
          </section>
          <section className='car-equipment'>
            <h3>Wyposażenie:</h3>
            <ol className='list-equipment'>
              {thisCar &&
                thisCar.car_equipment.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ol>
          </section>
          <section className='video'>
            <h3>Hej, chcesz zobaczyć samochód w akcji? Oto on!</h3>
            <div className='container'>
              <IFrameVideo videoURL={thisCar.car_details.video} />
            </div>
          </section>
          <section className='other-info'>
            <div className='left'>
              <h3>Dowiedz się na jakiej zasadzie produkt jest wyceniany</h3>
              <p>
                Analizujemy wszystkie cechy pojazdu i porównujemy je z podobnymi
                ogłoszeniami. Jeżeli chcesz dowiedzieć się więcej kliknij w
                przycisk!
              </p>
              <button className='button-first'>Nasz kalkulator</button>
            </div>
            <div className='right'>
              <h3>Zasięgnij rady eksperta</h3>
              <p>
                Zadaj nam pytanie a my postaramy się na nie odpowiedzieć. Możesz
                również umówić się na oględziny pojazdu oraz na jazdę próbną!
              </p>
              <button className='button-second'>Skontaktuj się z nami</button>
            </div>
          </section>
        </main>
      ) : (
        <h2>Pobieranie danych o pojeździe...</h2>
      )}
    </>
  );
};

export default Car;
