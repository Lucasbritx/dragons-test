/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import IoMdLogIn from 'react-icons/md';
import Button from '../../components/Button';

// eslint-disable-next-line no-unused-vars
interface ILogin {
  setToken: any;
}

const Login = ({ setToken }: any) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const login = (e: any) => {
    e.preventDefault();
    if (user === 'admin' && password === 'admin') {
      window.localStorage.setItem('user', 'admin');
      window.location.reload(false);
    }
  };

  console.log(setToken);
  return (
    <div className="login-wrapper">
      <h1>Faça o seu login</h1>
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
            <IoMdLogIn />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
