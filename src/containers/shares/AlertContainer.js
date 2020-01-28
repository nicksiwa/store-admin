import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AlertComponent from '../../components/shares/AlertComponent';
import { alert } from '../../actions';

const AlertContainer = () => {
  const alertState = useSelector(state => state.alert);
  const dispatch = useDispatch();
  const onOK = () => dispatch();
  const onCancel = () => dispatch(alert.closeAlert());

  return (
    <AlertComponent
      alert={alertState}
      onOK={onOK}
      onCancel={onCancel}
    />
  );
}

export default AlertContainer;
