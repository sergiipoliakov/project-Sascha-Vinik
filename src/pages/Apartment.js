import React from 'react';

import Reviews from '../components/apartmens/Reviews';
import axios from 'axios';

const Apartment = ({ match }) => {
  const { id } = match.params;
  axios
    .get(`https://apt-booking-api.herokuapp.com/apartments/${id}`)
    .then(res => {});
  return <Reviews />;
};

export default Apartment;
