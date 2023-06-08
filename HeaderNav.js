// import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import React from "react";
// import { MaterialIcons } from "@expo/vector-icons";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import hooks from "./WeatherHooks.js/hooks";
// import { useEffect, useState } from "react";
// import { useNavigation } from "@react-navigation/native";
// import { useRoute } from "@react-navigation/native";

// const HeaderNav = ({ route }) => {
//   const navigation = useNavigation();
//   const [location, setLocation] = useState("");
//   const [country, setcountry] = useState("");

//   useEffect(() => {
//     const fetchWeather = async () => {
//       await fetch(
//         `https://api.weatherapi.com/v1/current.json?key= da9c13835cc44080bf795845230806&q=${route.params.paramKey}&aqi=no`
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           setLocation(data.location.name);
//           setcountry(data.location.country);
//         });
//     };

//     fetchWeather();
//   }, []);
//   return (
//     <View style={styles.header}>
//       <Image style={styles.profile} source={require("./assets/profile.jpg")} />
//       <View style={styles.profileInfo}>
//         <TouchableOpacity onPress={() => navigation.navigate("Country")}>
//           <Text
//             style={{
//               fontSize: 13,
//               fontFamily: "PoppinsThin",
//               fontWeight: "100",
//             }}
//           >
//             Ajogu Joseph
//           </Text>

//           <Text
//             style={{
//               fontSize: 13,
//               fontFamily: "PoppinsThin",
//               fontWeight: "100",
//               alignItems: "center",
//               justifyContent: "center",
//               marginTop: -8,
//             }}
//           >
//             {`${location}-${country}`}
//             <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
//           </Text>
//         </TouchableOpacity>
//       </View>

//       <MaterialCommunityIcons
//         name="view-dashboard-outline"
//         style={styles.icon}
//         size={34}
//         color="#36424D"
//       />
//     </View>
//   );
// };

// export default HeaderNav;

// const styles = StyleSheet.create({
//   header: {
//     paddingHorizontal: 15,
//     flexDirection: "row",
//   },
//   profile: {
//     width: 35,
//     height: 35,
//     borderRadius: "10",
//   },
//   profileInfo: {
//     marginLeft: 15,
//   },
//   icon: {
//     position: "absolute",
//     right: 15,
//   },
// });
