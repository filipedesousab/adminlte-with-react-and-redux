import React from 'react';
import {
  Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';

import Tests from './Tests';

/** @type {function} Constroe as rodas das páginas da aplicação */
const Routes = () => (
  <Router history={createHashHistory()}>
    <Switch>
      <Route exact path="/" component={Tests} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

export default Routes;
