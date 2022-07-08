import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './CarsList.css';

import Filtering from './subcomponents/Filtering';

const CarsList = () => {
  const [carsList, setCarsList] = useState(null);

  return (
    <main className='cars-list'>
      <Filtering setCarsList={setCarsList} />

      {carsList &&
        carsList.map(item => (
          <Link to={`/lista-samochodow/${item.slug}`} key={item.id}>
            <section className='single-car-card'>
              <div className='summary-of-single-car'>
                <div className='photo-of-single-car'>
                  <img
                    src={item.car_details.images[0].src}
                    alt={item.car_details.images[1].alt}
                  />
                </div>
                <div className='summary'>
                  <span>
                    {item.car_details.brand} {item.car_details.model}{' '}
                    {item.car_details.generate}
                  </span>
                  <span>Kat. cenowa: {item.car_details.category}</span> <br />
                  <ul>
                    <li>{item.car_details.year_of_production}</li>
                    <li className='details-list'>
                      {item.car_details.mileage} km
                    </li>
                    <li className='details-list'>{item.car_details.fuel}</li>
                  </ul>
                  <div className='car-description'>
                    <p>{item.car_details.description}</p>
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
