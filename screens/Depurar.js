import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Cartao from '../components/Cartao'
import Botao from '../components/Botao'
import Output from '../components/Output'
import axios from 'axios'

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 41,
        paddingRight: 41,
        paddingTop: 21,
        paddingBottom: 21
    }
})

export default function Depurar (props) {

    const [retorno, setRetorno] = useState ('')

    const depurar = () => {


        let opcodes = []

        axios.get ('http://192.168.0.13:3000/api/programas/depurar').then (
            resposta => {
                resposta.data.programa.forEach (
                    (opcode) => {
                        opcodes = [...opcodes, opcode]
                    }
                )
                opcodes = opcodes.toString ()
                opcodes = opcodes.replace (/,/g, '--')
                setRetorno (opcodes)
            }
        )
    }

    return (
        <View style={styles.container}>
            <Cartao titulo="Depurar">
                <Botao title="Restaurar" action={depurar} />
                <Output titulo="Saida">
                    <Text>
                        {retorno}
                    </Text>
                </Output>
            </Cartao>
        </View>
    )
}