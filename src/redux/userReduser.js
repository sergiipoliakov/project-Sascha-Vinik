import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getItem as getItemFromStorage } from '../services/clientStorege';
import { loginUser as login } from '../services/auth.services';

const initialState = {
  userData: getItemFromStorage() ?? {},
  user: {},
  error: null,
  pending: false,
};

export const loginUser = createAsyncThunk(
  'user',
  async ({ email, password }) => {
    const { data } = await login({ email, password });
    return data;
  },
);

const slice = createSlice({
  name: 'user',
  initialState,

  extraReducers: {
    [loginUser.fulfilled]: (state, { payload }) => {
      state.session = payload;
      state.pending = false;
    },
    [loginUser.error]: (state, { payload }) => {
      state.error = payload;
      state.pending = false;
    },
    [loginUser.pending]: state => {
      state.pending = true;
    },
  },
});

export const { changeName, changeAge } = slice.actions;

export default slice.reducer;
