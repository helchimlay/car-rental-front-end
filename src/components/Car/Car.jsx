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
                <button className='btn-calculate'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    fill='currentColor'
                    className='bi bi-cash-coin'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fillRule='evenodd'
                      d='M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z'
                    />
                    <path d='M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z' />
                    <path d='M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z' />
                    <path d='M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z' />
                  </svg>
                  Oblicz cenę wynajmu
                </button>
                <br />
                <small>
                  {thisCar.car_details.to_negotiate ? 'Do negocjacji, ' : null}
                  Kategoria cenowa:{' '}
                </small>
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
