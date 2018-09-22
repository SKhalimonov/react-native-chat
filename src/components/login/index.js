import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Button, Input, Divider } from 'react-native-elements'
import MainStyles from '../styles';
import LoginStyles from './styles';

export default class Login extends Component {
    render() {
        return (
            <Card title='LOGIN'>
                <Input
                    containerStyle={LoginStyles.input}
                    placeholder='Username'
                    leftIcon={{ type: 'font-awesome', name: 'user' }}/>

                <Input
                    containerStyle={LoginStyles.input}
                    placeholder='Password'
                    leftIcon={{ type: 'font-awesome', name: 'asterisk' }}/>

                <Button
                    backgroundColor='#03A9F4'
                    title='Sign In' />
            </Card>
        );
    }
}