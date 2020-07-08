import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const myName = 'Shelby Russ';

const Ex1Screen = () => {
    return (
        <View>
            <Text style={styles.h1}>Getting Started With React Native!</Text>
            <Text style={styles.h2}>My name is {myName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    h1: {
        fontSize: 45
    },
    h2: {
        fontSize: 20
    }
});

export default Ex1Screen