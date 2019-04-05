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
  const {
    color,
    title,
    titleAddon,
    children,
    footer,
  } = props;

  let newColor = 'box-primary';

  if (color) {
    newColor = `box-${color}`;

    if (color === 'muted') {
      newColor = '';
    }
  }

  const renderTitle = () => {
    if (title || titleAddon) {
      return (
        <div className="box-header with-border">
          { title ? <h3 className="box-title">{title}</h3> : null}
          { titleAddon ? <div className="box-title-addon">{titleAddon}</div> : null}
        </div>
      );
    }

    return null;
  };

  const renderFooter = () => {
    if (footer) {
      return (
        <div className="box-footer">
          {footer}
        </div>
      );
    }

    return null;
  };

  return (
    <div className={`box ${newColor}`}>
      {renderTitle()}
      <div className="box-body">
        {children}
      </div>
      {renderFooter()}
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
