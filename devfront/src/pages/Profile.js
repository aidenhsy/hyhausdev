import React, { useState, useEffect } from 'react';
import { Tabs, Tab, AppBar, Avatar, Badge } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';
import { countUserPhotos } from '../redux/user';

import ProfilePosts from '../components/ProfilePosts';
import ProfileRequests from '../components/ProfileRequests';
import ProfileProjects from '../components/ProfileProjects';
import ProfileSettings from '../components/ProfileSettings';

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: '150px',
    width: '150px',
    marginLeft: '2em',
  },
  headerContainer: {
    height: '150px',
    display: 'flex',
    padding: '2em 2em',
  },
  infoContainer: {
    marginLeft: '4em',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
  },
  dataContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  //below
  tabs: {
    margin: 'auto',
  },
  scroller: {
    flexGrow: '0',
  },
  tab: {
    fontFamily: 'Raleway',
    fontWeight: '700',
    fontSize: '1rem',
    minWidth: 20,
    marginLeft: '25px',
  },
}));

function TabPanel({ children, index, value }) {
  return value === index && <div>{children}</div>;
}

const Profile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countUserPhotos());
  }, [dispatch]);

  const [active, setActive] = useState(0);

  const handleChange = (e, value) => {
    setActive(value);
  };

  const {
    userInfo: { _id, name },
  } = useSelector((state) => state.userLogin);
  const { count } = useSelector((state) => state.userPhotoCount);

  return (
    <React.Fragment>
      <div className={classes.headerContainer}>
        <Badge
          overlap="circle"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          variant="dot"
        >
          <Avatar className={classes.avatar} />
        </Badge>
        <div className={classes.infoContainer}>
          <h1>{name}</h1>
          <div className={classes.dataContainer}>
            <div>
              <b>{count}</b> posts
            </div>
          </div>
        </div>
      </div>
      <AppBar position="sticky" color="inherit" elevation={0}>
        <Tabs className={classes.tabs} value={active} onChange={handleChange}>
          <Tab label="Posts" className={classes.tab} />
          <Tab label="Requests" className={classes.tab} />
          <Tab label="Projects" className={classes.tab} />
          <Tab label="Settings" className={classes.tab} />
        </Tabs>
      </AppBar>
      <TabPanel value={active} index={0}>
        <ProfilePosts userId={_id} />
      </TabPanel>
      <TabPanel value={active} index={1}>
        <ProfileRequests />
      </TabPanel>
      <TabPanel value={active} index={2}>
        <ProfileProjects />
      </TabPanel>
      <TabPanel value={active} index={3}>
        <ProfileSettings />
      </TabPanel>
    </React.Fragment>
  );
};

export default Profile;
