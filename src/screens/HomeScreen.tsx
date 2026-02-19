import React from 'react'
import { View, Dimensions, ScrollView, StyleSheet } from 'react-native'
import { colors } from '../theme/colors';
import { Header } from '../components/home/Header';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={[styles.wrap, { width }]}>
        <Header />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrap: {
    width: width,
    height: height * 0.25
  },
})