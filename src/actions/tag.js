import { tag } from '../services';
import { ACTION } from '../constants';
import { modal } from '.';

const getAllTagsPending = () => ({
  type: ACTION.TAG.GET_ALL_TAGS_PENDING,
});

const getAllTagsSuccess = tags => ({
  type: ACTION.TAG.GET_ALL_TAGS_SUCCESS,
  payload: tags,
});

const getAllTagsFailed = () => ({
  type: ACTION.TAG.GET_ALL_TAGS_FAILED,
});

export const getAllTags = () => async dispatch => {
  try {
    dispatch(getAllTagsPending());
    const res = await tag.getAllTagService();
    dispatch(getAllTagsSuccess(res.data.tags));
  } catch (err) {
    console.log(err);
    dispatch(getAllTagsFailed());
  }
}

const createTagSuccess = tag => ({
  type: ACTION.TAG.CREATE_TAG_SUCCESS,
  payload: tag,
});

const createTagFailed = () => ({
  type: ACTION.TAG.CREATE_TAG_FAILED,
});

export const createTag = name => async dispatch => {
  try {
    dispatch(modal.pendingModal());
    const res = await tag.createTagService(name);
    dispatch(createTagSuccess(res.data.tag));
    dispatch(modal.successModal());
  } catch (err) {
    console.log(err);
    dispatch(createTagFailed());
  }
}

const deleteTagPending = () => ({
  type: ACTION.TAG.DELETE_TAG_PENDING,
});

const deleteTagSuccess = (id) => ({
  type: ACTION.TAG.DELETE_TAG_SUCCESS,
  payload: id,
});

const deleteTagFailed = () => ({
  type: ACTION.TAG.DELETE_TAG_FAILED,
});

export const deleteTag = id => async dispatch => {
  try {
    dispatch(deleteTagPending());
    const res = await tag.deleteTagService(id);
    dispatch(deleteTagSuccess(res.data.id));
  } catch (err) {
    console.log(err);
    dispatch(deleteTagFailed());
  }
}
