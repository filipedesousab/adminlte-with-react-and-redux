import React from 'react';
import PropTypes from 'prop-types';

/**
 * [LabelForm, UIE003]Label a ser inserido nos campos dos formulários.
 * @param {string} props.color     Cor em rgb ou exadecimal
 * @param {string} props.htmlFor   Id do campo ligado ao label
 * @param {object} props.children  Corpo do componente
 * @param {string} props.className Class html opcional no componente
 */
const LabelForm = (props) => {
  const { color, className } = props;

  return (
    <label className={`control-label ${className}`} htmlFor={props.htmlFor} style={{ color }}>
      {props.children}
    </label>
  );
};

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
LabelForm.defaultProps = {
  color: '',
  htmlFor: null,
  className: '',
  children: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
LabelForm.propTypes = {
  color: PropTypes.string,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

export default LabelForm;
