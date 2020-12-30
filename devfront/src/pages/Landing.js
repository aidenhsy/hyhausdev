import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/user';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: '5em',
  },
}));

const Landing = () => {
  const classes = useStyles();

  const [message, setMessage] = useState('');
  useEffect(() => {
    const fetchMessage = async () => {
      const { data } = await axios.get('/api/message');
      setMessage(data);
    };
    fetchMessage();
  }, []);

  const { userInfo } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();

  return (
    <div style={{ margin: '0 2em' }}>
      <h1>hello this is from frontend.</h1>
      <h1>{message}</h1>
      <hr style={{ margin: '20px 0' }} />
      <h3>Masonry Layout</h3>
      <Button
        variant="outlined"
        className={classes.button}
        component={Link}
        to="/photos"
      >
        Masonry
      </Button>
      <hr style={{ margin: '20px 0' }} />
      <h3>Filter Tabs</h3>
      <Button
        variant="outlined"
        className={classes.button}
        component={Link}
        to="/tabs"
      >
        Tabs page
      </Button>
      <hr style={{ margin: '20px 0' }} />
      <h3>Test Page</h3>
      <Button
        variant="outlined"
        className={classes.button}
        component={Link}
        to="/test"
      >
        Test
      </Button>
      <hr style={{ margin: '20px 0' }} />
      <h3>
        User Management{' '}
        {userInfo.name ? (
          <span style={{ color: 'red' }}>{userInfo.name} is signed in</span>
        ) : (
          <span style={{ color: 'red' }}>No user is signed in</span>
        )}
      </h3>
      <div style={{ display: 'flex' }}>
        <Button
          variant="outlined"
          className={classes.button}
          component={Link}
          to="/signin"
        >
          Sign in
        </Button>
        <Button
          variant="outlined"
          className={classes.button}
          component={Link}
          to="/signup"
        >
          Sign up
        </Button>
        <Button
          variant="outlined"
          className={classes.button}
          onClick={() => dispatch(logout())}
        >
          Sign out
        </Button>
      </div>
    </div>
  );
};

export default Landing;
