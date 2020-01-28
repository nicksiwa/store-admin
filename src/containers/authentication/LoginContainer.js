import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoginComponent from '../../components/authentication/LoginComponent';
import { APP_ROUTE } from '../../constants';
import { authentication } from '../../actions';

function LoginContainer() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogin = data => dispatch(authentication.loginAction(data));

  if (user.isAuthenticated) {
    history.push(APP_ROUTE.MAIN.INDEX);
  }

  return (
    <LoginComponent
      user={user}
      onSubmit={handleLogin}
    />
  );
}

export default LoginContainer;
