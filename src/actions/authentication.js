import { Modal } from 'antd';
import { authentication } from '../services';
import { ACTION } from '../constants';

const loginPending = () => ({
  type: ACTION.AUTH.LOGIN_PENDING,
});

const loginSuccess = data => ({
  type: ACTION.AUTH.LOGIN_SUCCESS,
  payload: data,
});

const loginFailed = () => ({
  type: ACTION.AUTH.LOGIN_FAILED,
});

export const loginAction = data => async dispatch => {
  try {
    dispatch(loginPending());
    const res = await authentication.loginService(data);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailed());
    Modal.error({
      title: err.message,
      content: 'เกิดข้อผิดพลาด'
    });
  }
};
