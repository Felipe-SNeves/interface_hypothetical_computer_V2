import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Botao from './Botao'

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        padding: 33,
        borderRadius: 25
    },
    titulo: {
        color: "#0AF505",
        fontSize: 22,
        marginBottom: 25
    }
})

class Cartao extends React.Component {

    constructor (props) {
        super (props);
    }

    render () {

        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>{this.props.titulo}</Text>
                {this.props.children}
            </View>
        );
    }
}

export default Cartao;