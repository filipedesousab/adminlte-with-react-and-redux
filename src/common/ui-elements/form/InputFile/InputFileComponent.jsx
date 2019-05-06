import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import genHash from 'random-hash';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

import { ButtonGroup, Button, Label } from 'common/ui-elements';

/**
 * [InputFile, UIE016] Entrada de arquivos
 * @param   {string} props.id        Id do campo. Se não for passado, recebe uma hash aleatória
 * @param   {object} props.label     Descrição do campo
 * @param   {string} props.state     Estado(cor) [success, warning, error], nulo para default
 * @param  {boolean} props.disabled  Desabilitar campo
 * @param   {object} props.helpBlock Descrição abaixo do campo
 * @param {function} props.onChange  Primeiro parâmetro é o target e segundo é nome do arquivo
 * @param   {string} props.className Class html opcional no componente
 */
class InputFileComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: 'file',
      fileName: props.description || <Label icon="fa fa-file">Selecionar</Label>,
      clean: false,
    };

    /** Executado quando é selecionado um arquivo */
    this.handleChange = this.handleChange.bind(this);
    /** Executado quando deseja limpar o campo */
    this.clean = this.clean.bind(this);

    /** Elemento do DOM */
    this.inputFileField = null;
  }

  handleChange(e) {
    /**
     * Pega o caminho completo do arquivo
     * Divide a string do caminho completo em array pelo \ ou /
     * Pega o valor da última posição do array
     */
    const fileName = e.target.value
      .split(/(\\|\/)/g)
      .pop();

    /** executa o onChange passado para o componente */
    if (this.props.onChange) {
      this.props.onChange(e, fileName);
    }

    /** Atualiza o estado */
    this.setState({
      ...this.state,
      icon: 'check',
      fileName: <Label icon="fa fa-check">{fileName}</Label>,
      clean: true,
    });
  }

  clean() {
    this.setState({
      ...this.state,
      icon: 'file',
      fileName: this.props.description || <Label icon="fa fa-file">Selecionar</Label>,
      clean: false,
    });

    this.inputFileField.value = null;

    /** executa o onClean */
    if (this.props.onClean) {
      this.props.onClean();
    }
  }

  renderButton() {
    const { component, color, disabled, size } = this.props;
    if (component) {
      return React.cloneElement(
        component,
        {
          onClick: () => this.inputFileField.click(),
          disabled,
        },
      );
    }

    return (
      <Button
        color={color}
        onClick={() => this.inputFileField.click()}
        disabled={disabled}
        size={size}
      >
        {this.state.fileName}
      </Button>
    );
  }

  renderButtonSelected() {
    const { componentSelected, color, disabled, size } = this.props;
    if (componentSelected) {
      return React.cloneElement(
        componentSelected,
        {
          onClick: () => this.inputFileField.click(),
          disabled,
        },
      );
    }

    return (
      <Button
        color={color}
        onClick={() => this.inputFileField.click()}
        disabled={disabled}
        size={size}
      >
        {this.state.fileName}
      </Button>
    );
  }

  render() {
    const {
      label,
      component,
      color,
      state,
      size,
      helpBlock,
      disabled,
      className,
      accept,
    } = this.props;

    // Removendo props para não inteferir no ReacDOM e retirar o warning
    const newProps = _.omit(this.props, [
      'id',
      'label',
      'component',
      'componentSelected',
      'description',
      'color',
      'state',
      'size',
      'helpBlock',
      'disabled',
      'onChange',
      'onClean',
      'className',
      'accept',
    ]);

    const id = this.props.id || genHash();

    return (
      <FormGroup
        {...newProps}
        controlId={id}
        validationState={state}
        className={className}
      >
        <ControlLabel>{label}</ControlLabel>
        <br />
        <ButtonGroup>
          {this.state.clean ? this.renderButtonSelected() : this.renderButton()}
          {
            this.state.clean ?
              <Button onClick={this.clean} color="danger">
                <Label icon="fa fa-times" />
              </Button>
            : null
          }
        </ButtonGroup>
        <FormControl
          type="file"
          disabled={disabled}
          onChange={this.handleChange}
          inputRef={(e) => { this.inputFileField = e; }}
          style={{ display: 'none' }}
          accept={accept}
        />
        {/** Se houver helpBlock, inclui */}
        {helpBlock && <HelpBlock>{helpBlock}</HelpBlock>}
      </FormGroup>
    );
  }
}

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
InputFileComponent.defaultProps = {
  id: null,
  label: null,
  component: null,
  componentSelected: null,
  description: null,
  color: 'default',
  state: null,
  size: null,
  helpBlock: null,
  disabled: false,
  onChange: null,
  onClean: null,
  className: '',
  accept: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
InputFileComponent.propTypes = {
  id: PropTypes.string,
  label: PropTypes.element,
  component: PropTypes.element,
  componentSelected: PropTypes.element,
  description: PropTypes.element,
  color: PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger']),
  state: PropTypes.oneOf(['success', 'warning', 'error']),
  size: PropTypes.oneOf(['large', 'small']),
  helpBlock: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onClean: PropTypes.func,
  className: PropTypes.string,
  accept: PropTypes.string,
};

export default InputFileComponent;
