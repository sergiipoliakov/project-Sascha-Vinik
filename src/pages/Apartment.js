import React, { useState, useEffect } from 'react';

import { fetchApartmenById } from '../services/apartment.service.js';

import ApartmentView from '../components/apartments';

const Apartment = ({ match }) => {
  const [apartmentsData, setApartment] = useState(null); //[value, changeValue]

  useEffect(() => {
    const asyncRequest = async () => {
      try {
        const { id } = match.params;
        const { data } = await fetchApartmenById(id);
        setApartment(data);
      } catch (error) {
        console.log(error);
      }
    };
    asyncRequest();
  }, [match.params]);

  return <ApartmentView apartment={apartmentsData} />;
};

export default Apartment;
