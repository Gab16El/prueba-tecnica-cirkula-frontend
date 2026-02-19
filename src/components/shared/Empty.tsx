import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { IonIcon } from './IonIcon'
import { colors } from '../../theme/colors'

interface EmptyProps {
    icon: string
    message: string
}

export const Empty = ({ icon, message }: EmptyProps) => {
    return (
        <View style={styles.container}>
            <IonIcon name={icon} size={48} color={colors.gray} />
            <Text style={styles.message}>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 32,
        gap: 12,
    },
    message: {
        fontSize: 14,
        color: colors.gray,
        textAlign: 'center',
    },
})