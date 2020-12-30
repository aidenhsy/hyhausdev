import { configureStore } from '@reduxjs/toolkit';
import { photoListSlice } from './photo';
import { userRegisterSlice, userLoginSlice } from './user';

const reducer = {
  photoList: photoListSlice.reducer,
  userRegister: userRegisterSlice.reducer,
  userLogin: userLoginSlice.reducer,
};

const store = configureStore({ reducer });

export default store;
