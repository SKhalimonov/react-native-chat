import React, { Component } from 'react';
import { View } from 'react-native';
import Login from './login';
import MainStyles from './styles';

export default class Main extends Component {
    render() {
        return (
            <View style={MainStyles.container}>
                <Login/>
            </View>
        );
    }
}