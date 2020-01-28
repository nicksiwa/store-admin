import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { APP_ROUTE } from '../constants';
import MainContainer from '../containers/main/MainContainer';
import TagContainer from '../containers/tag/TagContainer';

function AppRoute() {
  return (
    <div>
      <Switch>
        <Route exact path={APP_ROUTE.MAIN.INDEX}>
          <MainContainer />
        </Route>
        <Route path={APP_ROUTE.TAG.INDEX}>
          <TagContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default AppRoute;
