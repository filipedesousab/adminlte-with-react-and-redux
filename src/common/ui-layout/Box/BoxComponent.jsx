import React from 'react';
import PropTypes from 'prop-types';

/**
 * [Box, UIL006] Componente para separar conteúdos na página.
 * @param {object} props.title      Título do box [Label, UIE002]
 * @param {object} props.titleAddon Inserir componente ao lado do título
 * @param {string} props.color      Cor do box primary, info, success, warning, danger ou muted
 * @param {object} props.children   Corpo do box
 * @param {object} props.footer     Rodapé do box
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
          <div className="box-title-addon">{props.titleAddon}</div>
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

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
BoxComponent.defaultProps = {
  color: null,
  title: null,
  titleAddon: null,
  children: null,
  footer: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
BoxComponent.propTypes = {
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger', 'muted']),
  title: PropTypes.element,
  titleAddon: PropTypes.element,
  children: PropTypes.node,
  footer: PropTypes.node,
};

export default BoxComponent;
