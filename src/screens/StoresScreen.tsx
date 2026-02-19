import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { colors } from '../theme/colors'
import { stores } from '../mocks/stores.mock'
import { StoreCard } from '../components/store/StoreCard'

export const StoresScreen = () => {
    return (
        <FlatList
            data={stores}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
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
    card: {
        backgroundColor: colors.white,
        borderRadius: 16,
        overflow: 'hidden',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
    },
    nameKm: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
        width: '100%',
        height: 160,
        resizeMode: 'cover',
    },
    info: {
        padding: 12,
        gap: 4,
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.black,
        marginBottom: 4,
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 4,
    },
    meta: {
        fontSize: 18,
        color: colors.gray,
    },
})