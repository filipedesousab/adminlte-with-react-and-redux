import React from 'react';
import { Button } from 'react-bootstrap';

import Label from '../Label';
import Icon from '../Icon';

/**
 * [ButtonIcon, UIE005] Botão com ícone ao lado esquerdo.
 * @param {string} props.color     Cor em rgb ou exadecimal
 * @param {string} props.size      Tamanho do botão large, small ou xsmall
 * @param {string} props.href      Endereço do link
 * @param {string} props.type      Tipo do botão button(default), reset ou submit
 * @param {string} props.disabled  Botão desabilitado
 * @param {string} props.block     Botão com width 100%
 * @param {string} props.onClick   Ação de click do botão
 * @param {string} props.className Class html opcional no componente
 */
const ButtonIconComponent = (props) => {
  const color = props.color || null;
  const size = props.size || null;
  const href = props.href || null;
  const type = props.type || null;
  const disabled = props.disabled || false;
  const block = props.block || false;
  const onClick = typeof props.onClick === 'function' ? props.onClick : null;

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

export default ButtonIconComponent;
