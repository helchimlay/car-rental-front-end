import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <h1>CarRental</h1>
      </Link>
    </header>
  );
};

export default Header;
