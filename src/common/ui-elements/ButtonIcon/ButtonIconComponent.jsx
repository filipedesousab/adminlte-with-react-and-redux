import React from 'react';
import { Button } from 'react-bootstrap';
import { Content } from '../../ui-layout';
import Label from '../Label';
import Icon from '../Icon';

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
