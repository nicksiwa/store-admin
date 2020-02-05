import { ACTION } from '../constants';

export const activeModal = title => ({
  type: ACTION.MODAL.ACTIVE,
  payload: title,
});

export const closeModal = () => ({
  type: ACTION.MODAL.CLOSE,
});

export const pendingModal = () => ({
  type: ACTION.MODAL.PENDING,
});

export const successModal = () => ({
  type: ACTION.MODAL.SUCCESS,
});
