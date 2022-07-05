import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <main className='home'>
      <h2>Witamy w aplikacji </h2>
      <h1>CarRental</h1>
      <h2 className='description'>
        Zajmujemy się wypożyczaniem samochodów na doby!
      </h2>
      <ul>
        <li>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='blue'
              className='bi bi-person-check-fill'
              viewBox='0 0 16 16'
            >
              <path d='M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z' />
              <path d='M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
            </svg>
            100 000 zadowolonych użytkowników!
          </span>
        </li>
        <li>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 640 512'
              fill='red'
            >
              <path d='M640 320V368C640 385.7 625.7 400 608 400H574.7C567.1 445.4 527.6 480 480 480C432.4 480 392.9 445.4 385.3 400H254.7C247.1 445.4 207.6 480 160 480C112.4 480 72.94 445.4 65.33 400H32C14.33 400 0 385.7 0 368V256C0 228.9 16.81 205.8 40.56 196.4L82.2 92.35C96.78 55.9 132.1 32 171.3 32H353.2C382.4 32 409.1 45.26 428.2 68.03L528.2 193C591.2 200.1 640 254.8 640 319.1V320zM171.3 96C158.2 96 146.5 103.1 141.6 116.1L111.3 192H224V96H171.3zM272 192H445.4L378.2 108C372.2 100.4 362.1 96 353.2 96H272V192zM525.3 400C527 394.1 528 389.6 528 384C528 357.5 506.5 336 480 336C453.5 336 432 357.5 432 384C432 389.6 432.1 394.1 434.7 400C441.3 418.6 459.1 432 480 432C500.9 432 518.7 418.6 525.3 400zM205.3 400C207 394.1 208 389.6 208 384C208 357.5 186.5 336 160 336C133.5 336 112 357.5 112 384C112 389.6 112.1 394.1 114.7 400C121.3 418.6 139.1 432 160 432C180.9 432 198.7 418.6 205.3 400z' />
            </svg>
            10 000 samochodów
          </span>
        </li>
        <li>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='green'
              className='bi bi-coin'
              viewBox='0 0 16 16'
            >
              <path d='M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z' />
              <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
              <path d='M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z' />
            </svg>
            atrakcyjna cena
          </span>
        </li>
      </ul>
      <div className='buttons'>
        <Link to='/lista-samochodow'>
          <button className='button-first'>Oferta</button>
        </Link>
        <Link to='/kalkulator'>
          <button className='button-second'>Kalkulator</button>
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
