import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import moment from 'moment';

import { weatherType } from '../utilities/weatherType';

const ListItem = (props) => {
    const { dt_text, min, max, condition } = props;
    const { date, dateTextWrapper, item, temp } = styles;
    return (
        <View style={item}>
            <Feather
                name={weatherType[condition].icon}
                size={50}
                color={'white'}
            />
            <View style={dateTextWrapper}>
                <Text style={date}>{moment(dt_text).format('dddd')}</Text>
                <Text style={date}>{moment(dt_text).format('h:mm:ss a')}</Text>
            </View>
            <Text style={temp}>{`${Math.round(min)}°/${Math.round(
                max,
            )}°`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    date: {
        color: 'white',
        fontSize: 15,
    },
    dateTextWrapper: {
        flexDirection: 'column',
    },
    item: {
        alignItems: 'center',
        backgroundColor: 'pink',
        borderWidth: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    temp: {
        color: 'white',
        fontSize: 20,
    },
});

export default ListItem;
