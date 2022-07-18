import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to='/'>
        <h1>CarRental</h1>
      </Link>

      <ul>
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
    </nav>
  );
};

export default Nav;
