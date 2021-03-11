import confic from '../config';
import axios from 'axios';
import clientStorege from './clientStorege';

export const requestApartmentsOrder = id => {
  let token;
  try {
    const token = clientStorege.get('state').session.token;
  } catch (error) {}
  return axios({
    method: 'POST',
    url: `https://apt-booking-api.herokuapp.com/orders}`,
    data: {
      id,
      date: new Date(),
    },
    headers: {
      Autorisation: `Bearar ${token}`,
    },
  });
};
