import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { IonIcon } from '../shared/IonIcon'
import { colors } from '../../theme/colors'

interface ExploreStoreCardProps {
    id: number
    name: string
    address: string
    phone: string
    rating: number
    thumbnail: any
    pickupTime: string
    buyUntil: string
    onPress?: () => void
}

export const ExploreStoreCard = ({
    name,
    address,
    phone,
    rating,
    thumbnail,
    pickupTime,
    buyUntil,
    onPress,
}: ExploreStoreCardProps) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
            <View style={styles.header}>
                <View style={styles.logoContainer}>
                    <Image source={thumbnail} style={styles.logo} />
                </View>
                <View style={styles.headerInfo}>
                    <Text style={styles.name} numberOfLines={1}>{name}</Text>
                    <View style={styles.addressRow}>
                        <IonIcon name="location-outline" size={13} color={colors.gray} />
                        <Text style={styles.address} numberOfLines={1}>{address}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.footer}>
                <View style={styles.footerLeft}>
                    <IonIcon name="call-outline" size={14} color={colors.gray} />
                    <Text style={styles.phone}>{phone}</Text>
                </View>
                <View style={styles.ratingBadge}>
                    <IonIcon name="star" size={13} color="#F59E0B" />
                    <Text style={styles.rating}>{rating}</Text>
                </View>
            </View>

            <View style={styles.timesRow}>
                <View style={styles.timeBadge}>
                    <IonIcon name="bag-outline" size={14} color={colors.primary} />
                    <Text style={styles.timeLabel}>Comprar hasta</Text>
                    <Text style={styles.timeValue}>{buyUntil}</Text>
                </View>
                <View style={styles.timeBadge}>
                    <IonIcon name="bicycle-outline" size={14} color={colors.primary} />
                    <Text style={styles.timeLabel}>Recoger hasta</Text>
                    <Text style={styles.timeValue}>{pickupTime}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 16,
        padding: 14,
        marginBottom: 14,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    logoContainer: {
        width: 56,
        height: 56,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: colors.primary,
    },
    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    headerInfo: {
        flex: 1,
        gap: 4,
    },
    name: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.black,
    },
    addressRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
    },
    address: {
        fontSize: 12,
        color: colors.gray,
        flex: 1,
    },
    divider: {
        height: 1,
        backgroundColor: colors.grayLight,
        marginVertical: 10,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    footerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    phone: {
        fontSize: 13,
        color: colors.gray,
    },
    ratingBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        backgroundColor: '#FEF3C7',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 20,
    },
    rating: {
        fontSize: 13,
        fontWeight: '600',
        color: '#92400E',
    },
    timesRow: {
        flexDirection: 'row',
        gap: 10,
    },
    timeBadge: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        backgroundColor: colors.primary,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 10,
    },
    timeLabel: {
        fontSize: 11,
        color: colors.white,
    },
    timeValue: {
        fontSize: 12,
        fontWeight: 'bold',
        color: colors.white,
    },
})