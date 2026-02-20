import React from 'react'
import { View, StyleSheet } from 'react-native'
import { colors } from '../../theme/colors'

export const StoreCardSkeleton = () => {
    return (
        <View style={styles.card}>
            <View style={styles.image} />
            <View style={styles.info}>
                <View style={styles.titleRow}>
                    <View style={styles.title} />
                    <View style={styles.km} />
                </View>
                <View style={styles.subtitle} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 16,
        overflow: 'hidden',
        elevation: 2,
    },
    image: {
        width: '100%',
        height: 160,
        backgroundColor: '#E5E7EB',
    },
    info: {
        padding: 12,
        gap: 8,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        width: '50%',
        height: 18,
        borderRadius: 6,
        backgroundColor: '#E5E7EB',
    },
    km: {
        width: '20%',
        height: 18,
        borderRadius: 6,
        backgroundColor: '#E5E7EB',
    },
    subtitle: {
        width: '40%',
        height: 14,
        borderRadius: 6,
        backgroundColor: '#E5E7EB',
    },
})