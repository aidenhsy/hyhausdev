import { configureStore } from '@reduxjs/toolkit';
import { photoListSlice, photoCreateSlice } from './photo';
import {
  userRegisterSlice,
  userLoginSlice,
  userDetailsSlice,
  userUpdateProfileSlice,
  userPhotoCountSlice,
  userPublicDetailsSlice,
} from './user';

const reducer = {
  photoList: photoListSlice.reducer,
  photoCreate: photoCreateSlice.reducer,

  userRegister: userRegisterSlice.reducer,
  userLogin: userLoginSlice.reducer,
  userDetails: userDetailsSlice.reducer,
  userUpdateProfile: userUpdateProfileSlice.reducer,
  userPhotoCount: userPhotoCountSlice.reducer,
  userPublicDetails: userPublicDetailsSlice.reducer,
};

const store = configureStore({ reducer });

export default store;
