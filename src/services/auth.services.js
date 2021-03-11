import axios from 'axios';
import config from '../config';
const { BASE_URL } = config;
export const loginUser = ({ email, password }) => {
  return axios.post(`${BASE_URL}/users/login`, {
    email,
    password,
  });
};

export const registerUser = ({ email, password }) => {
  return axios.post(`${BASE_URL}/users/register`, {
    email,
    password,
  });
};
