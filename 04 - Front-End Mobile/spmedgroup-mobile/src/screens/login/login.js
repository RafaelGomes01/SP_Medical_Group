import React, { Component } from 'react';
import { TextInput, StyleSheet, FlatList, TouchableOpacity, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: ''
        }
    }

    realizarLogin = async () => {
        console.warn(this.state.email + ' ' + this.state.senha);

        const resposta = await api.post('/Login', {
            email : this.state.email,
            senha : this.state.senha
        })

        const token = resposta.data.token

        console.warn(token);

        await AsyncStorage.setItem('usuario-token', token);
        this.props.navigation.navigate('Main');
    }

    render() {
        return (
            <View style={styles.content}>

                <TextInput
                    placeholder='email'
                    keyboardType='email-address'
                    onChangeText={email => this.setState({ email })}
                />

                <TextInput
                    placeholder='senha'
                    secureTextEntry={true}
                    onChangeText={senha => this.setState({ senha })}
                />

                <TouchableOpacity style={styles.btnLogin} onPress={this.realizarLogin}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    consulta: {
        borderColor: "#8700C0",
        borderWidth: 4,
        marginBottom: 55,
        padding: 10,
    },

    btnLogin: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 38,
        width: 240,
        backgroundColor: '#FFF',
        borderColor: '#FFF',
        borderWidth: 1,
        borderRadius: 4,
        shadowOffset: { height: 1, width: 1 }
    },
});
