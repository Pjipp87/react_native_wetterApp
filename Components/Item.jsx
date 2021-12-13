import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Item({ title, onPress }) {
  return (
    <Pressable style={styles.item} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    justifyContent: "center",
    paddingVertical: 10,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
  },
});
