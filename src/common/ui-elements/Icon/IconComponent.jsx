import React from 'react';

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
