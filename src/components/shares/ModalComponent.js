import React from 'react';
import { Modal } from 'antd';

function ModalComponent(props) {
  const {
    children,
    modalState,
    handleCloseModal,
    onOk,
  } = props;

  return (
    <Modal
      title={modalState.title}
      visible={modalState.isActive}
      onCancel={handleCloseModal}
      onOk={onOk}
      confirmLoading={modalState.isLoading}
    >
      {children}
    </Modal>
  );
}

export default ModalComponent;
