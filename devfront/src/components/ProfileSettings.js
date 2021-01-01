import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { getUserDetails, updateUserProfile } from '../redux/user';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0 40%',
    flexDirection: 'column',
  },
  text: {
    marginTop: '1em',
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    marginTop: '3em',
    color: 'white',
    width: '100%',
    borderRadius: 20,
    '&:hover': {
      background: theme.palette.primary.light,
    },
  },
}));

const ProfileSettings = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');

  const { user } = useSelector((state) => state.userDetails);
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (!userInfo) {
      history.push('/');
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'));
      } else {
        setName(user.name);
        setEmail(user.email);
        setCity(user.city);
      }
    }
  }, [dispatch, history, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile({ name, email, password }));
  };

  return (
    <div className={classes.root}>
      <form onSubmit={submitHandler}>
        <TextField
          label="Name"
          onChange={(e) => setName(e.target.value)}
          fullWidth
          className={classes.text}
          value={name}
        />
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          className={classes.text}
          value={email}
        />
        <TextField
          label="Change Password"
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          className={classes.text}
          value={password}
        />
        <TextField
          label="City"
          onChange={(e) => setCity(e.target.value)}
          fullWidth
          className={classes.text}
          value={city}
        />
        <Button className={classes.button} type="submit">
          Update
        </Button>
      </form>
    </div>
  );
};

export default ProfileSettings;
