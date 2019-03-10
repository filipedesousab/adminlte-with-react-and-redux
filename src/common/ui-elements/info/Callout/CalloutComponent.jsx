import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

/**
 * [Callout, UIE027] Utilizado para exibir informações ao usuário como valores, instruções, etc.
 * @param {string} props.title    Título do Callout
 * @param {object} props.children Corpo do componente
 * @param {string} props.color    Cor do Callout [info, success, warning, danger]
 */
const CalloutComponent = props => (
  <Alert
    bsStyle={props.color}
    className="callout"
  >
    <h4>{props.title}</h4>
    {props.children}
  </Alert>
);

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
CalloutComponent.defaultProps = {
  color: 'info',
  title: null,
  children: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
CalloutComponent.propTypes = {
  color: PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  children: PropTypes.node,
};

export default CalloutComponent;
