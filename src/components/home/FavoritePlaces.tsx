import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Section } from '../shared/Section'
import { Empty } from '../shared/Empty'
import { useLocationStore } from '../../hooks/location/useLocationStore'
import { useFavorites } from '../../hooks/stores/useFavorites'
import { useStoresQuery } from '../../hooks/stores/useStoreQuery'
import { StoreCard } from '../store/StoreCard'
import { StoreCardSkeleton } from '../store/StoreCardSkeleton'

export const FavoritePlaces = () => {
    const { currentLocation } = useLocationStore();
    const { filterFavorites } = useFavorites();
    const { data: storesData, isLoading: isFavsLoading } = useStoresQuery(currentLocation);

    const favStores = filterFavorites(storesData ?? []);
    return (
        <Section title='Tus Favoritos' linkText='Ver todo' onLinkPress={() => { }}>
            {favStores.length === 0 ? (
                <Empty icon="heart-outline" message="Aún no tienes favoritos" />
            ) : (
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                >
                    {isFavsLoading ? <StoreCardSkeleton /> : 
                        favStores.map((store) => (
                            <View key={store.id} style={styles.cardWrapper}>
                                <StoreCard item={store} />
                            </View>
                    ))}
                </ScrollView>
            )}
        </Section>
    )
}

const styles = StyleSheet.create({
    scrollContent: {
        gap: 12,
        paddingRight: 4,
    },
    cardWrapper: {
        width: 280,
    },
})