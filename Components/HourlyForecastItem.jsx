import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HourlyForecastItem({ hourlyForecast }) {
  return (
    <View style={styles.listItem}>
      <Text>Uhrzeit {item.time}</Text>
      <Text>Wetter {item.condition.text}</Text>
      <Text>Temperatur {item.temp_c} °C</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 30,
    paddingTop: 50,
    paddingLeft: 30,
    paddingBottom: 20,
  },
});
