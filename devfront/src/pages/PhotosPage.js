import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';

import PhotoCard from '../components/PhotoCard';

const PhotosPage = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const fetchPhotos = async () => {
      const { data } = await axios.get('/api/photos');
      setPhotos(data);
    };
    fetchPhotos();
  }, []);

  return (
    <React.Fragment>
      <Grid container style={{ margin: 0 }}>
        {photos.map((photo) => (
          <Grid item key={photo._id} sm={12} md={6} lg={4} xl={3}>
            <PhotoCard photo={photo} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default PhotosPage;
