import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from '../../../ui-elements';

/**
 * Grupo de Alerts que aparecem acima do título da página.
 * @param {array} props.alerts Array com dados dos Alert [{ title: '', body: '', color: '' }]
 */
const AlertsComponent = props => (
  <div className="alerts" style={{ padding: '15px 15px 0px 15px' }}>
    {props.alerts.map(alert => (
      <Alert
        title={alert.title}
        color={alert.color}
        alertName={alert.alertName}
        key={alert.alertName}
        alert
      >
        {alert.body}
      </Alert>
    ))}
  </div>
);

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
AlertsComponent.defaultProps = {
  alerts: [],
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
AlertsComponent.propTypes = {
  alerts: PropTypes.arrayOf(PropTypes.object),
};

export default AlertsComponent;
