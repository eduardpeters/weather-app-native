import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <Text>Current Weather</Text>
                <Text style={styles.temp}>6</Text>
                <Text style={styles.feels}>Feels like 5</Text>
                <View style={styles.highLowWrapper}>
                    <Text style={styles.highLow}>High: 8</Text>
                    <Text style={styles.highLow}>Low: 6</Text>
                </View>
            </View>
            <View style={styles.bodyWrapper}>
                <Text style={styles.description}>Its sunny</Text>
                <Text style={styles.message}>Its perfect t-shirt weather</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    bodyWrapper: {
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    container: {
        alignItems: 'center',
        flex: 1,
    },
    description: {
        fontSize: 48,
    },
    feels: {
        color: 'black',
        fontSize: 30,
    },
    highLow: {
        color: 'black',
        fontSize: 20,
    },
    highLowWrapper: {
        flexDirection: 'row',
    },
    message: {
        fontSize: 30,
    },
    temp: {
        color: 'black',
        fontSize: 48,
    },
    wrapper: {
        flex: 1,
        backgroundColor: 'hotpink',
    },
});

export default App;
