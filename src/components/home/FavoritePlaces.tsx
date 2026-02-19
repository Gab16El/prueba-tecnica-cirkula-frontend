import React from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'
import { Section } from '../shared/Section'
import { colors } from '../../theme/colors'
import { favsStores } from '../../mocks/stores.mock'
import { Empty } from '../shared/Empty'

export const FavoritePlaces = () => {
    return (
        <Section title='Tus Favoritos' linkText='Ver todo' onLinkPress={() => { }}>
            {favsStores.length === 0 ? (
                <Empty icon="heart-outline" message="Aún no tienes favoritos" />
            ) : (
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                >
                    {favsStores.map((store) => (
                        <Text>Tu lista de favs se mostrará aquí!</Text>
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
    card: {
        width: 100,
        height: 120,
        borderRadius: 12,
        overflow: 'hidden',
    },
    imageContainer: {
        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    title: {
        fontSize: 13,
        fontWeight: '600',
        color: colors.white,
        textAlign: 'center',
        position: 'absolute',
        bottom: 8,
        left: 0,
        right: 0,
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
    },
})