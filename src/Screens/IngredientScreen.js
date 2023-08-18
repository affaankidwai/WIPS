import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProductItem from "../Components/ProductCard";

const pastaIngredients = [
  {
    id: "1",
    title: "Pasta",
    delivery: "Free Delivery",
    deliveryDate: "By 21st August",
    discount: "40% off",
    price: "₹ 1,699",
    imagePath: require("../../assets/images/pasta.jpg"),
  },
  {
    id: "2",
    title: "Olive Oil",
    delivery: "Free Delivery",
    deliveryDate: "By 26th August",
    discount: "40% off",
    price: "₹ 2,199",
    imagePath: require("../../assets/images/olive.png"),
  },
  {
    id: "3",
    title: "Garlic",
    delivery: "Free Delivery",
    deliveryDate: "By 31st August",
    discount: "40% off",
    price: "₹ 99",
    imagePath: require("../../assets/images/garlic.png"),
  },
  {
    id: "4",
    title: "Tomato",
    delivery: "Free Delivery",
    deliveryDate: "By 2nd September",
    discount: "40% off",
    price: "₹ 129",
    imagePath: require("../../assets/images/tomato.png"),
  },
  //   {
  //     id: "5",
  //     title: "Basil",
  //     delivery: "Free Delivery",
  //     deliveryDate: "By 28th August",
  //     discount: "40% off",
  //     price: "₹ 159",
  //     imagePath: require("../../assets/images/basil.png"),
  //   },
  //   {
  //     id: "6",
  //     title: "Parmesan",
  //     delivery: "Free Delivery",
  //     deliveryDate: "By 20th August",
  //     discount: "40% off",
  //     price: "₹ 199",
  //     imagePath: require("../../assets/images/shampoo.jpeg"),
  //   },
];

const IngredientScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Pasta Ingredients</Text>

      {pastaIngredients.map((ingredient) => (
        <ProductItem key={ingredient.id} product={ingredient} />
      ))}

      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.homeButtonText}>Go to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    paddingBottom: 20,
  },
  heading: {
    fontSize: 26,
    padding: 15,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    marginHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  homeButton: {
    backgroundColor: "#EBE76C",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 15,
    alignItems: "center",
    marginTop: 20,
  },
  homeButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default IngredientScreen;
