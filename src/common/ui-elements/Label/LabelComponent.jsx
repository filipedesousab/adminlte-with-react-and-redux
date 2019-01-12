import React from 'react';

const Label = (props) => {
  const color = props.color ? props.color : '';
  const className = props.className ? props.className : '';

  if (props.noSpan) {
    return props.children;
  }

  return (
    <span className={className} style={{ color }}>
      {props.children}
    </span>
  );
};

export default Label;
