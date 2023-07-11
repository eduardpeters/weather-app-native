import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env';

import Tabs from './src/components/Tabs';

const App = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [weather, setWeather] = useState(null);
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);

    const fetchWeatherData = async () => {
        try {
            const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
            const data = await res.json();
            setWeather(data);
        } catch (error) {
            setError('Could not fetch weather');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        (async () => {
            const { status } =
                await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setError('Permission to access location was denied');
                return;
            }
            const currentLocation = await Location.getCurrentPositionAsync({});
            setLat(currentLocation.coords.latitude);
            setLon(currentLocation.coords.longitude);
            await fetchWeatherData();
        })();
    }, [lat, lon]);

    if (weather) {
        console.log(weather);
    }

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size={'large'} color={'blue'} />
            </View>
        );
    }
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default App;
