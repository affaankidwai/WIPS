import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductItem from "../Components/ProductCard";
import SearchBar from "../Components/SearchBar";
import ProductIcon from "../Components/ProductIcon";
import { products } from "../Components/ProductCard";
import CarouselComponent from "../Components/CarouselComponent";
import ProductCarousel from "../Components/ProductCarousel";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Welcome Back, Affaan</Text>
      <SearchBar />
      <Text style={styles.topTitle}>Hot Selling</Text>
      <ProductCarousel />

      {/* <ProductIcon /> */}

      <Text style={styles.topTitle}>Products near you</Text>

      <ScrollView>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            navigation={navigation}
          />
        ))}
      </ScrollView>

      <Text>HomeScreen</Text>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
  heading: {
    fontSize: 26,
    padding: 15,
    fontWeight: "bold",
  },
  topTitle: {
    fontSize: 26,

    padding: 15,
  },
});
