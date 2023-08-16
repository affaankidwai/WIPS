// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { View, Image } from "react-native";
// import HomeScreen from "../Screens/HomeScreen";
// import ProductInfo from "../Screens/ProductInfo";
// import Directions from "../Screens/Directions";
// import CartPage from "../Screens/CartPage";
// import QR_Screen from "../Screens/QR_Screen";
// import MicScreen from "../Screens/MicScreen";

// const Tab = createBottomTabNavigator();

// const ParentNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false, // Hide the screen name from the top of the screen
//         tabBarIcon: ({ focused }) => {
//           let iconSource;

//           // Your existing code for tab bar icons
//           if (route.name === "Home") {
//             iconSource = focused
//               ? require("../../assets/images/Home.png")
//               : require("../../assets/images/Home.png");
//           } else if (route.name === "Home") {
//             iconSource = focused
//               ? require("../../assets/images/info.png")
//               : require("../../assets/images/info.png");
//           } else if (route.name === "Product") {
//             iconSource = focused
//               ? require("../../assets/images/info.png")
//               : require("../../assets/images/info.png");
//           } else if (route.name === "Directions") {
//             iconSource = focused
//               ? require("../../assets/images/dir.png")
//               : require("../../assets/images/dir.png");
//           } else if (route.name === "CartPage") {
//             iconSource = focused
//               ? require("../../assets/images/Cart.png")
//               : require("../../assets/images/Cart.png");
//           } else if (route.name === "QR_Screen") {
//             iconSource = focused
//               ? require("../../assets/images/qr.png")
//               : require("../../assets/images/qr.png");
//           }

//           return (
//             <View style={{ alignItems: "center" }}>
//               <Image
//                 source={iconSource}
//                 style={{
//                   width: 24,
//                   height: 24,
//                   tintColor: focused ? "green" : "#8E8E93",
//                 }}
//               />
//             </View>
//           );
//         },
//       })}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Product" component={ProductInfo} />
//       <Tab.Screen name="Directions" component={Directions} />
//       <Tab.Screen name="CartPage" component={CartPage} />
//       <Tab.Screen name="QR_Screen" component={QR_Screen} />
//       <Tab.Screen name="Mic" component={MicScreen} />
//     </Tab.Navigator>
//   );
// };

// export default ParentNavigator;
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Image } from "react-native";

import HomeScreen from "../Screens/HomeScreen";
import ProductInfo from "../Screens/ProductInfo";
import Directions from "../Screens/Directions";
import CartPage from "../Screens/CartPage";
import QR_Screen from "../Screens/QR_Screen";
import MicScreen from "../Screens/MicScreen";
import IngredientScreen from "../Screens/IngredientScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused }) => {
        let iconSource;

        if (route.name === "Home") {
          iconSource = focused
            ? require("../../assets/images/Home.png")
            : require("../../assets/images/Home.png");
        } else if (route.name === "Product") {
          iconSource = focused
            ? require("../../assets/images/info.png")
            : require("../../assets/images/info.png");
        } else if (route.name === "Directions") {
          iconSource = focused
            ? require("../../assets/images/dir.png")
            : require("../../assets/images/dir.png");
        } else if (route.name === "CartPage") {
          iconSource = focused
            ? require("../../assets/images/Cart.png")
            : require("../../assets/images/Cart.png");
        } else if (route.name === "QR_Screen") {
          iconSource = focused
            ? require("../../assets/images/qr.png")
            : require("../../assets/images/qr.png");
        }

        return (
          <View style={{ alignItems: "center" }}>
            <Image
              source={iconSource}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "green" : "#8E8E93",
              }}
            />
          </View>
        );
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Product" component={ProductInfo} />
    <Tab.Screen name="Directions" component={Directions} />
    <Tab.Screen name="CartPage" component={CartPage} />
    <Tab.Screen name="QR_Screen" component={QR_Screen} />
  </Tab.Navigator>
);

const ParentNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MainTabs" component={TabNavigator} />
    <Stack.Screen name="Mic" component={MicScreen} />
    <Stack.Screen name="IngScreen" component={IngredientScreen} />
  </Stack.Navigator>
);

export default ParentNavigator;
