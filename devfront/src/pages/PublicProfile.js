import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getUserPublicDetails } from '../redux/user';

const PublicProfile = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserPublicDetails(match.params.id));
  }, [dispatch, match]);
  const { userInfo } = useSelector((state) => state.userPublicDetails);
  return (
    <div>
      <h1>{userInfo.name}</h1>
    </div>
  );
};

export default PublicProfile;
