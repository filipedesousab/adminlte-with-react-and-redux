import React from 'react';
import PropTypes from 'prop-types';
import genHash from 'random-hash';
import { FormGroup, ControlLabel, InputGroup, FormControl, HelpBlock } from 'react-bootstrap';

/**
 * [Input, UIE010] Input de texto
 * @param   {string} props.id          Id do campo. Se não for passado, recebe uma hash aleatória.
 * @param   {string} props.state       Estado(cor) [success, warning, error], nulo para degault.
 * @param   {string} props.size        Tamanho(altura) [large, small], nulo para default.
 * @param   {string} props.className   Class html opcional no componente
 * @param   {object} props.label       Descrição do campo
 * @param   {object} props.btnLeft     Botão do lado esquerdo
 * @param   {object} props.btnRight    Botão do lado direito
 * @param   {object} props.addonLeft   Addon do lado esquerdo
 * @param   {object} props.addonRight  Addon do lado direito
 * @param   {string} props.type        Tipo do campo [text, email, password, number]
 * @param   {string} props.value       Conteúdo do campo
 * @param   {string} props.placeholder Descrição dentro do campo
 * @param  {boolean} props.disabled    Desabilitar campo
 * @param {function} props.onChange    Função a ser executada na ação de escrever do usuário
 * @param   {object} props.helpBlock   Descrição abaixo do campo
 */
const InputComponent = props => (
  <FormGroup
    controlId={props.id || genHash()}
    validationState={props.state}
    bsSize={props.size}
    className={props.className}
  >
    <ControlLabel>{props.label}</ControlLabel>
    <InputGroup>
      {props.btnLeft
        ? <InputGroup.Button>{props.btnLeft}</InputGroup.Button>
        : false}
      {props.addonLeft
        ? <InputGroup.Addon>{props.addonLeft}</InputGroup.Addon>
        : false}
      <FormControl
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        disabled={props.disabled}
        onChange={props.onChange}
      />
      {/* Feddback se Addon se sobrepõem. Feedback só apresenta quando não houver Addon */}
      {props.addonRight
        ? <InputGroup.Addon>{props.addonRight}</InputGroup.Addon>
        : <FormControl.Feedback />}
      {props.btnRight
        ? <InputGroup.Button>{props.btnRight}</InputGroup.Button>
        : false}
    </InputGroup>
    <HelpBlock>{props.helpBlock}</HelpBlock>
  </FormGroup>
);

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
InputComponent.defaultProps = {
  id: null,
  state: null,
  size: null,
  className: null,
  label: null,
  btnLeft: null,
  btnRight: null,
  addonLeft: null,
  addonRight: null,
  type: 'text',
  value: undefined,
  placeholder: null,
  disabled: false,
  onChange: null,
  helpBlock: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
InputComponent.propTypes = {
  id: PropTypes.string,
  state: PropTypes.oneOf(['success', 'warning', 'error']),
  size: PropTypes.oneOf(['large', 'small']),
  className: PropTypes.string,
  label: PropTypes.element,
  btnLeft: PropTypes.element,
  btnRight: PropTypes.element,
  addonLeft: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  addonRight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  type: PropTypes.oneOf(['text', 'email', 'password', 'number']),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  helpBlock: PropTypes.node,
};

export default InputComponent;