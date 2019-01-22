import React from 'react';
import PropTypes from 'prop-types';

/**
 * [Icon, UIE001] Componente de ícones utilizado na aplicação.
 * @param {string} props.name      Nome completo dos ícones do FontAwesome, Ionicons ou Glyphicon
 * @param {string} props.color     Cor em rgb ou exadecimal
 * @param {string} props.className Class html opcional no componente
 */
const IconComponent = (props) => {
  const { color, name } = props;
  const tipo = name.split(' ')[0];

  let className = name;
  className += props.className ? ` ${props.className}` : '';


  if (tipo === 'glyphicon') {
    return <span className={className} style={{ color }} />;
  }
  return <i className={className} style={{ color }} />;
};

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
IconComponent.defaultProps = {
  color: '',
  name: '',
  className: '',
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
IconComponent.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
};

export default IconComponent;
