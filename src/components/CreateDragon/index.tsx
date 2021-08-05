/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { FC, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import Modal from '../../components/Modal';
import Form from '../../components/Form';
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

  const getDragonJSON = (formObject: any): IDragon => ({
    name: formObject.name,
    type: formObject.type,
  });

  const onSubmit = (event: any) => {
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData);
    createDragon(getDragonJSON(formObject));
    setShowModal(false);
  };

  const renderModal = () => (
    <Modal
      show={showModal}
      handleClose={() => setShowModal(false)}
    >
      <Form
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
