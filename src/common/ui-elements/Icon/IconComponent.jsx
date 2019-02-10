import React from 'react';
import PropTypes from 'prop-types';

/**
 * [Icon, UIE001] Componente de ícones utilizado na aplicação.
 * @param {string} props.name      Nome completo dos ícones do FontAwesome, Ionicons ou Glyphicon
 * @param {string} props.color     Cor em rgb ou exadecimal
 * @param {string} props.className Class html opcional no componente
 * @param {object} props.style     Estilo CSS a ser aplicado no componente
 */
const IconComponent = (props) => {
  const { color, name, style } = props;

  if (name) {
    const tipo = name.split(' ')[0];

    let className = name;
    className += props.className ? ` ${props.className}` : '';

    if (tipo === 'glyphicon') {
      return <span className={className} style={{ color, ...style }} />;
    }

    return <i className={className} style={{ color, ...style }} />;
  }

  return false;
};

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
IconComponent.defaultProps = {
  color: null,
  name: null,
  className: null,
  style: {},
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
IconComponent.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default IconComponent;
