import React, { useState, useEffect } from 'react';
import './Filtering.css';
import { getSelectOptions } from '../../../services/request';
import { getCarsListByFiltering } from '../../../services/request';
import FilterList from './FilterList/FilterList';
import { useNavigate } from 'react-router-dom';

const Filtering = () => {
  const [selectOptions, setSelectOptions] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedFuel, setSelectedFuel] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredResults, setFilteredResults] = useState(null);
  const navigate = useNavigate();

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

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (selectedBrand || selectedFuel || selectedCategory) {
  //     navigate(
  //       `/lista-samochodow?marka=${selectedBrand}&rodzaj_paliwa=${selectedFuel}&kategoria_cenowa=${selectedCategory}`
  //     );
  //   }
  //   getCarsListByFiltering(selectedBrand, selectedFuel, selectedCategory);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    if (selectedBrand || selectedFuel || selectedCategory) {
      navigate(
        `/lista-samochodow?marka=${selectedBrand}&rodzaj_paliwa=${selectedFuel}&kategoria_cenowa=${selectedCategory}`
      );
      getCarsListByFiltering(
        selectedBrand,
        selectedFuel,
        selectedCategory
      ).then(response => {
        setFilteredResults(response);
        if (filteredResults) {
          console.log(filteredResults);
        }
      });
    }
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
        <button type='submit'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            fill='currentColor'
            className='bi bi-search'
            viewBox='0 0 16 16'
          >
            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
          </svg>
          Szukaj
        </button>
      </form>
    </section>
  );
};

export default Filtering;