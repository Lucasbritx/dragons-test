/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { GrLogin } from 'react-icons/gr';
import Button from '../../components/Button';

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
      <h1 className="loginTitle">Faça o seu login</h1>
      <form>
        <label>
          <p>Username</p>
          <input
            onChange={(e) => setUser(e.target.value)}
            type="text"
          />
        </label>
        <label>
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </label>
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
  );
};

export default Login;
