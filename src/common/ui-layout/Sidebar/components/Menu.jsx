import React from 'react';
import genHash from 'random-hash';

import MenuItem from './MenuItem';
import MenuTree from './MenuTree';

/**
 * Itens do menu esquerdo da aplicação.
 * @param {array} props.items [{ label: '', icon: '', items: [{ label: '', icon: '', href: '' }] }]
 */
const MenuComponent = props => (
  <ul className="sidebar-menu tree" data-widget="tree">
    {props.items.map((item) => {
      if (item.hasOwnProperty('items')) {
        return (
          <MenuTree label={item.label} icon={item.icon} key={genHash()}>
            {item.items.map(itemTree => (
              <MenuItem
                href={itemTree.href}
                label={itemTree.label}
                icon={itemTree.icon}
                key={genHash()}
              />
            ))}
          </MenuTree>
        );
      }
      return <MenuItem href={item.href} label={item.label} icon={item.icon} key={genHash()} />;
    })}
  </ul>
);

export default MenuComponent;
