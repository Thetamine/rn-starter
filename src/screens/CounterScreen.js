import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const COUNT_INCREMENTOR = 1;
const reducer = (state, action) => {
    // state === {counter: number}
    // action === {type: change_counter, payload: 1 || -1}
    switch(action.type) {
        case 'change_counter':
            return {...state, counter: state.counter + action.payload}
        default: return state;
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 0});
    const { counter } = state;
    return (
        <View>
            <Button 
                title="Increase"
                onPress={() => {
                    // Don't do this!
                    // counter++;
                    dispatch({type:'change_counter', payload: COUNT_INCREMENTOR});
                }}
            />
            <Button 
                title="Decrease"
                onPress={() => {
                    dispatch({type:'change_counter', payload: -1 * COUNT_INCREMENTOR})
                }}
            />
            <Text>Current Count: {counter}</Text>
        </View>
    )
}

const style = StyleSheet.create({});


export default CounterScreen