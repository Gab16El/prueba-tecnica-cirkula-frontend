import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { colors } from '../../theme/colors'

type SectionProps = {
    title: string
    linkText?: string
    onLinkPress?: () => void
    children?: React.ReactNode
}

export const Section = ({ title, linkText = 'Ver todos', onLinkPress, children }: SectionProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {onLinkPress && (
                    <TouchableOpacity onPress={onLinkPress}>
                        <Text style={styles.link}>{linkText}</Text>
                    </TouchableOpacity>
                )}
            </View>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 36,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: colors.black,
    },
    link: {
        fontSize: 18,
        color: colors.primary,
        fontWeight: '600',
    },
})