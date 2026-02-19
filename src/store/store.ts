import { configureStore } from '@reduxjs/toolkit';
import { locationSlice } from './location/locationSlice';

export const store = configureStore({
    reducer: {
        location: locationSlice.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export type Rootstate = ReturnType<typeof store.getState>;