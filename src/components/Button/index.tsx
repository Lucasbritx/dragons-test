import React from 'react';
import './styles.scss';

const Button = ({ children, onClick }: any) => (
  <button onClick={onClick} type="submit">
    {children}
  </button>
);

export default Button;
