import axios from 'axios';

export const getCarsList = async () => {
  const response = await axios.get(`./jsons/cars_data.json`);
  return response.data.cars_data;
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
  const response = await axios.get('./jsons/cars_data.json', { params });
  if (brand && fuel && category) {
    return response.data.cars_data.filter(
      item =>
        item.car_details.brand === brand &&
        item.car_details.fuel === fuel &&
        item.car_details.category === category
    );
  } else if (brand && fuel) {
    return response.data.cars_data.filter(
      item => item.car_details.brand === brand && item.car_details.fuel === fuel
    );
  } else if (brand && category) {
    return response.data.cars_data.filter(
      item =>
        item.car_details.brand === brand &&
        item.car_details.category === category
    );
  } else if (category && fuel) {
    return response.data.cars_data.filter(
      item =>
        item.car_details.fuel === fuel && item.car_details.category === category
    );
  } else if (brand) {
    return response.data.cars_data.filter(
      item => item.car_details.brand === brand
    );
  } else if (fuel) {
    return response.data.cars_data.filter(
      item => item.car_details.fuel === fuel
    );
  } else if (category) {
    return response.data.cars_data.filter(
      item => item.car_details.category === category
    );
  }
};
