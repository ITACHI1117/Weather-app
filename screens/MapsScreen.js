import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import HeaderNav from "../HeaderNav";
import BottomNav from "./BottomNav";
import { FontAwesome5 } from "@expo/vector-icons";

const MapsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderNav />
      {/* search */}
      <View style={styles.search}>
        <TextInput placeholder="Bosila, Mohammadpur Dhaka" />
        <TouchableOpacity>
          <FontAwesome5 name="search-location" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/* Map */}
      <View style={styles.map}>
        <Text>Mapps</Text>
      </View>
      <BottomNav />
    </SafeAreaView>
  );
};

export default MapsScreen;

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    borderWidth: 2,
    height: 55,
    width: "90%",
    alignSelf: "center",
    borderRadius: 20,
  },
  map: {
    marginTop: 40,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    height: "65%",
    width: "90%",
    borderRadius: 20,
  },
});
