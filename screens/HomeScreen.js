import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import ViewPager from 'react-native-pager-view';

const products = [
  { id: '1', title: 'AIR LEGGING SPORT', price: 'Rp200.000', image: require('../assets/portrait-fit-woman-running-outdoor 1.png') },
  { id: '2', title: 'AERO SPORT INFINITY MAX', price: 'Rp450.000', image: require('../assets/men-s-fashion-off-white-sneakers.png') },
  { id: '3', title: 'SPORT RUNNER BLUE EDITION', price: 'Rp250.000', image: require('../assets/man-posing-stairs-while-wearing-athletic-wear 1.png') },
  { id: '4', title: 'SPORT BAG', price: 'Rp350.000', image: require('../assets/cheerful-young-sports-man-using-mobile-phone-listening-music 1.png') }
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* ViewPager for the horizontal slider */}
      <ViewPager style={styles.viewPager} initialPage={0}>
        <View key="1" style={styles.slide}>
          <Image source={require('../assets/banner.webp')} style={styles.sliderImage} />
        </View>
        <View key="2" style={styles.slide}>
          <Image source={require('../assets/banner.jpg')} style={styles.sliderImage} />
        </View>
      </ViewPager>

      {/* FlatList for products */}
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  viewPager: {
    height: 200,
    marginBottom: 20,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  row: {
    flex: 1,
    justifyContent: "space-around",
  },
  product: {
    flex: 1,
    margin: 10,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  productTitle: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
  productPrice: {
    marginTop: 5,
    fontSize: 12,
    color: 'orange',
  },
});