import React from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="absolute" elevation={0}>
        <Toolbar>
          <Button component={Link} to="/" style={{ color: 'white' }}>
            Test Project
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
