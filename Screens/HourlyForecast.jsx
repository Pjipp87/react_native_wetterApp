import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ForecastIcon from "../Components/ForecastIcon";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import HourlyForecastItem from "../Components/HourlyForecastItem";

export default function HourlyForecast({ route }) {
  const { weatherData } = route.params;

  return (
    <View style={styles.container}>
      <Text
        style={{
          paddingTop: 30,
          fontSize: 26,
          fontWeight: "bold",
          fontStyle: "italic",
        }}
      >
        {weatherData.date}{" "}
      </Text>
      <FlatList
        data={weatherData.hour}
        horizontal={true}
        keyExtractor={(item, index) => uuidv4()}
        renderItem={({ item }) => <HourlyForecastItem hourlyForecast={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "cornflowerblue",
  },
});
