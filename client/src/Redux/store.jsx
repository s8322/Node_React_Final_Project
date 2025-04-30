import { configureStore } from '@reduxjs/toolkit'
import tokenSlice from './tokenSlice'
import apartmentSlice from '../slices/apartmentSlice'; // אם אתה יוצר רדוסר לדירות

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage,
};

const persistedTokenReducer = persistReducer(persistConfig, tokenSlice);

const store = configureStore({
  reducer: {
    token: persistedTokenReducer, // Persisted token reducer
    apartments: apartmentSlice
  },
});

const persistor = persistStore(store);

export { store, persistor };