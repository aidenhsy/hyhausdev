import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/user';

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

const SignUp = ({ history }) => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');

  const { userInfo } = useSelector((state) => state.userRegister);

  useEffect(() => {
    if (userInfo && userInfo.email) {
      history.push('/');
    }
  });

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password, city));
  };
  return (
    <form onSubmit={submitHandler} className="form-container">
      <h3>Sign Up</h3>
      <TextField
        label="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
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
      <TextField
        label="City"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <Button type="submit" className={classes.button}>
        Sign up
      </Button>
    </form>
  );
};

export default SignUp;
