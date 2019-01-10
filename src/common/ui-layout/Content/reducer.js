import {
  CHANGE_CONTENT_TITLE,
  CHANGE_CONTENT_SUBTITLE,
  CHANGE_CONTENT_BREADCRUMB,
  CHANGE_CONTENT_ALERTS,
} from './types';

const INITIAL_STATE = {
  title: '',
  subtitle: '',
  breadcrumb: [],
  alerts: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_CONTENT_TITLE:
      return { ...state, title: action.payload };
    case CHANGE_CONTENT_SUBTITLE:
      return { ...state, subtitle: action.payload };
    case CHANGE_CONTENT_BREADCRUMB:
      return { ...state, breadcrumb: action.payload };
    case CHANGE_CONTENT_ALERTS:
      return { ...state, alerts: action.payload };
    default:
      return state;
  }
};
