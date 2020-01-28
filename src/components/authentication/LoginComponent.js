import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from 'antd';
import { TextInput } from '../shares/forms';
import { validate, initialValues } from './helper';

function LoginComponent(props) {
  const { user, onSubmit } = props;

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validate={validate}
    >
      <Form>
        <TextInput
          placeholder="Username"
          name="username"
          type="text"
        />
        <TextInput
          placeholder="Password"
          name="password"
          type="password"
        />
        <Button
          type="primary"
          htmlType="submit"
          loading={user.isLoading}
        >
          Login
        </Button>
      </Form>
    </Formik>
  );
}

export default LoginComponent;
