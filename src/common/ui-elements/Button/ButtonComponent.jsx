import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonComponent = (props) => {
  const color = props.color || false;
  const size = props.size || false;
  const href = props.href || false;
  const type = props.type || false;
  const disabled = props.disabled || false;
  const className = props.className || false;
  const onClick = typeof props.onClick === 'function' ? props.onClick : false;

  return (
    <Button
      bsStyle={color}
      bsSize={size}
      href={href}
      type={type}
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {props.children}
    </Button>
  );
};

export default ButtonComponent;
