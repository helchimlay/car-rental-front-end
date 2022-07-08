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

  return (
    <main className='cars-list'>
      <Filtering setCarsList={setCarsList} />

      {carsList &&
        carsList.map((item, index) => (
          <Link
            to={`/lista-samochodow/${carsList[index].slug}`}
            key={carsList[index].id}
          >
            <section className='single-car-card'>
              <div className='summary-of-single-car'>
                <div className='photo-of-single-car'>
                  <img
                    src={carsList[index].car_details.images[0].src}
                    alt={carsList[index].car_details.images[1].alt}
                  />
                </div>
                <div className='summary'>
                  <span>
                    {carsList[index].car_details.brand}{' '}
                    {carsList[index].car_details.model}{' '}
                    {carsList[index].car_details.generate}
                  </span>
                  <span>
                    Kat. cenowa: {carsList[index].car_details.category}
                  </span>{' '}
                  <br />
                  <ul>
                    <li>{carsList[index].car_details.year_of_production}</li>
                    <li className='details-list'>
                      {carsList[index].car_details.mileage} km
                    </li>
                    <li className='details-list'>
                      {carsList[index].car_details.fuel}
                    </li>
                  </ul>
                  <div className='car-description'>
                    <p>{carsList[index].car_details.description}</p>
                  </div>
                </div>
              </div>
            </section>
          </Link>
        ))}
    </main>
  );
};

export default CarsList;
