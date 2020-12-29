import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import PhotosPage from './pages/PhotosPage';
import TabsPage from './pages/TabsPage';
import TestPage from './pages/TestPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/photos" component={PhotosPage} />
        <Route path="/tabs" component={TabsPage} />
        <Route path="/test" component={TestPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
