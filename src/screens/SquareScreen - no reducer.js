import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCluster from '../components/ColorCluster';

const SquareScreen = () => {
    const COLOR_INCREMENT = 15
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        //color === 'red','green','blue'
        //change === +15, -15
        console.log('beginning switch statement')
        switch(color) {
            case 'red':
                red + change > 255 ? null : setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            default:
                return;
        }
    };

    console.log(`Red: ${red} Green: ${green} Blue: ${blue}`);
    return (
        <View>
            <Text style={style.h1}>Square Screen</Text>
            <ColorCluster 
                onIncrease={() => {setColor('red', COLOR_INCREMENT)}}
                onDecrease={() => setColor('red', COLOR_INCREMENT * -1)}
                colorName="Red"
            />
            <ColorCluster 
                onIncrease={() => setColor('green', COLOR_INCREMENT)} 
                onDecrease={() => setColor('green', COLOR_INCREMENT * -1)}
                colorName="Green"
            />
            <ColorCluster 
                onIncrease={() => setColor('blue', COLOR_INCREMENT)} 
                onDecrease={() => setColor('blue', COLOR_INCREMENT * -1)}
                colorName="Blue"
            />

            <View style={{height:100, width:100, backgroundColor:`rgb(${red}, ${green}, ${blue})`}}></View>
        </View>
    )

}

const style = StyleSheet.create({
    h1: {
        fontSize: 40
    },
});

export default SquareScreen;

