import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ForecastIcon from "../Components/ForecastIcon";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export default function HourlyForecast({ route }) {
  const { weatherData } = route.params;

  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ paddingTop: 30, fontSize: 26, fontStyle: "bold" }}>
        Datum {weatherData.date}{" "}
      </Text>
      <FlatList
        data={weatherData.hour}
        horizontal={true}
        keyExtractor={(item, index) => uuidv4()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>Uhrzeit {item.time}</Text>
            <Text>Wetter {item.condition.text}</Text>
            <Text>Temperatur {item.temp_c} °C</Text>
          </View>
        )}
      />
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
