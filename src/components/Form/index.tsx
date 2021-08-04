import React, { FC, useState } from "react";
import { MdSave } from "react-icons/md"
import "./index.scss";

interface FormProps {
  onSubmit: (event: any, histories: string[]) => void;
  historiesDragon?: string[];
  dragonName?: string;
  typeDragon?: string;
}

const Form: FC<FormProps> = ({
  onSubmit,
  dragonName = "",
  typeDragon = "",
}) => {
  const [nameInput, setNameInput] = useState<string>(dragonName);
  const [typeInput, setTypeInput] = useState<string>(typeDragon);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setNameInput("");
          setTypeInput("");
        }}
      >
        <div className="inputContainer">
          <input
            className="inputText"
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Nome"
            value={nameInput}
            onChange={(event) => {
              setNameInput(event.target.value);
            }}
          />
        </div>
        <div className="inputContainer">
          <input
            type="text"
            className="inputText"
            name="type"
            autoComplete="off"
            placeholder="Tipo"
            value={typeInput}
            onChange={(event) => {
              event.preventDefault();
              setTypeInput(event.target.value);
            }}
          />
        </div>
        <button className="submitButton" type="submit">
          <MdSave/>
        </button>
      </form>
    </>
  );
};

export default Form;
