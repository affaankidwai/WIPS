// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
//   Image,
//   ToastAndroid,
// } from "react-native";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// const CartPage = ({ navigation }) => {
//   const [product, setProduct] = useState();
//   const [total, setTotal] = useState(null);

//   const renderProducts = (data, index) => {
//     return (
//       <TouchableOpacity
//         key={data.key}
//         onPress={() =>
//           navigation.navigate("ProductInfo", { productID: data.id })
//         }
//         style={{
//           width: "100%",
//           height: 100,
//           marginVertical: 6,
//           flexDirection: "row",
//           alignItems: "center",
//         }}
//       >
//         <View
//           style={{
//             width: "30%",
//             height: 100,
//             padding: 14,
//             justifyContent: "center",
//             alignItems: "center",
//             backgroundColor: "#F0F0F3",
//             borderRadius: 10,
//             marginRight: 22,
//           }}
//         >
//           <Image
//             source={data.productImage}
//             style={{
//               width: "100%",
//               height: "100%",
//               resizeMode: "contain",
//             }}
//           />
//         </View>
//         <View
//           style={{
//             flex: 1,
//             height: "100%",
//             justifyContent: "space-around",
//           }}
//         >
//           <View style={{}}>
//             <Text
//               style={{
//                 fontSize: 14,
//                 maxWidth: "100%",
//                 color: "#000000",
//                 fontWeight: "600",
//                 letterSpacing: 1,
//               }}
//             >
//               {data.productName}
//             </Text>
//             <View
//               style={{
//                 marginTop: 4,
//                 flexDirection: "row",
//                 alignItems: "center",
//                 opacity: 0.6,
//               }}
//             >
//               <Text
//                 style={{
//                   fontSize: 14,
//                   fontWeight: "400",
//                   maxWidth: "85%",
//                   marginRight: 4,
//                 }}
//               >
//                 &#8377;{data.productPrice}
//               </Text>
//               <Text>
//                 (~&#8377;
//                 {data.productPrice + data.productPrice / 20})
//               </Text>
//             </View>
//           </View>
//           <View
//             style={{
//               flexDirection: "row",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <View
//               style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//               }}
//             >
//               <View
//                 style={{
//                   borderRadius: 100,
//                   marginRight: 20,
//                   padding: 4,
//                   borderWidth: 1,
//                   borderColor: "#B9B9B9",
//                   opacity: 0.5,
//                 }}
//               >
//                 <MaterialCommunityIcons
//                   name="minus"
//                   style={{
//                     fontSize: 16,
//                     color: "#777777",
//                   }}
//                 />
//               </View>
//               <Text>1</Text>
//               <View
//                 style={{
//                   borderRadius: 100,
//                   marginLeft: 20,
//                   padding: 4,
//                   borderWidth: 1,
//                   borderColor: "#B9B9B9",
//                   opacity: 0.5,
//                 }}
//               >
//                 <MaterialCommunityIcons
//                   name="plus"
//                   style={{
//                     fontSize: 16,
//                     color: "#777777",
//                   }}
//                 />
//               </View>
//             </View>
//             <TouchableOpacity onPress={() => removeItemFromCart(data.id)}>
//               <MaterialCommunityIcons
//                 name="delete-outline"
//                 style={{
//                   fontSize: 16,
//                   color: "#777777",
//                   backgroundColor: "#F0F0F3",
//                   padding: 8,
//                   borderRadius: 100,
//                 }}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View
//       style={{
//         width: "100%",
//         height: "100%",
//         backgroundColor: "#ffffff",
//         position: "relative",
//       }}
//     >
//       <ScrollView>
//         <View
//           style={{
//             width: "100%",
//             flexDirection: "row",
//             paddingTop: 16,
//             paddingHorizontal: 16,
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <MaterialCommunityIcons
//               name="chevron-left"
//               style={{
//                 fontSize: 18,
//                 color: "#777777",
//                 padding: 12,
//                 backgroundColor: "#F0F0F3",
//                 borderRadius: 12,
//               }}
//             />
//           </TouchableOpacity>
//           <Text
//             style={{
//               fontSize: 14,
//               color: "#000000",
//               fontWeight: "400",
//               paddingRight: 40,
//             }}
//           >
//             Order Details
//           </Text>
//           <View></View>
//         </View>
//         <Text
//           style={{
//             fontSize: 20,
//             color: "#000000",
//             fontWeight: "500",
//             letterSpacing: 1,
//             paddingTop: 20,
//             paddingLeft: 18,
//             paddingRight: 5,

//             marginBottom: 10,
//           }}
//         >
//           My Cart
//         </Text>
//         <View style={{ paddingHorizontal: 16 }}>
//           {product ? product.map(renderProducts) : null}
//         </View>
//         <View>
//           <View
//             style={{
//               paddingHorizontal: 16,
//               marginVertical: 10,
//             }}
//           >
//             <Text
//               style={{
//                 fontSize: 16,
//                 color: "#000000",
//                 fontWeight: "500",
//                 letterSpacing: 1,
//                 marginBottom: 20,
//               }}
//             >
//               Delivery Location
//             </Text>
//             <View
//               style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//               }}
//             >
//               <View
//                 style={{
//                   flexDirection: "row",
//                   width: "80%",
//                   alignItems: "center",
//                 }}
//               >
//                 <View
//                   style={{
//                     color: "#00AC76",
//                     backgroundColor: "#F0F0F3",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     padding: 12,
//                     borderRadius: 10,
//                     marginRight: 18,
//                   }}
//                 >
//                   <MaterialCommunityIcons
//                     name="truck-delivery-outline"
//                     style={{
//                       fontSize: 18,
//                       color: "#00AC76",
//                     }}
//                   />
//                 </View>
//                 <View>
//                   <Text
//                     style={{
//                       fontSize: 14,
//                       color: "#000000",
//                       fontWeight: "500",
//                     }}
//                   >
//                     Symbiosis University,Pune
//                   </Text>
//                   <Text
//                     style={{
//                       fontSize: 12,
//                       color: "#000000",
//                       fontWeight: "400",
//                       lineHeight: 20,
//                       opacity: 0.5,
//                     }}
//                   >
//                     Maharashtra, India
//                   </Text>
//                 </View>
//               </View>
//               <MaterialCommunityIcons
//                 name="chevron-right"
//                 style={{ fontSize: 22, color: "#000000" }}
//               />
//             </View>
//           </View>
//           <View
//             style={{
//               paddingHorizontal: 16,
//               marginVertical: 10,
//             }}
//           >
//             <Text
//               style={{
//                 fontSize: 16,
//                 color: "#000000",
//                 fontWeight: "500",
//                 letterSpacing: 1,
//                 marginBottom: 20,
//               }}
//             >
//               Payment Method
//             </Text>
//             <View
//               style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//               }}
//             >
//               <View
//                 style={{
//                   flexDirection: "row",
//                   width: "80%",
//                   alignItems: "center",
//                 }}
//               >
//                 <View
//                   style={{
//                     color: "#00AC76",
//                     backgroundColor: "#F0F0F3",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     padding: 12,
//                     borderRadius: 10,
//                     marginRight: 18,
//                   }}
//                 >
//                   <Text
//                     style={{
//                       fontSize: 10,
//                       fontWeight: "900",
//                       color: "#00AC76",
//                       letterSpacing: 1,
//                     }}
//                   >
//                     VISA
//                   </Text>
//                 </View>
//                 <View>
//                   <Text
//                     style={{
//                       fontSize: 14,
//                       color: "#000000",
//                       fontWeight: "500",
//                     }}
//                   >
//                     Visa Classic
//                   </Text>
//                   <Text
//                     style={{
//                       fontSize: 12,
//                       color: "#000000",
//                       fontWeight: "400",
//                       lineHeight: 20,
//                       opacity: 0.5,
//                     }}
//                   >
//                     ****-9092
//                   </Text>
//                 </View>
//               </View>
//               <MaterialCommunityIcons
//                 name="chevron-right"
//                 style={{ fontSize: 22, color: "#000000" }}
//               />
//             </View>
//           </View>
//           <View
//             style={{
//               paddingHorizontal: 16,
//               marginTop: 40,
//               marginBottom: 80,
//             }}
//           >
//             <Text
//               style={{
//                 fontSize: 16,
//                 color: "#000000",
//                 fontWeight: "500",
//                 letterSpacing: 1,
//                 marginBottom: 20,
//               }}
//             >
//               Order Info
//             </Text>
//             <View
//               style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 marginBottom: 8,
//               }}
//             >
//               <Text
//                 style={{
//                   fontSize: 12,
//                   fontWeight: "400",
//                   maxWidth: "80%",
//                   color: "#000000",
//                   opacity: 0.5,
//                 }}
//               >
//                 Subtotal
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 12,
//                   fontWeight: "400",
//                   color: "#000000",
//                   opacity: 0.8,
//                 }}
//               >
//                 &#8377;{total}.00
//               </Text>
//             </View>
//             <View
//               style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 marginBottom: 22,
//               }}
//             >
//               <Text
//                 style={{
//                   fontSize: 12,
//                   fontWeight: "400",
//                   maxWidth: "80%",
//                   color: "#000000",
//                   opacity: 0.5,
//                 }}
//               >
//                 Shipping Tax
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 12,
//                   fontWeight: "400",
//                   color: "#000000",
//                   opacity: 0.8,
//                 }}
//               >
//                 &#8377;{total / 20}
//               </Text>
//             </View>
//             <View
//               style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//               }}
//             >
//               <Text
//                 style={{
//                   fontSize: 12,
//                   fontWeight: "400",
//                   maxWidth: "80%",
//                   color: "#000000",
//                   opacity: 0.5,
//                 }}
//               >
//                 Total
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 18,
//                   fontWeight: "500",
//                   color: "#000000",
//                 }}
//               >
//                 &#8377;{total + total / 20}
//               </Text>
//             </View>
//           </View>
//         </View>
//       </ScrollView>

//       <View
//         style={{
//           position: "absolute",
//           bottom: 10,
//           height: "8%",
//           width: "100%",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <TouchableOpacity
//           onPress={() => (total != 0 ? checkOut() : null)}
//           style={{
//             width: "86%",
//             height: "90%",
//             backgroundColor: "#00AC76",
//             borderRadius: 20,
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Text
//             style={{
//               fontSize: 12,
//               fontWeight: "500",
//               letterSpacing: 1,
//               color: "#ffffff",
//               textTransform: "uppercase",
//             }}
//           >
//             CHECKOUT (&#8377;{total + total / 20} )
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default CartPage;
import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CartPage = ({ navigation }) => {
  const products = [
    {
      key: "1",
      id: "1",
      productName: "UltraMix 5000 Mixer Grinder",
      productPrice: 2999,
      productImage: require("../../assets/images/mixer.jpeg"), // Replace with your image path
      quantity: 1,
    },
    {
      key: "2",
      id: "2",
      productName: "ProBlend 6 Juicer",
      productPrice: 1999,
      productImage: require("../../assets/images/mixer.jpeg"), // Replace with your image path
      quantity: 2,
    },
  ];

  const total = products.reduce(
    (acc, product) => acc + product.productPrice * product.quantity,
    0
  );

  const renderProducts = (data) => {
    return (
      <TouchableOpacity key={data.key} style={styles.productContainer}>
        <View style={styles.productImageContainer}>
          <Image source={data.productImage} style={styles.productImage} />
        </View>
        <View style={styles.productDetailsContainer}>
          <Text style={styles.productName}>{data.productName}</Text>
          <View style={styles.productPriceContainer}>
            <Text style={styles.productPrice}>&#8377;{data.productPrice}</Text>
            <Text style={styles.productTotalPrice}>
              (~&#8377;{data.productPrice + data.productPrice / 20})
            </Text>
          </View>
          <View style={styles.productQuantityContainer}>
            <View style={styles.quantityButton}>
              <MaterialCommunityIcons name="minus" style={styles.iconStyle} />
            </View>
            <Text>{data.quantity}</Text>
            <View style={styles.quantityButton}>
              <MaterialCommunityIcons name="plus" style={styles.iconStyle} />
            </View>
          </View>
          <TouchableOpacity style={styles.deleteButton}>
            <MaterialCommunityIcons
              name="delete-outline"
              style={styles.deleteIcon}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="chevron-left"
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Order Details</Text>
        </View>
        <Text style={styles.cartTitle}>My Cart</Text>
        <View style={styles.productsContainer}>
          {products.map(renderProducts)}
        </View>
        <View style={styles.orderInfoContainer}>
          <Text style={styles.orderInfoTitle}>Delivery Location</Text>
          <View style={styles.deliveryLocationContainer}>
            <View style={styles.locationIconContainer}>
              <MaterialCommunityIcons
                name="truck-delivery-outline"
                style={styles.locationIcon}
              />
            </View>
            <View>
              <Text style={styles.locationText}>
                SRM Instiute of Science and Technology, Chennai
              </Text>
              <Text style={styles.locationSubText}>Tamil Nadu, India</Text>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              style={styles.chevronIcon}
            />
          </View>
        </View>
        <View style={styles.paymentMethodContainer}>
          <Text style={styles.paymentMethodTitle}>Payment Method</Text>
          <View style={styles.paymentDetailsContainer}>
            <View style={styles.cardIconContainer}>
              <Text style={styles.cardIconText}>VISA</Text>
            </View>
            <View>
              <Text style={styles.cardTypeText}>Visa Classic</Text>
              <Text style={styles.cardNumberText}>****-9092</Text>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              style={styles.chevronIcon}
            />
          </View>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalTitle}>Order Info</Text>
          <View style={styles.subtotalContainer}>
            <Text style={styles.subtotalText}>Subtotal</Text>
            <Text style={styles.subtotalAmount}>&#8377;{total}.00</Text>
          </View>
          <View style={styles.taxContainer}>
            <Text style={styles.taxText}>Shipping Tax</Text>
            <Text style={styles.taxAmount}>&#8377;{total / 20}</Text>
          </View>
          <View style={styles.finalTotalContainer}>
            <Text style={styles.finalTotalText}>Total</Text>
            <Text style={styles.finalTotalAmount}>
              &#8377;{total + total / 20}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.checkoutButtonContainer}>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>
            CHECKOUT (&#8377;{total + total / 20} )
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    marginTop: 30,
  },
  backIcon: {
    fontSize: 24,
    color: "#777777",
    padding: 12,
    backgroundColor: "#F0F0F3",
    borderRadius: 12,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    paddingLeft: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },
  productContainer: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  productImageContainer: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  productDetailsContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  productPriceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
  productTotalPrice: {
    fontSize: 14,
    color: "#777",
  },
  productQuantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#eee",
    marginHorizontal: 8,
  },
  iconStyle: {
    fontSize: 16,
    color: "#777777",
  },
  deleteButton: {
    position: "absolute",
    right: 0,
    top: "50%",
    transform: [{ translateY: -12 }],
  },
  deleteIcon: {
    fontSize: 24,
    color: "#777",
  },
  orderInfoContainer: {
    padding: 16,
    backgroundColor: "#F9F5F6",
    marginTop: 16,
    borderRadius: 12,
  },
  orderInfoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  deliveryLocationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  locationIconContainer: {
    marginRight: 16,
  },
  locationIcon: {
    fontSize: 24,
    color: "#00AC76",
  },
  locationText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  locationSubText: {
    fontSize: 14,
    color: "#777",
  },
  chevronIcon: {
    fontSize: 24,
    color: "#000",
  },
  paymentMethodContainer: {
    padding: 16,
    backgroundColor: "#F9F5F6",
    marginTop: 16,
    borderRadius: 12,
  },
  paymentMethodTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  paymentDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardIconContainer: {
    marginRight: 16,
  },
  cardIconText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00AC76",
  },
  cardTypeText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardNumberText: {
    fontSize: 14,
    color: "#777",
  },
  totalContainer: {
    padding: 16,
  },
  totalTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  subtotalText: {
    fontSize: 14,
    color: "#777",
  },
  subtotalAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  taxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  taxText: {
    fontSize: 14,
    color: "#777",
  },
  taxAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  finalTotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 16,
  },
  finalTotalText: {
    fontSize: 14,
    color: "#777",
  },
  finalTotalAmount: {
    fontSize: 24,
    fontWeight: "bold",
  },
  checkoutButtonContainer: {
    padding: 16,
    // backgroundColor: "#F0F0F3",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  checkoutButton: {
    width: "100%",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7E987",
    borderRadius: 12,
  },
  checkoutButtonText: {
    fontSize: 16,
    fontWeight: "bold",

    color: "black",
  },
});

export default CartPage;
