import React from "react";
import { View, Text } from "react-native";

export default function ForecastScreen({ route, navigation }) {
  const { city } = route.params;
  return (
    <View>
      <Text>{`Vorhersage für ${city}`}</Text>
    </View>
  );
}
