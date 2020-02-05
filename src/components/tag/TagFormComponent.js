import React from 'react';
import { Formik, Form } from 'formik';
import { TextInput } from '../shares/forms';
import ModalContainer from '../../containers/shares/ModalContainer';
import { validate, initialValue } from './helper';

function TagFormComponent(props) {
  const { handleSubmit } = props;

  return (
    <Formik
      validate={validate}
      initialValues={initialValue}
      onSubmit={handleSubmit}
    >
      {formikProps => {
        return (
          <ModalContainer onOk={formikProps.submitForm}>
            <Form>
              <TextInput
                name="name"
                type="text"
                label="Tag name"
                placeholder="Tag name"
              />
            </Form>
          </ModalContainer>
        );
      }}
    </Formik>
  );
}

export default TagFormComponent;
