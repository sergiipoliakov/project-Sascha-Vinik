import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import userReduser from './userReduser';
import apartmentsReduser from './apartmentsReduser';

const rootReduser = combineReducers({
  user: userReduser,
  apartments: apartmentsReduser,
});

const store = configureStore({
  reducer: rootReduser,
});
// const store = createStore(rootReduser);

export default store;
