import axios from 'axios';

export const getCarsList = async queryString => {
  const response = await axios.get(`./jsons/cars_data.json${queryString}`);
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

export const getCarsListByFiltering = async (brand, fuel, category) => {
  const params = {
    marka: brand,
    rodzaj_paliwa: fuel,
    kategoria_cenowa: category,
  };
  await axios.get('./jsons/url.json', { params });
};
