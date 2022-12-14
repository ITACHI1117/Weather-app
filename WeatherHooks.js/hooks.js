import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const hooks = () => {
  const [location, setLocation] = useState("");
  const [country, setcountry] = useState("");
  const [Tmood, setTmood] = useState("");
  const [temperature, setTemperature] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      await fetch(
        "https://api.weatherapi.com/v1/current.json?key=cf799eed70c349dba90161609222508&q=abuja&aqi=no"
      )
        .then((response) => response.json())
        .then((data) => {
          setLocation(data.location.name);
          setcountry(data.location.country);
          setTmood(data.current.condition.text);
          setTemperature(data.current.temp_c);
          console.log(data);
        });
    };

    fetchWeather();
  }, []);
  return;
};

export default hooks;

const styles = StyleSheet.create({});
