import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import sidebarReducer from './common/ui-layout/Sidebar/reducer';
import contentReducer from './common/ui-layout/Content/reducer';

export default combineReducers({
  form: formReducer,
  sidebar: sidebarReducer,
  content: contentReducer,
});
