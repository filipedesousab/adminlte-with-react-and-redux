import React from 'react';
import PropTypes from 'prop-types';
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

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
BreadcrumbComponent.defaultProps = {
  breadcrumb: [],
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
BreadcrumbComponent.propTypes = {
  breadcrumb: PropTypes.arrayOf(PropTypes.object),
};

export default BreadcrumbComponent;
