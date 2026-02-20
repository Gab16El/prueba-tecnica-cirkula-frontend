import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: [] as number[],
    },
    reducers: {
        toggleFavorite: (state, { payload }: { payload: number }) => {
            const index = state.ids.indexOf(payload);
            if (index >= 0) {
                state.ids.splice(index, 1);
            } else {
                state.ids.push(payload);
            }
        },
        setFavorites: (state, { payload }: { payload: number[] }) => {
            state.ids = payload;
        },
    },
});

export const { toggleFavorite, setFavorites } = favoritesSlice.actions;