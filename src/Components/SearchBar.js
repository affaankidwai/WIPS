import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SearchBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchBarContainer}>
      <AntDesign name="search1" size={20} color="#1E4BA3" />
      <TextInput
        style={styles.searchInput}
        placeholder="  Search Products"
        placeholderTextColor="#27374D"
      />
      <TouchableOpacity onPress={() => navigation.navigate("Mic")}>
        <Feather name="mic" size={24} color="#1E4BA3" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 24,
    marginHorizontal: 16,

    borderWidth: 1,
    borderColor: "#1E4BA3",
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#27374D",
    padding: 5,
  },
});

export default SearchBar;
