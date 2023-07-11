import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { useGetWeather } from './src/hooks/useGetWeather';
import Tabs from './src/components/Tabs';
import ErrorItem from './src/components/ErrorItem';

const App = () => {
    const [loading, error, weather] = useGetWeather();

    if (weather && weather.list) {
        return (
            <NavigationContainer>
                <Tabs weather={weather} />
            </NavigationContainer>
        );
    }

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size={'large'} color={'blue'} />
            ) : (
                <ErrorItem message={error} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default App;
