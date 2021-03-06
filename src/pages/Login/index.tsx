/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { GrLogin } from 'react-icons/gr';
import { toast, ToastContainer } from 'react-toastify';
import Button from '../../components/Button';
import './styles.scss';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const login = (e: React.MouseEvent) => {
    e.preventDefault();
    if (user === 'admin' && password === 'admin') {
      window.localStorage.setItem('user', 'admin');
      window.location.reload(false);
    } else {
      toast.error('Usuário ou senha incorretos');
    }
  };

  return (
    <div className="loginWrapper">
      <ToastContainer />
      <div className="loginCard">
        <h1 className="loginTitle">Faça o seu login</h1>
        <form>
          <div className="divInput">
            <label htmlFor="username">
              Username
            </label>
            <input
              id="username"
              className="formInput"
              onChange={(e) => setUser(e.target.value)}
              type="text"
            />
          </div>
          <div className="divInput">
            <label htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className="formInput"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <div>
            <Button
              tooltip="Entrar"
              onClick={login}
              type="button"
            >
              <GrLogin />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
