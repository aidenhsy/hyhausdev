import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';

import { fetchPhotos } from '../redux/photo';
import { useDispatch, useSelector } from 'react-redux';

import Photo from '../components/Photo';

const ProfilePosts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);
  const { photos } = useSelector((state) => state.photoList);

  return (
    <div
      style={{
        display: 'flex',
        padding: '2em',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      {photos.map((photo) => (
        <Grid item key={photo._id} sm={12} md={6} lg={4} xl={3}>
          <Photo photo={photo} />
        </Grid>
      ))}
    </div>
  );
};

export default ProfilePosts;
