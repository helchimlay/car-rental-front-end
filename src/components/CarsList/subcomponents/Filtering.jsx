import React, { useState, useEffect, useRef } from 'react';
import './Filtering.css';
import { getSelectOptions } from '../../../services/cars/carsListRequests';
import { getCarsListByFiltering } from '../../../services/cars/carsListRequests';
import FilterList from './FilterList/FilterList';
import { useNavigate, useSearchParams } from 'react-router-dom';

const usePrevious = value => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

const Filtering = props => {
  const [selectOptions, setSelectOptions] = useState(null);
  const [searchParams] = useSearchParams();
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedFuel, setSelectedFuel] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  const prevSelectedBrand = usePrevious(selectedBrand);
  const prevSelectedFuel = usePrevious(selectedFuel);
  const prevSelectedCategory = usePrevious(selectedCategory);

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

    if (
      prevSelectedBrand !== selectedBrand ||
      prevSelectedFuel !== selectedFuel ||
      prevSelectedCategory !== selectedCategory
    ) {
      navigate(
        '/lista-samochodow?' +
          (selectedBrand ? `marka=${selectedBrand}` : '') +
          (selectedFuel ? `&rodzaj_paliwa=${selectedFuel}` : '') +
          (selectedCategory ? `&kategoria_cenowa=${selectedCategory}` : '')
      );
      getCarsListByFiltering(
        selectedBrand,
        selectedFuel,
        selectedCategory
      ).then(response => {
        props.setCarsList(response);
      });
    }
  };

  useEffect(() => {
    const selectedBrand = searchParams.get('marka');
    const selectedFuel = searchParams.get('rodzaj_paliwa');
    const selectedCategory = searchParams.get('kategoria_cenowa');
    setSelectedBrand(selectedBrand);
    setSelectedFuel(selectedFuel);
    setSelectedCategory(selectedCategory);
    getCarsListByFiltering(selectedBrand, selectedFuel, selectedCategory).then(
      response => {
        props.setCarsList(response);
      }
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className='filter-fields'>
      {selectOptions && (
        <form onSubmit={handleSubmit}>
          <div className='select-brand'>
            <FilterList
              change={handleBrandChange}
              items={selectOptions.brands}
              label={'Marka'}
              value={selectedBrand}
            />
          </div>
          <div className='select-fuel'>
            <FilterList
              change={handleFuelChange}
              items={selectOptions.types_of_fuels}
              label={'Rodzaj paliwa'}
              value={selectedFuel}
            />
          </div>
          <div className='select-category'>
            <FilterList
              change={handleCategoryChange}
              items={selectOptions.categories_of_price}
              label={'Kategoria cenowa'}
              value={selectedCategory}
            />
          </div>
          <button type='submit'>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-search'
                viewBox='0 0 16 16'
              >
                <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
              </svg>
              Szukaj
            </span>
          </button>
        </form>
      )}
    </section>
  );
};

export default Filtering;
