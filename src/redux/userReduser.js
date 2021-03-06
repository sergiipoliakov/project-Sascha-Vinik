import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  age: '',
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeAge(state, action) {
      state.age = action.payload;
    },
  },
});
console.log(slice.actions.changeName.toString());

export const { changeName, changeAge } = slice.actions;

export default slice.reducer;
