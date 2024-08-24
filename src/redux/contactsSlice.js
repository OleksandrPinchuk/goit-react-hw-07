import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [
            { "id": "id-1", "name": "Rosie Simpson", "phone": "459-12-56" },
            { "id": "id-2", "name": "Hermione Kline", "phone": "443-89-12" },
            { "id": "id-3", "name": "Eden Clements", "phone": "645-17-79" },
            { "id": "id-4", "name": "Annie Copeland", "phone": "227-91-26" }
        ],
    },
    reducers: {
        addContact: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        deleteContact: (state, action) => {
            state.items = state.items.filter(
                (contact) => contact.id !== action.payload
            )
        }
    }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.items;
export const contactsReducer = contactsSlice.reducer;