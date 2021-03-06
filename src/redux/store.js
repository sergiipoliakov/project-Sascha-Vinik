import { configureStore } from '@reduxjs/toolkit';
import userReduser from './userReduser';
import apartmentsReduser from './apartmentsReduser';
import { setItem as saveItemToStorage } from '../services/clientStorege';
import throttle from 'lodash.throttle';

const store = configureStore({
  reducer: {
    user: userReduser,
    apartments: apartmentsReduser,
  },
});

store.subscribe(
  throttle(() => {
    saveItemToStorage(store.getState().user);
  }, 300),
);

export default store;
