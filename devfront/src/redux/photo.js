import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// @desc list all photos
export const photoListSlice = createSlice({
  name: 'photoList',
  initialState: { loading: 'idle', photos: [] },
  reducers: {
    photoListLoading(state) {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    photoListReceived(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.photos = action.payload;
      }
    },
    photoListError(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.error = action.payload;
      }
    },
  },
});

export const {
  photoListLoading,
  photoListReceived,
  photoListError,
} = photoListSlice.actions;

export const fetchPhotos = () => async (dispatch) => {
  dispatch(photoListLoading());
  try {
    const response = await axios.get('/api/photos');
    dispatch(photoListReceived(response.data));
  } catch (error) {
    dispatch(photoListError(error.toString()));
  }
};

// @desc create a photo
export const photoCreateSlice = createSlice({
  name: 'photoCreate',
  initialState: { loading: 'idle', photo: {} },
  reducers: {
    photoCreateLoading(state) {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    photoCreateReceived(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.photo = action.payload;
      }
    },
    photoCreateError(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.error = action.payload;
      }
    },
    photoCreateReset() {},
  },
});

export const {
  photoCreateLoading,
  photoCreateReceived,
  photoCreateError,
  photoCreateReset,
} = photoCreateSlice.actions;

export const createPhoto = () => async (dispatch) => {
  dispatch(photoListLoading());
  try {
    const response = await axios.post('/api/photos', {});
    dispatch(photoListReceived(response.data));
  } catch (error) {
    dispatch(photoListError(error.toString()));
  }
};
