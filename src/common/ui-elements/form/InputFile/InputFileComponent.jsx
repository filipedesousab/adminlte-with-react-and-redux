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

    this.state = { icon: 'file', fileName: 'Selecionar', clean: false };

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
      fileName,
      clean: true,
    });
  }

  clean() {
    this.setState({
      ...this.state,
      icon: 'file',
      fileName: 'Selecionar',
      clean: false,
    });

    this.inputFileField.value = null;
  }

  render() {
    const {
      label,
      state,
      helpBlock,
      disabled,
      className,
    } = this.props;

    // Removendo props para não inteferir no ReacDOM e retirar o warning
    const newProps = _.omit(this.props, [
      'id',
      'label',
      'state',
      'helpBlock',
      'disabled',
      'onChange',
      'className',
    ]);

    const id = this.props.id || genHash();

    return (
      <FormGroup
        {...newProps}
        controlId={id}
        validationState={state}
      >
        <ControlLabel>{label}</ControlLabel>
        <br />
        <ButtonGroup>
          <Button
            onClick={() => this.inputFileField.click()}
            disabled={disabled}
          >
            <Label icon={`fa fa-${this.state.icon}`}>{this.state.fileName}</Label>
          </Button>
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
          className={className}
          inputRef={(e) => { this.inputFileField = e; }}
          style={{ display: 'none' }}
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
  state: null,
  helpBlock: null,
  disabled: false,
  onChange: null,
  className: '',
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
InputFileComponent.propTypes = {
  id: PropTypes.string,
  label: PropTypes.element,
  state: PropTypes.oneOf(['success', 'warning', 'error']),
  helpBlock: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default InputFileComponent;
