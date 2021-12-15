import React, { useState, useEffect } from "react";

import axios from "axios";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import WeatherImages from "../Components/WeatherImages";

function Vieport({ name, currentweatherData }) {}

export default function ForecastScreen({ route }) {
  const { name } = route.params;
  const [currentweatherData, setcurrentweatherData] = useState([]);
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    try {
      axios
        .get(
          "https://api.weatherapi.com/v1/current.json?key=c26ddf3e1fb2435ebc1121400213110&q=" +
            name +
            "&aqi=no&lang=de"
        )
        .then((response) => setcurrentweatherData(response.data));
    } catch (error) {
      alert("Fehler");
      console.log(error);
    }
  }, []);

  if (isloading) {
    return (
      <View>
        <ActivityIndicator color={"blue"} />
      </View>
    );
  } else {
    return (
      <View>
        <Text>{`Vorhersage für ${name}`}</Text>

        {/*
  <Text>{`Aktuelle Temperatur: ${currentweatherData.Temperature.Metric.Value} °C`}</Text>
  */}
        <Text>Wettertext: {currentweatherData.current.condition.text}</Text>
      </View>
    );
  }
}

//const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "10%",
    backgroundColor: "cornflowerblue",
  },
});
