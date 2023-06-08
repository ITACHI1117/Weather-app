import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import HeaderNav from "../HeaderNav";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNav from "./BottomNav";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MoodScreen = ({ route }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View style={styles.header}>
        <Image
          style={styles.profile}
          source={require("../assets/profile.jpg")}
        />
        <View style={styles.profileInfo}>
          <TouchableOpacity onPress={() => navigation.navigate("Country")}>
            <Text
              style={{
                fontSize: 13,
                fontFamily: "PoppinsThin",
                fontWeight: "100",
              }}
            >
              Ajogu Joseph
            </Text>

            <Text
              style={{
                fontSize: 13,
                fontFamily: "PoppinsThin",
                fontWeight: "100",
                alignItems: "center",
                justifyContent: "center",
                marginTop: -8,
              }}
            >
              {route.params.paramKey3} {route.params.paramKey4}
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color="black"
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* feel */}
      <View style={styles.good}>
        <Text style={styles.goodText}>How Do You Feel Today ?</Text>
      </View>
      <View style={styles.buttomColor}>
        <ScrollView style={{ height: "50%" }}>
          <View style={styles.feelings}>
            <TouchableOpacity
              style={styles.box}
              onPress={() => navigation.navigate("Quote")}
            >
              <Text style={styles.boxText}>Very Good 😊</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.box}
              onPress={() => navigation.navigate("Quote")}
            >
              <Text style={styles.boxText}>Okayish 🙂</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.feelings}>
            <TouchableOpacity
              style={styles.box}
              onPress={() => navigation.navigate("Quote")}
            >
              <Text style={styles.boxText}>Very bad 😓</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.box}
              onPress={() => navigation.navigate("Quote")}
            >
              <Text style={styles.boxText}>angry 😡</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.feelings}>
            <TouchableOpacity
              style={styles.box}
              onPress={() => navigation.navigate("Quote")}
            >
              <Text style={styles.boxText}>just sad for no reason ☹️</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.feelings}>
            <TouchableOpacity
              style={styles.box}
              onPress={() => navigation.navigate("Quote")}
            >
              <Text style={styles.boxText}>I'm Very Very happy 🥳</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      {/* modd */}
      <View style={styles.moods}>
        <Text style={styles.moodText}>
          Today's Mood {"\n"}{" "}
          <Text style={styles.moodText2}>{route.params.paramKey5}</Text>
        </Text>
        <Text style={styles.moodText}>
          Tomorrows's Mood {"\n"}
          <Text style={styles.moodText2}>{route.params.paramKey6}</Text>
        </Text>
      </View>
      <View style={styles.buttomNav}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="sun" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
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
    </SafeAreaView>
  );
};

export default MoodScreen;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    flexDirection: "row",
  },
  profile: {
    width: 35,
    height: 35,
    borderRadius: "10",
  },
  profileInfo: {
    marginLeft: 15,
  },
  icon: {
    position: "absolute",
    right: 15,
  },
  good: {
    alignItems: "center",
    // justifyContent: "center",
    width: "100%",
    marginTop: "10%",
    flexDirection: "row",
    marginLeft: 15,
  },
  goodText: {
    fontSize: 25,
    fontFamily: "Poppins",
    color: "#09151E",
    fontWeight: "700",
  },
  box: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 2,
    alignSelf: "center",
    borderRadius: 20,
    height: 80,
    marginLeft: 20,
    marginTop: 20,
  },
  feelings: {
    flexDirection: "row",
    margingLeft: 20,
  },
  moods: {
    flexDirection: "row",
    marginTop: 35,
  },
  moodText: {
    marginLeft: 20,
    flexDirection: "column",
    fontFamily: "PoppinsMed",
    fontSize: 16,
    color: "gray",
  },
  moodText2: {
    fontSize: 13,
    color: "#0C1823",
  },
  bottomNav: {
    bottom: -100,
  },
  buttomColor: {
    borderBottomWidth: 40,
    borderBottomColor: "rgba(244, 244, 244, 1.0)",
  },
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
