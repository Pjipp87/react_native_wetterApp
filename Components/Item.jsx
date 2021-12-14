import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Item({ title, onPress }) {
  const [color, setcolor] = useState({ backgroundColor: "cornflowerblue" });

  const _onPress = () => {
    setcolor({ backgroundColor: "darkblue" });
    setTimeout(() => {
      setcolor({ backgroundColor: "cornflowerblue" });
    }, 150);
  };

  return (
    <Pressable
      style={[styles.item, color]}
      onPress={onPress}
      onPressIn={() => _onPress()}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderWidth: 1,
    marginVertical: 10,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
