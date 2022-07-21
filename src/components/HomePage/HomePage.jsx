import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import { Helmet } from 'react-helmet';
import tapicon from '../../img/tap.png';
import calculatoricon from '../../img/calculator.png';
import realizationicon from '../../img/checked.png';
import customerrevievicon from '../../img/customer-review.png';
import babycar from '../../img/baby-car.png';
import bestprice from '../../img/best-price.png';

const HomePage = () => {
  const scroll = () => {
    document.querySelector('.about-us').scrollIntoView();
  };
  return (
    <>
      <Helmet>
        <title>Strona główna | CarRental</title>
        <meta
          name='description'
          content='Jedna z najlepszych wypożyczalni samochodowych w Polsce. Odwiedź nas już teraz i sprawdź naszą ofertę!'
        />
      </Helmet>
      <header>
        <div className='hero-bg'></div>
        <div className='hero-content'>
          <h1>CarRental</h1>
          <h2>
            U nas wynajmiesz swój <br /> wymarzony samochód
          </h2>
          <button onClick={scroll} id='scroll-btn'>
            <span>Dowiedz się więcej</span>
          </button>
        </div>
      </header>
      <main className='home'>
        <section className='about-us'>
          <h2>O NAS</h2>
          <div className='underline'></div>
          <div className='grid-cols-2'>
            <div className='image'>
              <img
                src='https://medicoverbenefits.pl/wp-content/uploads/2021/07/shutterstock_1851297760.jpg'
                alt='zespół pracowników firmy CarRental'
              />
            </div>
            <div className='content'>
              <p>
                Jesteśmy firmą działającą na rynku od ponad 15 lat. Zajmujemy
                się <strong>wypożyczaniem samochodów</strong> na doby, jak i
                również prowadzimy
                <strong> sklep internetowy</strong>. Podczas naszej wieloletniej
                pracy z naszych usług skorzystało tysiące klientów!
              </p>
              <Link to='o-nas'>
                <button className='button'>Pokaż więcej...</button>
              </Link>
            </div>
          </div>
        </section>
        <section className='work'>
          <h2>JAK DZIAŁAMY?</h2>
          <div className='underline'></div>
          <div className='grid-cols-2'>
            <div className='content'>
              <p>
                Wiele osób pewnie zastanawia się na temat naszego sposobu
                działania. Otóż jest on niebywale prosty! Na początku klient
                wybiera interesujący go pojazd z listy produktów, następnie ma
                możliwość obliczenia kosztów wynajmu samochodu. Koszt wynajmu
                obliczany jest na podstawie danych osobowych klienta oraz na
                podstawie danych pojazdu. Po obliczeniu klient widzi finalną
                kwotę - jeżeli spełnia jego oczekiwania to kontaktuje się z nami
                a my przechodzimy do realizacji zamówienia.
              </p>
            </div>
            <div className='image'>
              <img
                src='https://img.freepik.com/darmowe-zdjecie/pisanie-w-notatniku_1112-168.jpg'
                alt='pisanie w notatniku'
              />
            </div>
          </div>
          <div className='grid-cols-3'>
            <div className='single-card'>
              <div className='card-img'>
                <img src={tapicon} alt='ikona łapki' />
              </div>
              <p>1. Wybór pojazdu</p>
            </div>
            <div className='single-card'>
              <div className='card-img'>
                <img src={calculatoricon} alt='ikona kalkulatora' />
              </div>
              <p>2. Obliczenie kosztów</p>
            </div>
            <div className='single-card'>
              <div className='card-img'>
                <img src={realizationicon} alt='ikona zielonego ptaszka' />
              </div>
              <p>3. Realizacja zamówienia</p>
            </div>
          </div>
        </section>
        <section className='services'>
          <h2>Usługi</h2>
          <div className='underline'></div>
          <div className='grid-cols-2'>
            <Link to='/lista-samochodow'>
              <div className='single-card-image'>
                <div className='image'>
                  <img
                    src='https://static.oferteo.pl/images/hero/samochody-zlecenia-oferty-a.jpg'
                    alt='zdjęcie samochodów z wypożyczalni'
                  />
                </div>
                <div className='items'>
                  <p>
                    <strong>Wypożyczalnia</strong> <br />
                  </p>

                  <button className='button'>Zobacz ofertę</button>
                </div>
              </div>
            </Link>
            <Link to='/sklep'>
              <div className='single-card-image'>
                <div className='image'>
                  <img
                    src='https://paczki.com.pl/wp-content/uploads/2021/09/kurier-56.png'
                    alt='zdjęcie sklepu internetowego'
                  />
                </div>
                <div className='items'>
                  <p>
                    <strong>Sklep</strong> <br />
                  </p>

                  <button className='button'>Zobacz ofertę</button>
                </div>
              </div>
            </Link>
          </div>
        </section>
        <section className='achievements'>
          <h2>Dlaczego właśnie my?</h2>
          <div className='underline'></div>
          <div className='grid-cols-3'>
            <div className='single-card'>
              <div className='card-img'>
                <img
                  src={customerrevievicon}
                  alt='ikona zadowolonych klientów'
                />
              </div>
              <p>+100 000 zadowolonych klientów</p>
            </div>
            <div className='single-card'>
              <div className='card-img'>
                <img src={babycar} alt='ikona samochodu' />
              </div>
              <p>+1000 różnych pojazdów</p>
            </div>
            <div className='single-card'>
              <div className='card-img'>
                <img src={bestprice} alt='ikona monety i łapki obok' />
              </div>
              <p>atrakcyjna cena</p>
            </div>
          </div>
        </section>
        <section className='contact'>
          <h2>Kontakt</h2>
          <div className='underline'></div>
          <div className='grid-cols-1'>
            <div className='contact-form'>
              <form action='#'>
                <input
                  type='email'
                  name=''
                  id=''
                  placeholder='Wpisz swój adres email...'
                />
                <textarea
                  name=''
                  id=''
                  placeholder='Wpisz treść wiadomości...'
                ></textarea>
                <button className='button'>Wyślij</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
