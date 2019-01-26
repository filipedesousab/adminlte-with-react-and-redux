import React from 'react';
import PropTypes from 'prop-types';
import genHash from 'random-hash';
import { FormGroup, ControlLabel, InputGroup, FormControl, HelpBlock } from 'react-bootstrap';

/**
 * [SelectMultiple, UIE013] Campo para selecionar multiplas opções
 * @param   {string} props.options      Opções do campo
 * @param   {string} props.value        Array de opções selecionadas no componente controlado
 * @param   {string} props.defaultValue Array de opções selecionadas no componente não controlado
 * @param   {string} props.id           Id do campo. Se não for passado, recebe uma hash aleatória
 * @param   {string} props.state        Estado(cor) [success, warning, error], nulo para degault
 * @param   {string} props.size         Tamanho(altura) [large, small], nulo para default
 * @param   {string} props.className    Class html opcional no componente
 * @param   {object} props.label        Descrição do campo
 * @param   {object} props.btnLeft      Botão do lado esquerdo
 * @param   {object} props.btnRight     Botão do lado direito
 * @param   {object} props.addonLeft    Addon do lado esquerdo
 * @param   {object} props.addonRight   Addon do lado direito
 * @param  {boolean} props.disabled     Desabilitar campo
 * @param {function} props.onChange     Função a ser executada na ação de escrever do usuário
 * @param   {object} props.helpBlock    Descrição abaixo do campo
 */
const SelectComponent = props => (
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
        disabled={props.disabled}
        onChange={props.onChange}
        componentClass="select"
        multiple
        value={props.value}
        defaultValue={props.defaultValue}
      >
        {props.options.map((item, index) => (
          <option
            value={item.value}
            selected={item.selected}
            key={item.id || index.toString()}
          >
            {item.label}
          </option>
        ))}
      </FormControl>
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
SelectComponent.defaultProps = {
  options: [],
  value: undefined,
  defaultValue: undefined,
  id: null,
  state: null,
  size: null,
  className: null,
  label: null,
  btnLeft: null,
  btnRight: null,
  addonLeft: null,
  addonRight: null,
  disabled: false,
  onChange: null,
  helpBlock: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
SelectComponent.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.arrayOf(PropTypes.string),
  defaultValue: PropTypes.arrayOf(PropTypes.string),
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
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  helpBlock: PropTypes.node,
};

export default SelectComponent;
