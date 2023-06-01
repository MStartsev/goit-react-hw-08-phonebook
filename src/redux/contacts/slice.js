// import { createSlice } from '@reduxjs/toolkit';

// import { addContact, fetchContacts, deleteContact } from './operations';

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },

//   extraReducers: builder => {
//     builder
//       .addCase(addContact.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.items = [...state.items, action.payload];
//       })
//       .addCase(fetchContacts.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.items = action.payload;
//         state.isLoading = false;
//       })
//       .addCase(fetchContacts.rejected, (state, action) => {
//         state.error = action.payload;
//         state.isLoading = false;
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.items = state.items.filter(
//           contact => contact.id !== action.payload
//         );
//       });
//   },
// });

import { createSlice } from '@reduxjs/toolkit';
import { batch } from 'react-redux';
import { fetchContacts, deleteContact, addContact } from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        batch(() => {
          state.isLoading = false;
          state.items = action.payload;
          state.error = null;
        });
      })

      .addCase(fetchContacts.pending, state => {
        batch(() => {
          state.isLoading = true;
          state.error = null;
        });
      })

      .addCase(fetchContacts.rejected, (state, action) => {
        batch(() => {
          state.isLoading = false;
          state.error = action.payload;
        });
      })

      .addCase(addContact.fulfilled, (state, action) => {
        batch(() => {
          state.isLoading = false;
          const createdContact = action.payload;
          state.items.push(createdContact);
        });
      })

      .addCase(addContact.pending, state => {
        batch(() => {
          state.isLoading = true;
          state.error = null;
        });
      })

      .addCase(addContact.rejected, (state, action) => {
        batch(() => {
          state.isLoading = false;
          state.error = action.payload;
        });
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        batch(() => {
          state.isLoading = false;
          const deletedContactId = action.payload;
          state.items = state.items.filter(
            contact => contact.id !== deletedContactId
          );
        });
      })

      .addCase(deleteContact.pending, state => {
        batch(() => {
          state.isLoading = true;
          state.error = null;
        });
      })

      .addCase(deleteContact.rejected, (state, action) => {
        batch(() => {
          state.isLoading = false;
          state.error = action.payload;
        });
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
