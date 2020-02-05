import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PrivateRotue from '../routes/PrivateRoute';
import { APP_ROUTE } from '../constants';
import AppLayout from '../layouts/AppLayout';
import LoginLayout from '../layouts/LoginLayout';
import AlertContainer from '../containers/shares/AlertContainer';

function MainRoute(props) {
  return (
    <div className="container">
      <AlertContainer />
      <Router>
        <Switch>
          <Route exact path={APP_ROUTE.AUTH.INDEX}>
            <LoginLayout />
          </Route>
          <PrivateRotue
            path={APP_ROUTE.MAIN.INDEX}
            isAuthenticated={props.user.isAuthenticated}
          >
            <AppLayout />
          </PrivateRotue>
        </Switch>
      </Router>
    </div>
  );
}

export default MainRoute;
