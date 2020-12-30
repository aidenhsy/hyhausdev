import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from './components/Theme';

import Header from './components/Header';
import Landing from './pages/Landing';
import Masonry from './pages/Masonry';
import FilterTabs from './pages/FilterTabs';
import Test from './pages/Test';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/photos" component={Masonry} />
          <Route path="/tabs" component={FilterTabs} />
          <Route path="/test" component={Test} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
