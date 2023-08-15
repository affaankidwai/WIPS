import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
  ToastAndroid,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

const ProductInfo = ({ route, navigation }) => {
  const width = Dimensions.get("window").width;
  const scrollX = new Animated.Value(0);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {});
    return unsubscribe;
  }, [navigation]);

  const addToCart = async (id) => {
    // ... (rest of the function remains unchanged)
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
        position: "relative",
      }}
    >
      {/* <StatusBar backgroundColor={"#F0F0F3"} barStyle="#777777" /> */}
      <ScrollView>
        <View
          style={{
            width: "100%",
            backgroundColor: "#F0F0F3",
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 80,
              paddingLeft: 16,
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack("Home")}>
              <Entypo
                name="chevron-left"
                style={{
                  fontSize: 18,
                  color: "#777777",
                  padding: 12,
                  backgroundColor: "#ffffff",
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 16,
              marginTop: 32,
            }}
          ></View>
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            marginTop: 6,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 14,
            }}
          >
            <Entypo
              name="tablet"
              style={{
                fontSize: 18,
                color: "#F8DE22",
                marginRight: 6,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                color: "#000000",
              }}
            >
              Kitchen
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 4,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "600",
                letterSpacing: 0.5,
                marginVertical: 4,
                color: "#000000",
                maxWidth: "84%",
              }}
            >
              <Text>The UltraMix 5000 Mixer Grinder</Text>
            </Text>
            <Ionicons
              name="share-outline"
              style={{
                fontSize: 24,
                color: "#F8DE22",
                backgroundColor: "#F8DE22" + 10,
                padding: 8,
                borderRadius: 100,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 12,
              color: "#000000",
              fontWeight: "400",
              letterSpacing: 1,
              opacity: 0.5,
              lineHeight: 20,
              maxWidth: "85%",
              maxHeight: 44,
              marginBottom: 18,
            }}
          >
            {" "}
          </Text>
          <Text>
            The UltraMix 5000 Mixer Grinder is a versatile kitchen appliance
            renowned for its exceptional performance. With a powerful 750W motor
            and high-quality stainless steel blades, it can grind even the
            toughest ingredients with ease. Whether you're preparing a smoothie,
            grinding spices, or making a batter for pancakes, the UltraMix 5000
            ensures consistent results every time. Its ergonomic design,
            combined with multiple speed settings, provides both convenience and
            control.
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 20,
              borderBottomColor: "#F0F0F3",
              borderBottomWidth: 1,
              paddingBottom: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "80%",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  color: "#EBE76C",
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 12,
                  borderRadius: 100,
                  marginRight: 10,
                }}
              >
                <Entypo
                  name="location-pin"
                  style={{
                    fontSize: 19,
                    color: "#F8DE22",
                  }}
                />
              </View>
              <Text> Walmart, New Delhi</Text>
            </View>
            <Entypo
              name="chevron-right"
              style={{
                fontSize: 22,
                color: "#777777",
              }}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 16,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
                maxWidth: "85%",
                color: "#000000",
                marginBottom: 4,
              }}
            >
              {" "}
            </Text>
            <Text>Price 1,999</Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: "absolute",
          bottom: 10,
          height: "8%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => (product.isAvailable ? addToCart(product.id) : null)}
          style={{
            width: "86%",
            height: "90%",
            backgroundColor: "#F7E987",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "800",
              letterSpacing: 1,
              color: "black",
              textTransform: "uppercase",
            }}
          >
            <Text>View Directions</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductInfo;
