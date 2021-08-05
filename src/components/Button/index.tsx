/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
import React from 'react';
import './styles.scss';

interface Props {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
}

const Button = ({
  className, children, onClick, type,
}: Props) => (
  <button className={className} onClick={onClick} type={type}>
    {children}
  </button>
);

export default Button;
