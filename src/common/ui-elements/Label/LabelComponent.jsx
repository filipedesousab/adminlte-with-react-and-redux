import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

/**
 * [Label, UIE002] Label geral da aplicação.
 * @param  {string} props.color     Cor em rgb ou exadecimal
 * @param {boolean} props.noSpan    Quando o label não puder conter a tag <span>
 * @param {boolean} props.form      Quando for label de formulário (em teste para substituir LabelForm)
 * @param  {string} props.htmlFor   Id do campo ligado ao label
 * @param  {object} props.children  Corpo do componente
 * @param  {string} props.className Class html opcional no componente
 */
const LabelComponent = (props) => {
  if (props.noSpan) {
    return props.children;
  } else if (props.form) {
    return (
      <label className={`control-label ${props.className}`} htmlFor={props.htmlFor} style={{ color: props.color }}>
        <Icon name={props.icon} /> {props.children}
      </label>
    );
  }

  return (
    <span className={props.className} style={{ color: props.color }}>
      <Icon name={props.icon} /> {props.children}
    </span>
  );
};

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
LabelComponent.defaultProps = {
  color: null,
  noSpan: false,
  form: false,
  htmlFor: null,
  className: null,
  icon: null,
  children: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
LabelComponent.propTypes = {
  color: PropTypes.string,
  noSpan: PropTypes.bool,
  form: PropTypes.bool,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

export default LabelComponent;
