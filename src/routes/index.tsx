import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import Products from '../pages/Products';
import Sign from '../pages/Sign';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/sign" component={Sign} />
    <Route path="/products" component={Products} />
  </Switch>
);

export default Routes;
