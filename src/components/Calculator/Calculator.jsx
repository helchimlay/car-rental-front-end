import React, { useState, useEffect } from 'react';
import './Calculator.css';

import { useParams } from 'react-router-dom';
import { getCarBySlug } from '../../services/request';

const Calculator = () => {
  const { carSlug } = useParams();
  const [thisCar, setThisCar] = useState();
  const [rentSince, setRentSince] = useState();
  const [rentTo, setRentTo] = useState();
  const [location, setLocation] = useState('');
  const [yearOfDrivingLicense, setYearOfDrivingLicense] = useState(0);
  const [kilometersToDrive, setKilometersToDrive] = useState(0);

  const [rentalPrice, setRentalPrice] = useState(0);
  const priceForOneNight = 135;

  const handleRentSinceChange = e => {
    setRentSince(e.target.value);
  };

  const handleRentToChange = e => {
    setRentTo(e.target.value);
  };

  const handleLocationChange = e => {
    setLocation(e.target.value);
  };

  const handleYearOfDrivingLicenseChange = e => {
    setYearOfDrivingLicense(e.target.value);
  };

  const handleKilometersToDriveChange = e => {
    setKilometersToDrive(e.target.value);
  };

  useEffect(() => {
    getCarBySlug(carSlug).then(response => {
      setThisCar(response);
    });
  }, [carSlug]);

  const handleCalculateCarRentPrice = e => {
    e.preventDefault();
    setRentalPrice(
      RentCar(priceForOneNight, rentSince, rentTo, thisCar.car_details.category)
    );
  };
  console.log(rentalPrice);
  const RentCar = (priceForOneNight, rentSince, rentTo, priceCategory) => {
    const numberOfDays =
      (new Date(rentTo).getTime() - new Date(rentSince).getTime()) / 86400000; // the number of days in milliseconds divided by how many milliseconds 1 day has
    let rentPrice = priceForOneNight * numberOfDays;
    switch (priceCategory) {
      case 'Basic':
        rentPrice *= 1;
        break;
      case 'Standard':
        rentPrice *= 1.3;
        break;
      case 'Medium':
        rentPrice *= 1.6;
        break;
      case 'Premium':
        rentPrice *= 2;
        break;
      default:
        return rentPrice;
    }
    return rentPrice;
  };

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
              <form onSubmit={handleCalculateCarRentPrice}>
                <div className='form-div-left'>
                  <span>Termin wyposażenia samochodu</span>
                  <br />
                  <label htmlFor='rent-since'>Od:</label>
                  <input
                    type='date'
                    name='rent-since'
                    id='rent-since'
                    onChange={handleRentSinceChange}
                  />
                  <label htmlFor='rent-to'>do:</label>{' '}
                  <input
                    type='date'
                    name='rent-to'
                    id='rent-to'
                    onChange={handleRentToChange}
                  />
                  <br />
                  <label htmlFor='adress'>Lokalizacja odbioru samochodu</label>
                  <br />
                  <input
                    placeholder='Wpisz adres...'
                    type='text'
                    name='adress'
                    id='adress'
                    onChange={handleLocationChange}
                    value={location}
                  />
                  <br />
                </div>
                <div className='form-div-right'>
                  <label htmlFor=''>Rok otrzymania prawa jazdy</label>
                  <br />
                  <select
                    name=''
                    id=''
                    onChange={handleYearOfDrivingLicenseChange}
                    value={yearOfDrivingLicense}
                  ></select>
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
                    onChange={handleKilometersToDriveChange}
                    value={kilometersToDrive}
                  />
                </div>
                <div className='calculator-submit'>
                  <button>Oblicz koszt</button>
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
