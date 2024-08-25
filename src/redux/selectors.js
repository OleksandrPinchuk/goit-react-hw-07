import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items || [];
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectFilter = (state) => state.filter.value || '';
export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter], (contacts, contactFilter) => {
        return contacts?.filter((contact) =>
            contact.name.toLowerCase().includes(contactFilter.toLowerCase()))
    }
);