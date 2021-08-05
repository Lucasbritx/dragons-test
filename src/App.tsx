/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import './styles/globalStyles.scss';

function App() {
  const user = window.localStorage.getItem('user');

  if (!user) {
    return <Login />;
  }

  return (
    <Home />
  );
}

export default App;
