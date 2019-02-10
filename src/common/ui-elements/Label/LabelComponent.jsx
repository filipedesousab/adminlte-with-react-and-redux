import React from 'react';
import PropTypes from 'prop-types';
import genHash from 'random-hash';

import Icon from '../Icon';

/**
 * [Label, UIE002] Label geral da aplicação.
 * @param  {string} props.color     Cor em rgb ou exadecimal
 * @param {boolean} props.noSpan    Quando o label não puder conter a tag <span>
 * @param {boolean} props.form      Quando for label de formulário (em teste para substituir LabelForm)
 * @param  {string} props.htmlFor   Id do campo ligado ao label
 * @param  {string} props.icon      Nome do ícone a ser inserido ao lado esquerdo do texto
 * @param  {object} props.children  Corpo do componente
 * @param  {string} props.className Class html opcional no componente
 * @param  {object} props.style     Estilo CSS a ser aplicado no componente
 */
const LabelComponent = (props) => {
  const {
    color,
    noSpan,
    form,
    htmlFor,
    icon,
    children,
    className,
    style,
  } = props;

  if (noSpan) {
    const elementos = [<Icon name={icon} key={genHash()} />, ' ', children];
    return elementos.map(item => item);
  } else if (form) {
    return (
      <label
        className={`control-label ${className}`}
        htmlFor={htmlFor}
        style={{ ...style, color }}
      >
        <Icon name={icon} /> {children}
      </label>
    );
  }

  return (
    <span
      className={className}
      style={{ ...style, color }}
    >
      <Icon name={icon} /> {children}
    </span>
  );
};

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
LabelComponent.defaultProps = {
  color: null,
  noSpan: false,
  form: false,
  htmlFor: null,
  icon: null,
  children: null,
  className: '',
  style: {},
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
LabelComponent.propTypes = {
  color: PropTypes.string,
  noSpan: PropTypes.bool,
  form: PropTypes.bool,
  htmlFor: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default LabelComponent;
