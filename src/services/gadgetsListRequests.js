import axios from 'axios';

export const getGadgets = async () => {
  const response = await axios.get('../jsons/gadgets.json');
  return response.data.gadgets;
};
