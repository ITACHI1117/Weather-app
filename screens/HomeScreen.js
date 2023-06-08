import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BottomNav from "./BottomNav";
import { useFonts } from "expo-font";
import HeaderNav from "../HeaderNav";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ route }) => {
  const navigation = useNavigation();

  const [loaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Black.ttf"),
    PoppinsMed: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsThin: require("../assets/fonts/Poppins-Thin.ttf"),
  });

  const [loaded2] = useFonts({
    PoppinsThin: require("../assets/fonts/Poppins-Thin.ttf"),
  });

  const [location, setLocation] = useState("");
  const [country, setcountry] = useState("");
  const [Tmood, setTmood] = useState("");
  const [time, setTime] = useState("");
  const [temperature, setTemperature] = useState("");
  const name = "lagos";

  useEffect(() => {
    const fetchWeather = async () => {
      await fetch(
        `https://api.weatherapi.com/v1/current.json?key=da9c13835cc44080bf795845230806&q=${route.params.paramKey}&aqi=no`
      )
        .then((response) => response.json())
        .then((data) => {
          setTime(data.location.localtime);
          setLocation(data.location.name);
          setcountry(data.location.country);
          setTmood(data.current.condition.text);
          setTemperature(data.current.temp_c);
          // console.log(data);
        });
    };

    fetchWeather();
  }, []);
  return (
    <SafeAreaView style={{ height: "100%" }}>
      {/* Header */}
      <StatusBar />
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
                marginTop: 2,
              }}
            >
              {`${location}-${country}`}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* feel good text */}
      <View style={styles.good}>
        <Text style={styles.goodText}>Hi there {"\n"} Have a Wonderul day</Text>
        <Text style={styles.bikeIcon}>🙂</Text>
      </View>
      {/* Weater Imamge */}
      <View style={styles.circleContain}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>Today's Like</Text>
          <Text style={styles.circleNum}>{temperature}°</Text>
          <View style={styles.disImage}>
            <Image
              style={styles.cloudImage}
              source={require("../assets/clouds.png")}
            />
          </View>
        </View>
      </View>
      {/* Todays mood */}
      <View style={styles.moods}>
        <Text style={styles.moodText}>
          Today's Mood {"\n"} <Text style={styles.moodText2}> {Tmood}</Text>
        </Text>
        <Text style={styles.moodText}>
          Date-Time {"\n"}
          <Text style={styles.moodText2}>{time}</Text>
        </Text>
      </View>
      {/* buttom nav */}
      <View style={styles.buttomNav}>
        <TouchableOpacity>
          <Feather name="sun" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Mood", {
              paramKey3: location,
              paramKey4: country,
              paramKey5: Tmood,
              paramKey6: time,
            })
          }
        >
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

export default HomeScreen;

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
  bikeIcon: {
    fontSize: 30,
    marginLeft: 20,
    marginTop: 30,
    // transform: [{ rotate: "-25deg" }],
  },
  disImage: {
    position: "absolute",
    top: 40,
    width: "100%",
    height: 200,
    alignItems: "center",
  },
  cloudImage: {
    width: 200,
    height: 200,
  },
  circle: {
    width: 250,
    height: 250,
    backgroundColor: "#09151E",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 600,
    marginTop: -30,
  },
  circleContain: {
    marginTop: 60,
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  circleText: {
    marginTop: -50,
    marginLeft: -50,
    fontFamily: "PoppinsMed",
    color: "white",
  },
  circleNum: {
    color: "white",
    marginLeft: -50,
    fontSize: 30,
    textAlign: "left",
    fontFamily: "PoppinsMed",
  },
  moods: {
    flexDirection: "row",
    marginTop: 1,
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
  buttomNav: {
    justifyContent: "space-between",
    paddingHorizontal: 25,
    width: "100%",
    flexDirection: "row",
    position: "absolute",
    bottom: "3.5%",
  },
  backdrop: {
    backgroundColor: "green",
  },
});
