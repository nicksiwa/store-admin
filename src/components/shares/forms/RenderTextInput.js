import React from 'react';
import { useField } from 'formik';
import { Input, Form } from 'antd';

function RenderTextInput(props) {
  const [field, meta] = useField(props);
  const { label } = props;

  return (
    <Form.Item
      validateStatus={meta.error ? "error" : null}
      help={meta.touched && meta.error ? meta.error : null}
    >
      {label && (
        <label>{label}</label>
      )}
      <Input {...field} {...props} />
    </Form.Item>
  );
}

export default RenderTextInput;
