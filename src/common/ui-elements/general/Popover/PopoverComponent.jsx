import React from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Popover } from 'react-bootstrap';

/**
 * [Popover, UIE029] Balão com descrição de um elemento.
 * @param {string} props.description Texto a ser exibido no Popover
 * @param {string} props.title       Título do Popover
 * @param {string} props.trigger     Ação para acionar o Popover, pode ser um array.
 * @param {string} props.placement   Posição de exibição do Popover
 * @param {number} props.delay       Atraso em milissegundos para exibir o Popover
 * @param {object} props.children    Elemento a receber o Popover
 */
const PopoverComponent = props => React.Children.map(props.children, (child) => {
  const {
    description,
    title,
    trigger,
    placement,
    delay,
  } = props;

  return (
    <OverlayTrigger
      trigger={trigger}
      placement={placement}
      delay={typeof delay === 'boolean' && delay ? 600 : delay}
      overlay={
        <Popover id={`tooltip-${placement}`} title={title}>
          {description}
        </Popover>
      }
    >
      {child}
    </OverlayTrigger>
  );
});

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
PopoverComponent.defaultProps = {
  description: '',
  popoverTitle: undefined,
  trigger: ['hover', 'focus'],
  placement: 'top',
  delay: undefined,
  children: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
PopoverComponent.propTypes = {
  description: PropTypes.string,
  popoverTitle: PropTypes.string,
  trigger: PropTypes.oneOfType([
    PropTypes.oneOf(['click', 'hover', 'focus']),
    PropTypes.arrayOf(PropTypes.oneOf(['click', 'hover', 'focus'])),
  ]),
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  delay: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]),
  children: PropTypes.element,
};


export default PopoverComponent;
