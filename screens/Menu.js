import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Cartao from '../components/Cartao'
import Botao from '../components/Botao'

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 41,
        paddingRight: 41,
        paddingTop: 42,
        paddingBottom: 42
    }
})

export default function Menu ({ navigation }) {

    const logout = () => {
        navigation.navigate ("Login")
    }

    const programar = () => {
        navigation.navigate ("Programa")
    }

    const depurar = () => {
        navigation.navigate ("Depurar")
    }

    return (
        <View style={styles.container}>
            <Cartao titulo="Menu">
                <Botao action={programar} title="Programar" />
                <Botao action={depurar} title="Depurar" />
                <Botao action={logout} title="Sair" />
            </Cartao>
        </View>
    )
}