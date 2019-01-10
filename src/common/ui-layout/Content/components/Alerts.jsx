import React from 'react';
import genHash from 'random-hash';

const Alerts = props => (
  <div className="alerts" style={{ padding: '15px 15px 0px 15px' }}>
    {props.alerts.map(alert => {
      /*<Alert title={alert.title} color={alert.color || 'info'} key={genHash()}>
        {alert.body}
      </Alert>*/
      return false;
    })}
  </div>
);

export default Alerts;
