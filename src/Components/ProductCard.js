// import React from "react";
// import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// // import ProductScreen from "../../Screens/ProductScreen";

// // Add your 5 image paths here
// const imagePaths = [
//   require("../../assets/images/1.jpeg"),
//   require("../../assets/images/2.jpeg"),
//   require("../../assets/images/3.jpeg"),
// ];

// const ProductItem = ({ item, navigation }) => {
//   // Get a random image index from the array
//   const randomImageIndex = Math.floor(Math.random() * imagePaths.length);
//   console.log(navigation);
//   return (
//     <TouchableOpacity
//     //   onPressOut={() =>
//     //     navigation.navigate("ProductScreen", { productId: item.Id })
//     //   }
//     >
//       <View style={styles.container}>
//         {/* Container for Image */}
//         <View>
//           <Image source={imagePaths[randomImageIndex]} style={styles.image} />
//         </View>

//         {/* Container for Text Items */}
//         <View style={styles.textContainer}>
//           <Text style={styles.header}></Text>
//           <View style={styles.sport}>
//             {/* <Ionicons name="md-football-outline" size={16} color="black" /> */}
//             <Text style={styles.title}>Cricket Bat</Text>
//           </View>
//           <Text style={styles.address}>Free Delivery</Text>
//           <Text style={styles.address}>By 20th August</Text>

//           {/* Stars Container */}
//           <View style={styles.starsContainer}>
//             {/* <MaterialIcons name="star" size={18} color="gold" /> */}
//             <Text style={styles.address}>50% off</Text>
//             <Text style={styles.starsText}> ₹ 1,999</Text>
//           </View>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };
import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

const products = [
  {
    id: "1",
    title: "Mixer Grinder",
    delivery: "Available",
    deliveryDate: "",
    discount: "50% off",
    price: "₹ 2,999",
    imagePath: require("../../assets/images/mixer.jpeg"),
  },
  {
    id: "2",
    title: "Dove Shampoo",
    delivery: "Available",
    deliveryDate: "",
    discount: "40% off",
    price: "₹ 899",
    imagePath: require("../../assets/images/shampoo.jpeg"),
  },
  {
    id: "3",
    title: "Tennis Racket",
    delivery: "Available",
    deliveryDate: "",
    discount: "30% off",
    price: "₹ 1,299",
    imagePath: require("../../assets/images/3.jpeg"),
  },
  // ... add more products as needed
];

const ProductItem = ({ product, navigation }) => {
  return (
    <TouchableOpacity
      // Uncomment the below line once you have the ProductScreen set up
      onPressOut={() =>
        navigation.navigate("Product", { productId: product.id })
      }
    >
      <View style={styles.container}>
        <View>
          <Image source={product.imagePath} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.header}></Text>
          <View style={styles.sport}>
            <Text style={styles.title}>{product.title}</Text>
          </View>
          <Text style={styles.address}>{product.delivery}</Text>
          <Text style={styles.address}>{product.deliveryDate}</Text>
          <View style={styles.starsContainer}>
            <Text style={styles.address1}>{product.discount}</Text>
            <Text style={styles.starsText}> {product.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%", // Set the width to your desired size
    height: 120, // Set the height to your desired size
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "center",
    padding: 8,
    backgroundColor: "#F7E987",
    margin: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
    // paddingVertical: 15,
  },
  title: {
    fontSize: 22,
    marginRight: 20,
    color: "black",
    marginTop: -25,
    fontWeight: "bold",
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
    // marginTop: 5,
    color: "black",
  },
  address: {
    fontSize: 14,
    marginRight: 20,
    color: "black",
  },
  address1: {
    fontSize: 14,
    marginRight: 20,
    color: "green",
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
    // marginTop: 5,
  },
  starsText: {
    fontSize: 16,
    marginLeft: 10,
    color: "black",
  },
});

export default ProductItem;
export { products };
