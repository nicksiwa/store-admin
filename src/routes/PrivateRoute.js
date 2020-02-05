import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { APP_ROUTE } from '../constants';

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: APP_ROUTE.AUTH.LOGIN,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
