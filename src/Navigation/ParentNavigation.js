// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import HomeScreen from "../Screens/HomeScreen";

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <Stack.Navigator
//       initialRouteName="HomeScreen"
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen name="HomeScreen" component={HomeScreen} />
//     </Stack.Navigator>
//   );
// }

// export default App;
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image } from "react-native";
import HomeScreen from "../Screens/HomeScreen";
// import ExploreScreen from "../Screens/ExploreScreen";
// import SportScreen from "../Screens/SportScreen";
// import ProfileScreen from "../Screens/ProfileScreen";
import ProductInfo from "../Screens/ProductInfo";
import Directions from "../Screens/Directions";
import CartPage from "../Screens/CartPage";

const Tab = createBottomTabNavigator();

const ParentNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Hide the screen name from the top of the screen
        tabBarIcon: ({ focused }) => {
          let iconSource;

          // Your existing code for tab bar icons
          if (route.name === "MyCart") {
            iconSource = focused
              ? require("../../assets/images/Home.png")
              : require("../../assets/images/Home.png");
          } else if (route.name === "ProductInfo") {
            iconSource = focused
              ? require("../../assets/images/Cart.png")
              : require("../../assets/images/Cart.png");
          } else if (route.name === "Product") {
            iconSource = focused
              ? require("../../assets/images/Cart.png")
              : require("../../assets/images/Cart.png");
          } else if (route.name === "Directions") {
            iconSource = focused
              ? require("../../assets/images/Cart.png")
              : require("../../assets/images/Cart.png");
          } else if (route.name === "CartPage") {
            iconSource = focused
              ? require("../../assets/images/Cart.png")
              : require("../../assets/images/Cart.png");
          }

          return (
            <View style={{ alignItems: "center" }}>
              <Image
                source={iconSource}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? "black" : "#8E8E93",
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
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default ParentNavigator;
