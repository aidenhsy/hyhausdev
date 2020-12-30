import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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
