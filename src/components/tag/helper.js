import { MESSAGE } from '../../constants';

export const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = MESSAGE.ERROR.FIELD_EMPTY
  }

  return errors;
}

export const initialValue = {
  name: '',
};