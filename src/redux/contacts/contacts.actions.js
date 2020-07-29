import ContactActionTypes from './contacts.types';

export const fetchContactsStart = pagenum => ({
  type: ContactActionTypes.FETCH_CONTACTS_START,
  payload: pagenum
});

export const fetchContactsSuccess = contactlists => ({
  type: ContactActionTypes.FETCH_CONTACTS_SUCCESS,
  payload: contactlists
});

export const fetchContactsFailure = errorMessage => ({
  type: ContactActionTypes.FETCH_CONTACTS_FAILURE,
  payload: errorMessage
});


export const searchContact = keyword => ({
  type: ContactActionTypes.FILTER_CONTACTS,
  payload: keyword
});

export const removeContact = id => ({
  type: ContactActionTypes.REMOVE_CONTACT,
  payload: id
});

export const addContact = info => ({
  type: ContactActionTypes.ADD_CONTACT,
  payload: info
});
 
export const addContactRequest = info => ({
  type: ContactActionTypes.ADD_CONTACTS_REQUEST,
  payload: info
});
