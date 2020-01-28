import { ACTION } from '../constants';

export const activeAlert = data => ({
  type: ACTION.ALERT.ACTIVE,
  payload: data,
});

export const closeAlert = () => ({
  type: ACTION.ALERT.CLOSE,
});
