import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TagComponent from '../../components/tag/TagComponent';
import { tag } from '../../actions';

function TagContainer() {
  const dispatch = useDispatch();
  const tagState = useSelector(state => state.tag);
  const handleGetAllTags = () => dispatch(tag.getAllTags());

  useEffect(() => {
    handleGetAllTags();
  }, []);

  const colums = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <span>
          <a>Edit</a>
          <a>Delete</a>
        </span>
      )
    }
  ];

  return (
    <TagComponent
      colums={colums}
      tagState={tagState}
    />
  );
}

export default TagContainer;
