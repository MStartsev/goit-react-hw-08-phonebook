import { createSlice } from '@reduxjs/toolkit';

export const Filter = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});
export const { setFilter } = Filter.actions;
