import React from 'react';
import PropTypes from 'prop-types';
import genHash from 'random-hash';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

import { ButtonGroup, Button, Label } from '../../';

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
    this.props.onChange(e, fileName);

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
    const id = this.props.id || genHash();
    return (
      <FormGroup
        controlId={id}
        validationState={this.props.state}
      >
        <ControlLabel>{this.props.label}</ControlLabel>
        <br />
        <ButtonGroup>
          <Button
            onClick={() => this.inputFileField.click()}
            disabled={this.props.disabled}
          >
            <Label icon={`fa fa-${this.state.icon}`}>{this.state.fileName}</Label>
          </Button>
          {
            this.state.clean &&
            <Button onClick={this.clean} color="danger">
              <Label icon="fa fa-times" />
            </Button>
          }
        </ButtonGroup>
        <FormControl
          type="file"
          disabled={this.props.disabled}
          onChange={this.handleChange}
          className={this.props.className}
          inputRef={(e) => { this.inputFileField = e; }}
          style={{ display: 'none' }}
        />
        {/** Se houver helpBlock, inclui */}
        {this.props.helpBlock && <HelpBlock>{this.props.helpBlock}</HelpBlock>}
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
  className: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
InputFileComponent.propTypes = {
  id: PropTypes.string,
  label: PropTypes.element,
  state: PropTypes.string,
  helpBlock: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default InputFileComponent;
