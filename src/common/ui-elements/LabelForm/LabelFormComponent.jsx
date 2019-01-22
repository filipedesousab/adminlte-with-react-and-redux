import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

/**
 * [LabelForm, UIE003]Label a ser inserido nos campos dos formulários.
 * @param {string} props.color     Cor em rgb ou exadecimal
 * @param {string} props.htmlFor   Id do campo ligado ao label
 * @param {object} props.children  Corpo do componente
 * @param {string} props.className Class html opcional no componente
 */
const LabelForm = props => (
  <label className={`control-label ${props.className}`} htmlFor={props.htmlFor} style={{ color: props.color }}>
    <Icon name={props.icon} /> {props.children}
  </label>
);

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
LabelForm.defaultProps = {
  color: null,
  htmlFor: null,
  className: null,
  icon: null,
  children: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
LabelForm.propTypes = {
  color: PropTypes.string,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

export default LabelForm;
