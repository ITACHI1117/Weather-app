import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const QuotesScreen = ({ route }) => {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      const getQuotes = async () => {
        await fetch("https://type.fit/api/quotes")
          .then((response) => response.json())
          .then((data) => setQuote(data[Math.ceil(Math.random(1) * 100)].text))
          .catch((error) => {
            console.log(error);
          });
      };
      getQuotes();
    });

    return unsubscribe;
  }, [navigation]);

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.trans}>
      <View style={styles.box}>
        <TouchableOpacity
          style={{ position: "absolute", top: "2%", left: "5%" }}
          onPress={() => navigation.goBack()}
        >
          <Feather name="x" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.emoji}>❤️</Text>
        <Text style={{ color: "black", fontSize: 20, textAlign: "center" }}>
          {quote}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default QuotesScreen;

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
    height: "60%",
    width: "80%",
    backgroundColor: "white",
  },
  emoji: {
    marginTop: -40,
    marginBottom: 20,
    fontSize: 80,
  },
});
