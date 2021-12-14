import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Dimensions,
  FlatList,
} from "react-native";
import * as Icon from "@expo/vector-icons";
import axios from "axios";
import Item from "../Components/Item";

const locationUrl =
  "https://api.weatherapi.com/v1/search.json?key=c26ddf3e1fb2435ebc1121400213110";

export default function MainScreen({ navigation }) {
  const [city, setCity] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [cityData, setCityData] = useState();

  const _getText = (text) => {
    setCity(text);
  };

  const _sendRequest = () => {
    if (city !== "") {
      try {
        axios
          .get(locationUrl, {
            params: {
              q: city + " germany",
            },
          })
          .then((response) => setCityData(response.data));
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Bitte Standort eingeben!");
    }
  };

  useEffect(() => {}, []);

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
          placeholder="Bitte Standort eingeben"
          onChange={(e) => _getText(e.nativeEvent.text)}
          onSubmitEditing={() => {
            _sendRequest();
          }}
          style={{ fontSize: 26 }}
          blurOnSubmit={true}
        />
        <Pressable
          onPress={() => alert("Standortsuche noch nicht implementiert!")}
        >
          <Icon.MaterialIcons name="my-location" size={24} color="black" />
        </Pressable>
      </View>
      {/*<Button title="Enter" onPress={() => _sendRequest(city)} />*/}

      <FlatList
        data={cityData}
        renderItem={({ item }) => (
          <Item
            title={item.name}
            onPress={() =>
              navigation.navigate("ForecastScreen", {
                id: item.id,
                name: item.name,
              })
            }
          />
        )}
        keyExtractor={(item) => item.id}
        refreshing={true}
        extraData={selectedId}
      />
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
