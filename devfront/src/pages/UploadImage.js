import React, { useEffect } from 'react';

import { photoCreateReset } from '../redux/photo';
import { useDispatch } from 'react-redux';

const UploadImage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(photoCreateReset());
  }, [dispatch]);

  return (
    <React.Fragment>
      <div>Hi</div>
    </React.Fragment>
  );
};

export default UploadImage;
