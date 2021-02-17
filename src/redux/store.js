import { createStore, combineReducers } from 'redux';
import userReduser from './userReduser';
import apartmentsReduser from './apartmentsReduser';

const rootReduser = combineReducers({
  user: userReduser,
  apartments: apartmentsReduser,
});

const store = createStore(rootReduser);

export default store;
