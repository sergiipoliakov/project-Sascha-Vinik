import React, { Component, useState, useEffect } from 'react';

import Reviews from '../components/apartments/Reviews';

import { fetchApartmenById } from '../services/apartment.service.js';
import ApartmentView from '../components/apartments';
// class Apartment extends Component {
//   state = {
//     apartment: null,
//   };

//   async componentDidMount() {
//     try {
//       const { match } = this.props;
//       const { id } = match.params;
//       const result = await fetchApartmenById(id);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   render() {
//     return <Reviews />;
//   }
// }

// const Apartment = ({ match }) => {
//   const { id } = match.params;
//   axios
//     .get(`https://apt-booking-api.herokuapp.com/apartments/${id}`)
//     .then(res => {});
//   return <Reviews />;
// };

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
  }, [match.paprams]);

  //   axios
  //     .get(`https://apt-booking-api.herokuapp.com/apartments/${id}`)
  //     .then(res => {});

  return (
    <div>
      {apartmentsData && <h1>rating{apartmentsData.rating}</h1>}
      <div>
        <ApartmentView apartment={apartmentsData} />
      </div>

      <Reviews />
    </div>
  );
};

export default Apartment;
