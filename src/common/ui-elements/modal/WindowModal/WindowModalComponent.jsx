import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

/**
 * [WindowModal, UIE024] Modal tamanho padrão
 * @param   {object} props.title          Título do modal [Label, UIE002]
 * @param   {object} props.children       Corpo do componente
 * @param    {array} props.btnFooterLeft  Array de botões no footer esquerdo do modal
 * @param    {array} props.btnFooterRight Array de botões no footer direito do modal
 * @param  {boolean} props.show           True para abrir modal e false para fechar
 * @param {function} props.onHide         Executada na ação de fechar modal
 */
class WindowModalComponent extends React.Component {
  /** Método para renderizar os botões do footer */
  renderButtons() {
    const { btnFooterLeft, btnFooterRight } = this.props;

    return (
      <React.Fragment>
        {btnFooterLeft && btnFooterLeft.map((button, index) => React.cloneElement(
          button,
          { className: 'pull-left', key: index.toString() },
        ))}
        {btnFooterRight && btnFooterRight.map((button, index) => React.cloneElement(
          button,
          { key: index.toString() },
        ))}
      </React.Fragment>
    );
  }

  render() {
    return (
      <Modal
        className="modal-default window-modal"
        show={this.props.show}
        onHide={this.props.onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{this.props.children}</Modal.Body>

        <Modal.Footer>
          {this.renderButtons()}
        </Modal.Footer>
      </Modal>
    );
  }
}

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
WindowModalComponent.defaultProps = {
  title: null,
  children: null,
  btnFooterLeft: null,
  btnFooterRight: null,
  show: false,
  onHide: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
WindowModalComponent.propTypes = {
  title: PropTypes.element,
  children: PropTypes.node,
  btnFooterLeft: PropTypes.arrayOf(PropTypes.element),
  btnFooterRight: PropTypes.arrayOf(PropTypes.element),
  show: PropTypes.bool,
  onHide: PropTypes.func,
};

export default WindowModalComponent;
