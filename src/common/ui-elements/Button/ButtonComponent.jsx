import React from 'react';
import { Button } from 'react-bootstrap';

/**
 * [ButtonIcon, UIE004] Botão padrão da aplicação.
 * @param {string} props.color     Cor em rgb ou exadecimal
 * @param {string} props.size      Tamanho do botão large, small ou xsmall
 * @param {string} props.href      Endereço do link
 * @param {string} props.type      Tipo do botão button(default), reset ou submit
 * @param {string} props.disabled  Botão desabilitado
 * @param {string} props.block     Botão com width 100%
 * @param {string} props.className Class html opcional no componente
 * @param {string} props.onClick   Ação de click do botão
 */
const ButtonComponent = (props) => {
  const color = props.color || null;
  const size = props.size || null;
  const href = props.href || null;
  const type = props.type || null;
  const disabled = props.disabled || false;
  const block = props.block || false;
  const className = props.className || null;
  const onClick = typeof props.onClick === 'function' ? props.onClick : null;

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
      {props.children}
    </Button>
  );
};

export default ButtonComponent;
