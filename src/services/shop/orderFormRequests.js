import axios from 'axios';

export const getPaymentMethods = async () => {
  const response = await axios.get('../jsons/payment_methods.json');
  return response.data.paymentMethods;
};

export const getDeliveryMethods = async () => {
  const response = await axios.get('../jsons/delivery_methods.json');
  return response.data.deliveryMethods;
};
