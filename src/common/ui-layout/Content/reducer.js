import {
  CHANGE_CONTENT_TITLE,
  CHANGE_CONTENT_SUBTITLE,
  CHANGE_CONTENT_BREADCRUMB,
} from './types';

const INITIAL_STATE = {
  title: null,
  subtitle: null,
  breadcrumb: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_CONTENT_TITLE:
      return { ...state, title: action.payload };
    case CHANGE_CONTENT_SUBTITLE:
      return { ...state, subtitle: action.payload };
    case CHANGE_CONTENT_BREADCRUMB:
      return { ...state, breadcrumb: action.payload };
    default:
      return state;
  }
};
