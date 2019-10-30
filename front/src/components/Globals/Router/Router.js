import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from './PageProviders';

const Router = () => (
  <Switch>
    {/* guest routes */}
    <Route exact path={['/', '/home']} component={Home} />
  </Switch>
);

export default Router;
