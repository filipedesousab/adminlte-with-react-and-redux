import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'react-bootstrap';

/**
 * [Radio, UIE015] Caixa de única seleção em um grupo de Radios
 * @param   {string} props.value          Valor do campo
 * @param   {string} props.name           Nome do grupo de radios
 * @param   {object} props.label          Descrição do campo
 * @param  {boolean} props.checked        Identifica se o campo controlado está “checkado”
 * @param  {boolean} props.defaultChecked Identifica se o campo não controlado está “checkado”
 * @param  {boolean} props.disabled       Desabilitar campo
 * @param  {boolean} props.readOnly       Desabilitar campo
 * @param {function} props.onChange       Função a ser executada na ação de escrever do usuário
 * @param   {string} props.className      Class html opcional no componente
 */
const RadioComponent = props => (
  <Radio
    value={props.value}
    name={props.name}
    checked={props.checked}
    defaultChecked={props.defaultChecked}
    disabled={props.disabled || props.readOnly}
    onChange={props.onChange}
    className={props.className}
  >
    {props.label}
  </Radio>
);

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
RadioComponent.defaultProps = {
  value: undefined,
  name: null,
  label: null,
  checked: undefined,
  defaultChecked: undefined,
  disabled: false,
  readOnly: false,
  onChange: null,
  className: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
RadioComponent.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.element,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default RadioComponent;
