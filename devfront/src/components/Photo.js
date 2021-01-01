import React from 'react';
import { Card, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: '100%',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  card: {
    maxWidth: '400px',
  },
}));

const Photo = ({ photo }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={photo.image}
        title="Paella dish"
      />
    </Card>
  );
};

export default Photo;
