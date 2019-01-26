import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'react-bootstrap';

/**
 * [Checkbox, UIE014] Caixa de seleção
 * @param   {string} props.value          Valor do campo
 * @param   {object} props.label          Descrição do campo
 * @param  {boolean} props.checked        Identifica se o campo controlado está “checkado”
 * @param  {boolean} props.defaultChecked Identifica se o campo não controlado está “checkado”
 * @param  {boolean} props.disabled       Desabilitar campo
 * @param  {boolean} props.readOnly       Desabilitar campo
 * @param {function} props.onChange       Função a ser executada na ação de click do usuário
 * @param   {string} props.className      Class html opcional no componente
 */
const CheckboxComponent = props => (
  <Checkbox
    value={props.value}
    checked={props.checked}
    defaultChecked={props.defaultChecked}
    disabled={props.disabled || props.readOnly}
    onChange={props.onChange}
    className={props.className}
  >
    {props.label}
  </Checkbox>
);

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
CheckboxComponent.defaultProps = {
  value: undefined,
  label: null,
  checked: undefined,
  defaultChecked: undefined,
  disabled: false,
  readOnly: false,
  onChange: null,
  className: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
CheckboxComponent.propTypes = {
  value: PropTypes.string,
  label: PropTypes.element,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default CheckboxComponent;
