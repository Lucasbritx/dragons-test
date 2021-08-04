/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import './styles/globalStyles.scss';

function App() {
  // const [token, setToken] = useState();
  // implementar login, setToken no <Login />

  if (false) {
    return <Login />;
  }

  return (
    <Home />
  );
}

export default App;
