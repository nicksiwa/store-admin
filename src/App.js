import React from 'react';
import { useSelector } from 'react-redux';
import MainRoute from './routes/MainRoute';

function App() {
  const user = useSelector(state => state.user);

  return (
    <MainRoute user={user} />
  );
}

export default App;
