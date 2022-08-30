import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
SplashScreen.preventAutoHideAsync();

const WelcomeScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Black.ttf"),
    PoppinsMed: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsThin: require("../assets/fonts/Poppins-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView onLayout={onLayoutRootView}>
      <Image style={styles.image} source={require("../assets/Star.png")} />
      <View style={styles.textView}>
        <Text style={styles.text}>
          Let's See {"\n"}The⭐{"\n"} Weather{"\n"} Around You
        </Text>
        <TouchableOpacity
          onPress={() => navigation.replace("Country")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Let's Check</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    right: 0,
  },
  text: {
    fontSize: 45,
    fontWeight: "800",
    fontFamily: "Poppins",
    textAlign: "left",
    color: "#0C1823",
    lineHeight: 65,
  },
  textView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  button: {
    backgroundColor: "#0C1823",
    position: "absolute",
    bottom: 40,
    height: 50,
    width: "80%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontFamily: "PoppinsMed",
    fontWeight: "200",
  },
});
