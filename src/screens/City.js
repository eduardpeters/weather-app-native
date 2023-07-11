import React from 'react';
import {
    ImageBackground,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import IconText from '../components/IconText';
import moment from 'moment';

const City = ({ weatherData }) => {
    const {
        container,
        cityName,
        cityText,
        countryName,
        imageLayout,
        populationWrapper,
        populationText,
        riseSetWrapper,
        riseSetText,
        rowLayout,
    } = styles;

    const { name, country, population, sunrise, sunset } = weatherData;

    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/city-background.jpg')}
                style={imageLayout}
            >
                <Text style={[cityName, cityText]}>{name}</Text>
                <Text style={[countryName, cityText]}>{country}</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText
                        iconName="user"
                        iconColor="red"
                        bodyText={`Population: ${population}`}
                        bodyTextStyles={populationText}
                    />
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText
                        iconName="sunrise"
                        iconColor="white"
                        bodyText={moment(sunrise).format('h:mm:ss a')}
                        bodyTextStyles={riseSetText}
                    />
                    <IconText
                        iconName="sunset"
                        iconColor="white"
                        bodyText={moment(sunset).format('h:mm:ss a')}
                        bodyTextStyles={riseSetText}
                    />
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
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30,
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30,
    },
    rowLayout: {
        alignItems: 'center',
        flexDirection: 'row',
    },
});

export default City;
