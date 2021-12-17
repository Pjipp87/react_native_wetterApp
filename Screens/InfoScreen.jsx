import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function InfoScreen() {
  return (
    <View
      style={{
        backgroundColor: "cornflowerblue",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>
        Coded by Pascal Jipp
      </Text>
      <Text style={{ fontSize: 20, fontWeight: "bold", paddingBottom: 50 }}>
        Weather API used: WeatherAPI.com
      </Text>
      <Button
        title="Send me a message"
        onPress={() => alert("Funktion noch nicht implementiert")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
