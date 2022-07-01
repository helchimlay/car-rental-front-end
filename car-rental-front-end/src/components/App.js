import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Car from './Car/Car';

class App extends Component {
  state = { 
    car: null
 } 

 componentDidMount() {
    fetch('./jsons/cars_data.json')
    .then((response) => {
        if(response.ok) {
            return response;
        } else {
            throw Error(`Wystąpił błąd nr: ${response.status}`)
        }
    })
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        this.setState({
            car: response
        })
    })
    .catch((error) => {
        console.warn(`Wystąpił błąd nr: ${error}`)
    });

 } 
  render() { 

    const {car} = this.state

    return (

      <>
        <Header/>
        {car && <Car car={car}/>}
        <Footer/>
    </>

    );
  }
}
 
export default App;
