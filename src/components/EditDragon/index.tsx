/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { FC, useState } from 'react';
import { MdEdit } from 'react-icons/md';
import Modal from '../../components/Modal';
import DragonForm from '../../components/DragonForm';
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

  const onSubmit = (dragonEdited: any) => {
    editDragon(dragonEdited, dragon.id);
    setShowModal(false);
  };

  const renderModal = () => (
    <Modal
      show={showModal}
      handleClose={() => setShowModal(false)}
    >
      <DragonForm
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
