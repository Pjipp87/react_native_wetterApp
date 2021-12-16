import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HourlyForecast({ params }) {
  const weatherData = route.params;
  return (
    <View>
      <Text>Hello {weatherData}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
