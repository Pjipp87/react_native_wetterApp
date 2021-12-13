import React from "react";
import { View, Text } from "react-native";

export default function ForecastScreen({ route }) {
  const { city, cityData } = route.params;
  return (
    <View>
      <Text>{`Vorhersage für ${city}`}</Text>
      {/*
      <Text>{`Ausgewählte Stadt: ${cityData[0].hof.name}`}</Text>
      <Text>{`Vorhersage für heute: ${cityData[0].hof.tomorrow}`}</Text>
      <Text>{`Vorhersage für morgen: ${cityData[0].hof.tomorrow}`}</Text>
      */}
    </View>
  );
}
