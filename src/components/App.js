import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import HomePage from './HomePage/HomePage';
import Car from './Car/Car';
import CarsList from './CarsList/CarsList';

import { getCarsList } from '../services/request';

class App extends Component {
  state = {
    cars: null,
  };

  componentWillMount() {
    getCarsList().then(response => {
      this.setState({
        cars: response.data,
      });
    });
  }

  render() {
    const { cars } = this.state;

    return (
      <>
        <Header />

        <Routes>
          <Route exact path='/' element={<HomePage></HomePage>} />
          <Route path='/lista-samochodow' element={<CarsList></CarsList>} />

          <Route path='/lista-samochodow/:carSlug' element={<Car></Car>} />
        </Routes>

        <Footer />
      </>
    );
  }
}

export default App;
