import React, { useState } from 'react'
import { FlatList, StyleSheet, RefreshControl, View } from 'react-native'
import { colors } from '../theme/colors'
import { StoreCard } from '../components/store/StoreCard'
import { useStoresQuery } from '../hooks/stores/useStoreQuery'
import { useLocationStore } from '../hooks/location/useLocationStore'
import { StoreCardSkeleton } from '../components/store/StoreCardSkeleton'
import { Empty } from '../components/shared/Empty'

export const StoresScreen = () => {
    const { currentLocation } = useLocationStore();
    const [refreshing, setRefreshing] = useState(false);
    const {
        data: storesData,
        isLoading: isLoadingStores,
        isError,
        refetch
    } = useStoresQuery(currentLocation);

    const handleRefresh = async () => {
        setRefreshing(true);
        await refetch();
        setRefreshing(false);
    }

    if (isLoadingStores) {
        return (
            <FlatList
                data={[1, 2, 3]}
                keyExtractor={(item) => item.toString()}
                contentContainerStyle={styles.list}
                renderItem={() => <StoreCardSkeleton />}
            />
        );
    }

    if (isError) {
        return (
            <View style={styles.errorContainer}>
                <Empty icon="wifi-outline" message="No se pudo cargar las tiendas. Verifica tu conexión." />
            </View>
        );
    }

    return (
        <FlatList
            data={storesData}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                    colors={[colors.primary]}
                    tintColor={colors.primary}
                />
            }
            ListEmptyComponent={
                <Empty icon="storefront-outline" message="No hay tiendas disponibles" />
            }
            renderItem={({ item }) => (
                <StoreCard item={item} />
            )}
        />
    )
}

const styles = StyleSheet.create({
    list: {
        padding: 16,
        gap: 12,
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})