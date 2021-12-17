import React from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import { useState } from "react";

export default function SettingsScreen() {
  const [backgroundColor, setbackgroundColor] = useState("cornflowerblue");
  const [fontColor, setFontColor] = useState("black");
  const [switchMode, setSwitchMode] = useState(false);

  const toggleSwitch = () => {
    if (!switchMode) {
      setbackgroundColor("black");
      setFontColor("white");
      setSwitchMode(true);
    } else if (switchMode) {
      setbackgroundColor("cornflowerblue");
      setFontColor("black");
      setSwitchMode(false);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: fontColor }}>
        Dark Mode
      </Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={switchMode ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={switchMode}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
});
