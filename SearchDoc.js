import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";

const SearchDoc = () => {
  const [newCity, setNewCity] = useState("");
  useLayoutEffect(() => {
    const autoComplete = async () => {
      await fetch(
        `https://api.weatherapi.com/v1/search.json?key=cf799eed70c349dba90161609222508&q=lagos`
      )
        .then((response) => response.json())
        .then((data) => {
          data.map(({ id, name, country }) => setNewCity(id, name, country));
        });
    };
    autoComplete();
  }, []);

  return newCity;
};

export default SearchDoc;
