import React from 'react';

const Icon = (props) => {
  const tipo = props.name.split(' ')[0];
  const { name } = props;

  let className = name;
  className += props.className ? ` ${props.className}` : '';

  const color = props.color ? props.color : '';

  if (tipo === 'glyphicon') {
    return <span className={className} style={{ color }} />;
  } else if (tipo === 'fa' || tipo === 'ion') {
    return <i className={className} style={{ color }} />;
  }
  return <i className="fa fa-fw fa-question" style={{ color: '#f00' }} />;
};

export default Icon;
