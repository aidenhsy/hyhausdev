import React from 'react';
import {
  Card,
  CardMedia,
  CardActions,
  CardHeader,
  Avatar,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    height: 0,
    paddingTop: '100%',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  card: {
    maxWidth: 345,
    borderRadius: 30,
  },
  cardHeader: {
    height: 15,
  },
  avatar: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

const PhotoCard = ({ photo }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={photo.image}
        title="Paella dish"
      />
      <CardActions>
        <CardHeader
          avatar={
            <Avatar
              alt="Remy Sharp"
              src={photo.authorImage}
              className={classes.avatar}
              component={Link}
              to="/profile/meganli"
            />
          }
          title={
            <Link
              to={`/profile/${photo.author.split(' ')[0]}`}
              style={{ color: 'black' }}
            >
              {photo.author}
            </Link>
          }
          subheader="September 14, 2021"
          className={classes.cardHeader}
        />
      </CardActions>
    </Card>
  );
};

export default PhotoCard;
