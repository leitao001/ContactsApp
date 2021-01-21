// @flow

import { fromJS } from 'immutable';
import Reactotron from 'reactotron-react-native';
import { handleActions, combineActions } from 'redux-actions';
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

const initState = fromJS({
    isLoading: false,
    contacts: [],
});

// REDUCERS
export default handleActions(
    {
        [combineActions(fetchContacts, addNewContact, updateContact, deleteContact)]: (
            state,
            action,
        ) => {
            return state.set('isLoading', true);
        },
        [combineActions(fetchContactsSuccess)]: (state, action) => {
            const { payload } = action;
            const newState = state
                .set('contacts', fromJS(payload.contacts))
                .set('isLoading', false);
            if (__DEV__) {
                Reactotron.display({
                    name: 'Action',
                    value: { ...action, oldState: state, newState },
                    preview: action.type,
                    important: true,
                });
            }
            return newState;
        },
        [combineActions(addNewContactSuccess)]: (state, action) => {
            const { contact } = action.payload;

            const newState = state
                .update('contacts', (data) => data.push(contact))
                .set('isLoading', false);

            if (__DEV__) {
                Reactotron.display({
                    name: 'Action',
                    value: { ...action, oldState: state, newState },
                    preview: action.type,
                    important: true,
                });
            }
            return newState;
        },
        [combineActions(updateContactSuccess)]: (state, action) => {
            const { contact } = action.payload;
            const existList = state.get('contacts').toJS();
            const existIndex = existList.findIndex((item) => {
                return item.id === contact.id;
            });
            if (existIndex !== -1) {
                const newState = state.update('contacts', (data) => {
                    return data.map((item, index) => {
                        if (index !== existIndex) {
                            return item;
                        }
                        return {
                            ...item,
                            ...contact,
                        };
                    });
                });
                if (__DEV__) {
                    Reactotron.display({
                        name: 'Action',
                        value: { ...action, oldState: state, newState },
                        preview: action.type,
                        important: true,
                    });
                }
                return newState;
            }
            return state;
        },
        [combineActions(deleteContactSuccess)]: (state, action) => {
            const { contactId } = action.payload;
            const existList = state.get('contacts').toJS();
            const newList = existList.filter((item) => {
                return item.id !== contactId;
            });
            console.log('newList', newList);
            const newState = state.set('contacts', fromJS(newList)).set('isLoading', false);

            if (__DEV__) {
                Reactotron.display({
                    name: 'Action',
                    value: { ...action, oldState: state, newState },
                    preview: action.type,
                    important: true,
                });
            }
            return newState;
            /* console.log('contactId', contactId);
            const existList = state.get('contacts').toJS();
            console.log('existList', existList);
            const existIndex = existList.findIndex((item) => {
                return item.id === contactId;
            });
            console.log('existIndex', existIndex);
            console.log('newState', existList.delete(existIndex));
            if (existIndex !== -1) {
                const newState = state
                    .set('contacts', existList.delete(existIndex))
                    .set('isLoading', false);

                if (__DEV__) {
                    Reactotron.display({
                        name: 'Action',
                        value: { ...action, oldState: state, newState },
                        preview: action.type,
                        important: true,
                    });
                }
                return newState;
            }
            return state; */
        },
        [combineActions(
            fetchContactsError,
            addNewContactError,
            deleteContactError,
            updateContactError,
        )]: (state, action) => {
            return state.set('isLoading', false);
        },
    },
    initState,
);
