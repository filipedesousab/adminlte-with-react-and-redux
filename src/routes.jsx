import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Home from './Home';

export default props => (
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Redirect from="*" to="/" />
  </Router>
);
