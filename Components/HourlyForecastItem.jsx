import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function HourlyForecastItem({ hourlyForecast }) {
  item = hourlyForecast;

  const time = item.time.slice(item.time.indexOf(" ") + 1);

  return (
    <View style={styles.listItem}>
      <Image
        style={styles.image}
        source={{ uri: "https:" + item.condition.icon }}
      />
      <View>
        <Text>Uhrzeit {time}</Text>
        <Text>Wetter {item.condition.text}</Text>
        <Text>Temperatur {item.temp_c} °C</Text>
      </View>
    </View>
  );
}

//############################ ICON!!!
const styles = StyleSheet.create({
  listItem: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 30,
    paddingTop: 50,
    paddingLeft: 30,
    paddingBottom: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 5,
  },
});
