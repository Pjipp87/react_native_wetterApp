import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import InfoScreen from "../Screens/InfoScreen";
import MainScreen from "../Screens/MainScreen";
import SettingsScreen from "../Screens/SettingsScreen";
import * as Icon from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForecastScreen from "../Screens/ForecastScreen";
import HourlyForecast from "../Screens/HourlyForecast";

const Stack = createNativeStackNavigator();

function forecastSwitch() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        options={{
          title: "Wilkommen",
        }}
        component={MainScreen}
      />
      <Stack.Screen
        name="ForecastScreen"
        options={({ route, navigation }) => ({
          title: route.params.name,
        })}
        component={ForecastScreen}
      />
      <Stack.Screen
        name="HourlyForecast"
        options={{
          title: "Stündliche Vorhersage",
        }}
        component={HourlyForecast}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Startseite") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Einstellungen") {
              iconName = focused ? "settings" : "settings-outline";
            } else if (route.name === "Info") {
              iconName = focused
                ? "information-circle"
                : "information-circle-outline";
            }

            // You can return any component that you like here!
            return <Icon.Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Startseite"
          component={forecastSwitch}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Einstellungen" component={SettingsScreen} />
        <Tab.Screen name="Info" component={InfoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
