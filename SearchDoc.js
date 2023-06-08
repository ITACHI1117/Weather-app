import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";

const SearchDoc = () => {
  const [newCity, setNewCity] = useState("");
  useLayoutEffect(() => {
    const autoComplete = async () => {
      await fetch(
        `https://api.weatherapi.com/v1/search.json?key=da9c13835cc44080bf795845230806&q=lagos`
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
