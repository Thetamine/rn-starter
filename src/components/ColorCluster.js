import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ColorCluster = ({colorName, onIncrease, onDecrease}) => {
    return (
        <View>
            <Text>{colorName}</Text>
            <Button 
                title={`Increase ${colorName}`}
                onPress={() => onIncrease()}
            />
            <Button 
            title={`Decrease ${colorName}`}
            onPress={() => onDecrease()}
            />
        </View>
    )
}



const style = StyleSheet.create({});

export default ColorCluster;