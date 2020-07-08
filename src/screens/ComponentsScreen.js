import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Greeting = <Text>Hello to you!</Text>;

const ComponentsScreen = () => {
    return (
    <View>
        <Text style={styles.H1}>This is the components screen.</Text>
        {Greeting}
    </View>);
};

const styles = StyleSheet.create({
    H1: {
        fontSize: 30
    }
});

export default ComponentsScreen;