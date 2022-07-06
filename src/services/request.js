import axios from 'axios';

export const getCarsList = async () => {
  const response = await axios.get('./jsons/cars_data.json');
  return response;
};

export const getCarBySlug = async slug => {
  const response = await axios.get('../jsons/cars_data.json');
  return response.data.cars_data.find(car => car.slug === slug);
};

export const getSelectOptions = async () => {
  const response = await axios.get('./jsons/cars_to_rent.json');
  return response.data;
};

// const response = await axios.get('./jsons/cars_data.json?CarBrandId=11&PriceTo=5000&CarFuelType=BenzynaLPG');
export const getCarsListByFiltering = async (brand, fuel, category) => {
  const response = await axios.get('./jsons/cars_data.json', null, {
    params: { marka: brand, rodzaj_paliwa: fuel, kategoria_cenowa: category },
  });
  return response;
};
