import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  FlatList,
  ScrollView,
  DatePickerAndroid,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import React, { useEffect, useLayoutEffect, useState } from "react";

const CountryScreen = () => {
  const navigation = useNavigation();
  const [newCity, setNewCity] = useState();
  const [input, setInput] = useState();
  const [city, setCity] = useState([]);
  const [searchresult, setSearchResult] = useState();

  const autoComplete = async () => {
    await fetch(
      `https://api.weatherapi.com/v1/search.json?key=cf799eed70c349dba90161609222508&q=${input}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCity(data);
        console.log(data);
        setSearchResult(
          data.map(({ id, name, country }) => (
            <View style={styles.result2}>
              <TouchableOpacity
                style={styles.result}
                key={id}
                onPress={() =>
                  navigation.navigate("Home", {
                    paramKey: name,
                    paramKey2: country,
                  })
                }
              >
                <Text style={styles.resulttext}>{name}</Text>
              </TouchableOpacity>
            </View>
          ))
        );
      });
  };
  // setNewCity(`${name}-${country}`)
  // (goToMessageScreen(), setNewCity(id))
  console.log(newCity);

  const goToMessageScreen = () => {
    navigation.navigate("Home", {
      city: newCity,
    });
  };
  const alertUser = () => {
    if (input.length == 1) {
      alert("Your text must be more that one word");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <Text style={{ marginTop: 20, fontWeight: "600", fontSize: 20 }}>
        Search Location
      </Text>
      <View style={styles.search}>
        <TextInput
          style={{ width: "90%" }}
          // onKeyPress={() => console.log(searchresult)}
          placeholder="Bosila, Mohammadpur Dhaka"
          onSubmitEditing={() => autoComplete()}
          onChangeText={(text) => setInput(text)}
        />

        <TouchableOpacity onPress={() => autoComplete()}>
          <FontAwesome5 name="search-location" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.result}>{searchresult}</ScrollView>
    </SafeAreaView>
  );
};

export default CountryScreen;

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
  result: {
    padding: 10,
  },
  resulttext: {
    fontSize: 20,
  },
  result2: {
    alignItems: "center",
  },
});
