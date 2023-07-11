import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ErrorItem = ({ message }) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.errorText, styles.errorMessage]}>
                Sorry something went wrong
            </Text>
            <Feather name={'frown'} size={100} color={'white'} />
            <Text style={[styles.errorText, styles.errorDetails]}>
                {message}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
    },
    errorDetails: {
        fontSize: 20,
    },
    errorMessage: {
        fontSize: 30,
    },
    errorText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default ErrorItem;
