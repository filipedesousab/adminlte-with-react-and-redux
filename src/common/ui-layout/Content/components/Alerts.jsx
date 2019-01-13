import React from 'react';
// import genHash from 'random-hash';
// Aguardando o componente Alert ser construído
// import Alert from '../../../ui-elements/Alert';

/**
 * Grupo de Alerts que aparecem acima do título da página.
 * @param {array} props.alerts Array com dados dos Alert [{ title: '', body: '', color: '' }]
 */
const AlertsComponent = props => (
  <div className="alerts" style={{ padding: '15px 15px 0px 15px' }}>
    {/* props.alerts.map((alert) => {
      return (<Alert title={alert.title} color={alert.color || 'info'} key={genHash()}>
        {alert.body}
      </Alert>)
    }) */}
  </div>
);

export default AlertsComponent;
