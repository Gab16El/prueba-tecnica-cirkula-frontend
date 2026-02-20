import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IonIcon } from '../shared/IonIcon'
import { colors } from '../../theme/colors'
import { StoresList } from '../../types/cirkula.types'
import { useFavorites } from '../../hooks/stores/useFavorites'

export const StoreCard = ({ item }: { item: StoresList }) => {
    const { toggleFavorite, isFavorite } = useFavorites();
    const favorite = isFavorite(item.id);

    return (
        <TouchableOpacity style={styles.card} activeOpacity={0.9}>
            <Image source={{ uri: item.bannerUrl }} style={styles.image} />

            <TouchableOpacity
                style={styles.heartButton}
                onPress={() => toggleFavorite(item.id)}
            >
                <IonIcon
                    name={favorite ? 'heart' : 'heart-outline'}
                    size={22}
                    color={favorite ? '#EF4444' : colors.white}
                />
            </TouchableOpacity>

            <View style={styles.info}>
                <View style={styles.nameKm}>
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={styles.metaRow}>
                        <IonIcon name="location-outline" size={13} color={colors.gray} />
                        <Text style={styles.meta}>{item.distanceInKm} km</Text>
                    </View>
                </View>
                <View style={styles.metaRow}>
                    <IonIcon name="time-outline" size={13} color={colors.gray} />
                    <Text style={styles.meta}>{item.openTime + ' / ' + item.closeTime}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
    heartButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 20,
        padding: 6,
        zIndex: 1,
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