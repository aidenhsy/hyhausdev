import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: { loading: 'idle', userInfo: {} },
  reducers: {
    userRegisterLoading(state) {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    userRegisterReceived(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.userInfo = action.payload;
      }
    },
    userRegisterError(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.error = action.payload;
      }
    },
  },
});

export const {
  userRegisterLoading,
  userRegisterReceived,
  userRegisterError,
} = userInfoSlice.actions;

export const register = (name, email, password, city) => async (dispatch) => {
  dispatch(userRegisterLoading());
  try {
    const response = await axios.post('/api/users', {
      name,
      email,
      password,
      city,
    });
    dispatch(userRegisterReceived(response.data));
  } catch (error) {
    dispatch(userRegisterError(error.toString()));
  }
};
