import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { useGetWeather } from './src/hooks/useGetWeather';
import Tabs from './src/components/Tabs';
import ErrorItem from './src/components/ErrorItem';

const App = () => {
    const [loading, error, weather] = useGetWeather();

    if (!loading && weather && weather.list) {
        return (
            <NavigationContainer>
                <Tabs weather={weather} />
            </NavigationContainer>
        );
    }

    return (
        <View style={styles.container}>
            {error ? (
                <ErrorItem message={error} />
            ) : (
                <ActivityIndicator size={'large'} color={'blue'} />
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
