import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';

const CurrentWeather = ({ weatherData }) => {
    const {
        wrapper,
        container,
        tempStyles,
        feels,
        highLowWrapper,
        highLow,
        bodyWrapper,
        description,
        message,
    } = styles;

    const {
        main: { temp, feels_like, temp_max, temp_min },
        weather,
    } = weatherData;
    const weatherCondition = weather[0].main;

    return (
        <SafeAreaView
            style={[
                wrapper,
                {
                    backgroundColor:
                        weatherType[weatherCondition].backgroundColor,
                },
            ]}
        >
            <View style={container}>
                <Feather
                    name={weatherType[weatherCondition].icon}
                    size={100}
                    color={'black'}
                />
                <Text style={tempStyles}>{`${temp}°`}</Text>
                <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
                <RowText
                    messageOne={`High: ${temp_max}° `}
                    messageTwo={`Low: ${temp_min}°`}
                    containerStyles={highLowWrapper}
                    messageOneStyles={highLow}
                    messageTwoStyles={highLow}
                />
            </View>
            <RowText
                messageOne={weather[0].description}
                messageTwo={weatherType[weatherCondition].message}
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
    tempStyles: {
        color: 'black',
        fontSize: 48,
    },
    wrapper: {
        flex: 1,
        backgroundColor: 'pink',
    },
});

export default CurrentWeather;
