import AsyncStorage from '@react-native-community/async-storage';
import { put, call, select, takeEvery } from 'redux-saga/effects';
import request from '@utils/request';
import {
    fetchContacts,
    fetchContactsError,
    fetchContactsSuccess,
    addNewContact,
    addNewContactError,
    addNewContactSuccess,
    updateContact,
    updateContactError,
    updateContactSuccess,
    deleteContact,
    deleteContactSuccess,
    deleteContactError,
} from './actions';
import * as apis from '@utils/api';

function* fetchContactsSaga({ payload }) {
    try {
        const data = yield call(apis.fetchAllConact);
        yield put(fetchContactsSuccess({ contacts: data }));
    } catch (e) {
        yield put(fetchContactsError());
    }
}
function* addNewContactSaga({ payload }) {
    try {
        const { name, phoneNumber, city, cb } = payload;
        const contact = yield call(apis.addContactQuery, { data: { name, phoneNumber, city } });
        yield put(addNewContactSuccess({ contact }));
        cb();
    } catch (e) {
        yield put(addNewContactError());
    }
}
function* updateContactSaga({ payload }) {
    try {
        const { id, name, phoneNumber, city, cb } = payload;
        yield call(apis.updateContactQuery, { id, data: { name, phoneNumber, city } });
        const contact = yield call(apis.fetchContactById, id);
        yield put(updateContactSuccess({ contact }));
        cb();
    } catch (e) {
        yield put(updateContactError());
    }
}
function* deleteContactSaga({ payload }) {
    try {
        const { id } = payload;
        yield call(apis.deleteContactQuery, { id });
        yield put(deleteContactSuccess({ contactId: id }));
    } catch (e) {
        yield put(deleteContactError());
    }
}
export default function* contactSaga() {
    yield takeEvery(fetchContacts.toString(), fetchContactsSaga);
    yield takeEvery(addNewContact.toString(), addNewContactSaga);
    yield takeEvery(updateContact.toString(), updateContactSaga);
    yield takeEvery(deleteContact.toString(), deleteContactSaga);
}
