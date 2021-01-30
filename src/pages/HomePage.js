import React, { Component } from 'react';
import ProductList from '../components/product/ProductList';
import Container from '../components/UI/Container';
import MainTitle from '../components/UI/Typografy/title';
import ApartmentsFilter from '../components/homepage/apartments-filterr';
import { getApartments } from '../services/apartment.service';

export default class HomePage extends Component {
  state = {
    apartments: [],
    filterPrice: 0,
  };

  filterApartmentsByPrice = event => {
    const { value = 0 } = event.target;

    this.setState(() => ({
      filterPrice: Number(value),
    }));
  };

  async componentDidMount() {
    const { data } = await getApartments();
    this.setState(prevState => ({ apartments: data }));
  }

  render() {
    const { apartments, filterPrice } = this.state;
    const currentApartments = apartments.filter(
      apartment => apartment.price >= filterPrice,
    );

    return (
      <main className="homepage">
        <Container>
          <ApartmentsFilter handleChange={this.filterApartmentsByPrice} />
          <MainTitle>Подборка согласо выбору</MainTitle>
          <ProductList items={currentApartments} />
        </Container>
      </main>
    );
  }
}
