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
    case ACTION.TAG.CREATE_TAG_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION.TAG.CREATE_TAG_SUCCESS:
      return {
        ...state,
        tags: [ ...state.tags, action.payload ],
        isLoading: false,
      };
    case ACTION.TAG.DELETE_TAG_PENDING:
      return {
        ...state,
      };
    case ACTION.TAG.DELETE_TAG_SUCCESS:
      return {
        ...state,
        tags: state.tags.filter(tag => tag.id !== Number(action.payload)),
      };
    default:
      return state;
  }
}
