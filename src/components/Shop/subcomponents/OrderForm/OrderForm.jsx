import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
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

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
      <main className='order'>
        <section>
          <form className='order-form' onSubmit={handleSubmit(onSubmit)}>
            <div className='consumer-information order-summary'>
              <h2>1. Twoje dane</h2>
              <div className='person-options'>
                <input
                  type='radio'
                  id='person-option'
                  name='person-option'
                  value='private-person'
                  {...register('person-option')}
                />
                <label htmlFor='private-person'>Osoba prywatna</label>

                <input
                  type='radio'
                  id='facture'
                  name='person-option'
                  value='facture'
                  {...register('person-option')}
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
                      id='factory'
                      name='factory'
                      className='form-control'
                      {...register('factory', { required: true })}
                    />
                  </div>
                  <div className='nip'>
                    <label htmlFor='nip'>
                      NIP<span>*</span>
                    </label>
                    <input
                      id='nip'
                      name='nip'
                      className='form-control'
                      {...register('nip', {
                        required: true,
                        pattern: /^[0-9]{10}$/,
                      })}
                    />
                  </div>
                </>
              ) : null}
              <div className='firstname'>
                <label htmlFor='firstname'>
                  Imię<span>*</span>
                </label>
                <input
                  id='firstname'
                  name='firstname'
                  className='form-control'
                  {...register('firstname', {
                    required: true,
                    pattern: /^[A-ZĆŁŚŻŹ{1}+[a-ząćęłńóśżź]+$/,
                  })}
                />
              </div>
              <div className='lastname'>
                <label htmlFor='lastname'>
                  Nazwisko<span>*</span>
                </label>
                <input
                  id='lastname'
                  name='lastname'
                  className='form-control'
                  {...register('lastname', {
                    required: true,
                    pattern: /^[A-ZĆŁŚŻŹ{1}+[a-ząćęłńóśżź]+$/,
                  })}
                />
              </div>
              <div className='email'>
                <label htmlFor='email'>
                  Email<span>*</span>
                </label>
                <input
                  id='email'
                  name='email'
                  className='form-control'
                  {...register('email', {
                    required: true,
                    pattern: /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i,
                  })}
                />
              </div>
              <div className='phone'>
                <label htmlFor='phone'>
                  Nr telefonu<span>*</span>
                </label>
                <input
                  id='phone'
                  name='phone'
                  className='form-control'
                  {...register('phone', {
                    required: true,
                    pattern:
                      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/im,
                  })}
                />
              </div>
              <div className='street-and-address'>
                <div className='street'>
                  <label htmlFor='street'>
                    Ulica{requiredFields.street && <span>*</span>}
                  </label>
                  <input
                    id='street'
                    name='street'
                    className='form-control'
                    {...register('street')}
                  />
                </div>
                <div className='address'>
                  <label htmlFor='address'>
                    Nr{requiredFields.address && <span>*</span>}
                  </label>
                  <input
                    id='address'
                    name='address'
                    className='form-control'
                    {...register('address', { maxLength: 5 })}
                  />
                </div>
              </div>
              <div className='zip-and-city'>
                <div className='zip'>
                  <label htmlFor='zip'>
                    Kod pocztowy{requiredFields.zip && <span>*</span>}
                  </label>
                  <input
                    id='zip'
                    name='zip'
                    className='form-control'
                    {...register('zip', { pattern: /^\d{2}-\d{3}$/ })}
                  />
                </div>
                <div className='city'>
                  <label htmlFor='city'>
                    Miasto{requiredFields.city && <span>*</span>}
                  </label>
                  <input
                    id='city'
                    name='city'
                    className='form-control'
                    {...register('city', { minLength: 3, maxLength: 20 })}
                  />
                </div>
              </div>

              <div className='msg-check'>
                <input
                  type='checkbox'
                  id='msg'
                  name='message'
                  {...register('message')}
                />
                <label htmlFor='msg'>Dodaj wiadomość do sprzedającego</label>
              </div>
              {addMessage && (
                <div className='message'>
                  <textarea {...register('msg')}></textarea>
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
                      value='inpost'
                      {...register('delivery-method')}
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
                      value='pickup-courier'
                      {...register('delivery-method')}
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
                      value='parcel-locker'
                      {...register('delivery-method')}
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
                    value='traditional-bank-transfer'
                    {...register('payment-method')}
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
                    value='transfers24'
                    {...register('payment-method')}
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
                    value='blik'
                    {...register('payment-method')}
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
                  <input
                    type='checkbox'
                    id='regulations'
                    {...register('regulations')}
                  />
                  <label htmlFor='regulations'>
                    Akceptuję <Link to='/regulamin'>regulamin</Link> serwisu
                    <span>*</span>
                  </label>
                </div>
                <div className='rodo'>
                  <input type='checkbox' id='rodo' {...register('rodo')} />
                  <label htmlFor='rodo'>
                    Wyrażam zgodę na przetwarzanie moich danych osobowych oraz
                    akceptuję{' '}
                    <Link to='/polityka-prywatnosci'>politykę prywatności</Link>
                    <span>*</span>
                  </label>
                </div>
                <button type='submit' className='button'>
                  Zamawiam
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default OrderForm;
