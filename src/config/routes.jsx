import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import HomePage from './../components/page/HomePage';
import PageLayout from './../components/template/PageLayout';

const routes = (
  <PageLayout>
    <Router>
      <Route exact path="/" component={HomePage} /> 
    </Router>
  </PageLayout>
);

export default routes;
