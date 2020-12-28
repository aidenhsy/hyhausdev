import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import PhotosPage from './pages/PhotosPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/photos" component={PhotosPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
