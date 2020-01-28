import React from 'react';
import { Table, Button, Empty, Spin } from 'antd';

function TagComponent(props) {
  const { tagState, colums } = props;

  if (tagState.isLoading) {
    return (
      <Spin />
    );
  }

  if (tagState.tags.length === 0) {
    return (
      <Empty>
        <Button type="primary">Create Now</Button>
      </Empty>
    );
  }

  return (
    <div>
      <Button>Create Tag</Button>
      <Table
        columns={colums}
        dataSource={tagState.tags}
        loading={tagState.isLoading}
      />
    </div>
  );
}

export default TagComponent;
