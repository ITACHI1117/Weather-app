import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const Test = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.trans}>
      <View style={styles.box}>
        <TouchableOpacity
          style={{ position: "absolute", top: "2%", left: "5%" }}
          onPress={() => navigation.goBack()}
        >
          <Feather name="x" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.emoji}>About</Text>
        <Text
          style={{
            color: "black",
            fontSize: 16,
            textAlign: "center",
            width: "90%",
          }}
        >
          Weather is something that never remains constant. Getting to know
          precise weather conditions helps people to plan out their daily
          schedule. With weather forecasting technology reaching to the skies,
          dissemination of the forecast to has taken diverse routes. Weather app
          development is one such happy fallout. Weather apps enable users to
          get instant alerts regarding weather conditions. Weather apps are the
          simplest method to know about the updates of the upcoming weather.
          Short Insights: Our Weather Forecast App Development enables the user
          to add numerous locations to the list to verify the weather data
          accordingly. The user will be able to view the updated weather data
          every hour for any given location. Some supplementary information is
          also presented within the app like timings of sunrise and sunset of
          that specific day, prevailing humidity at the particular location and
          rain forecast.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Test;

const styles = StyleSheet.create({
  trans: {
    backgroundColor: "#000000a1",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
    width: "90%",
    backgroundColor: "white",
  },
  emoji: {
    marginTop: -40,
    marginBottom: 20,
    fontSize: 50,
  },
});
