import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import sidebarReducer from './common/ui-layout/Sidebar/reducer';
import contentReducer from './common/ui-layout/Content/reducer';
import alertsReducer from './common/ui-layout/Alerts/reducer';
import testsReducer from './Tests/reducer';

/** @type {function} Une os reducers da aplicação para ser passado pro createStore */
const reducers = combineReducers({
  form: formReducer,
  sidebar: sidebarReducer,
  content: contentReducer,
  alerts: alertsReducer,
  tests: testsReducer,
});

export default reducers;
