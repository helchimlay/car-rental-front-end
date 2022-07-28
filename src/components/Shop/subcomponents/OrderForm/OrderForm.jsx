import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './OrderForm.scss';

const OrderForm = () => {
  const [personOption, setPersonOption] = useState('private-person');
  const [personData, setPersonData] = useState({});
  const [addMessage, setAddMessage] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [requiredFields, setRequiredFields] = useState({
    street: false,
    address: false,
    zip: false,
    city: false,
  });

  const handleAddMessageChange = () => {
    setAddMessage(!addMessage);
  };

  const handlePersonOptionChange = e => {
    const { value } = e.target;
    setPersonOption(value);
  };

  const handleDeliveryMethodChange = e => {
    const { value } = e.target;
    setDeliveryMethod(value);
  };

  useEffect(() => {
    if (deliveryMethod === 'pickup-courier' || deliveryMethod === 'inpost') {
      setRequiredFields({
        street: true,
        address: true,
        zip: true,
        city: true,
      });
    } else {
      setRequiredFields({
        street: false,
        address: false,
        zip: false,
        city: false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deliveryMethod]);

  const handlePaymentMethodChange = e => {
    const { value } = e.target;
    setPaymentMethod(value);
  };

  const handlePersonDataChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setPersonData(values => ({ ...values, [name]: value }));
  };

  return (
    <>
      <main className='order'>
        <section>
          <form action='' className='order-form'>
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
                    <label htmlFor='factory'>
                      Firma<span>*</span>
                    </label>
                    <input
                      type='text'
                      id='factory'
                      name='factory'
                      className='form-control'
                      value={personData.factory || ''}
                      onChange={handlePersonDataChange}
                    />
                  </div>
                  <div className='nip'>
                    <label htmlFor='nip'>
                      NIP<span>*</span>
                    </label>
                    <input
                      type='text'
                      id='nip'
                      name='nip'
                      className='form-control'
                      value={personData.nip || ''}
                      onChange={handlePersonDataChange}
                    />
                  </div>
                </>
              ) : null}
              <div className='name'>
                <label htmlFor='name'>
                  Imię<span>*</span>
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='form-control'
                  value={personData.name || ''}
                  onChange={handlePersonDataChange}
                />
              </div>
              <div className='lastname'>
                <label htmlFor='lastname'>
                  Nazwisko<span>*</span>
                </label>
                <input
                  type='text'
                  id='lastname'
                  name='lastname'
                  className='form-control'
                  value={personData.lastname || ''}
                  onChange={handlePersonDataChange}
                />
              </div>
              <div className='email'>
                <label htmlFor='email'>
                  Email<span>*</span>
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='form-control'
                  value={personData.email || ''}
                  onChange={handlePersonDataChange}
                />
              </div>
              <div className='phone'>
                <label htmlFor='phone'>
                  Nr telefonu<span>*</span>
                </label>
                <input
                  type='text'
                  id='phone'
                  name='phone'
                  className='form-control'
                  value={personData.phone || ''}
                  onChange={handlePersonDataChange}
                />
              </div>
              <div className='street-and-address'>
                <div className='street'>
                  <label htmlFor='street'>
                    Ulica{requiredFields.street && <span>*</span>}
                  </label>
                  <input
                    type='text'
                    id='street'
                    name='street'
                    className='form-control'
                    value={personData.street || ''}
                    onChange={handlePersonDataChange}
                  />
                </div>
                <div className='address'>
                  <label htmlFor='address'>
                    Nr{requiredFields.address && <span>*</span>}
                  </label>
                  <input
                    type='text'
                    id='address'
                    name='address'
                    className='form-control'
                    value={personData.address || ''}
                    onChange={handlePersonDataChange}
                  />
                </div>
              </div>
              <div className='zip-and-city'>
                <div className='zip'>
                  <label htmlFor='zip'>
                    Kod pocztowy{requiredFields.zip && <span>*</span>}
                  </label>
                  <input
                    type='text'
                    id='zip'
                    name='zip'
                    className='form-control'
                    value={personData.zip || ''}
                    onChange={handlePersonDataChange}
                  />
                </div>
                <div className='city'>
                  <label htmlFor='city'>
                    Miasto{requiredFields.city && <span>*</span>}
                  </label>
                  <input
                    type='text'
                    id='city'
                    name='city'
                    className='form-control'
                    value={personData.city || ''}
                    onChange={handlePersonDataChange}
                  />
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
                    name='message'
                    id='msg'
                    className='form-control'
                    value={personData.message || ''}
                    onChange={handlePersonDataChange}
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
                      value='inpost'
                      onChange={handleDeliveryMethodChange}
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
                      value='pickup-courier'
                      onChange={handleDeliveryMethodChange}
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
                      value='parcel-locker'
                      onChange={handleDeliveryMethodChange}
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
                    value='traditional-bank-transfer'
                    onChange={handlePaymentMethodChange}
                  />
                  <label htmlFor='traditional-bank-transfer'>
                    Tradycyjny przelew bankowy
                  </label>
                  {paymentMethod === 'traditional-bank-transfer' ? (
                    <small>
                      Prosimy o wpłatę bezpośrednio na nasze konto bankowe.
                      Proszę użyć numeru zamówienia jako tytułu płatności.
                    </small>
                  ) : null}
                </div>
                <div className='payment-input'>
                  <input
                    type='radio'
                    name='payment-method'
                    id='transfers24'
                    value='transfers24'
                    onChange={handlePaymentMethodChange}
                  />
                  <label htmlFor='transfers24'>Przelewy24</label>
                  {paymentMethod === 'transfers24' ? (
                    <small>
                      Zapłać poprzez wygodny system płatności online: blik,
                      szybki przelew bankowy, karta płatnicza, PayPo, Raty
                      Przelewy24.
                    </small>
                  ) : null}
                </div>
                <div className='payment-input'>
                  <input
                    type='radio'
                    name='payment-method'
                    id='blik'
                    value='blik'
                    onChange={handlePaymentMethodChange}
                  />
                  <label htmlFor='blik'>BLIK</label>
                  {paymentMethod === 'blik' ? (
                    <small>
                      Zapłać poprzez wygodny system płatności online: blik
                    </small>
                  ) : null}
                </div>
              </div>
            </div>
            <div className='order-info'>
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
          </form>
        </section>
      </main>
    </>
  );
};

export default OrderForm;
