import { configureStore } from '@reduxjs/toolkit';
import { locationSlice } from './location/locationSlice';
import { favoritesSlice } from './favorites/favoritesSlice';

export const store = configureStore({
    reducer: {
        location: locationSlice.reducer,
        favorites: favoritesSlice.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export type Rootstate = ReturnType<typeof store.getState>;