import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';

import PhotoCard from '../components/PhotoCard';

import { useSelector, useDispatch } from 'react-redux';
import { fetchPhotos } from '../redux/photo';

const Masonry = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const { photos } = useSelector((state) => state.photoList);

  return (
    <React.Fragment>
      <Grid container style={{ margin: 0 }}>
        {photos.map((photo) => (
          <Grid item key={photo._id} lg={4}>
            <PhotoCard photo={photo} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default Masonry;
