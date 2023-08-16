import React, { useRef, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
  Text,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const MicScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0.5)).current;
  const navigation = useNavigation();

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.5,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [fadeAnim]);

  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.container}
    >
      <Image
        source={require("../../assets/images/mic.png")}
        style={styles.mic}
      />
      <Text style={styles.recordingText}>Recording...</Text>
      <Animated.Image
        source={require("../../assets/images/wave.png")}
        style={[styles.wave, { opacity: fadeAnim }]}
      />
      <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => navigation.navigate("IngScreen")}
      >
        <Text style={styles.goBackText}>Search this Product</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mic: {
    width: width * 0.5,
    height: width * 0.5,
    resizeMode: "contain",
    marginBottom: 20,
  },
  wave: {
    width: width * 0.4,
    height: width * 0.4,
    resizeMode: "contain",
    marginTop: 20,
  },
  recordingText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    marginTop: 10,
  },
  goBackButton: {
    position: "absolute",
    bottom: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  goBackText: {
    color: "#192f6a",
    fontWeight: "bold",
  },
});

export default MicScreen;
