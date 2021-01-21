import { createSelector } from 'reselect';
export const contact = (state) => state.contact;
export const contactsSelector = createSelector(
    contact,
    (data) => data.get('contacts')?.toJS() || [],
);
