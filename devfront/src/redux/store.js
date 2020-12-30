import { configureStore } from '@reduxjs/toolkit';
import { photoListSlice } from './photo';
import { userInfoSlice } from './user';

const reducer = {
  photoList: photoListSlice.reducer,
  userInfo: userInfoSlice.reducer,
};

const store = configureStore({ reducer });

export default store;
