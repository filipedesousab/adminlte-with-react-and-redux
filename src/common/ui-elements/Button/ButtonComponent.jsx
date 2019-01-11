import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonComponent = (props) => {
  const color = props.color || null;
  const size = props.size || null;
  const href = props.href || null;
  const type = props.type || null;
  const disabled = props.disabled || false;
  const block = props.block || false;
  const className = props.className || null;
  const onClick = typeof props.onClick === 'function' ? props.onClick : null;

  return (
    <Button
      bsStyle={color}
      bsSize={size}
      href={href}
      type={type}
      disabled={disabled}
      block={block}
      className={className}
      onClick={onClick}
    >
      {props.children}
    </Button>
  );
};

export default ButtonComponent;
