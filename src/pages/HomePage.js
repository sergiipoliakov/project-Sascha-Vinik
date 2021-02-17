import React, { Component } from 'react';
// import ProductList from '../components/product/ProductList';
import Container from '../components/UI/Container';
import MainTitle from '../components/UI/Typografy/title';
import ApartmentsFilter from '../components/homepage/apartments-filterr';
import { getApartments } from '../services/apartment.service';
import debounce from 'lodash.debounce';
import asyncComponent from '../components/async-loader';

import Tooltip from '../components/UI/Tooltip';
import MouseTracker from '../components/MouseTracker';
// import { connect } from 'react-redux';

// import { render } from '@testing-library/react';

const ProductList = asyncComponent({
  loader: () => import('../components/product/ProductList'),
});

export default class HomePage extends Component {
  state = {
    apartments: [],
    filterPrice: 0,
    cities: [],
    filterCity: '',
  };

  filterApartmentsByPrice = event => {
    const { value = 0 } = event.target;

    this.setState(() => ({
      filterPrice: Number(value),
    }));
  };

  handleCityChange = event => {
    const { value = '' } = event.target;

    this.setState(() => ({
      filterCity: value,
    }));
  };

  async componentDidMount() {
    const { data } = await getApartments();
    const cities = [
      ...new Set([...data.map(apartment => apartment.location.city)]),
    ];
    this.setState(prevState => ({
      apartments: data,
      cities,
    }));
  }

  render() {
    const { apartments, filterPrice, cities, filterCity } = this.state;
    const currentApartments = apartments.filter(apartment => {
      const isHigherPrice = apartment.price >= filterPrice;
      const isCityMached = filterCity
        ? apartment.location.city === filterCity
        : true;

      return isHigherPrice && isCityMached;
    });

    return (
      <main className="homepage">
        <Container>
          <ApartmentsFilter
            cities={cities}
            handleChange={debounce(this.filterApartmentsByPrice, 200)}
            handleCityChange={this.handleCityChange}
          />
          <MainTitle>Подборка согласо выбору</MainTitle>

          <ProductList items={currentApartments} />
        </Container>
      </main>
    );
  }
}
