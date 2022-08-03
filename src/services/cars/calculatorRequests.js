import axios from 'axios';

export const getFuelsPrices = async () => {
  const response = await axios.get('../jsons/fuels_data.json');
  return response.data;
};

export const getLocations = async (present_location, future_location) => {
  // const options = {
  //   method: "GET",
  //   url: "https://distanceto.p.rapidapi.com/get",
  //   params: {
  //     route: `[{"t":"${present_location}"},{"t":"${future_location}"}]`,
  //     car: "true",
  //   },
  //   headers: {
  //     "X-RapidAPI-Key": "af01419181mshfce3248d02a958ap19da96jsnf779398ef605",
  //     "X-RapidAPI-Host": "distanceto.p.rapidapi.com",
  //   },
  // }
  // const response = await axios.request(options)
  // return response.data.steps[0].distance.car.distance
  return 1500;
};
