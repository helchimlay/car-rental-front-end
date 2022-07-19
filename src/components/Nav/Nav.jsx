import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import navSlide from '../HomePage/js/burger';

const Nav = () => {
  const toggleNav = () => {
    navSlide();
  };

  return (
    <nav>
      <Link to='/'>
        <h1>CarRental</h1>
      </Link>

      <ul className='nav-links'>
        <li>
          <Link to='/'>Strona główna</Link>
        </li>
        <li>
          <Link to='/lista-samochodow'>Lista samochodów</Link>
        </li>
        <li>
          <Link to='/'>Sklep</Link>
        </li>
      </ul>
      <div className='burger' onClick={toggleNav}>
        <div className='dash1'></div>
        <div className='dash2'></div>
        <div className='dash3'></div>
      </div>
    </nav>
  );
};

export default Nav;
