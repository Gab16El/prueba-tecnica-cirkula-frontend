import React from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Section } from '../shared/Section'
import { colors } from '../../theme/colors'
import { cats } from '../../mocks/cats.mock'
import LinearGradient from 'react-native-linear-gradient'

export const Categories = () => {
    return (
        <Section
            title='Categorías'
            linkText='Ver más'
            onLinkPress={() => console.log('Yendo a categorias')}
        >
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {cats && cats.map((cat) => (
                    <TouchableOpacity key={cat.id} style={styles.card}>
                        <View style={styles.imageContainer}>
                            <Image source={cat.thumbnail} style={styles.image} />
                            <LinearGradient
                                colors={['transparent', 'rgba(0,0,0,0.7)']}
                                style={styles.gradient}
                            />
                        </View>
                        <Text style={styles.title} numberOfLines={1}>{cat.title}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
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