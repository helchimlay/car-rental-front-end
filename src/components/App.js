import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Car from './Car/Car';
import CarsList from './CarsList/CarsList';

import request from '../services/request';

class App extends Component {
  state = { 
    car: null
 } 

 componentWillMount() {
    request().then(response => {
        this.setState({
            car: response.data
        })
    })
 } 

  render() { 
    const {car} = this.state

    return (

      <>
        <Header/>
        {/* {car && <Car car={car} />} */}
        {car && <CarsList carslist={car}></CarsList>}
        <Footer/>
    </>

    );
  }
}
 
export default App;
