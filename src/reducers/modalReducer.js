import { ACTION } from '../constants';

const initialState = {
  title: null,
  isActive: false,
  isLoading: false,
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION.MODAL.ACTIVE:
      return {
        ...state,
        title: action.payload,
        isActive: true,
      };
    case ACTION.MODAL.CLOSE:
      return initialState;
    case ACTION.MODAL.PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION.MODAL.SUCCESS:
      return {
        ...state,
        isLoading: false,
        isActive: false,
      };
    default:
      return state;
  }
}
