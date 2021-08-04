import React, { FC, useState, useEffect } from "react";
import Modal from "../../components/Modal";
import Form from "../../components/Form";
import { MdEdit, MdAdd } from "react-icons/md";
import './styles.scss'

interface IDragon {
  id: number;
  name: string;
  createdAt: string;
  type: string;
  histories: string[];
}

interface ICreateOrEditDragon {
  createDragon?: any;
  dragon?: IDragon;
  editDragon?: any;
}

const CreateOrEditDragon: FC<ICreateOrEditDragon> = ({
  createDragon,
  dragon,
  editDragon,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const renderButton = () => {
    return (
      <button
        className="editButton"
        onClick={() => {
          setShowModal(true);
        }}
      >
        {dragon ? <MdEdit/> : <MdAdd/>}
      </button>
    );
  };

  const getDragonJSON = (formObject: any, histories: string[]) => {
    return {
      name: formObject.name,
      type: formObject.type,
      histories: histories,
    };
  };

  const onSubmit = (event: any, histories: string[]) => {
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData);
 
    dragon
      ? editDragon(dragon.id, getDragonJSON(formObject, histories))
      : createDragon(getDragonJSON(formObject, histories));
  };

  const renderModal = () => {
    return (
      <Modal
        show={showModal}
        handleClose={() => setShowModal(false)}
      >
        <Form
          dragonName={dragon?.name}
          typeDragon={dragon?.type}
          historiesDragon={dragon?.histories}
          onSubmit={onSubmit}
        />
      </Modal>
    );
  };

  return (
    <>
      <div className="container-dragons">
        {renderButton()}
        {renderModal()}
      </div>
    </>
  );
};

export default CreateOrEditDragon;
