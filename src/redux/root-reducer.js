import { combineReducers } from 'redux';
import ContactActionTypes from './contacts/contacts.reducer';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  contacts: ContactActionTypes,
  routing: routerReducer
});

export default rootReducer;
