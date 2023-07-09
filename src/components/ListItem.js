import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ListItem = (props) => {
    const { dt_text, min, max, condition } = props;
    return (
        <View style={styles.item}>
            <Feather name={'sun'} size={50} color={'white'} />
            <Text style={styles.date}>{dt_text}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    date: {
        color: 'white',
        fontSize: 15,
    },
    item: {
        alignItems: 'center',
        backgroundColor: 'hotpink',
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
