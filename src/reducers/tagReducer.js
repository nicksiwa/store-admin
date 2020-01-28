import { ACTION } from '../constants';

const initialState = {
  tags: [],
  isLoading: false,
  isError: false,
};

export default function tagReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION.TAG.GET_ALL_TAGS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION.TAG.GET_ALL_TAGS_SUCCESS:
      return {
        ...state,
        tags: action.payload,
        isLoading: false
      };
    case ACTION.TAG.GET_ALL_TAGS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
}
