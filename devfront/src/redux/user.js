import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : {};

//USER LOGIN
export const userLoginSlice = createSlice({
  name: 'userLogin',
  initialState: { loading: 'idle', userInfo: userInfoFromStorage },
  reducers: {
    userLoginLoading(state) {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    userLoginReceived(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.userInfo = action.payload;
      }
    },
    userLoginError(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.error = action.payload;
      }
    },
  },
});

export const {
  userLoginLoading,
  userLoginReceived,
  userLoginError,
} = userLoginSlice.actions;

export const login = (email, password) => async (dispatch, getState) => {
  dispatch(userLoginLoading());
  try {
    const { data } = await axios.post('/api/users/login', {
      email,
      password,
    });
    dispatch(userLoginReceived(data));
    const userInfo = getState().userLogin.userInfo;
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  } catch (error) {
    dispatch(userLoginError(error.toString()));
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  window.location.reload();
};

//USER REGISTER
export const userRegisterSlice = createSlice({
  name: 'userRegister',
  initialState: { loading: 'idle', userInfo: userInfoFromStorage },
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
} = userRegisterSlice.actions;

export const register = (name, email, password, city) => async (
  dispatch,
  getState
) => {
  dispatch(userRegisterLoading());
  try {
    const { data } = await axios.post('/api/users', {
      name,
      email,
      password,
      city,
    });
    dispatch(userRegisterReceived(data));
    dispatch(userLoginLoading());
    dispatch(userLoginReceived(data));
    const userInfo = getState().userRegister.userInfo;
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  } catch (error) {
    dispatch(userRegisterError(error.toString()));
  }
};

//USER DETAILS
export const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState: { loading: 'idle', user: {} },
  reducers: {
    userDetailsLoading(state) {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    userDetailsReceived(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.user = action.payload;
      }
    },
    userDetailsError(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.error = action.payload;
      }
    },
  },
});

export const {
  userDetailsLoading,
  userDetailsReceived,
  userDetailsError,
} = userDetailsSlice.actions;

export const getUserDetails = (id) => async (dispatch, getState) => {
  dispatch(userDetailsLoading());
  try {
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/users/${id}`, config);
    console.log(data);
    dispatch(userDetailsReceived(data));
  } catch (error) {
    dispatch(userDetailsError(error.toString()));
  }
};

//USER UPDATE PROFILE
export const userUpdateProfileSlice = createSlice({
  name: 'userUpdateProfile',
  initialState: { loading: 'idle' },
  reducers: {
    userUpdateProfileLoading(state) {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    userUpdateProfileReceived(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.userInfo = action.payload;
      }
    },
    userUpdateProfileError(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.error = action.payload;
      }
    },
  },
});

export const {
  userUpdateProfileLoading,
  userUpdateProfileReceived,
  userUpdateProfileError,
} = userUpdateProfileSlice.actions;

export const updateUserProfile = (user) => async (dispatch, getState) => {
  dispatch(userUpdateProfileLoading());
  try {
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(`/api/users/profile`, user, config);
    dispatch(userUpdateProfileReceived(data));
  } catch (error) {
    dispatch(userUpdateProfileError(error.toString()));
  }
};
