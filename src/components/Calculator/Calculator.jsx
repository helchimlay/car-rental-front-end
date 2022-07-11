import React, { useState, useEffect } from 'react';
import './Calculator.css';

import { useParams } from 'react-router-dom';
import { getCarBySlug } from '../../services/request';

const Calculator = () => {
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
        <main className='calculator'>
          <section className='calculator-form'>
            <div className='calculator-car-img'>
              <img
                className='calculator-car-img'
                src={thisCar.car_details.images[0].src}
                alt={thisCar.car_details.images[0].alt}
              />
            </div>
            <div className='calculator-car-info'>
              <h1 className='calculator-car-model'>
                {thisCar.car_details.brand} {thisCar.car_details.model}{' '}
                {thisCar.car_details.generate}
              </h1>
              <ul>
                <li>{thisCar.car_details.year_of_production}</li>
                <li className='calculator-li'>{thisCar.car_details.mileage}</li>
                <li className='calculator-li'>{thisCar.car_details.fuel}</li>
              </ul>
            </div>
            <h1 className='calculator-title'>
              Oblicz koszt wyposażenia samochodu
            </h1>
            <div className='div-form'>
              <form>
                <div className='form-div-left'>
                  <span>Termin wyposażenia samochodu</span>
                  <br />
                  <label htmlFor='rent-since'>Od:</label>
                  <input type='date' name='rent-since' id='rent-since' />
                  <label htmlFor='rent-to'>do:</label>{' '}
                  <input type='date' name='rent-to' id='rent-to' />
                  <br />
                  <label htmlFor='adress'>Lokalizacja odbioru samochodu</label>
                  <br />
                  <input
                    placeholder='Wpisz adres...'
                    type='text'
                    name='adress'
                    id='adress'
                  />
                  <br />
                </div>
                <div className='form-div-right'>
                  <label htmlFor=''>Rok otrzymania prawa jazdy</label>
                  <br />
                  <select name='' id=''></select>
                  <br />
                  <label htmlFor='kilometers-to-drive'>
                    Szacunkowa ilość kilometrów do przejechania
                  </label>
                  <br />
                  <input
                    className='range-display'
                    type='range'
                    name='kilometers-to-drive'
                    id='kilometers-to-drive'
                    min='0'
                    max='1000'
                  />
                </div>
                <div className='calculator-submit'>
                  <input type='submit' value='Oblicz koszt' />
                </div>
              </form>
            </div>
            <div className='div-price'>
              <h2 className='price-title'>Koszt wypożyczenia:</h2>
              <div className='price-display'>1234 zł</div>
            </div>
          </section>
        </main>
      ) : (
        <h2>Pobieranie danych o pojeździe...</h2>
      )}
    </>
  );
};

export default Calculator;
