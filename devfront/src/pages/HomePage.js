import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const fetchMessage = async () => {
      const { data } = await axios.get('/api/message');
      setMessage(data);
    };
    fetchMessage();
  }, []);
  return (
    <div>
      <h1>hello this is from frontend.</h1>
      <h1>{message}</h1>
      <hr style={{ margin: '20px 0' }} />
      <Button variant="outlined" component={Link} to="/photos">
        Photos page
      </Button>
      <hr style={{ margin: '20px 0' }} />
      <Button variant="outlined" component={Link} to="/tabs">
        Tabs page
      </Button>
    </div>
  );
};

export default HomePage;
