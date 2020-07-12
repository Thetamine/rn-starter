import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState('');
    return (
        <View>
            <Text style={style.h1}>TextScreen</Text>
            <Text>Enter Password:</Text>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={style.input}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            {/* <Text>My name is: {name}</Text> */}
            { password.length < 5 && password.length > 0
                ?<Text>Password should be longer than 5 characters</Text>
                : null
            }
        </View>
    )
};

const style = StyleSheet.create({
    h1: {
        fontSize: 40
    },
    input: {
        margin: 15,
        padding: 5,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;