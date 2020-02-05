import React, { useEffect } from 'react';
import {
  Button,
  Divider,
  Spin,
} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import TagComponent from '../../components/tag/TagComponent';
import { tag, modal } from '../../actions';

function TagContainer() {
  const dispatch = useDispatch();
  const tagState = useSelector(state => state.tag);
  const handleOpenModal = title => () => dispatch(modal.activeModal(title));
  const handleSubmit = name => dispatch(tag.createTag(name));
  const deleteTag = id => () => dispatch(tag.deleteTag(id));

  useEffect(() => {
    const handleGetAllTags = () => dispatch(tag.getAllTags());
    handleGetAllTags();
  }, [dispatch]);

  const colums = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button type="link">Edit</Button>
          <Divider type="vertical" />
          <Button onClick={deleteTag(record.id)} type="link">Delete</Button>
        </span>
      )
    }
  ];

  if (tagState.isLoading) {
    return (
      <Spin />
    );
  }

  return (
    <TagComponent
      colums={colums}
      tagState={tagState}
      handleOpenModal={handleOpenModal}
      handleSubmit={handleSubmit}
    />
  );
}

export default TagContainer;
