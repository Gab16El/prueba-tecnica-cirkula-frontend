import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import type { StoresList } from '../../types/cirkula.types';

export const useFavorites = () => {
    const [favorites, setFavorites] = useState<number[]>([]);

    useEffect(() => {
        AsyncStorage.getItem('favorites').then((data: string | null) => {
            if (data) setFavorites(JSON.parse(data));
        });
    }, []);

    const toggleFavorite = async (id: number) => {
        const updated = favorites.includes(id)
            ? favorites.filter(f => f !== id)
            : [...favorites, id];
        setFavorites(updated);
        await AsyncStorage.setItem('favorites', JSON.stringify(updated));
    };

    const isFavorite = (id: number) => favorites.includes(id);

    const filterFavorites = (stores: StoresList[]) => 
        stores.filter(store => favorites.includes(store.id));

    return { favorites, toggleFavorite, isFavorite, filterFavorites };
};