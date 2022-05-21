import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { pokemonApi } from "./pokemon";
import { contactsApi } from "./contacts";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(pokemonApi.middleware),
    getDefaultMiddleware().concat(contactsApi.middleware),
});

setupListeners(store.dispatch);
