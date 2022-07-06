import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CarsList.css';

import { getCarsList } from '../../services/request';
import Filtering from './subcomponents/Filtering';

const CarsList = () => {
  const [carsList, setCarsList] = useState(null);

  useEffect(() => {
    getCarsList().then(response => {
      setCarsList(response);
    });
  }, []);

  if (carsList) {
    const { cars_data } = carsList.data;
    var ListOfCars = cars_data.map((item, index) => {
      return (
        <Link
          to={`/lista-samochodow/${cars_data[index].slug}`}
          key={cars_data[index].id}
        >
          <section className='single-car-card'>
            <div className='photo-of-single-car'>
              <img
                src={cars_data[index].car_details.images[0].src}
                alt={cars_data[index].car_details.images[1].alt}
              />
            </div>

            <div className='summary-of-single-car'>
              <h2>
                {cars_data[index].car_details.brand}{' '}
                {cars_data[index].car_details.model}{' '}
                {cars_data[index].car_details.generate}
              </h2>
              <span>
                <ul>
                  <li>{cars_data[index].car_details.year_of_production}</li>
                  <li className='details-list'>
                    {cars_data[index].car_details.mileage}
                  </li>
                  <li className='details-list'>
                    {cars_data[index].car_details.fuel}
                  </li>
                </ul>
              </span>
              <p>{cars_data[index].car_details.description}</p>
            </div>
            <div className='category-of-single-car'>
              <span>Kategoria cenowa:</span>
            </div>
          </section>
        </Link>
      );
    });
  }

  return (
    <main className='cars-list'>
      <Filtering />
      {ListOfCars}
    </main>
  );
};

export default CarsList;
