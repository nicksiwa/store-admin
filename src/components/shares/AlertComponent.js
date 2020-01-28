import React from 'react';
import { Modal } from 'antd';

const AlertComponent = (props) => {
  const { alert, onOK, onCancel } = props;

  return (
    <Modal
      title={alert.title}
      visible={alert.isActive}
      onOk={onOK}
      onCancel={onCancel}
    >
      {alert.content}
    </Modal>
  );
}

export default AlertComponent;
