import React, { FC } from "react";
import { MdClose } from 'react-icons/md'
import "./modal.scss";

interface IModal {
  handleClose?: any;
  show?: boolean;
  children?: any;
  modalRef?: any;
}

const Modal: FC<IModal> = ({ handleClose, show, children, modalRef }) => { 
  if(!show) {
    return null;
  }

  return (
    <div 
    data-testid="modal"
    className="modal display-block">
      <section ref={modalRef} className="modal-main">
        <button className="closeButton componetizar//////" type="button" onClick={handleClose}>
          <MdClose/>
        </button>
        {children}
      </section>
    </div>
  );
};

export default Modal;
