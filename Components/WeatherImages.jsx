import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function WeatherImages({ iconnumber }) {
  const url = "../images/" + iconnumber + ".png";

  let icon;
  if (iconnumber < 10) {
    icon = `https://developer.accuweather.com/sites/default/files/0${iconnumber}-s.png`;
  } else {
    icon = `https://developer.accuweather.com/sites/default/files/${iconnumber}-s.png`;
  }

  return (
    <View>
      <Image
        style={{ width: "100%", height: "80%" }}
        source={{
          uri: icon,
        }}
      />
    </View>
  );
}

//const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "10%",
    backgroundColor: "cornflowerblue",
  },
});
