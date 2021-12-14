import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text } from "react-native";

export default function ForecastScreen({ route }) {
  const { name, id } = route.params;
  const [weatherData, setweatherData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://dataservice.accuweather.com/currentconditions/v1/" +
          id +
          "?apikey=nFBpVvA2J0kzgHAfCjkbb0BcLXqVlnsF&language=de-de&details=false "
      )
      .then((response) => setweatherData(response.data[0]));
  }, []);
  return (
    <View>
      <Text>{`Vorhersage für ${name}`}</Text>
      <Text>{`City id: ${id}`}</Text>
      <Text>{`Wettertext: ${weatherData.WeatherText}`}</Text>
    </View>
  );
}
