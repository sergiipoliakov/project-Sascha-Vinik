import React from 'react';
// import ProductList from './components/product/ProductList';
// import Container from './components/UI/Container';

// import ApartmentPage from './pages/Apartment';
import Login from './components/auth/login';
import Registration from './components/auth/registration';
import Footer from './components/footer';
import './App.css';

const mockData = [
  {
    id: '1',

    price: 2312,
    rating: 4.5,
  },
  {
    id: '2',

    price: 4433,
    rating: 3.8,
  },
  {
    id: '3',

    price: 2532,
    rating: 2.8,
  },
  {
    id: '4',

    price: 5555,
    rating: 2.3,
  },
  {
    id: '5',

    price: 2233,
    rating: 4.8,
  },
  {
    id: '6',

    price: 2312,
    rating: 3.1,
  },
];

function App() {
  return (
    <>
      <Login />
      <Registration />
      <Footer />
      {/* <ApartmentPage /> */}

      {/* <ProductList items={mockData} /> */}
    </>
  );
}

export default App;
