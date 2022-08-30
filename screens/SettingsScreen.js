import {
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BottomNav from "./BottomNav";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function SettingsScreen({ navigation }) {
  const [colors, setColors] = useState("green");
  const [notify, setNotify] = useState("green");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headIcon}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/* General settings */}
      <View style={styles.allsettings}>
        <View style={styles.settings}>
          <Text style={styles.headText}>General Settings</Text>
          <TouchableOpacity>
            <View style={styles.gensetIcon}>
              <MaterialCommunityIcons
                name="account-edit-outline"
                size={30}
                color="black"
              />
              <Text style={styles.texts}>Account</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.gensetIcon2}>
            <View style={styles.gensetIcon}>
              <EvilIcons name="bell" size={30} color="black" />
              <Text style={styles.texts}>Notifications</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                if (notify == "green") {
                  setNotify("red");
                  alert("Notifications Off");
                } else {
                  setNotify("green");
                }
                console.log(notify);
              }}
            >
              <FontAwesome5 name="bell-slash" size={24} color={notify} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Temperature */}
        <View>
          <Text style={styles.headText}>General Temperature</Text>
          <View style={styles.gensetIcon2}>
            <Text style={styles.texts}>Celsius</Text>
            <TouchableOpacity
              onPress={() => {
                if (colors == "green") {
                  setColors("gray");
                } else {
                  setColors("green");
                }
                console.log(colors);
              }}
            >
              <Ionicons
                name="md-checkmark-circle-sharp"
                size={24}
                color={colors}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* services */}
        <View style={styles.settings}>
          <TouchableOpacity onPress={() => navigation.navigate("Terms")}>
            <View style={styles.gensetIcon}>
              <AntDesign name="filetext1" size={24} color="black" />
              <Text style={styles.texts}>Terms and services</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Test")}>
            <View style={styles.gensetIcon}>
              <SimpleLineIcons name="info" size={24} color="black" />
              <Text style={styles.texts}>About</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.gensetIcon2}>
              <View style={styles.gensetIcon}>
                <Ionicons name="bug-outline" size={24} color="black" />
                <Text style={styles.texts}>Report buggy buggy</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        {/* Buttom Tab */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  allsettings: {
    paddingHorizontal: 20,
  },
  settings: {
    marginTop: 30,
    marginBottom: 20,
  },
  headText: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  texts: {
    marginLeft: 10,
  },
  gensetIcon: {
    marginVertical: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  gensetIcon2: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gensetIcon3: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});
