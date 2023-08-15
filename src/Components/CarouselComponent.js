// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Dimensions,
//   Image,
//   TouchableOpacity,
// } from "react-native";
// import Carousel from "react-native-snap-carousel";

// const { width: screenWidth } = Dimensions.get("window");

// const CarouselComponent = () => {
//   const data = [
//     {
//       title: "Elegant Watch",
//       price: "$199.99",
//       category: "Watches",
//       image: "https://via.placeholder.com/250",
//       color: "#F9D342",
//     },
//     {
//       title: "Running Shoes",
//       price: "$89.99",
//       category: "Footwear",
//       image: "https://via.placeholder.com/250",
//       color: "#F76A6A",
//     },
//     {
//       title: "Stylish Hat",
//       price: "$49.99",
//       category: "Accessories",
//       image: "https://via.placeholder.com/250",
//       color: "#34F6F2",
//     },
//     {
//       title: "Casual Shirt",
//       price: "$59.99",
//       category: "Apparel",
//       image: "https://via.placeholder.com/250",
//       color: "#A534F9",
//     },
//   ];

//   const renderItem = ({ item }) => {
//     return (
//       <TouchableOpacity
//         style={[styles.itemContainer, { backgroundColor: item.color }]}
//       >
//         <Image source={{ uri: item.image }} style={styles.backgroundImage} />
//         <View style={styles.textContainer}>
//           <Text style={styles.itemTitle}>{item.title}</Text>
//           <Text style={styles.itemCategory}>{item.category}</Text>
//           <Text style={styles.itemPrice}>{item.price}</Text>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Carousel
//         data={data}
//         renderItem={renderItem}
//         sliderWidth={screenWidth}
//         itemWidth={screenWidth - 60}
//         loop
//         inactiveSlideOpacity={0.5}
//         inactiveSlideScale={0.9}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   itemContainer: {
//     flex: 1,
//     borderRadius: 15,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 50,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.5,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   backgroundImage: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//     borderRadius: 15,
//     opacity: 0.8,
//   },
//   textContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   itemTitle: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "white",
//     marginBottom: 10,
//   },
//   itemCategory: {
//     fontSize: 18,
//     color: "white",
//     marginBottom: 10,
//   },
//   itemPrice: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "white",
//   },
// });

// export default CarouselComponent;
// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const CarouselComponent = () => {
//   return (
//     <View>
//       <Text>CarouselComponent</Text>
//     </View>
//   );
// };

// export default CarouselComponent;

// const styles = StyleSheet.create({});
// import React from 'react';
// import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
// import Carousel from "react-native-snap-carousel";

// const ProductCarousel = () => {
//   const products = [
//     {
//       id: 1,
//       title: "Cricket Bat",
//       price: "$199",
//       category: "Sports",
//       description: "High-quality wooden cricket bat for professionals.",
//       imageUrl: "https://via.placeholder.com/300x200",
//     },
//     // ... (other products)
//   ];

//   const renderItem = ({ item }) => (
//     <View style={styles.slide}>
//       <Image source={{ uri: item.imageUrl }} style={styles.image} />
//       <Text style={styles.title}>{item.title}</Text>
//       <Text style={styles.description}>{item.description}</Text>
//       <Text style={styles.price}>{item.price}</Text>
//       <Text style={styles.category}>{item.category}</Text>
//     </View>
//   );

//   return (
//     <Carousel
//       data={products}
//       renderItem={renderItem}
//       sliderWidth={Dimensions.get("window").width}
//       itemWidth={Dimensions.get("window").width - 60}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   slide: {
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     height: 300,
//     padding: 15,
//     marginLeft: 25,
//     marginRight: 25,
//   },
//   image: {
//     flex: 1,
//     borderRadius: 8,
//     marginBottom: 15,
//   },
//   title: {
//     fontWeight: "bold",
//     fontSize: 18,
//     marginBottom: 5,
//   },
//   description: {
//     fontSize: 14,
//     marginBottom: 5,
//   },
//   price: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "green",
//     marginBottom: 5,
//   },
//   category: {
//     fontSize: 14,
//     color: "gray",
//   },
// });

// export default ProductCarousel;
