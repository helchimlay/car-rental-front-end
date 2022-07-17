import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import { Helmet } from 'react-helmet';

const HomePage = () => {
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
          <h2>Witamy w aplikacji </h2>
          <h1>CarRental</h1>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          fill='white'
          className='bi bi-arrow-down-circle bounce-top'
          viewBox='0 0 16 16'
        >
          <path
            fill-rule='evenodd'
            d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z'
          />
        </svg>
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
                src='https://pixabay.com/get/g2e1c74d8108c3a9118a2e150de9068842d72da379711152119e821c4a1d50ac8f43fc9839cc8d65b5190e6d5e5aca3ab4f52589e0f332f98251512b81a8bdfdf_1920.jpg'
                alt='pisanie w notatniku'
              />
            </div>
          </div>
          <div className='grid-cols-3'>
            <div className='single-card'>
              <div className='svg'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  className='bi bi-hand-index-thumb'
                  viewBox='0 0 16 16'
                >
                  <path d='M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1zM8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5.114 5.114 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.632 2.632 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z' />
                </svg>
              </div>
              <p>1. Wybór pojazdu</p>
            </div>
            <div className='single-card'>
              <div className='svg'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  className='bi bi-calculator'
                  viewBox='0 0 16 16'
                >
                  <path d='M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z' />
                  <path d='M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z' />
                </svg>
              </div>
              <p>2. Obliczenie kosztów</p>
            </div>
            <div className='single-card'>
              <div className='svg'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  className='bi bi-check-circle'
                  viewBox='0 0 16 16'
                >
                  <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                  <path d='M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z' />
                </svg>
              </div>
              <p>3. Realizacja zamówienia</p>
            </div>
          </div>
        </section>
        <section className='services'>
          <h2>Usługi</h2>
          <div className='underline'></div>
          <div className='grid-cols-2'>
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
                <Link to='/lista-samochodow'>
                  <button className='button'>Zobacz ofertę</button>
                </Link>
              </div>
            </div>
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
                <Link to='/'>
                  <button className='button'>Zobacz ofertę</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className='achievements'>
          <h2>Dlaczego właśnie my?</h2>
          <div className='underline'></div>
          <div className='grid-cols-3'>
            <div className='single-card'>
              <div className='svg'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='blue'
                  className='bi bi-person-check-fill'
                  viewBox='0 0 16 16'
                >
                  <path d='M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z' />
                  <path d='M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
                </svg>
              </div>
              <p>+100 000 zadowolonych klientów</p>
            </div>
            <div className='single-card'>
              <div className='svg'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 640 512'
                  fill='red'
                >
                  <path d='M640 320V368C640 385.7 625.7 400 608 400H574.7C567.1 445.4 527.6 480 480 480C432.4 480 392.9 445.4 385.3 400H254.7C247.1 445.4 207.6 480 160 480C112.4 480 72.94 445.4 65.33 400H32C14.33 400 0 385.7 0 368V256C0 228.9 16.81 205.8 40.56 196.4L82.2 92.35C96.78 55.9 132.1 32 171.3 32H353.2C382.4 32 409.1 45.26 428.2 68.03L528.2 193C591.2 200.1 640 254.8 640 319.1V320zM171.3 96C158.2 96 146.5 103.1 141.6 116.1L111.3 192H224V96H171.3zM272 192H445.4L378.2 108C372.2 100.4 362.1 96 353.2 96H272V192zM525.3 400C527 394.1 528 389.6 528 384C528 357.5 506.5 336 480 336C453.5 336 432 357.5 432 384C432 389.6 432.1 394.1 434.7 400C441.3 418.6 459.1 432 480 432C500.9 432 518.7 418.6 525.3 400zM205.3 400C207 394.1 208 389.6 208 384C208 357.5 186.5 336 160 336C133.5 336 112 357.5 112 384C112 389.6 112.1 394.1 114.7 400C121.3 418.6 139.1 432 160 432C180.9 432 198.7 418.6 205.3 400z' />
                </svg>
              </div>
              <p>+1000 różnych pojazdów</p>
            </div>
            <div className='single-card'>
              <div className='svg'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  fill='yellow'
                >
                  <path d='M320 96H192L144.6 24.88C137.5 14.24 145.1 0 157.9 0H354.1C366.9 0 374.5 14.24 367.4 24.88L320 96zM192 128H320C323.8 130.5 328.1 133.3 332.1 136.4C389.7 172.7 512 250.9 512 416C512 469 469 512 416 512H96C42.98 512 0 469 0 416C0 250.9 122.3 172.7 179 136.4C183.9 133.3 188.2 130.5 192 128V128zM276.1 224C276.1 212.9 267.1 203.9 255.1 203.9C244.9 203.9 235.9 212.9 235.9 224V230C230.3 231.2 224.1 232.9 220 235.1C205.1 241.9 192.1 254.5 188.9 272.8C187.1 283 188.1 292.9 192.3 301.8C196.5 310.6 203 316.8 209.6 321.3C221.2 329.2 236.5 333.8 248.2 337.3L250.4 337.9C264.4 342.2 273.8 345.3 279.7 349.6C282.2 351.4 283.1 352.8 283.4 353.7C283.8 354.5 284.4 356.3 283.7 360.3C283.1 363.8 281.2 366.8 275.7 369.1C269.6 371.7 259.7 373 246.9 371C240.9 370 230.2 366.4 220.7 363.2C218.5 362.4 216.3 361.7 214.3 361C203.8 357.5 192.5 363.2 189 373.7C185.5 384.2 191.2 395.5 201.7 398.1C202.9 399.4 204.4 399.9 206.1 400.5C213.1 403.2 226.4 407.4 235.9 409.6V416C235.9 427.1 244.9 436.1 255.1 436.1C267.1 436.1 276.1 427.1 276.1 416V410.5C281.4 409.5 286.6 407.1 291.4 405.9C307.2 399.2 319.8 386.2 323.1 367.2C324.9 356.8 324.1 346.8 320.1 337.7C316.2 328.7 309.9 322.1 303.2 317.3C291.1 308.4 274.9 303.6 262.8 299.9L261.1 299.7C247.8 295.4 238.2 292.4 232.1 288.2C229.5 286.4 228.7 285.2 228.5 284.7C228.3 284.3 227.7 283.1 228.3 279.7C228.7 277.7 230.2 274.4 236.5 271.6C242.1 268.7 252.9 267.1 265.1 268.1C269.5 269.7 283 272.3 286.9 273.3C297.5 276.2 308.5 269.8 311.3 259.1C314.2 248.5 307.8 237.5 297.1 234.7C292.7 233.5 282.7 231.5 276.1 230.3L276.1 224z' />
                </svg>
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
