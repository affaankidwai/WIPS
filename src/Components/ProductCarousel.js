import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import Carousel from "react-native-snap-carousel";

const ProductCarousel = () => {
  const products = [
    {
      id: 1,
      title: "Cricket Bat",
      price: "₹1,999",
      category: "Sports",
      description: "High-quality wooden cricket bat for professionals.",
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/I/51PPeSwpnjL._AC_UL210_SR210,210_.jpg",
    },
    {
      id: 2,
      title: "STARS GIFT TAPE ",
      price: "₹999",
      category: "Utility",
      description: "Lightweight tennis racket for beginners.",
      imageUrl:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FMisamo-Enterprise-Transparent-Washable-Decorations%2Fdp%2FB0B2F2LHHL&psig=AOvVaw3Uiu6cJAGgiioNBL9aLTIV&ust=1692372320341000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNib0qmA5IADFQAAAAAdAAAAABBs",
    },
    {
      id: 3,
      title: "Football",
      price: "₹4,459",
      category: "Sports",
      description: "Durable football for all terrains.",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    // ... (other products)
  ];

  const renderItem = ({ item, index }) => (
    <View style={styles.slide}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>
    </View>
  );

  return (
    <Carousel
      data={products}
      renderItem={renderItem}
      sliderWidth={Dimensions.get("window").width}
      itemWidth={Dimensions.get("window").width - 120}
      activeSlideAlignment="center"
      inactiveSlideScale={0.9}
      inactiveSlideOpacity={0.7}
      useScrollView={true}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    backgroundColor: "#AACB73",
    borderRadius: 15,
    height: 260,
    padding: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 15,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  image: {
    flex: 1,
    borderRadius: 15,
    marginBottom: 15,
  },
  textContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 10,
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    marginBottom: 5,
  },
  category: {
    fontSize: 14,
    color: "gray",
  },
});

export default ProductCarousel;
