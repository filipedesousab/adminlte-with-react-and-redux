import genHash from 'random-hash';

import {
  ADD_ALERT,
  DEL_ALERT,
  ADD_ALERT_POPUP,
  DEL_ALERT_POPUP,
} from './types';

export const addAlert = ({ title, body, color }) => {
  const eventName = genHash();
  console.log(`Adicionando Alert: ${eventName}`);

  return ({
    type: ADD_ALERT,
    payload: {
      title,
      body,
      color,
      eventName,
    },
  });
};

export const delAlert = (eventName) => {
  console.log(`Removendo Alert: ${eventName}`);

  return ({
    type: DEL_ALERT,
    payload: eventName,
  });
};

export const addAlertPopup = ({ title, body, color }) => (dispatch) => {
  const eventName = genHash();
  console.log(`Adicionando AlertPopup: ${eventName}`);

  dispatch({
    type: ADD_ALERT_POPUP,
    payload: {
      title,
      body,
      color,
      eventName,
    },
  });

  setTimeout(() => {
    console.log(`Removendo Automático AlertPopup: ${eventName}`);

    dispatch({
      type: DEL_ALERT_POPUP,
      payload: eventName,
    });
  }, 5000);
};

export const delAlertPopup = (eventName) => {
  console.log(`Removendo AlertPopup: ${eventName}`);

  return ({
    type: DEL_ALERT_POPUP,
    payload: eventName,
  });
};
