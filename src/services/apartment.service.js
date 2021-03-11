import axios from 'axios';
// import config from '../config';

// const BASE_URL = config;

export const getApartments = () => {
  return axios({
    method: 'GET',
    url: 'https://apt-booking-api.herokuapp.com/apartments/',
  });
};

export const fetchApartmenById = id => {
  return axios({
    method: 'GET',
    url: `https://apt-booking-api.herokuapp.com/apartments/${id}`,
  });
};
