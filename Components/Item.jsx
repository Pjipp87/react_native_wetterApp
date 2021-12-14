import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Item({ title, onPress }) {
  const [changeColor, setChangeColor] = useState({
    backgroundColor: "cornflowerblue",
    color: "black",
  });

  const _changeColor = () => {
    setChangeColor({
      backgroundColor: "darkblue",
      color: "white",
    });
    setTimeout(() => {
      setChangeColor({
        backgroundColor: "cornflowerblue",
        color: "black",
      });
    }, 150);
  };

  return (
    <Pressable
      style={[styles.item, changeColor]}
      onPress={onPress}
      onPressIn={() => _changeColor()}
    >
      <Text style={[styles.title, changeColor]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 40,
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
