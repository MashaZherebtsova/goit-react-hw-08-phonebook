import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './createSlise';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterSlice.reducer,
  },
});
