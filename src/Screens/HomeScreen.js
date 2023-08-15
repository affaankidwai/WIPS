import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductItem from "../Components/ProductCard";
import SearchBar from "../Components/SearchBar";
import ProductIcon from "../Components/ProductIcon";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome Back, Affaan</Text>
      <SearchBar />
      <Text style={styles.topTitle}>Top Products near you</Text>
      {/* <ProductIcon /> */}

      <Text style={styles.topTitle}>Recommended Products</Text>

      <ScrollView>
        <ProductItem />
        <ProductItem />
      </ScrollView>

      <Text>HomeScreen</Text>
    </View>
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
  },
  topTitle: {
    fontSize: 28,
    marginLeft: 10,
  },
});
