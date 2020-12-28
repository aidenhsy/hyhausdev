import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useTabStyles = makeStyles({
  root: {
    justifyContent: 'center',
  },
  scroller: {
    flexGrow: '0',
  },
});

const TabsPage = () => {
  const classes = useTabStyles();
  const cities = ['All', 'Shanghai', 'Beijing', 'Chengdu', 'Dalian'];
  const [active, setActive] = useState(cities[0]);

  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const fetchPhotos = async () => {
      const { data } = await axios.get('/api/photos');
      setPhotos(data);
    };
    fetchPhotos();
  }, []);

  console.log(photos);

  return (
    <Tabs
      classes={{ root: classes.root, scroller: classes.scroller }}
      value={active}
      onChange={(event, newValue) => {
        setActive(newValue);
      }}
      indicatorColor="primary"
      textColor="primary"
      variant={'scrollable'}
      scrollButtons={'on'}
    >
      <Tab key={0} label="All" value="All" />
      <Tab key={1} label="Shanghai" value="Shanghai" />
      <Tab key={2} label="Beijing" value="Beijing" />
      <Tab key={3} label="Chengdu" value="Chengdu" />
      <Tab key={4} label="Dalian" value="Dalian" />
    </Tabs>
  );
};

export default TabsPage;
