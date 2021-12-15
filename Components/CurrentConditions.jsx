import React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";

export default function CurrentConditions({ currentWeatherObject, onPress }) {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: "https:"+currentWeatherObject.current.condition.icon }} />
                <View style={styles.info}>
                    <Text
                        style={styles.text}
                    >{`Die Temperatur beträgt ${currentWeatherObject.current.temp_c} °C`}</Text>
                    <Text style={styles.smallText}>{`${currentWeatherObject.current.condition.text}`}</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 0,
        flexDirection: "row",
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 5,
    },
    info: {
        flexDirection: "column",
        justifyContent: "space-evenly",
    },
    text: {
        fontSize: 20,
    },
    smallText: {
        fontSize: 16,
        fontWeight: "100",
    },
});
