import React, { FC, useState } from 'react';
import { MdClose } from 'react-icons/md';
import Modal from '../../components/Modal';
import CreateOrEditDragon from '../CreateOrEditDragon';
import './styles.scss';

interface IDragon {
  id: number;
  name: string;
  createdAt: string;
  type: string;
  histories: string[];
}

interface IListDragons {
  dragons: IDragon[];
  deleteDragon: any;
  editDragon: any;
}

const ListDragons: FC<IListDragons> = ({
  dragons,
  deleteDragon,
  editDragon,
}) => {
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const [dragonId, setDragonId] = useState<number>();

  const deleteDragonAndCloseModal = () => {
    deleteDragon(dragonId);
    setConfirmDelete(false);
  };

  const setDragonToDelete = (dragonId: number) => {
    setDragonId(dragonId);
    setConfirmDelete(true);
  };

  const renderModalConfirmDelete = () => (
    <Modal data-testid="delete-dragon-modal" show={confirmDelete} handleClose={() => setConfirmDelete(false)}>
      <div className="container-confirm-action">
        <label>Deseja deletar esse dragão? </label>
        <button data-testid="delete-dragon-confirm-button" onClick={() => deleteDragonAndCloseModal()}>Confirmar</button>
        <button
          onClick={() => setConfirmDelete(false)}
        >
          Cancelar
        </button>
      </div>
    </Modal>
  );

  const listDragons = () => dragons.map((dragon: IDragon, index: number) => (
    <li className="listDragonItem" key={dragon.id}>
      <div
        role="button"
        tabIndex={0}
            // onKeyPress={(e)=> handleKeypress(e, index)}
        onClick={() => {
          // renderModal(index);
        }}
        className="description"
      >
        <h3>{dragon.name}</h3>
        <p>{dragon.type}</p>
      </div>
      <div className="actionsContainer">
        <CreateOrEditDragon dragon={dragon} editDragon={editDragon} />
        <button className="deleteButton" onClick={() => setDragonToDelete(dragon.id)}><MdClose /></button>
      </div>
    </li>
  ));

  return (
    <>
      <div className="container-dragons">
        <ul role="tablist" className="listDragons">
          {listDragons()}
        </ul>
      </div>
      {renderModalConfirmDelete()}
    </>
  );
};

export default ListDragons;
