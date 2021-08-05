/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { FC, useState } from 'react';
import { MdSave } from 'react-icons/md';
import Button from '../Button';
import './index.scss';

type FormProps = {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (event: React.FormEvent) => void;
  dragonName: string;
  typeDragon: string;
}

const Form: FC<FormProps> = ({
  // eslint-disable-next-line no-unused-vars
  onSubmit,
  dragonName = '',
  typeDragon = '',
}: FormProps) => {
  const [nameInput, setNameInput] = useState<string>(dragonName);
  const [typeInput, setTypeInput] = useState<string>(typeDragon);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(event);
          setNameInput('');
          setTypeInput('');
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
        <Button className="submitButton" type="submit">
          <MdSave />
        </Button>
      </form>
    </>
  );
};

export default Form;
