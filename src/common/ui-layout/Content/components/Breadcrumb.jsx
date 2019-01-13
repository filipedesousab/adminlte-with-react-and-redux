import React from 'react';
import genHash from 'random-hash';

import Icon from '../../../ui-elements/Icon';

/**
 * Breadcrumb aparece no lado direito da página, ajuda o usuário se localizar no sistema.
 * @param {array} props.breadcrumb Array do breadcrumb da página [{ label: ‘’, path: ‘’ }]
 */
const BreadcrumbComponent = props => (
  <ol className="breadcrumb">
    <li><Icon name="fa fa-dashboard" /></li>
    {props.breadcrumb.map(item => (
      <li key={genHash()}>
        <a href={item.href ? item.href : '#'}>{item.label}</a>
      </li>
    ))}
  </ol>
);

export default BreadcrumbComponent;
