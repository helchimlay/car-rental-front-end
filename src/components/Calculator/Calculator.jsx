import React, { useState, useEffect } from 'react';
import './Calculator.css';
import Summary from './subcomponents/Summary';
import Loader from '../Loader/Loader';

import { useParams } from 'react-router-dom';
import {
  getFuelsPrices,
  getLocations,
} from '../../services/calculatorRequests';
import { getCarBySlug } from '../../services/carRequests';
import calculateCarRentPrice from './functions/calculateCarRentPrice';
import renderSelectOptions from './functions/renderSelectOptions';

const priceForOneNight = 135;

const Calculator = () => {
  const { carSlug } = useParams();

  const [fuelsPrices, setFuelsPrices] = useState();
  const [thisCar, setThisCar] = useState();
  // eslint-disable-next-line no-unused-vars
  const [deliveryDistance, setDeliveryDistance] = useState(null);
  const [msg, setMsg] = useState('');

  const [rentCarInfo, setRentCarInfo] = useState({
    rentSince: '',
    rentTo: '',
    future_location: '',
    yearOfDrivingLicense: new Date().getFullYear(),
    kilometersToDrive: 0,
  });
  const [carSummary, setCarSummary] = useState();

  const handleRentSinceChange = e => {
    setRentCarInfo({ ...rentCarInfo, rentSince: e.target.value });
  };

  const handleRentToChange = e => {
    setRentCarInfo({ ...rentCarInfo, rentTo: e.target.value });
  };

  const handleLocationChange = e => {
    setRentCarInfo({ ...rentCarInfo, future_location: e.target.value });
  };

  const handleYearOfDrivingLicenseChange = e => {
    setRentCarInfo({ ...rentCarInfo, yearOfDrivingLicense: e.target.value });
  };

  const handleKilometersToDriveChange = e => {
    setRentCarInfo({ ...rentCarInfo, kilometersToDrive: e.target.value });
  };

  useEffect(() => {
    getCarBySlug(carSlug).then(response => {
      setThisCar(response);
    });
  }, [carSlug]);

  useEffect(() => {
    getFuelsPrices().then(response => {
      setFuelsPrices(response);
    });
  }, []);

  const handleCalculateCarRentPrice = e => {
    e.preventDefault();

    const fuelPrice =
      fuelsPrices[thisCar.car_details.fuel.trim().toLowerCase()] ?? 0;

    getLocations(
      thisCar.car_details.present_location,
      rentCarInfo.future_location
    ).then(response => {
      setDeliveryDistance(Number((response / 1000).toFixed(0)));
      setCarSummary(
        calculateCarRentPrice(
          priceForOneNight,
          rentCarInfo.rentSince,
          rentCarInfo.rentTo,
          rentCarInfo.future_location,
          Number((response / 1000).toFixed(0)),
          rentCarInfo.yearOfDrivingLicense,
          thisCar.car_details.category,
          thisCar.car_details.number_of_available_models,
          rentCarInfo.kilometersToDrive,
          fuelPrice,
          thisCar.car_details.fuel_usage,
          setMsg
        )
      );
    });
  };

  return (
    <>
      {thisCar ? (
        <main className='calculator'>
          <section className='calculator-form'>
            <div className='div-form'>
              <form onSubmit={handleCalculateCarRentPrice}>
                <span>Termin wypożyczenia samochodu</span>
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
                  value={rentCarInfo.location}
                />
                <br />
                <label htmlFor='year-of-get-driving-license'>
                  Rok otrzymania prawa jazdy
                </label>
                <br />
                <select
                  name='year-of-get-driving-license'
                  id='year-of-get-driving-license'
                  className='year-of-get-driving-license'
                  onChange={handleYearOfDrivingLicenseChange}
                  value={rentCarInfo.yearOfDrivingLicense}
                >
                  {renderSelectOptions().map(item => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <br />
                <label htmlFor='kilometers-to-drive'>
                  Szacunkowy dystans jaki chce pokonać klient:
                </label>
                <br />
                <input
                  type='number'
                  className='range-display-value'
                  min='0'
                  max='1000'
                  onChange={handleKilometersToDriveChange}
                  value={rentCarInfo.kilometersToDrive}
                />
                <input
                  className='range-display'
                  type='range'
                  name='kilometers-to-drive'
                  id='kilometers-to-drive'
                  min='0'
                  max='1000'
                  onChange={handleKilometersToDriveChange}
                  value={rentCarInfo.kilometersToDrive}
                />
                <button className='calculate-button'>Oblicz koszt</button>
              </form>
            </div>
            <div className='car-display'>
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
                  <li className='calculator-li'>
                    {thisCar.car_details.mileage}
                  </li>
                  <li className='calculator-li'>{thisCar.car_details.fuel}</li>
                </ul>
              </div>
            </div>
            {msg && <p className='discount-info'>{msg}</p>}
          </section>
          {carSummary ? (
            <Summary
              summary={carSummary}
              rentInfo={rentCarInfo}
              priceForOneNight={priceForOneNight}
              presentLocation={thisCar.car_details.present_location}
            />
          ) : null}
        </main>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Calculator;
