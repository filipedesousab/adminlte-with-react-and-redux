import React from 'react';

/**
 * [Icon, UIE001] Componente de ícones utilizado na aplicação.
 * @param {string} props.name      Nome completo dos ícones do FontAwesome, Ionicons ou Glyphicon
 * @param {string} props.color     Cor em rgb ou exadecimal
 * @param {string} props.className Class html opcional no componente
 */
const Icon = (props) => {
  const color = props.color || '';
  const name = props.name || '';
  const tipo = name.split(' ')[0];

  let className = name;
  className += props.className ? ` ${props.className}` : '';


  if (tipo === 'glyphicon') {
    return <span className={className} style={{ color }} />;
  }
  return <i className={className} style={{ color }} />;
};

export default Icon;
