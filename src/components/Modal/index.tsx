/* eslint-disable import/extensions */
import React, { FC } from 'react';
import { MdClose } from 'react-icons/md';
// eslint-disable-next-line import/no-unresolved
import Button from '../Button';
import './modal.scss';

interface IModal {
  handleClose: ()=> void;
  show: boolean;
  children: any;
  // eslint-disable-next-line react/require-default-props
  modalRef?: any;
}

const Modal: FC<IModal> = ({
  handleClose, show = false, children, modalRef,
}: IModal) => {
  if (!show) {
    return null;
  }

  return (
    <div
      data-testid="modal"
      className="modal display-block"
    >
      <section ref={modalRef} className="modal-main">
        <Button className="closeButton" type="button" onClick={handleClose}>
          <MdClose />
        </Button>
        {children}
      </section>
    </div>
  );
};

export default Modal;
