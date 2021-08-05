/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/extensions */
import React, { FC, useState } from 'react';
import { MdCheck, MdClose } from 'react-icons/md';
import ClipLoader from 'react-spinners/ClipLoader';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import EditDragon from '../../components/EditDragon';
import './styles.scss';

interface IDragon {
  id?: number;
  name: string;
  type: string;
  createdAt?: string;
}

interface IListDragons {
  dragons: IDragon[];
  deleteDragon: any;
  editDragon: any;
  loading: boolean;
}

const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const ListDragons: FC<IListDragons> = ({
  dragons,
  deleteDragon,
  editDragon,
  loading,
}: IListDragons) => {
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const [dragonId, setDragonId] = useState<number>();

  const deleteDragonAndCloseModal = () => {
    deleteDragon(dragonId);
    setConfirmDelete(false);
  };

  const setDragonToDelete = (dragonIdToDelete?: number) => {
    setDragonId(dragonIdToDelete);
    setConfirmDelete(true);
  };

  const renderModalConfirmDelete = () => (
    <Modal data-testid="delete-dragon-modal" show={confirmDelete} handleClose={() => setConfirmDelete(false)}>
      <div className="containerConfirmAction">
        <label>Deseja deletar esse dragão? </label>
        <div className="containerDeleteButtons">
          <Button
            tooltip="Deletar"
            data-testid="delete-dragon-confirm-button"
            onClick={() => deleteDragonAndCloseModal()}
          >
            <MdCheck />

          </Button>
          <Button
            tooltip="Cancelar"
            onClick={() => setConfirmDelete(false)}
          >
            <MdClose />
          </Button>
        </div>
      </div>
    </Modal>
  );

  const listDragons = () => dragons.map((dragon: IDragon) => (
    <li className="listDragonItem" key={dragon.id}>
      <div>
        <h3>{dragon.name}</h3>
        <p>{dragon.type}</p>
      </div>
      <div className="actionsContainer">
        <EditDragon dragon={dragon} editDragon={editDragon} />
        <Button
          tooltip="Deletar dragão"
          className="deleteButton"
          onClick={() => setDragonToDelete(dragon.id)}
        >
          <MdClose />

        </Button>
      </div>
    </li>
  ));

  const LoadingSpinner = () => <ClipLoader color="#ffffff" loading={loading} css={override} size={150} />;

  return (
    <>
      <div className="container-dragons">
        {loading ? LoadingSpinner() : (
          <ul role="tablist" className="listDragons">
            {listDragons()}
          </ul>
        )}
      </div>
      {renderModalConfirmDelete()}
    </>
  );
};

export default ListDragons;
