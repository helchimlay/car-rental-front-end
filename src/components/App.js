import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import HomePage from './HomePage/HomePage';
import ErrorPage from './ErrorPage/ErrorPage';
import Car from './Car/Car';
import CarsList from './CarsList/CarsList';
import Calculator from './Calculator/Calculator';

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path='/' element={<HomePage></HomePage>} />
        <Route path='/lista-samochodow' element={<CarsList></CarsList>} />
        <Route path='/lista-samochodow/:carSlug' element={<Car></Car>} />
        <Route path='/kalkulator' element={<Calculator></Calculator>} />
        <Route path='*' element={<ErrorPage></ErrorPage>} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
