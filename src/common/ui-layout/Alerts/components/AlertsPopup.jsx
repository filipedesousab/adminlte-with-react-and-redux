import React from 'react';
import PropTypes from 'prop-types';

import { Alert } from '../../../ui-elements';

/**
 * Grupo de Alerts que aparecem no canto superior direito temporareamente.
 * @param {array} props.alertsPopup Array com dados dos Alert [{ title: '', body: '', color: '' }]
 */
const AlertsPopupComponent = props => (
  <div className="alertspopup">
    {props.alertsPopup.map(alertPopup => (
      <Alert
        title={alertPopup.title}
        color={alertPopup.color}
        eventName={alertPopup.eventName}
        key={alertPopup.eventName}
        alertPopup
      >
        {alertPopup.body}
      </Alert>
    ))}
  </div>
);

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
AlertsPopupComponent.defaultProps = {
  alertsPopup: [],
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
AlertsPopupComponent.propTypes = {
  alertsPopup: PropTypes.arrayOf(PropTypes.object),
};

export default AlertsPopupComponent;
