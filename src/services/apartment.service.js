import axios from 'axios';
import config from '../config';

const { BASE_URL } = config;

export const getApartments = () => {
  return axios({
    method: 'GET',
    url: `${BASE_URL}/apartments/`,
  });
};

export const fetchApartmenById = id => {
  return axios({
    method: 'GET',
    url: `${BASE_URL}/apartments/${id}`,
  });
};
