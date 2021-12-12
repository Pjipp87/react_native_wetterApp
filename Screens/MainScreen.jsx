import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import * as Icon from "@expo/vector-icons";
import { useRef } from "react";

export default function MainScreen() {
  const [city, setCity] = useState("");
  const [editable, seteditable] = useState(true);

  const _onSubmit = (text) => {
    console.log();
    setCity(text);
    text = "";
  };

  const _onSubmitEnds = () => {
    textInput.clear();
    seteditable(false);
  };

  const fadeAnim = useRef(new Animated.Value(-(windowWidth * 1.9))).current;
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };

  fadeIn();
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontStyle: "italic" }}>
        Wettervorhersage
      </Text>

      <View style={styles.locationInput}>
        <TextInput
          ref={(input) => {
            textInput = input;
          }}
          placeholder={
            editable ? "Bitte Standort eingeben" : "Standort eingegeben!"
          }
          onChange={(e) => _onSubmit(e.nativeEvent.text)}
          onSubmitEditing={_onSubmitEnds}
          editable={editable}
          style={{ fontSize: 26 }}
        />
        <Pressable
          onPress={() => alert("Standortsuche noch nicht implementiert!")}
        >
          <Icon.MaterialIcons name="my-location" size={24} color="black" />
        </Pressable>
      </View>
      <Text>{`Eingegebner Standort: ${city}`}</Text>
      <Animated.View
        useNativeDriver={true}
        style={[
          styles.sunImage,
          {
            bottom: fadeAnim,
          },
        ]}
      >
        <Image
          style={styles.sunImage}
          source={require("../images/sun-5277491_640.png")}
        />
      </Animated.View>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "10%",
    backgroundColor: "cornflowerblue",
  },
  locationInput: {
    marginVertical: 40,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    width: "90%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    fontSize: 26,
  },
  sunImage: {
    position: "relative",
    marginTop: 25,
    width: windowWidth * 0.8,
    height: windowWidth * 0.8,
  },
});
