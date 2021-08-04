import React, { FC, useEffect, useState } from "react";
import api from "../../api/axios";
import CreateOrEditDragon from "../CreateOrEditDragon";
import ListDragons from "../ListDragons";
import './styles.scss';
import { toast, ToastContainer } from "react-toastify";

interface IDragon {
  id: number;
  name: string;
  createdAt: string;
  type: string;
  histories: string[];
}

const Home: FC = () => {
  const [dragons, setDragons] = useState<IDragon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const sortDragonsByName = (dgs: IDragon[]): IDragon[] => {
    return dgs.sort(function (a: IDragon, b: IDragon) {
      return a.name.toLowerCase() > b.name.toLowerCase()
        ? 1
        : b.name.toLowerCase() > a.name.toLowerCase()
        ? -1
        : 0;
    });
  };

  const getDragons = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("");
      setDragons(sortDragonsByName(data));
      setLoading(false);
    } catch (error) {
      toast.error("Erro ao carregar os dragões");
      setDragons([]);
    }
  };

  const createDragon = async (dragon: IDragon) => {
    try {
      setLoading(true);
      const { data } = await api.post("", dragon);
      setDragons((prevState) => sortDragonsByName([...prevState, data]));
      setLoading(false);
      toast.success("Dragão criado com sucesso");
      return data;
    } catch (error) {
      toast.error("Erro ao criar o dragão");
    }
  };

  const editDragon = async (dragonId: number, dragon: IDragon) => {
    try {
      setLoading(true);
      const edited = await api.put(`/${dragonId}`, dragon);
      edited
        ? toast.success("Dragão editado com sucesso")
        : toast.error("Erro ao editar o dragão");
      getDragons();
    } catch (error) {
      toast.error("Erro ao editar o dragão");
    }
  };

  const deleteDragon = async (dragonId: number) => {
    try {
      setLoading(true);
      const deleted = await api.delete(`/${dragonId}`);
      deleted
        ? toast.success("Dragão deletado com sucesso")
        : toast.error("Erro ao deletar o dragão");
      removeDragon(dragonId);
    } catch (error) {
      toast.error("Erro ao deletar o dragão");
    }
  };

  const removeDragon = (dragonId: number) => {
    const newDragons = dragons;
    const index = newDragons.findIndex((dragon) => dragon.id === dragonId);
    newDragons.splice(index, 1);
    setDragons([...newDragons]);
  };

  useEffect(() => {
    getDragons();
  }, []);

  return (
    <div className="homePageContainer">
      <h1>Dragões</h1>
      <CreateOrEditDragon createDragon={createDragon} />
      <ListDragons
        dragons={dragons}
        deleteDragon={deleteDragon}
        editDragon={editDragon}
      />
      <ToastContainer />
    </div>
  );
};

export default Home;
