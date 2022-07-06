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

// export const getCarsListByFiltering = async (brand, fuel, category) => {
//   await axios
//     .post('./jsons/url.json', null, {
//       params: {
//         marka: brand,
//         rodzaj_paliwa: fuel,
//         kategoria_cenowa: category,
//       },
//     })
//     .then(response => response.status)
//     .catch(error => console.log(error));
// };

// export const getCarsListByFiltering = async (brand, fuel, category) => {
//   const data = {};
//   const params = new URLSearchParams({
//     marka: brand,
//     rodzaj_paliwa: fuel,
//     kategoria_cenowa: category,
//   }).toString();

//   const url = 'http://localhost:3000/jsons/url.json?' + params;
//   axios
//     .post(url, data, {})
//     .then(res => {
//       console.log(res);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };
export const getCarsListByFiltering = async (brand, fuel, category) => {
  const json = JSON.stringify({
    marka: brand,
    rodzaj_paliwa: fuel,
    kategoria_cenowa: category,
  });
  await axios.post('./jsons/url.json', json, {});
};
