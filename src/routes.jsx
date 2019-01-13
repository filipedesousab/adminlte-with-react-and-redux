import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Home from './Home';

/** @type {function} Constroe as rodas das páginas da aplicação */
const Routes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Redirect from="*" to="/" />
  </Router>
);

export default Routes;
