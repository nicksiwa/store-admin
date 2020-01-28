import { ACTION } from '../constants';

const initialState = {
  isActive: false,
  title: null,
  content: null,
  type: null,
};

export default function alertReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION.ALERT.ACTIVE:
      return {
        ...action.payload,
        isActive: true,
      };
    case ACTION.ALERT.CLOSE:
      return initialState;
    default:
      return state;
  }
}
