import { createStore } from 'redux';
import actions, { types } from './actions';

const initialState = {
  user: {
    name: 'John',
    age: 15,
  },
  notes: {},
};
const reduser = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_APARTMENT:
      return [...state, action.payload];

    case types.REMOVE_APARTMENT:
      return state.filter(apartment => apartment.id !== actions.payload);

    default:
      return state;
  }
};

const store = createStore(reduser);

export default store;
