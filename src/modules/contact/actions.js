import { createAction } from 'redux-actions';

export const fetchContacts = createAction('rntest/asset/FETCH_CONTACTS');
export const fetchContactsError = createAction('rntest/asset/FETCH_CONTACTS_ERROR');
export const fetchContactsSuccess = createAction('rntest/asset/FETCH_CONTACTS_SUCCESS');

export const addNewContact = createAction(
    'rntest/asset/ADD_NEW_CONTACT',
    ({ name, phoneNumber, city }, cb = () => {}) => ({ name, phoneNumber, city, cb }),
);
export const addNewContactSuccess = createAction('rntest/asset/ADD_NEW_CONTACT_SUCCESS');
export const addNewContactError = createAction('rntest/asset/ADD_NEW_CONTACT_ERROR');

export const updateContact = createAction(
    'rntest/asset/UPDATE_CONTACT',
    ({ id, name, phoneNumber, city }, cb = () => {}) => ({ id, name, phoneNumber, city, cb }),
);
export const updateContactSuccess = createAction('rntest/asset/UPDATE_CONTACT_SUCCESS');
export const updateContactError = createAction('rntest/asset/UPDATE_CONTACT_ERROR');

export const deleteContact = createAction(
    'rntest/asset/DELETE_CONTACT',
    ({ id }, cb = () => {}) => ({ id, cb }),
);
export const deleteContactSuccess = createAction('rntest/asset/DELETE_CONTACT_SUCCESS');
export const deleteContactError = createAction('rntest/asset/DELETE_CONTACT_ERROR');
