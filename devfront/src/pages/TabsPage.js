import React, { useState, useEffect } from 'react';
import { Tabs, Tab, AppBar, Grid, useScrollTrigger } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import PhotoCard from '../components/PhotoCard';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 80,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    margin: 'auto',
  },
  tab: {
    minWidth: 50,
    marginLeft: '25px',
  },
}));

const TabsPage = () => {
  const classes = useStyles();
  const [active, setActive] = useState(0);

  const handleChange = (e, value) => {
    setActive(value);
  };

  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const fetchPhotos = async () => {
      const { data } = await axios.get('/api/photos');
      setPhotos(data);
    };
    fetchPhotos();
  }, []);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="sticky" color="inherit" elevation={0}>
          <Tabs
            value={active}
            onChange={handleChange}
            //className centers the tabs, but can't scroll, classes does not center the tab but scrolls
            className={classes.tabContainer}
            variant={'scrollable'}
            scrollButtons={'on'}
          >
            <Tab label="All" className={classes.tab} />
            <Tab label="Shanghai" className={classes.tab} />
            <Tab label="Beijing" className={classes.tab} />
            <Tab label="Chengdu" className={classes.tab} />
            <Tab label="Dalian" className={classes.tab} />
          </Tabs>
        </AppBar>
      </ElevationScroll>
      <Grid container style={{ marginTop: '2em' }}>
        {photos.map((photo) => (
          <Grid item key={photo._id} sm={12} md={6} lg={4} xl={3}>
            <PhotoCard photo={photo} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default TabsPage;
