import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import ForecastIcon from '../Components/ForecastIcon'
import CurrentConditions from "../Components/CurrentConditions";




export default function ForecastScreen({ route }) {
  const { name } = route.params;
  const [currentweatherData, setcurrentweatherData] = useState(null);
  const [isloading, setIsloading] = useState(true);


  const _fetchCurrentData = async()=>{
      try {
          const response = await fetch("https://api.weatherapi.com/v1/forecast.json?key=c26ddf3e1fb2435ebc1121400213110&q=" +
              name +
              "&days=3&aqi=no&alerts=no&lang=de")
          const responseJSON = await response.json()

          const responseWithKey = {...responseJSON, key: 1}
          setcurrentweatherData([responseWithKey])
          setIsloading(false)
      }catch (e) {
          alert('Klappt nicht')
          console.log(e)
      }
  }



   useEffect(() => {
       _fetchCurrentData()
  }, []);

  const _refresh = () => {
    setIsloading(true)
      _fetchCurrentData()
  };


  if (isloading) {
    return (
      <View>
        <ActivityIndicator color={"blue"} />
      </View>
    );
  }

    console.log(currentweatherData)
    return (
      <View style={styles.container}>

        <FlatList
            data={currentweatherData}
            renderItem={({item})=>(
                <CurrentConditions
                onPress={()=>alert('klappt')}
                currentWeatherObject={item}
                />
            )}
            onRefresh={_refresh}
            refreshing={isloading}
        />


          <FlatList
              data={currentweatherData}
              renderItem={({item})=>(
                  <ForecastIcon
                      onPress={()=>alert('klappt')}
                      currentWeatherObject={item.forecast.forecastday[0]}
                  />
              )}
              onRefresh={_refresh}
              refreshing={isloading}
          />

          <FlatList
              data={currentweatherData}
              renderItem={({item})=>(
                  <ForecastIcon
                      onPress={()=>alert('klappt')}
                      currentWeatherObject={item.forecast.forecastday[1]}
                  />
              )}
              onRefresh={_refresh}
              refreshing={isloading}
          />

          <FlatList
              data={currentweatherData}
              renderItem={({item})=>(
                  <ForecastIcon
                      onPress={()=>alert('klappt')}
                      currentWeatherObject={item.forecast.forecastday[2]}
                  />
              )}
              onRefresh={_refresh}
              refreshing={isloading}
          />

      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "10%",
    backgroundColor: "cornflowerblue",
  },
});
