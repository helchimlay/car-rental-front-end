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

export const getFuelsPrices = async () => {
  const response = await axios.get('../jsons/fuels_data.json');
  return response.data;
};

export const getLocations = async (present_location, future_location) => {
  const options = {
    method: 'GET',
    url: 'https://distanceto.p.rapidapi.com/get',
    params: {
      route: `[{"t":"${present_location}"},{"t":"${future_location}"}]`,
      car: 'true',
    },
    headers: {
      'X-RapidAPI-Key': 'af01419181mshfce3248d02a958ap19da96jsnf779398ef605',
      'X-RapidAPI-Host': 'distanceto.p.rapidapi.com',
    },
  };

  axios
    .request(options)
    .then(function (response) {
      return response.data.steps[0].distance.car.distance;
    })
    .catch(function (error) {
      console.error(error);
    });
};
