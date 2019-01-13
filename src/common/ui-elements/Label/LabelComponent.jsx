import React from 'react';

/**
 * [Label, UIE002] Label geral da aplicação.
 * @param  {string} props.color     Cor em rgb ou exadecimal
 * @param {boolean} props.noSpan    Quando o label não puder conter a tag <span>
 * @param {boolean} props.form      Quando for label de formulário (em teste para substituir LabelForm)
 * @param  {string} props.htmlFor   Id do campo ligado ao label
 * @param  {string} props.children  Corpo do componente
 * @param  {string} props.className Class html opcional no componente
 */
const Label = (props) => {
  const color = props.color || '';
  const className = props.className || '';

  if (props.noSpan) {
    return props.children;
  } else if (props.form) {
    return (
      <label className={`control-label ${className}`} htmlFor={props.htmlFor || null} style={{ color }}>
        {props.children}
      </label>
    )
  }

  return (
    <span className={className} style={{ color }}>
      {props.children}
    </span>
  );
};

export default Label;
