import { createSlice } from '@reduxjs/toolkit';

interface Location {
    latitude: number;
    longitude: number;
}

export const locationSlice = createSlice({
    name: 'location',
    initialState: {
        currentLocation: null as Location | null,
    },
    reducers: {
        setCurrentLocation: (state, { payload }) => {
            state.currentLocation = payload;
        },
    },
});

export const {
    setCurrentLocation,
} = locationSlice.actions;