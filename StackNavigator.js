import { View, Text, StatusBar } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import MoodScreen from "./screens/MoodScreen";
import MapsScreen from "./screens/MapsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import CountryScreen from "./screens/CountryScreen";
import Test from "./screens/Test";
import QuotesScreen from "./screens/QuotesScreen";
import Terms from "./screens/Terms";
// import AboutScreen from "./screens/Aboutscreen"; 

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Mood" component={MoodScreen} />
        <Stack.Screen name="Maps" component={MapsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Group screenOptions={{ presentation: "fullScreenModal" }}>
          <Stack.Screen name="Country" component={CountryScreen} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: "transparentModal" }}>
          <Stack.Screen name="Quote" component={QuotesScreen} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: "transparentModal" }}>
          <Stack.Screen name="Test" component={Test} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="Terms" component={Terms} />
        </Stack.Group>
        {/* <Stack.Screen name="About" component={en} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
