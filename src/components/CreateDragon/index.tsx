/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { FC, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import Modal from '../../components/Modal';
import DragonForm from '../../components/DragonForm';
import Button from '../../components/Button';

interface IDragon {
  id?: number;
  name: string;
  type: string;
  createdAt?: string;
}

interface ICreateDragon {
  createDragon: (dragon: IDragon) => any;
}

const CreateDragon: FC<ICreateDragon> = ({
  createDragon,
}: ICreateDragon) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const renderButton = () => (
    <Button
      tooltip="Criar dragão"
      onClick={() => {
        setShowModal(true);
      }}
    >
      <MdAdd />
    </Button>
  );

  const onSubmit = (dragon: any) => {
    createDragon(dragon);
    setShowModal(false);
  };

  const renderModal = () => (
    <Modal
      show={showModal}
      handleClose={() => setShowModal(false)}
    >
      <DragonForm
        dragonName=""
        typeDragon=""
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

export default CreateDragon;
