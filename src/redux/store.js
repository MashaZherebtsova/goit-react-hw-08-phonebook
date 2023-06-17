import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './contacts/contactSlise';

import { authReducer } from './auth/slice';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './contacts/filterSlice';
import persistReducer from 'redux-persist/es/persistReducer';

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReduser,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
// export const store = configureStore({
//   reducer: {
//     contacts: contactsReduser,
//     filter: filterSlice.reducer,
//     auth: authReducer,
//   },
// });
