import axios from 'axios';

export const getCarBySlug = async slug => {
  const response = await axios.get('../jsons/cars_data.json');
  return response.data.cars_data.find(car => car.slug === slug);
};
