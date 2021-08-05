/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { FC } from 'react';
import { MdSave } from 'react-icons/md';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import Button from '../Button';

import './index.scss';

type FormProps = {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (values: IValues) => void;
  dragonName: string;
  typeDragon: string;
}

interface IValues {
  name: string,
  type: string,
}

const DragonForm: FC<FormProps> = ({
  onSubmit,
  dragonName = '',
  typeDragon = '',
}: FormProps) => (
  <>
    <Formik
      initialValues={{ name: dragonName, type: typeDragon }}
      validate={(values) => {
        const errors: any = {};
        if (!values.name) {
          errors.name = 'Required';
        }
        if (!values.type) {
          errors.type = 'Required';
        }

        return errors;
      }}
      onSubmit={(values: IValues, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          onSubmit(values);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <>
            <div className="inputContainer">
              <Field placeholder="Nome do dragão" type="text" name="name" />
            </div>
            <br />
            <ErrorMessage name="name" component="div" />
            <br />
            <div className="inputContainer">
              <Field placeholder="Tipo do dragão" type="text" name="type" />
            </div>
            <br />
            <ErrorMessage name="type" component="div" />
            <br />
            <Button
              tooltip="Salvar"
              className="submitButton"
              type="submit"
              disabled={isSubmitting}
            >
              <MdSave />
            </Button>
          </>
        </Form>
      )}
    </Formik>
  </>
);

export default DragonForm;
