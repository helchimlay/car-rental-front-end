import React, { useState, useEffect } from 'react';
import './Filtering.css';
import { getSelectOptions } from '../../../services/request';
import { getCarsListByFiltering } from '../../../services/request';
import FilterList from './FilterList/FilterList';

const Filtering = () => {
  const [selectOptions, setSelectOptions] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedFuel, setSelectedFuel] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    getSelectOptions().then(response => {
      setSelectOptions(response);
    });
  }, []);

  const handleBrandChange = e => {
    setSelectedBrand(e.target.value);
  };

  const handleFuelChange = e => {
    setSelectedFuel(e.target.value);
  };

  const handleCategoryChange = e => {
    setSelectedCategory(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    getCarsListByFiltering(selectedBrand, selectedFuel, selectedCategory).then(
      response => {
        console.log(response);
      }
    );
  };

  return (
    <section className='filter-fields'>
      <form onSubmit={handleSubmit}>
        <div className='select-brand'>
          {selectOptions ? (
            <FilterList
              change={handleBrandChange}
              items={selectOptions.brands}
              label={'Marka'}
            />
          ) : null}
        </div>
        <div className='select-fuel'>
          {selectOptions ? (
            <FilterList
              change={handleFuelChange}
              items={selectOptions.types_of_fuels}
              label={'Rodzaj paliwa'}
            />
          ) : null}
        </div>
        <div className='select-category'>
          {selectOptions ? (
            <FilterList
              change={handleCategoryChange}
              items={selectOptions.categories_of_price}
              label={'Kategoria cenowa'}
            />
          ) : null}
        </div>
        <button type='submit'>Szukaj</button>
      </form>
    </section>
  );
};

export default Filtering;
