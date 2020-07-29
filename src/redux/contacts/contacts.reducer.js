import ContactActionTypes from './contacts.types';

const INITIAL_STATE2 = {
  contactlists: [],
  isFetching: true,
  errorMessage: undefined,
  filterkeyword: '',
};

const contactsReducer = (state = INITIAL_STATE2, action) => {
  switch (action.type) {
    case ContactActionTypes.FETCH_CONTACTS_START:
      return {
        ...state,
        isFetching: true
      };
    case ContactActionTypes.FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        contactlists: action.payload.results
      };
    case ContactActionTypes.FETCH_CONTACTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };      
    case ContactActionTypes.FILTER_CONTACTS:
      return {
        ...state,
        filterkeyword: action.payload
      };
    case ContactActionTypes.REMOVE_CONTACT:
      const updatedContacts = state.contactlists.filter(t => t.login.uuid !== action.payload);        
      return {
        ...state,
        contactlists: updatedContacts
      };     
    case ContactActionTypes.ADD_CONTACT:

      var currentLists = [...state.contactlists];
      currentLists.unshift(action.payload);

      return {
        ...state,
        contactlists: currentLists
      };             
    default:
      return state;
  }
};

export default contactsReducer;
