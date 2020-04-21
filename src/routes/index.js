import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';

import Dashboard from '../container/Dashboard';
import Login from '../container/Login';
import NoMatch from '../NoMatch';

const routes = (
  <div className="container-fluid p-0">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route component={NoMatch} />
      </Switch>
  </div>
);

export default routes;
