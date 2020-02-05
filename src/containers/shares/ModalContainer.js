import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ModalComponent from '../../components/shares/ModalComponent';
import { modal } from '../../actions';

function ModalContainer(props) {
  const { children, onOk } = props;
  const dispatch = useDispatch();
  const modalState = useSelector(state => state.modal);
  const handleCloseModal = () => dispatch(modal.closeModal());

  return (
    <ModalComponent
      children={children}
      modalState={modalState}
      handleCloseModal={handleCloseModal}
      onOk={onOk}
    />
  );
}

export default ModalContainer;
