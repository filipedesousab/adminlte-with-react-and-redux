import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'react-bootstrap';

/**
 * [Tooltip, UIE030] Balão com dicas de um elemento.
 * @param {string} props.description Texto a ser exibido no Tooltip
 * @param {number} props.delay       Atraso em milissegundos para exibir o Popover
 * @param {object} props.children    Elemento a receber o Popover
 */
class TooltipComponent extends React.Component {
  constructor(props) {
    super(props);

    // clientX e clientY são as posições do ponteiro do mouse
    this.state = {
      show: false,
      clientX: 0,
      clientY: 0,
    };

    this.handleShow = this.handleShow.bind(this);
  }

  handleShow() {
    if (!this.time) {
      // Só atualiza as posições e libera a exibição do Tooltip quando o mouse parar de se mover
      // por um determinado tempo
      this.time = setTimeout(
        () => this.setState({ clientX: this.clientX, clientY: this.clientY, show: true }),
        this.props.delay || 1500,
      );
    }
  }

  render() {
    const { clientX, clientY, show } = this.state;
    const { children, description } = this.props;

    return (
      <React.Fragment>
        {/* Clona o children para passar os eventos do mouse */}
        {React.cloneElement(
          children,
          {
            onMouseMove: (e) => {
              // Precisa manter as poissições do ponteiro atualizada no objeto
              this.clientX = e.clientX;
              this.clientY = e.clientY;
              // Enquanto movimenta o mouse chama o handleShow
              this.handleShow();
            },
            onMouseLeave: () => {
              // Remove o Tooltip
              this.setState({ show: false });
              // Desabilita o último setTimeout
              this.time = null;
            },
          },
        )}
        {/* Balão com a dica */}
        {show && (
          <Tooltip
            style={{
              opacity: 'unset',
              position: 'fixed',
              left: clientX + 10,
              top: clientY - 10,
            }}
            id="tooltip"
          >
            {description}
          </Tooltip>
        )}
      </React.Fragment>
    );
  }
}

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
TooltipComponent.defaultProps = {
  description: '',
  delay: undefined,
  children: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
TooltipComponent.propTypes = {
  description: PropTypes.string,
  delay: PropTypes.number,
  children: PropTypes.element,
};


export default TooltipComponent;
