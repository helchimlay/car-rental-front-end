import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './OrderForm.scss';

const OrderForm = () => {
  const [personOption, setPersonOption] = useState('private-person');
  const [addMessage, setAddMessage] = useState(false);

  const handleAddMessageChange = () => {
    setAddMessage(!addMessage);
  };

  const handlePersonOptionChange = e => {
    const { value } = e.target;
    setPersonOption(value);
  };

  return (
    <>
      <main className='order'>
        <section className='order-form'>
          <div className='consumer-information order-summary'>
            <h2>1. Twoje dane</h2>
            <div className='person-options'>
              <input
                type='radio'
                id='private-person'
                name='person-option'
                value='private-person'
                onChange={handlePersonOptionChange}
                checked={personOption === 'private-person' ? true : false}
              />
              <label htmlFor='private-person'>Osoba prywatna</label>
              <input
                type='radio'
                id='facture'
                name='person-option'
                value='facture'
                onChange={handlePersonOptionChange}
                checked={personOption === 'facture' ? true : false}
              />
              <label htmlFor='facture'>Chcę fakturę</label>
            </div>
            {personOption === 'facture' ? (
              <>
                <div className='factory'>
                  <label htmlFor='factory'>Firma</label>
                  <input type='text' id='factory' className='form-control' />
                </div>
                <div className='nip'>
                  <label htmlFor='nip'>NIP</label>
                  <input type='text' id='nip' className='form-control' />
                </div>
              </>
            ) : null}
            <div className='name'>
              <label htmlFor='name'>Imię</label>
              <input type='text' id='name' className='form-control' />
            </div>
            <div className='lastname'>
              <label htmlFor='lastname'>Nazwisko</label>
              <input type='text' id='lastname' className='form-control' />
            </div>
            <div className='email'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' className='form-control' />
            </div>
            <div className='phone'>
              <label htmlFor='phone'>Nr telefonu</label>
              <input type='text' id='phone' className='form-control' />
            </div>
            <div className='street-and-address'>
              <div className='street'>
                <label htmlFor='street'>Ulica</label>
                <input type='text' id='street' className='form-control' />
              </div>
              <div className='address'>
                <label htmlFor='address'>Nr</label>
                <input type='text' id='address' className='form-control' />
              </div>
            </div>
            <div className='zip-and-city'>
              <div className='zip'>
                <label htmlFor='zip'>Kod pocztowy</label>
                <input type='text' id='zip' className='form-control' />
              </div>
              <div className='city'>
                <label htmlFor='city'>Miasto</label>
                <input type='text' id='city' className='form-control' />
              </div>
            </div>

            <div className='msg-check'>
              <input
                type='checkbox'
                id='msg'
                onChange={handleAddMessageChange}
                checked={addMessage}
              />
              <label htmlFor='msg'>Dodaj wiadomość do sprzedającego</label>
            </div>
            {addMessage && (
              <div className='message'>
                <textarea
                  name='msg'
                  id='msg'
                  className='form-control'
                ></textarea>
              </div>
            )}
          </div>
          <div className='order-delivery-and-payment'>
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
                </div>
                <div className='label'>
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
                </div>
                <div className='label'>
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
                </div>
                <div className='label'>
                  <label htmlFor='parcel-locker'>Paczkomat</label>
                  <span>12,00 zł</span>
                </div>
              </div>
            </div>
            <div className='order-payment order-summary'>
              <h2>3. Metoda płatności</h2>
              <div className='payment-input'>
                <input
                  type='radio'
                  name='payment-method'
                  id='traditional-bank-transfer'
                />
                <label htmlFor='traditional-bank-transfer'>
                  Tradycyjny przelew bankowy
                </label>
              </div>
              <div className='payment-input'>
                <input type='radio' name='payment-method' id='transfers24' />
                <label htmlFor='transfers24'>Przelewy24</label>
              </div>
              <div className='payment-input'>
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
              <label htmlFor='regulations'>
                Akceptuję <Link to='/regulamin'>regulamin</Link> serwisu
              </label>
            </div>
            <div className='rodo'>
              <input type='checkbox' id='rodo' />
              <label htmlFor='rodo'>
                Wyrażam zgodę na przetwarzanie moich danych osobowych oraz
                akceptuję{' '}
                <Link to='/polityka-prywatnosci'>politykę prywatności</Link>
              </label>
            </div>
            <button className='button'>Zamawiam</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default OrderForm;
