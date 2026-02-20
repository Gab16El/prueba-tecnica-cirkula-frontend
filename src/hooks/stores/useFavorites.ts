import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import type { StoresList } from '../../types/cirkula.types';
import { useDispatch, useSelector } from 'react-redux';
import { Rootstate } from '../../store/store';
import { toggleFavorite, setFavorites } from '../../store/favorites/favoritesSlice';

export const useFavorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state: Rootstate) => state.favorites.ids);

    useEffect(() => {
        AsyncStorage.getItem('favorites').then((data: string | null) => {
            if (data) dispatch(setFavorites(JSON.parse(data) as number[]));
        });
    }, []);

    const handleToggle = async (id: number) => {
        dispatch(toggleFavorite(id));
        const updated = favorites.includes(id)
            ? favorites.filter(f => f !== id)
            : [...favorites, id];
        await AsyncStorage.setItem('favorites', JSON.stringify(updated));
    };

    const isFavorite = (id: number) => favorites.includes(id);

    const filterFavorites = (stores: StoresList[]) =>
        stores.filter(store => favorites.includes(store.id));

    return {
        favorites, 
        toggleFavorite: handleToggle,
        isFavorite, filterFavorites
    }
}