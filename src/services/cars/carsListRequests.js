import axios from 'axios';

export const getCarsList = async () => {
  const response = await axios.get(`./jsons/cars_data.json`);
  return response.data.cars_data;
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
  return response.data.cars_data.filter(item => {
    let showCar = true;
    if (brand && brand !== item.car_details.brand) {
      showCar = false;
    }
    if (fuel && fuel !== item.car_details.fuel) {
      showCar = false;
    }
    if (category && category !== item.car_details.category) {
      showCar = false;
    }

    return showCar;
  });
};
