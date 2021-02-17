import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

import { Provider } from 'react-redux';
import './index.css';
import store from './redux/store';
import App from './App';

// const reducer = (state = { name: 'Jone', age: 10 }, action) => state;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <UserProvider value={{ name: 'John', age: 10 }}>
          <App />
        </UserProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
