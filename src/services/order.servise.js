import axios from 'axios';
import config from '../config';
import clientStorage from './clientStorage';

const { BASE_URL } = config;

export const requestApartmentsOrder = apartmentId => {
  let token;

  try {
    token = clientStorage.getItem('state').session.token;
  } catch (error) {
    token = '';
  }
  return axios({
    method: 'POST',
    url: `${BASE_URL}/orders/`,
    data: {
      apartmentId,
      date: new Date(),
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
