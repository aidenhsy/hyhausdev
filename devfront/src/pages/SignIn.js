import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/user';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.primary.main,
    marginTop: '20px',
    width: '150px',
    borderRadius: 20,
    '&:hover': {
      background: theme.palette.primary.light,
    },
  },
}));

const SignIn = ({ history }) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (userInfo && userInfo.email) {
      history.push('/');
    }
  });

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`${email} ${password}`);
    dispatch(login(email, password));
  };
  return (
    <form onSubmit={submitHandler} className="form-container">
      <h3>Sign In</h3>
      <TextField
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <TextField
        label="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Button type="submit" className={classes.button}>
        Sign in
      </Button>
    </form>
  );
};

export default SignIn;
