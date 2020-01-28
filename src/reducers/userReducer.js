import { ACTION } from '../constants';

const initialState = {
  username: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
};

export default function UserReducer(state = initialState, action) {
  switch(action.type) {
    case ACTION.AUTH.LOGIN_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION.AUTH.LOGIN_SUCCESS:
      return {
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case ACTION.AUTH.LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case ACTION.AUTH.LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
}
