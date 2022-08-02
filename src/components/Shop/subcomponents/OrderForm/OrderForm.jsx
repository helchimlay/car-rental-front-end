import { Link } from 'react-router-dom';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import './OrderForm.scss';
import LabelText from './subcomponents/LabelText';
import InputText from './subcomponents/InputText';
import InputCheckbox from './subcomponents/InputCheckbox';
import InputRadio from './subcomponents/InputRadio';
import TextareaField from './subcomponents/TextareaField';

const deliveryMethods = [
  {
    name: 'inpost',
    text: 'Kurier InPost',
    price: '15,00',
  },
  {
    name: 'pickup-courier',
    text: 'Kurier pobranie',
    price: '15,00',
  },
  {
    name: 'parcel-locker',
    text: 'Paczkomat',
    price: '12,00',
  },
];

const paymentMethods = [
  {
    name: 'traditional-bank-transfer',
    text: 'Tradycyjny przelew bankowy',
    smallTagText:
      'Prosimy o wpłatę bezpośrednio na nasze konto bankowe. Proszę użyć numeru zamówienia jako tytułu płatności',
  },
  {
    name: 'transfers24',
    text: 'Przelewy24',
    smallTagText:
      'Zapłać poprzez wygodny system płatności online: blik, szybki przelew bankowy, karta płatnicza, PayPo, Raty Przelewy24.',
  },
  {
    name: 'blik',
    text: 'BLIK',
    smallTagText: 'Zapłać poprzez wygodny system płatności online: blik',
  },
];

const patterns = {
  nip: /^[0-9]{10}$/,
  names: /^[A-ZĆŁŚŻŹ{1}+[a-ząćęłńóśżź]+$/,
  // eslint-disable-next-line no-useless-escape
  email: /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i,
  // eslint-disable-next-line no-useless-escape
  phoneNumber: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/im,
  zipCode: /^\d{2}-\d{3}$/,
};

const OrderForm = () => {
  const methods = useForm({
    defaultValues: {
      'person-option': 'private-person',
    },
  });
  const addMessage = useWatch({
    control: methods.control,
    name: 'message',
  });

  const purchaser = useWatch({
    control: methods.control,
    name: 'person-option',
  });

  const paymentMethod = useWatch({
    control: methods.control,
    name: 'payment-method',
  });

  const deliveryMethod = useWatch({
    control: methods.control,
    name: 'delivery-method',
  });

  const onSubmit = data => console.log(data);
  return (
    <>
      <main className='order'>
        <section>
          <FormProvider {...methods}>
            <form
              className='order-form'
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <div className='consumer-information order-summary'>
                <h2>1. Twoje dane</h2>
                <div className='person-options'>
                  <InputRadio
                    id='private-person'
                    value='private-person'
                    registerName='person-option'
                  />
                  <LabelText id='private-person' text='Osoba prywatna' />
                  <InputRadio
                    id='facture'
                    value='facture'
                    registerName='person-option'
                  />
                  <LabelText id='facture' text='Firma (faktura)' />
                </div>
                {purchaser === 'facture' ? (
                  <>
                    <div className='factory'>
                      <LabelText
                        id='factory'
                        text='Nazwa firmy'
                        required={true}
                      />
                      <InputText
                        id='factory'
                        className='form-control'
                        required={true}
                      />
                    </div>
                    <div className='nip'>
                      <LabelText id='nip' text='NIP' required={true} />
                      <InputText
                        id='nip'
                        className='form-control'
                        required={true}
                        pattern={patterns.nip}
                      />
                    </div>
                  </>
                ) : null}
                <div className='firstname'>
                  <LabelText id='firstname' text='Imię' required={true} />
                  <InputText
                    id='firstname'
                    className='form-control'
                    required={true}
                    pattern={patterns.names}
                  />
                </div>
                <div className='lastname'>
                  <LabelText id='lastname' text='Nazwisko' required={true} />
                  <InputText
                    id='lastname'
                    className='form-control'
                    required={true}
                    pattern={patterns.names}
                  />
                </div>
                <div className='email'>
                  <LabelText id='email' text='Email' required={true} />
                  <InputText
                    id='email'
                    className='form-control'
                    required={true}
                    pattern={patterns.email}
                  />
                </div>
                <div className='phone'>
                  <LabelText id='phone' text='Nr telefonu' required={true} />
                  <InputText
                    id='phone'
                    className='form-control'
                    required={true}
                    pattern={patterns.phoneNumber}
                  />
                </div>
                <div className='street-and-address'>
                  <div className='street'>
                    <LabelText
                      id='street'
                      text='Ulica'
                      required={deliveryMethod !== 'parcel-locker'}
                    />
                    <InputText
                      id='street'
                      className='form-control'
                      required={deliveryMethod !== 'parcel-locker'}
                    />
                  </div>
                  <div className='address'>
                    <LabelText
                      id='address'
                      text='Nr'
                      required={deliveryMethod !== 'parcel-locker'}
                    />
                    <InputText
                      id='address'
                      className='form-control'
                      required={deliveryMethod !== 'parcel-locker'}
                    />
                  </div>
                </div>
                <div className='zip-and-city'>
                  <div className='zip'>
                    <LabelText
                      id='zip'
                      text='Kod pocztowy'
                      required={deliveryMethod !== 'parcel-locker'}
                    />
                    <InputText
                      id='zip'
                      className='form-control'
                      required={deliveryMethod !== 'parcel-locker'}
                      pattern={patterns.zipCode}
                    />
                  </div>
                  <div className='city'>
                    <LabelText
                      id='city'
                      text='Miasto'
                      required={deliveryMethod !== 'parcel-locker'}
                    />
                    <InputText
                      id='city'
                      className='form-control'
                      required={deliveryMethod !== 'parcel-locker'}
                    />
                  </div>
                </div>
                <div className='msg-check'>
                  <InputCheckbox id='message' />
                  <LabelText
                    id='message'
                    text='Dodaj wiadomość do sprzedającego'
                  />
                </div>
                {addMessage && (
                  <div className='message'>
                    <TextareaField id='message-content' />
                  </div>
                )}
              </div>
              <div className='order-delivery-and-payment'>
                <div className='order-delivery order-summary'>
                  <h2>2. Metoda dostawy</h2>
                  {deliveryMethods.map(method => (
                    <div className='delivery-input' key={method.name}>
                      <div className='radio'>
                        <InputRadio
                          id={method.name}
                          value={method.name}
                          registerName='delivery-method'
                        />
                      </div>
                      <div className='label'>
                        <LabelText id={method.name} text={method.text} />
                        <span>{method.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='order-payment order-summary'>
                  <h2>3. Metoda płatności</h2>
                  {paymentMethods.map(method => (
                    <div className='payment-input' key={method.name}>
                      <InputRadio
                        id={method.name}
                        value={method.name}
                        registerName='payment-method'
                      />
                      <LabelText id={method.name} text={method.text} />
                      {paymentMethod === `${method.name}` && (
                        <small>{method.smallTagText}</small>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className='order-info'>
                <div className='order-summary'>
                  <h2>4. Podsumowanie</h2>
                  <p>Wysyłka: 15,00 zł</p>
                  <h3>Do zapłaty: 30,00 zł</h3>
                  <div className='regulations'>
                    <InputCheckbox id='regulations' required={true} />
                    <label htmlFor='regulations'>
                      Akceptuję <Link to='/regulamin'>regulamin</Link> serwisu
                      <span>*</span>
                    </label>
                  </div>
                  <div className='rodo'>
                    <InputCheckbox id='rodo' required={true} />
                    <label htmlFor='rodo'>
                      Wyrażam zgodę na przetwarzanie moich danych osobowych oraz
                      akceptuję
                      <Link to='/polityka-prywatnosci'>
                        politykę prywatności
                      </Link>
                      <span>*</span>
                    </label>
                  </div>
                  <button type='submit' className='button'>
                    Zamawiam
                  </button>
                </div>
              </div>
            </form>
          </FormProvider>
        </section>
      </main>
    </>
  );
};

export default OrderForm;
