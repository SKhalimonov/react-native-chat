import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

export default class ChatList extends Component {
    render() {
        return (
            <View>
                <TextInput
                    style={styles.nameInput}
                    placeHolder="John Cena"
                    value={this.state.name}/>
            </View>
        );
    }
}