import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { APP_ROUTE } from '../constants';
import LoginContainer from '../containers/authentication/LoginContainer';

function LoginRoute() {
  return (
    <div>
      <Switch>
        <Route exact path={APP_ROUTE.AUTH.LOGIN}>
          <LoginContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default LoginRoute;
