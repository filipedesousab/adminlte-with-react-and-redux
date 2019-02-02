import {
  ADD_ALERT,
  DEL_ALERT,
  ADD_ALERT_POPUP,
  DEL_ALERT_POPUP,
} from './types';

const INITIAL_STATE = {
  alerts: [],
  alertsPopup: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ALERT:
      return { ...state, alerts: [...state.alerts, action.payload] };
    case DEL_ALERT: {
      const alerts = state.alerts.filter(e => e.alertName !== action.payload);
      return { ...state, alerts };
    }
    case ADD_ALERT_POPUP:
      return { ...state, alertsPopup: [...state.alertsPopup, action.payload] };
    case DEL_ALERT_POPUP: {
      const alertsPopup = state.alertsPopup.filter(e => e.alertName !== action.payload);
      return { ...state, alertsPopup };
    }
    default:
      return state;
  }
};
