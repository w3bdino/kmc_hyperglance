import axios from 'axios';
import { uuid } from 'uuidv4';
import { takeLatest, call, put } from "redux-saga/effects";
import { fetchContactsSuccess, fetchContactsFailure, addContact } from './contacts.actions';
import ContactActionTypes from './contacts.types';
  

function getContacts(resultnum) {
  return axios.get(`https://randomuser.me/api/?results=20`);
}

export function* fetchContacts(action) {

  try {
    let { data } = yield call(getContacts, action.payload);
    
    const processdata = yield data.results.map(contact => ({...contact, fullname: `${contact.name.first} ${contact.name.last}` }));
    data.results = processdata;

    yield put(fetchContactsSuccess(data));
  } catch (error) {
    yield put(fetchContactsFailure(error.message));
  }
}
  
export function* addContactRequest(action) {
  try {

    // SAMPLE ONLY
    const { title, firstName, lastName, email, birthday, phone, gender } = action.payload;
    const gend = (gender == 'male') ? 'men' : 'women';
    const newContact = { ...action.payload, 
      fullname: `${title} ${firstName} ${lastName}`,
      name: {
        title: title,
        first: firstName,
        last: lastName,
      },
      gender: gender,
      phone: phone,
      picture: {
        thumbnail: `https://randomuser.me/api/portraits/thumb/${gend}/${Math.floor(Math.random() * 101)}.jpg`
      },
      login: {
        uuid: uuid()
      }
    };

    yield put(addContact(newContact));
  } catch (error) {
    console.log(error);
  }
}

export function* contactsSagas() {
  yield takeLatest(ContactActionTypes.FETCH_CONTACTS_START, fetchContacts);
  yield takeLatest(ContactActionTypes.ADD_CONTACTS_REQUEST, addContactRequest);  
}
  