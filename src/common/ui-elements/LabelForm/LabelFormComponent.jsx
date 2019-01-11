import React from 'react';

const LabelForm = (props) => {
  const color = props.color ? props.color : '';
  const className = props.className ? props.className : '';

  return (
    <label className={`control-label ${className}`} htmlFor={props.htmlFor} style={{ color }}>
      {props.children}
    </label>
  );
};

export default LabelForm;
