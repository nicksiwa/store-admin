import { tag } from '../services';
import { ACTION } from '../constants';

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

const sleep = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 2000);
});

export const getAllTags = () => async dispatch => {
  try {
    dispatch(getAllTagsPending());
    await sleep();
    const res = await tag.getAllTagService();
    dispatch(getAllTagsSuccess(res.data.tags));
  } catch (err) {
    console.log(err);
    dispatch(getAllTagsFailed());
  }
}
