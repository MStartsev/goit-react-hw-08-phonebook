import { createSlice } from '@reduxjs/toolkit';

import initialContacts from '../contactsTest.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare: payload => ({ payload }),
    },

    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact, initializeContacts } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
