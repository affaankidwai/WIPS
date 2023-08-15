import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import ProductScreen from "../../Screens/ProductScreen";

// Add your 5 image paths here
const imagePaths = [
  require("../../assets/images/1.jpeg"),
  require("../../assets/images/2.jpeg"),
  require("../../assets/images/3.jpeg"),
];

const ProductIcon = ({ item, navigation }) => {
  // Get a random image index from the array
  const randomImageIndex = Math.floor(Math.random() * imagePaths.length);
  console.log(navigation);
  return (
    <TouchableOpacity
    //   onPressOut={() =>
    //     navigation.navigate("ProductScreen", { productId: item.Id })
    //   }
    >
      <View style={styles.container}>
        {/* Container for Image */}
        <View>
          <Image source={imagePaths[randomImageIndex]} style={styles.image} />
        </View>

        {/* Container for Text Items */}
        <View style={styles.textContainer}>
          <Text style={styles.header}></Text>
          <View style={styles.sport}>
            {/* <Ionicons name="md-football-outline" size={16} color="black" /> */}
            <Text style={styles.title}>Cricket Bat</Text>
          </View>
          <Text style={styles.address}>Free Delivery</Text>
          <Text style={styles.address}>By 20th August</Text>

          {/* Stars Container */}
          <View style={styles.starsContainer}>
            {/* <MaterialIcons name="star" size={18} color="gold" /> */}
            <Text style={styles.address}>50% off</Text>
            <Text style={styles.starsText}> ₹ 1,999</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "25%", // Set the width to your desired size
    height: 120, // Set the height to your desired size
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "center",
    padding: 8,
    backgroundColor: "#112B3C",
    margin: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  title: {
    fontSize: 24,
    marginRight: 20,
    color: "white",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    color: "white",
  },
  address: {
    fontSize: 14,
    marginRight: 20,
    color: "white",
  },
  textContainer: {
    flex: 1, // This will make the text items take the remaining width
    marginLeft: 10, // Add some spacing between the image and text items
    justifyContent: "space-between", // Align the text items vertically
  },
  sport: {
    flexDirection: "row",
    alignItems: "center",
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  starsText: {
    fontSize: 12,
    marginLeft: 10,
    color: "white",
  },
});

export default ProductIcon;
