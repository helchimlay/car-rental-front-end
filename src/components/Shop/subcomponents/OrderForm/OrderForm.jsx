import React from 'react';
import './OrderForm.scss';

const OrderForm = () => {
  return (
    <>
      <main className='order'>
        <section className='order-form'>
          <div className='consumer-information order-summary'>
            <h2>1. Twoje dane</h2>

            <div className='name'>
              <label htmlFor='name'>Imię</label>
              <input type='text' id='name' class='form-control' />
            </div>
            <div className='lastname'>
              <label htmlFor='lastname'>Nazwisko</label>
              <input type='text' id='lastname' class='form-control' />
            </div>
            <div className='email'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' class='form-control' />
            </div>
            <div className='phone'>
              <label htmlFor='phone'>Nr telefonu</label>
              <input type='text' id='phone' class='form-control' />
            </div>
            <div className='addres'>
              {' '}
              <label htmlFor='address'>Nr bloku/mieszkania</label>
              <input type='text' id='address' class='form-control' />
            </div>
            <div className='street'>
              <label htmlFor='street'>Ulica</label>
              <input type='text' id='street' class='form-control' />
            </div>

            <div className='zip'>
              <label htmlFor='zip'>Kod pocztowy</label>
              <input type='text' id='zip' class='form-control' />
            </div>

            <div className='city'>
              <label htmlFor='city'>Miasto</label>
              <input type='text' id='city' class='form-control' />
            </div>
            <div className='msg'>
              <input type='checkbox' id='msg' />
              <label htmlFor='msg'>Dodaj wiadomość do sprzedającego</label>
            </div>
          </div>
          <div className='order-delivery order-summary'>
            <h2>2. Metoda dostawy</h2>
            <div className='delivery-input'>
              <div className='radio'>
                <input
                  type='radio'
                  name='delivery-method'
                  id='inpost'
                  value='Kurier InPost'
                />
                <label htmlFor='inpost'>Kurier InPost</label>
                <span>15,00 zł</span>
              </div>
            </div>
            <div className='delivery-input'>
              <div className='radio'>
                <input
                  type='radio'
                  name='delivery-method'
                  id='pickup-courier'
                  value='Kurier InPost'
                />
                <label htmlFor='pickup-courier'>Kurier pobranie</label>
                <span>15,00 zł</span>
              </div>
            </div>
            <div className='delivery-input'>
              <div className='radio'>
                <input
                  type='radio'
                  name='delivery-method'
                  id='parcel-locker'
                  value='Kurier InPost'
                />
                <label htmlFor='parcel-locker'>Paczkomat</label>
                <span>12,00 zł</span>
              </div>
            </div>
          </div>
          <div className='order-payment order-summary'>
            <h2>3. Metoda płatności</h2>
            <div className='payment-input'>
              <div className='radio'>
                <input
                  type='radio'
                  name='payment-method'
                  id='traditional-bank-transfer'
                />
                <label htmlFor='traditional-bank-transfer'>
                  Tradycyjny przelew bankowy
                </label>
              </div>
            </div>
            <div className='payment-input'>
              <div className='radio'>
                <input type='radio' name='payment-method' id='transfers24' />
                <label htmlFor='transfers24'>Przelewy24</label>
              </div>
            </div>
            <div className='payment-input'>
              <div className='radio'>
                <input type='radio' name='payment-method' id='blik' />
                <label htmlFor='blik'>BLIK</label>
              </div>
            </div>
          </div>
          <div className='order-info  order-summary'>
            <h2>4. Podsumowanie</h2>
            <p>Wysyłka: 15,00 zł</p>
            <h3>Do zapłaty: 30,00 zł</h3>
            <div className='regulations'>
              <input type='checkbox' id='regulations' />
              <label htmlFor='regulations'>Akceptuję regulamin serwisu</label>
            </div>
            <div className='rodo'>
              <input type='checkbox' id='rodo' />
              <label htmlFor='rodo'>
                Wyrażam zgodę na przetwarzanie moich danych osobowych
              </label>
            </div>
            <div className='order-buttons'>
              <button className='button'>Zamawiam</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default OrderForm;
