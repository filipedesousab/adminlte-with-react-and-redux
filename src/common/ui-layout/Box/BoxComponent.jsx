import React from 'react';

/**
 * [Box, UIL006] Componente para separar conteúdos na página.
 * @param {object} props.title    Título do box [Label, UIE002]
 * @param {string} props.color    Cor do box primary, info, success, warning, danger ou muted
 * @param {object} props.children Corpo do box
 * @param {string} props.footer   Rodapé do box
 */
const BoxComponent = (props) => {
  let color = 'box-primary';

  if (props.color) {
    color = `box-${props.color}`;

    if (color === 'muted') {
      color = '';
    }
  }

  return (
    <div className={`box ${color}`}>
      {props.title ?
        <div className="box-header with-border">
          <h3 className="box-title">{props.title}</h3>
        </div>
      : false}
      <div className="box-body">
        {props.children}
      </div>
      {props.footer ?
        <div className="box-footer">
          {props.footer}
        </div>
      : false}
    </div>
  );
};

export default BoxComponent;
