import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <h1>
        <Link to='/'>CarRental</Link>
      </h1>
    </nav>
  );
};

export default Nav;
