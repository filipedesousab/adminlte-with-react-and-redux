import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup } from 'react-bootstrap';

/**
 * [ButtonGroup, UIE009] Botão padrão da aplicação.
 * @param   {array} props.buttons    Botões a serem agrupados. Array de [Button, UIE004]]
 * @param {boolean} props.vertical   Alinhamento vertical dos botões
 * @param  {string} props.className  Class html opcional no componente
 */
const ButtonApp = (props) => {
  const {
    vertical,
    className,
    children,
  } = props;

  return (
    <ButtonGroup
      vertical={vertical}
      className={className}
    >
      {children}
    </ButtonGroup>
  );
};

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
ButtonApp.defaultProps = {
  vertical: null,
  children: null,
  className: '',
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
ButtonApp.propTypes = {
  children: PropTypes.node,
  vertical: PropTypes.bool,
  className: PropTypes.string,
};

export default ButtonApp;
