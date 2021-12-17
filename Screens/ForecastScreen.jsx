import React, { useState, useEffect } from "react";
import {
  View,
  Modal,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Text,
  Button,
} from "react-native";
import ForecastIcon from "../Components/ForecastIcon";
import CurrentConditions from "../Components/CurrentConditions";

export default function ForecastScreen({ route, navigation }) {
  const { name } = route.params;
  const [weatherData, setweatherData] = useState(null);
  const [isloading, setIsloading] = useState(true);

  const _fetchWeatherData = async () => {
    try {
      const response = await fetch(
        "https://api.weatherapi.com/v1/forecast.json?key=c26ddf3e1fb2435ebc1121400213110&q=" +
          name +
          "&days=4&aqi=no&alerts=no&lang=de"
      );
      const responseJSON = await response.json();

      const responseWithKey = { ...responseJSON, key: 1 };
      setweatherData([responseWithKey]);
      setIsloading(false);
    } catch (e) {
      alert("Klappt nicht");
      console.log(e);
    }
  };

  useEffect(() => {
    _fetchWeatherData();
  }, []);

  const _refresh = () => {
    setIsloading(true);
    _fetchWeatherData();
  };

  if (isloading) {
    return (
      <View>
        <ActivityIndicator color={"blue"} />
      </View>
    );
  }

  /*
TODO: _openModal fucntion implementieren.
setModal: true
setModalparams state initieren und implementieren

  */

  return (
    <View style={styles.container}>
      <FlatList
        data={weatherData}
        renderItem={({ item }) => (
          <CurrentConditions
            onPress={() =>
              navigation.navigate("HourlyForecast", {
                weatherData: item.forecast.forecastday[0],
              })
            }
            weatherData={item}
          />
        )}
        onRefresh={_refresh}
        refreshing={isloading}
      />

      <FlatList
        data={weatherData}
        renderItem={({ item }) => (
          <ForecastIcon
            onPress={() =>
              navigation.navigate("HourlyForecast", {
                weatherData: item.forecast.forecastday[1],
              })
            }
            weatherData={item.forecast.forecastday[1]}
            day="Morgen"
          />
        )}
        onRefresh={_refresh}
        refreshing={isloading}
      />

      <FlatList
        data={weatherData}
        renderItem={({ item }) => (
          <ForecastIcon
            onPress={() =>
              navigation.navigate("HourlyForecast", {
                weatherData: item.forecast.forecastday[2],
              })
            }
            weatherData={item.forecast.forecastday[2]}
            day="Übermorgen"
          />
        )}
        onRefresh={_refresh}
        refreshing={isloading}
      />
    </View>
  );
}

const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
    backgroundColor: "cornflowerblue",
    justifyContent: "center",
  },
});
