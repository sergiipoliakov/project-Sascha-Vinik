import React from 'react';
import HomePage from './pages/HomePage';
// import ApartmentPage from './pages/Apartment';
import Login from './components/auth/login';
import Registration from './components/auth/registration';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <>
      <HomePage />
      <Login />
      <Registration />
      <Footer />
      {/* <ApartmentPage /> */}
    </>
  );
}

export default App;
