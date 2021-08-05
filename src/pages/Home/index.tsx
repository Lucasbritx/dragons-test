/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { FC, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import api from '../../api/axios';
import CreateDragon from '../../components/CreateDragon';
import ListDragons from '../../components/ListDragons';
import './styles.scss';

interface IDragon {
  id?: number;
  name: string;
  type: string;
  createdAt?: string;
}

const Home: FC = () => {
  const [dragons, setDragons] = useState<IDragon[]>([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState<boolean>(false);

  const sortDragonsByName = (
    dgs: IDragon[],
  ): IDragon[] => dgs.sort((a: IDragon, b: IDragon) => (
    // eslint-disable-next-line no-nested-ternary
    a.name.toLowerCase()
    > b.name.toLowerCase()
      ? 1
      : b.name.toLowerCase() > a.name.toLowerCase()
        ? -1
        : 0));

  const getDragons = async () => {
    try {
      setLoading(true);
      const { data } = await api.get('');
      setDragons(sortDragonsByName(data));
      setLoading(false);
    } catch (error) {
      toast.error('Erro ao carregar os dragões');
      setDragons([]);
    }
  };

  const createDragon = async (dragon: IDragon) => {
    try {
      setLoading(true);
      const { data } = await api.post('', dragon);
      setDragons((prevState) => sortDragonsByName([...prevState, data]));
      setLoading(false);
      toast.success('Dragão criado com sucesso');
      return data;
    } catch (error) {
      toast.error('Erro ao criar o dragão');
      return error;
    }
  };

  const editDragon = async (dragon: IDragon, dragonId: number) => {
    try {
      setLoading(true);
      const edited = await api.put(`/${dragonId}`, dragon);
      if (edited) {
        toast.success('Dragão editado com sucesso');
      } else {
        toast.error('Erro ao editar o dragão');
      }
      getDragons();
    } catch (error) {
      toast.error('Erro ao editar o dragão');
    }
  };

  const removeDragon = (dragonId: number) => {
    const newDragons = dragons;
    const index = newDragons.findIndex((dragon) => dragon.id === dragonId);
    newDragons.splice(index, 1);
    setDragons([...newDragons]);
  };

  const deleteDragon = async (dragonId: number) => {
    try {
      setLoading(true);
      const deleted = await api.delete(`/${dragonId}`);
      if (deleted) {
        toast.success('Dragão deletado com sucesso');
      } else {
        toast.error('Erro ao deletar o dragão');
      }
      removeDragon(dragonId);
      setLoading(false);
    } catch (error) {
      toast.error('Erro ao deletar o dragão');
    }
  };

  useEffect(() => {
    getDragons();
  }, []);

  return (
    <div className="homePageContainer">
      <h1>Dragões</h1>
      <CreateDragon createDragon={createDragon} />
      <ListDragons
        loading={loading}
        dragons={dragons}
        deleteDragon={deleteDragon}
        editDragon={editDragon}
      />
      <ToastContainer />
    </div>
  );
};

export default Home;
