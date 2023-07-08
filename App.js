import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const App = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <Feather name='sun' size={100} color='black' />
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
        marginBottom: 40,
        paddingLeft: 25,
    },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
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
