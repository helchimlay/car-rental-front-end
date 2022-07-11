import React from 'react';
import './Calculator.css';

const Calculator = () => {
  return (
    <>
      <main className='calculator'>
        <section className='calculator-form'>
          <div className='calculator-car-img'>
            <img
              className='calculator-car-img'
              src='https://via.placeholder.com/375x250'
              alt='car'
            />
          </div>
          <div className='calculator-car-info'>
            <h1 className='calculator-car-model'>Seat cordoba 123</h1>
            <ul>
              <li>2000</li>
              <li className='calculator-li'>60 000 km</li>
              <li className='calculator-li'>diesel</li>
            </ul>
          </div>
          <h1 className='calculator-title'>
            Oblicz koszt wyposażenia samochodu
          </h1>
          <div className='div-form'>
            <form>
              <div className='form-div-left'>
                <span>Termin wyposażenia samochodu</span>
                <br />
                <label htmlFor='rent-since'>Od:</label>
                <input type='date' name='rent-since' id='rent-since' />
                <label htmlFor='rent-to'>do:</label>{' '}
                <input type='date' name='rent-to' id='rent-to' />
                <br />
                <label htmlFor='adress'>Lokalizacja odbioru samochodu</label>
                <br />
                <input
                  placeholder='Wpisz adres...'
                  type='text'
                  name='adress'
                  id='adress'
                />
                <br />
              </div>
              <div className='form-div-right'>
                <label htmlFor=''>Rok otrzymania prawa jazdy</label>
                <br />
                <input
                  type='date'
                  name='driving-license-received'
                  id='driving-license-received'
                />
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
    </>
  );
};

export default Calculator;
