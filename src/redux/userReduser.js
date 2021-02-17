import { types } from './actions';

const initialState = {
  user: {
    name: '',
    age: '',
  },
  notes: {},
};
const reduser = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_NAME:
      return {
        ...state,

        name: action.payload,
      };
    case types.CHANGE_AGE:
      return {
        ...state,

        age: action.payload,
      };
    default:
      return state;
  }
};

export default reduser;
