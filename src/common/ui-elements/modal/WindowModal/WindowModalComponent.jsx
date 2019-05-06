import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

/**
 * [WindowModal, UIE024] Modal tamanho padrão
 * @param   {?object} props.title          Título do modal [Label, UIE002]
 * @param   {?object} props.children       Corpo do componente
 * @param    {?array} props.btnFooterLeft  Array de botões no footer esquerdo do modal
 * @param    {?array} props.btnFooterRight Array de botões no footer direito do modal
 * @param  {?boolean} props.show           True para abrir modal e false para fechar
 * @param {?function} props.onHide         Executada na ação de fechar modal
 */
class WindowModalComponent extends React.Component {
  /** Método para renderizar os botões do footer */
  renderButtons({ btnFooterLeft, btnFooterRight }) {
    return (
      <React.Fragment>
        {btnFooterLeft && React.Children.map(
          btnFooterLeft,
          (button, index) => React.cloneElement(
            button,
            { className: 'pull-left', key: index.toString() },
          ),
        )}
        {btnFooterRight && React.Children.map(
          btnFooterRight,
          (button, index) => React.cloneElement(
            button,
            { key: index.toString() },
          ),
        )}
      </React.Fragment>
    );
  }

  render() {
    const {
      btnFooterLeft,
      btnFooterRight,
      children,
      onHide,
      show,
      title,
    } = this.props;

    return (
      <Modal
        className="modal-default window-modal"
        show={show}
        onHide={onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{children}</Modal.Body>

        <Modal.Footer>
          {this.renderButtons({ btnFooterLeft, btnFooterRight })}
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
  btnFooterLeft: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  btnFooterRight: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  show: PropTypes.bool,
  onHide: PropTypes.func,
};

export default WindowModalComponent;
