import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const BottomNav = () => {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Black.ttf"),
  });

  return (
    <View style={styles.buttomNav}>
      <TouchableOpacity onPress={() => navigation.navigate("Test")}>
        <Feather name="sun" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Mood")}>
        <AntDesign name="cloudo" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <MaterialCommunityIcons
          name="lightning-bolt-outline"
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  buttomNav: {
    justifyContent: "space-between",
    paddingHorizontal: 25,
    width: "100%",
    flexDirection: "row",
    position: "absolute",
    bottom: "3%",
  },
  backdrop: {
    backgroundColor: "green",
  },
});
