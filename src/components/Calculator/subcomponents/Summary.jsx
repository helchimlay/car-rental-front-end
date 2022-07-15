import React from 'react';
import './Summary.css';

const Summary = props => {
  const { priceBrutto, priceNetto, numberOfRentDays, deliveryFee, fuelPrice } =
    props.summary;
  const { kilometersToDrive, future_location } = props.rentInfo;
  const priceForOneNight = props.priceForOneNight;
  const presentLocation = props.presentLocation;

  return (
    <section className='calculator-summary'>
      <div className='calculator-summary-graph'></div>
      <div className='calculator-summary-info'>
        <p className='price-brutto'>
          <b>Wyliczona cena brutto:</b> {priceBrutto} zł
        </p>
        <p>
          <b>Wyliczona cena netto:</b> {priceNetto} zł
        </p>
        <p>
          <b>Ilość dni wypożyczenia:</b> {numberOfRentDays}
        </p>
        <p>
          <b>Aktualna cena paliwa:</b> {fuelPrice} zł/litr
        </p>
        <p>
          <b>Bazowa cena wypożyczenia:</b> {priceForOneNight} zł
        </p>
        <p>
          <b>Liczba kilometrów do przejechania:</b> {kilometersToDrive} km
        </p>
        <p>
          <b>Obecna lokalizacja pojazdu:</b> {presentLocation}
        </p>
        <p>
          <b>Miejsce dostarczenia pojazdu:</b> {future_location}
        </p>
        <p>
          <b>Koszt dostarczenia pojazdu:</b> {deliveryFee} zł
        </p>
      </div>
    </section>
  );
};

export default Summary;
