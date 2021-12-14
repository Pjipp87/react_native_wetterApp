import React, { useState, useEffect } from "react";

import axios from "axios";
import { View, Text, Image } from "react-native";

export default function ForecastScreen({ route }) {
  const { name, id } = route.params;
  const [currentweatherData, setcurrentweatherData] = useState([]);

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
      <Text>{`Wettertext: ${currentweatherData.WeatherText}`}</Text>
      <Text>{`Aktuelle Temperatur: ${currentweatherData.Temperature.Metric.Value} °C`}</Text>
      <Text>{`Aktuelle Temperatur: ${currentweatherData.WeatherIcon} °C`}</Text>
      <Image
        style={{
          width: 50,
          height: 50,
        }}
        source={require("")}
      />
    </View>
  );
}
