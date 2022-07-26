import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InputField from './subcomponents/InputField/InputField';
import LabelField from './subcomponents/LabelField/LabelField';
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
                checked={personOption === 'private-person'}
              />
              <label htmlFor='private-person'>Osoba prywatna</label>
              <input
                type='radio'
                id='facture'
                name='person-option'
                value='facture'
                onChange={handlePersonOptionChange}
                checked={personOption === 'facture'}
              />
              <label htmlFor='facture'>Chcę fakturę</label>
            </div>
            {personOption === 'facture' ? (
              <>
                <div className='factory'>
                  <LabelField id='factory' labelText='Firma' />
                  <InputField id='factory' type='text' class='form-control' />
                </div>
                <div className='nip'>
                  <LabelField id='nip' labelText='NIP' />
                  <InputField id='nip' type='text' class='form-control' />
                </div>
              </>
            ) : null}
            <div className='name'>
              <LabelField id='name' labelText='Imię' />
              <InputField id='name' type='text' class='form-control' />
            </div>
            <div className='lastname'>
              <LabelField id='lastname' labelText='Nazwisko' />
              <InputField id='lastname' type='text' class='form-control' />
            </div>
            <div className='email'>
              <LabelField id='email' labelText='Email' />
              <InputField id='email' type='email' class='form-control' />
            </div>
            <div className='phone'>
              <LabelField id='phone' labelText='Nr telefonu' />
              <InputField id='phone' type='text' class='form-control' />
            </div>
            <div className='street-and-address'>
              <div className='street'>
                <LabelField id='street' labelText='Ulica' />
                <InputField id='street' type='text' class='form-control' />
              </div>
              <div className='address'>
                <LabelField id='address' labelText='Nr' />
                <InputField id='address' type='text' class='form-control' />
              </div>
            </div>
            <div className='zip-and-city'>
              <div className='zip'>
                <LabelField id='zip' labelText='Kod pocztowy' />
                <InputField id='zip' type='text' class='form-control' />
              </div>
              <div className='city'>
                <LabelField id='city' labelText='Miasto' />
                <InputField id='city' type='text' class='form-control' />
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
                  <InputField
                    type='radio'
                    name='delivery-method'
                    id='inpost'
                    value='Kurier InPost'
                  />
                </div>
                <div className='label'>
                  <LabelField id='inpost' labelText='Kurier InPost' />
                  <span>15,00 zł</span>
                </div>
              </div>
              <div className='delivery-input'>
                <div className='radio'>
                  <InputField
                    type='radio'
                    name='delivery-method'
                    id='pickup-courier'
                    value='Kurier pobranie'
                  />
                </div>
                <div className='label'>
                  <LabelField id='pickup-courier' labelText='Kurier pobranie' />
                  <span>15,00 zł</span>
                </div>
              </div>
              <div className='delivery-input'>
                <div className='radio'>
                  <InputField
                    type='radio'
                    name='delivery-method'
                    id='parcel-locker'
                    value='Paczkomat'
                  />
                </div>
                <div className='label'>
                  <LabelField id='parcel-locker' labelText='Paczkomat' />
                  <span>12,00 zł</span>
                </div>
              </div>
            </div>
            <div className='order-payment order-summary'>
              <h2>3. Metoda płatności</h2>
              <div className='payment-input'>
                <InputField
                  type='radio'
                  name='payment-method'
                  id='traditional-bank-transfer'
                  value='Tradycyjny przelew bankowy'
                />
                <LabelField
                  id='traditional-bank-transfer'
                  labelText='Tradycyjny przelew bankowy'
                />
              </div>
              <div className='payment-input'>
                <InputField
                  type='radio'
                  name='payment-method'
                  id='transfers24'
                  value='Przelewy24'
                />
                <LabelField id='transfers24' labelText='Przelewy24' />
              </div>
              <div className='payment-input'>
                <InputField
                  type='radio'
                  name='payment-method'
                  id='blik'
                  value='BLIK'
                />
                <LabelField id='blik' labelText='BLIK' />
              </div>
            </div>
          </div>
          <div className='order-info '>
            <div className='order-summary'>
              <h2>4. Podsumowanie</h2>
              <p>Wysyłka: 15,00 zł</p>
              <h3>Do zapłaty: 30,00 zł</h3>
              <div className='regulations'>
                <input type='checkbox' id='regulations' />
                <label htmlFor='regulations'>
                  Akceptuję <Link to='/regulamin'>regulamin</Link> serwisu
                  <span>*</span>
                </label>
              </div>
              <div className='rodo'>
                <input type='checkbox' id='rodo' />
                <label htmlFor='rodo'>
                  Wyrażam zgodę na przetwarzanie moich danych osobowych oraz
                  akceptuję{' '}
                  <Link to='/polityka-prywatnosci'>politykę prywatności</Link>
                  <span>*</span>
                </label>
              </div>
              <button className='button'>Zamawiam</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default OrderForm;
