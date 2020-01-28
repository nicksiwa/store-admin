import { combineReducers } from 'redux';
import userReducer from './userReducer';
import alertReducer from './alertReducer';
import tagReducer from './tagReducer';

export default combineReducers({
  user: userReducer,
  alert: alertReducer,
  tag: tagReducer,
});
