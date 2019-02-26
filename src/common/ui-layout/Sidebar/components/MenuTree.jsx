import React from 'react';
import PropTypes from 'prop-types';

import { Icon, Label } from 'common/ui-elements';

/**
 * Árvore de itens do Menu do Sidebar
 * @param {string} props.icon     Nome completo do ícone
 * @param {string} props.label    Descrição do item do menu
 * @param {object} props.children Itens do submenu
 */
const MenuTree = props => (
  <li className="treeview">
    <a href="#">
      <Icon name={props.icon} /> <Label>{props.label}</Label>
      <Icon name="fa fa-angle-left" className="pull-right" />
    </a>
    <ul className="treeview-menu">
      {props.children}
    </ul>
  </li>
);

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
MenuTree.defaultProps = {
  icon: '',
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
MenuTree.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default MenuTree;
