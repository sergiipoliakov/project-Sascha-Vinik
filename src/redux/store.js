import { configureStore } from '@reduxjs/toolkit';
import userReduser from './userReduser';
import apartmentsReduser from './apartmentsReduser';

const store = configureStore({
  reducer: {
    user: userReduser,
    apartments: apartmentsReduser,
  },
});

export default store;
