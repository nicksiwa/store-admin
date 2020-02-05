import React from 'react';
import { Table, Button } from 'antd';
import TagFormComponent from './TagFormComponent';

function TagComponent(props) {
  const {
    tagState,
    colums,
    handleOpenModal,
    handleSubmit,
  } = props;

  return (
    <>
      <Button onClick={handleOpenModal('Create Tag')}>Create Tag</Button>
      <Table
        columns={colums}
        dataSource={tagState.tags}
        loading={tagState.isLoading}
        rowKey='id'
      />
      <TagFormComponent handleSubmit={handleSubmit} />
    </>
  );
}

export default TagComponent;
