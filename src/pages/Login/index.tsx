/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC } from 'react';

// eslint-disable-next-line no-unused-vars
interface ILogin {
  setToken: any;
} // implement

const Login: FC = () => (
  <div className="login-wrapper">
    <h1>Please Log In</h1>
    <form>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
);

export default Login;
