import React from 'react';

import Icon from '../../../ui-elements/Icon';
import Label from '../../../ui-elements/Label';

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

export default MenuTree;
