import React from 'react';

/**
 * [LabelForm, UIE003]Label a ser inserido nos campos dos formulários.
 * @param {string} props.color     Cor em rgb ou exadecimal
 * @param {string} props.htmlFor   Id do campo ligado ao label
 * @param {string} props.children  Corpo do componente
 * @param {string} props.className Class html opcional no componente
 */
const LabelForm = (props) => {
  const color = props.color || '';
  const className = props.className || '';

  return (
    <label className={`control-label ${className}`} htmlFor={props.htmlFor || null} style={{ color }}>
      {props.children}
    </label>
  );
};

export default LabelForm;
