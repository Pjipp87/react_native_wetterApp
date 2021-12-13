import React from "react";
import { View, Text } from "react-native";

export default function ForecastScreen({ route }) {
  const { name, id } = route.params;
  return (
    <View>
      <Text>{`Vorhersage für ${name}`}</Text>
      <Text>{`City id: ${id}`}</Text>
    </View>
  );
}
