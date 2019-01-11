import React from 'react';

const Label = (props) => {
  const color = props.color ? props.color : '';
  const className = props.className ? props.className : '';

  return (
    <span className={className} style={{ color }}>
      {props.children}
    </span>
  );
};

export default Label;
