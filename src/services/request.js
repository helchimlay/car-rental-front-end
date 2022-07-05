import axios from 'axios';

export const getCarsList = async () => {
  const response = await axios.get('./jsons/cars_data.json');
  return response;
};

export const getCarBySlug = async slug => {
  // const response = await axios.get('./jsons/cars_data.json?CarBrandId=11&PriceTo=5000&CarFuelType=BenzynaLPG');
  const response = await axios.get('../jsons/cars_data.json');
  return response.data.cars_data.find(car => car.slug === slug);
};
