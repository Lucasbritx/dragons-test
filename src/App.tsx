import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import './styles/globalStyles.scss';
// import Login from './pages/Login';

function App() {
  const [token, setToken] = useState();
  // implementar login, setToken no <Login />

  if (!token) {
    return <Home />;
  }

  return (
    <Home />
  );
}

export default App;
