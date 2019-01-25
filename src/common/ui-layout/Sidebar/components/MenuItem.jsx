import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../../ui-elements/Icon';
import Label from '../../../ui-elements/Label';

/**
 * Itens do Menu do Sidebar e da árvore de itens do Menu do Sidebar.
 * @param {string} props.href  Endereço do link
 * @param {string} props.icon  Nome completo do ícone
 * @param {string} props.label Descrição do item do menu
 */
const MenuItem = props => (
  <li>
    <a href={props.href}>
      <Icon name={props.icon} /> <Label>{props.label}</Label>
    </a>
  </li>
);

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
MenuItem.defaultProps = {
  href: '#',
  icon: '',
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
MenuItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
};


export default MenuItem;