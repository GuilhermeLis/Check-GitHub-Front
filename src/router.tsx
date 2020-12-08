import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '~/pages/Home';
import Authors from '~/pages/Authors';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/authors" component={Authors} />
    </Switch>
  );
};

export default Routes;
