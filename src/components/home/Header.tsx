import { Image, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../theme/colors'

export const Header = () => {
    return (
        <View>
            <View style={styles.headerContainer}>
                <Image source={require('../../assets/logo/cirkula.png')} style={styles.headerImg} />
                <View style={styles.headerOverlay} />
            </View>
            <View style={styles.headerLabelsContainer}>
                <Text style={styles.title}>Bienvenido</Text>
                <Text style={styles.subTitle}>Encuentra lo que más te gusta</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 300,
        backgroundColor: colors.black,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerOverlay: {
        ...StyleSheet.absoluteFill,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    headerImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    headerLabelsContainer: {
        position: 'absolute',
        bottom: 50,
        left: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.white,
    },
    subTitle: {
        fontSize: 16,
        color: colors.white,
    },
})