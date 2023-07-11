import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';

const CurrentWeather = () => {
    const {
        wrapper,
        container,
        temp,
        feels,
        highLowWrapper,
        highLow,
        bodyWrapper,
        description,
        message,
    } = styles;
    return (
        <SafeAreaView style={wrapper}>
            <View style={container}>
                <Feather
                    name={weatherType.Drizzle.icon}
                    size={100}
                    color={'black'}
                />
                <Text style={temp}>6</Text>
                <Text style={feels}>Feels like 5</Text>
                <RowText
                    messageOne={'High: 8'}
                    messageTwo={'Low: 6'}
                    containerStyles={highLowWrapper}
                    messageOneStyles={highLow}
                    messageTwoStyles={highLow}
                />
            </View>
            <RowText
                messageOne={'Its sunny'}
                messageTwo={weatherType.Mist.message}
                containerStyles={bodyWrapper}
                messageOneStyles={description}
                messageTwoStyles={message}
            />
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
        backgroundColor: 'pink',
    },
});

export default CurrentWeather;
