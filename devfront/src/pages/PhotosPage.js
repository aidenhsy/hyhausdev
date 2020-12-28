import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
  console.log(photos);
  return (
    <React.Fragment>
      <Button variant="outlined" component={Link} to="/">
        HomePage
      </Button>
      <div>
        {photos.map((photo) => (
          <PhotoCard key={photo._id} photo={photo} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default PhotosPage;
