import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../auth/operations';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { data } = await api.post('/contacts', contact);
    return data;
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get('/contacts');
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deletecontact',
  async (contactId, { rejectWithValue }) => {
    try {
      await api.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
