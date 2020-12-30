import React, { useState, useEffect } from 'react';
import {
  Tabs,
  Tab,
  AppBar,
  Grid,
  useScrollTrigger,
  CircularProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { fetchPhotos } from '../redux/photo';
import { useDispatch, useSelector } from 'react-redux';
import TabPanel from '../components/TabPanel';

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

const useTabStyles = makeStyles({
  root: {
    justifyContent: 'center',
  },
  scroller: {
    flexGrow: '0',
  },
  tab: {
    maxWidth: 20,
  },
});

const FilterTabs = () => {
  const classes = useTabStyles();
  const [active, setActive] = useState(0);

  const handleChange = (e, value) => {
    setActive(value);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);
  const { photos, loading, error } = useSelector((state) => state.photoList);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="sticky" color="inherit" elevation={0}>
          <Tabs
            value={active}
            onChange={handleChange}
            classes={{ root: classes.root, scroller: classes.scroller }}
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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {loading === 'pending' ? (
          <CircularProgress
            color="secondary"
            size="10em"
            style={{ marginTop: '10em' }}
          />
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          ['', 'shanghai', 'beijing', 'chengdu', 'dalian'].map(
            (city, index) => (
              <TabPanel value={active} index={index} key={index}>
                <Grid
                  container
                  style={{ marginTop: '2em' }}
                  justify="center"
                  spacing={2}
                >
                  {photos
                    .filter((photo) => photo.city.includes(city))
                    .map((photo) => (
                      <Grid item key={photo._id} sm={12} md={6} lg={4} xl={3}>
                        <PhotoCard photo={photo} />
                      </Grid>
                    ))}
                </Grid>
              </TabPanel>
            )
          )
        )}
      </div>
    </React.Fragment>
  );
};

export default FilterTabs;
