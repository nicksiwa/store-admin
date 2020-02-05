import { combineReducers } from 'redux';
import userReducer from './userReducer';
import alertReducer from './alertReducer';
import tagReducer from './tagReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  user: userReducer,
  alert: alertReducer,
  tag: tagReducer,
  modal: modalReducer,
});
