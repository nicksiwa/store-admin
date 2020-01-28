import { MESSAGE } from '../../constants';

export const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = MESSAGE.ERROR.FIELD_EMPTY;
  }

  if (!values.password) {
    errors.password = MESSAGE.ERROR.FIELD_EMPTY;
  }

  return errors;
}

export const initialValues = {
  username: '',
  password: '',
}
