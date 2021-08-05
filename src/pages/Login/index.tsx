/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { GrLogin } from 'react-icons/gr';
import Button from '../../components/Button';
import './styles.scss';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const login = (e: any) => {
    e.preventDefault();
    if (user === 'admin' && password === 'admin') {
      window.localStorage.setItem('user', 'admin');
      window.location.reload(false);
    }
  };

  return (
    <div className="loginWrapper">
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

              <input
                id="password"
                className="formInput"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </label>
          </div>
          <div>
            <Button
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
