import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Tests from './Tests';

/** @type {function} Constroe as rodas das páginas da aplicação */
const Routes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Tests} />
    <Redirect from="*" to="/" />
  </Router>
);

export default Routes;
