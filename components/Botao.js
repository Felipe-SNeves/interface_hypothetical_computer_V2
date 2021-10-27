import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 11,
        display: 'flex',
        marginBottom: 11
    },
    botao: {
        backgroundColor: '#000000',
        alignItems: 'center',
        width: 228,
        height: 32,
        borderRadius: 10,
        textAlignVertical: 'center',
        elevation: 5
    },
    texto: {
        color: "#0AF505",
        fontSize: 18
    }
})

class Botao extends React.Component {

    constructor (props) {
        super (props);
    }

    render () {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.botao} onPress={this.props.action}>
                    <Text style={styles.texto}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Botao;