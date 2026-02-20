import React, { useEffect } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { colors } from '../theme/colors';
import { Header } from '../components/home/Header';
import { Categories } from '../components/home/Categories';
import { FavoritePlaces } from '../components/home/FavoritePlaces';
import { Explore } from '../components/home/Explore';
import { useLocationStore } from '../hooks/location/useLocationStore';

export const HomeScreen = () => {

  const { currentLocation, getCurrentLocation } = useLocationStore();

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        style={styles.curvedContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Categories />
        <FavoritePlaces />
        <Explore />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  curvedContainer: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,

  },
  scrollContent: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
})
