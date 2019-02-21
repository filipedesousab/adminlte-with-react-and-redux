import React from 'react';
import PropTypes from 'prop-types';
import genHash from 'random-hash';
import _ from 'lodash';
import { FormGroup, ControlLabel, InputGroup, FormControl, HelpBlock } from 'react-bootstrap';

/**
 * [Select, UIE012] Campo para selecionar uma opção
 * @param   {string} props.options      Opções do campo
 * @param   {string} props.value        Opção selecionada no componente controlado
 * @param   {string} props.defaultValue Opção selecionada no componente não controlado
 * @param   {string} props.id           Id do campo. Se não for passado, recebe uma hash aleatória.
 * @param   {string} props.state        Estado(cor) [success, warning, error], nulo para degault.
 * @param   {string} props.size         Tamanho(altura) [large, small], nulo para default.
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
class SelectComponent extends React.PureComponent {
  render() {
    const {
      options,
      value,
      defaultValue,
      id,
      state,
      size,
      className,
      label,
      btnLeft,
      btnRight,
      addonLeft,
      addonRight,
      disabled,
      onChange,
      helpBlock,
    } = this.props;

    // Removendo props para não inteferir no ReacDOM e retirar o warning
    const newProps = _.omit(this.props, [
      'options',
      'value',
      'defaultValue',
      'id',
      'state',
      'size',
      'className',
      'label',
      'btnLeft',
      'btnRight',
      'addonLeft',
      'addonRight',
      'disabled',
      'onChange',
      'helpBlock',
    ]);

    return (
      <FormGroup
        {...newProps}
        controlId={id || genHash()}
        validationState={state}
        bsSize={size}
        className={className}
      >
        <ControlLabel>{label}</ControlLabel>
        <InputGroup>
          {btnLeft
            ? <InputGroup.Button>{btnLeft}</InputGroup.Button>
            : false}
          {addonLeft
            ? <InputGroup.Addon>{addonLeft}</InputGroup.Addon>
            : false}
          <FormControl
            disabled={disabled}
            onChange={onChange}
            componentClass="select"
            value={value}
            defaultValue={defaultValue}
          >
            {options.map((item, index) => (
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
          {addonRight
            ? <InputGroup.Addon>{addonRight}</InputGroup.Addon>
            : <FormControl.Feedback />}
          {btnRight
            ? <InputGroup.Button>{btnRight}</InputGroup.Button>
            : false}
        </InputGroup>
        <HelpBlock>{helpBlock}</HelpBlock>
      </FormGroup>
    );
  }
}

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
SelectComponent.defaultProps = {
  options: [],
  value: undefined,
  defaultValue: undefined,
  id: null,
  state: null,
  size: null,
  className: '',
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
  value: PropTypes.string,
  defaultValue: PropTypes.string,
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
  helpBlock: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

export default SelectComponent;
