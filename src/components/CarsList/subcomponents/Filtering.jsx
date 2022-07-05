import React from 'react';
import './Filtering.css';

const Filtering = () => {
  return (
    <section className='filter-fields'>
      <div className='inputs'>
        <form action=''>
          <label htmlFor='brand'>Marka</label>
          <input type='text' id='brand' />

          <label htmlFor='model'>Model</label>
          <input type='text' id='model' />

          <label htmlFor='year_of_production'>Rok produkcji </label>
          <input type='text' id='year_of_production' />

          <button className='button-first' type='submit'>
            Szukaj
          </button>
        </form>
      </div>
    </section>
  );
};

export default Filtering;
