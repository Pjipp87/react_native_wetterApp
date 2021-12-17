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
      <View style={{ alignItems: "center" }}>
        <Text style={styles.text}>Uhrzeit {time}</Text>
        <Text style={styles.text}>Wetter {item.condition.text}</Text>
        <Text style={styles.text}>Temperatur {item.temp_c} °C</Text>
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
    paddingLeft: 30,
    paddingBottom: 20,
    backgroundColor: "cornflowerblue",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 40,
    marginRight: 5,
  },
  text: {
    fontSize: 26,
  },
});
