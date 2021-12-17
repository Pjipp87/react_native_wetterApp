import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  Dimensions,
} from "react-native";

export default function CurrentConditions({ weatherData, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={{ fontSize: 28, paddingVertical: 10 }}>Heute</Text>
        <Image
          style={styles.image}
          source={{ uri: "https:" + weatherData.current.condition.icon }}
        />

        <Text
          style={styles.text}
        >{`Die Temperatur beträgt ${weatherData.current.temp_c} °C`}</Text>
        <Text
          style={styles.smallText}
        >{`${weatherData.current.condition.text}`}</Text>
      </View>
    </Pressable>
  );
}

const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderWidth: 1,
    width: screenWidth * 0.95,
    borderColor: "blue",
    borderRadius: 15,
    elevation: 100,
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 5,
  },
  info: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
  smallText: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    paddingBottom: 10,
  },
});
