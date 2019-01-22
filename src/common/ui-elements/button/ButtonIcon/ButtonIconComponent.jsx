import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import Label from '../../Label';
import Icon from '../../Icon';

/**
 * [ButtonIcon, UIE005] Botão com ícone ao lado esquerdo.
 * @param   {string} props.color     Cor em rgb ou exadecimal
 * @param   {string} props.size      Tamanho do botão large, small ou xsmall
 * @param   {string} props.href      Endereço do link
 * @param   {string} props.type      Tipo do botão button(default), reset ou submit
 * @param  {boolean} props.disabled  Botão desabilitado
 * @param  {boolean} props.block     Botão com width 100%
 * @param   {string} props.className Class html opcional no componente
 * @param   {object} props.children  Corpo do componente
 * @param {function} props.onClick   Ação de click do botão
 */
const ButtonIconComponent = (props) => {
  const {
    color,
    size,
    href,
    type,
    disabled,
    block,
    onClick,
  } = props;

  let className = `btn-social ${props.className || ''} `;
  let description = props.children;

  if (props.children) {
    if (!Array.isArray(props.children) && props.children.type.name === Label.name) {
      description = React.cloneElement(props.children, { noSpan: true });
    }
  } else {
    className = className.replace(/btn-social/g, 'btn-social-icon');
  }

  let icon = <i />;
  if (typeof props.icon === 'object' && props.icon.type.name === Icon.name) {
    icon = props.icon;
  }

  return (
    <Button
      bsStyle={color}
      bsSize={size}
      href={href}
      type={type}
      disabled={disabled}
      block={block}
      className={className}
      onClick={onClick}
    >
      {icon}
      {description}
    </Button>
  );
};

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
ButtonIconComponent.defaultProps = {
  color: null,
  size: null,
  href: null,
  type: null,
  disabled: false,
  block: false,
  className: null,
  onClick: null,
  icon: null,
  children: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
ButtonIconComponent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.element,
  children: PropTypes.element,
};

export default ButtonIconComponent;
