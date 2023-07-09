import React from 'react';
import {
    ImageBackground,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const City = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../assets/city-background.jpg')}
                style={styles.imageLayout}
            >
                <Text style={[styles.cityName, styles.cityText]}>London</Text>
                <Text style={[styles.countryName, styles.cityText]}>UK</Text>
                <View style={styles.populationWrapper}>
                    <Feather name={'user'} size={50} color={'red'} />
                    <Text style={styles.populationText}>8000</Text>
                </View>
                <View style={styles.riseSetWrapper}>
                    <Feather name={'sunrise'} size={50} color={'white'} />
                    <Text style={styles.riseSetText}>10:46:58am</Text>
                    <Feather name={'sunset'} size={50} color={'white'} />
                    <Text style={styles.riseSetText}>17:28:15pm</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    cityName: {
        fontSize: 40,
    },
    cityText: {
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    container: {
        backgroundColor: 'lightgrey',
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    countryName: {
        fontSize: 30,
    },
    imageLayout: {
        flex: 1,
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
        fontWeight: 'bold',
    },
    populationWrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    riseSetWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 30,
    },
});

export default City;
