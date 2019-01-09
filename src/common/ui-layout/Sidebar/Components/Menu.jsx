import React from 'react';
import genHash from 'random-hash';

import MenuItem from './MenuItem';
import MenuTree from './MenuTree';

export default props => (
  <ul className="sidebar-menu tree" data-widget="tree">
    {props.items.map(item => {
      if (item.hasOwnProperty('items')) {
        return (
          <MenuTree label={item.label} icon={item.icon} key={genHash()}>
            {item.items.map(item => (
              <MenuItem href={item.href} label={item.label} icon={item.icon} key={genHash()} />
            ))}
          </MenuTree>
        );
      }
      return <MenuItem href={item.href} label={item.label} icon={item.icon} key={genHash()} />
    })}
  </ul>
);