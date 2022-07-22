import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import { routes } from '../config/routes/routes';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import HomePage from './HomePage/HomePage';
import ErrorPage from './ErrorPage/ErrorPage';
import Car from './Car/Car';
import CarsList from './CarsList/CarsList';
import Calculator from './Calculator/Calculator';
import Shop from './Shop/Shop';
import OrderForm from './Shop/subcomponents/OrderForm/OrderForm';

const App = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route exact path='/' element={<HomePage></HomePage>} />
        <Route path={routes.cars} element={<CarsList></CarsList>} />
        <Route path={routes.shop} element={<OrderForm></OrderForm>} />
        <Route path={routes.car()} element={<Car></Car>} />
        <Route path={routes.calculator} element={<Calculator></Calculator>} />
        <Route
          path={routes.carCalculator()}
          element={<Calculator></Calculator>}
        />
        <Route path='*' element={<ErrorPage></ErrorPage>} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
