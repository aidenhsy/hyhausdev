import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import axios from 'axios';

import PhotoCard from '../components/PhotoCard';

//css
import '../test.css';

const TestPage = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const fetchPhotos = async () => {
      const { data } = await axios.get('/api/photos');
      setPhotos(data);
    };
    fetchPhotos();
  }, []);
  console.log(photos);

  return (
    <Grid container className="masonry-root">
      {photos.map((photo) => (
        <Grid item key={photo._id} className="masonry-cell">
          <PhotoCard photo={photo} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TestPage;
