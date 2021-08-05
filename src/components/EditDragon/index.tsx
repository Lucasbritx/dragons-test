/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { FC, useState } from 'react';
import { MdEdit } from 'react-icons/md';
import Modal from '../../components/Modal';
import Form from '../../components/Form';
import Button from '../../components/Button';

interface IDragon {
  id?: number;
  name: string;
  type: string;
  createdAt?: string;
}
interface IEditDragon {
  dragon: IDragon;
  editDragon: (dragon: IDragon, dragonId?: Number) => IDragon;
}

const EditDragon: FC<IEditDragon> = ({
  dragon,
  editDragon,
}: IEditDragon) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const renderButton = () => (
    <Button
      tooltip="Editar dragão"
      onClick={() => {
        setShowModal(true);
      }}
    >
      <MdEdit />
    </Button>
  );

  const getDragonJSON = (formObject: any): any => ({
    name: formObject.name,
    type: formObject.type,
  });

  const onSubmit = (event: any) => {
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData);
    editDragon(getDragonJSON(formObject), dragon.id);
    setShowModal(false);
  };

  const renderModal = () => (
    <Modal
      show={showModal}
      handleClose={() => setShowModal(false)}
    >
      <Form
        dragonName={dragon?.name}
        typeDragon={dragon?.type}
        onSubmit={onSubmit}
      />
    </Modal>
  );

  return (
    <>
      <div className="container-dragons">
        {renderButton()}
        {renderModal()}
      </div>
    </>
  );
};

export default EditDragon;
