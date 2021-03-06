import React from 'react';
import {
  Card,
  CardMedia,
  CardActions,
  CardHeader,
  Avatar,
  useTheme,
  useMediaQuery,
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
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Card className={classes.card} style={{ borderRadius: matchesXS ? 0 : 30 }}>
      <CardMedia
        className={classes.cardMedia}
        image={photo.image}
        title="Paella dish"
      />
      {!matchesXS && (
        <CardActions>
          <CardHeader
            avatar={
              <Avatar
                alt="Remy Sharp"
                src={photo.user.image}
                className={classes.avatar}
                component={Link}
                to={`/profile/${photo.user._id}`}
              />
            }
            title={
              <Link
                to={`/profile/${photo.user._id}`}
                style={{ color: 'black' }}
              >
                {photo.user.name}
              </Link>
            }
            subheader={`${photo.time}`}
            className={classes.cardHeader}
          />
        </CardActions>
      )}
    </Card>
  );
};

export default PhotoCard;
