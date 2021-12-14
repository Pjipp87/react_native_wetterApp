import React, { useState, useEffect } from "react";

import axios from "axios";
import { View, Text, Image, StyleSheet } from "react-native";
import WeatherImages from "../Components/WeatherImages";

export default function ForecastScreen({ route }) {
  const { name, id, imageURl } = route.params;
  const [currentweatherData, setcurrentweatherData] = useState([]);
  const [currentWeatherImage, setcurrentWeatherImage] = useState(null);

  useEffect(() => {
    axios
      .get(
        "http://dataservice.accuweather.com/currentconditions/v1/" +
          id +
          "?apikey=nFBpVvA2J0kzgHAfCjkbb0BcLXqVlnsF&language=de-de&details=false "
      )
      .then((response) => setcurrentweatherData(response.data[0]));
  }, []);

  return (
    <View>
      <Text>{`Vorhersage für ${name}`}</Text>
      <Text>{`City id: ${id}`}</Text>
      {/*
      <Text>{`Aktuelle Temperatur: ${currentweatherData.Temperature.Metric.Value} °C`}</Text>
      */}
      <Text>{`Wettertext: ${currentweatherData.WeatherText}`}</Text>

      <Text>{`Wetter Icon: ${currentweatherData.WeatherIcon} `}</Text>
      <WeatherImages iconnumber={currentweatherData.WeatherIcon} />
    </View>
  );
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
