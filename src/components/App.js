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
import Regulations from './Regulations/Regulations';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import ScrollToTop from '../js/scrollTop';

const App = () => {
  return (
    <>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route exact path='/' element={<HomePage></HomePage>} />
        <Route path={routes.cars} element={<CarsList></CarsList>} />
        <Route path={routes.shop} element={<OrderForm></OrderForm>} />
        <Route path={routes.car()} element={<Car></Car>} />
        <Route path={routes.calculator} element={<Calculator></Calculator>} />
        <Route
          path={routes.regulations}
          element={<Regulations></Regulations>}
        />
        <Route
          path={routes.privacy_policy}
          element={<PrivacyPolicy></PrivacyPolicy>}
        />
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
