/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
import React from 'react';
import ReactTooltip from 'react-tooltip';
import './styles.scss';

interface Props {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  tooltip: string;
  disabled?: boolean;
}

const Button = ({
  className, children, onClick, type, tooltip, disabled,
}: Props) => (
  <>
    <button
      disabled={disabled}
      data-tip={tooltip}
      className={className}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
    <ReactTooltip />
  </>
);

export default Button;
