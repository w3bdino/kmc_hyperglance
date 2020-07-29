import { all, call } from 'redux-saga/effects';
import { contactsSagas } from './contacts/contacts.sagas';

export default function* rootSaga() {
  yield all([
    call(contactsSagas), 
  ]);
}
