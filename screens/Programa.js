import React, { useState } from 'react'
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native'
import Botao from '../components/Botao'
import Cartao from '../components/Cartao'
import Input from '../components/Input'
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
    },
    statment: {
        marginTop: 2,
        fontWeight: '500'
    },
    output: {
        flexDirection: 'row',
    }
})

export default function Programa ({ navigation }) {

    const [statments, setStatments] = useState ([])
    const [stat, setStat] = useState ('')
    const [contador, setContador] = useState (0)
    const [retorno, setRetorno] = useState ('')

    const novaInstrucao = (instrucao) => {
        setStat (instrucao)
    }

    const adicionarInstrucao = () => {
        setStatments (statments =>{
            setContador (contador + 1)
            let aux = {key: contador.toString (), value: stat}
            return [...statments, aux]
        })
    }

    const executar = () => {

        var programa = []

        statments.forEach ( (statment) => {
            let instrucao = statment.value

            instrucao = instrucao.split (' ')

            switch (instrucao[0]) {
                case 'HLT': programa = [...programa, 0x0A]; break;
                case 'SHW': programa = [...programa, 0x0B]; break;
                case 'MOV': programa = [...programa, 0x2A]; break;
                case 'LDA': programa = [...programa, 0x2B]; break;
                case 'STA': programa = [...programa, 0x2C]; break;
                case 'ADD': programa = [...programa, 0x1A]; break;
                case 'SUB': programa = [...programa, 0x1B]; break;
                case 'MUL': programa = [...programa, 0x1C]; break;
                case 'DIV': programa = [...programa, 0x1D]; break;
                case 'CMP': programa = [...programa, 0x3A]; break;
                case 'CMZ': programa = [...programa, 0x3B]; break;
                case 'CMS': programa = [...programa, 0x3C]; break;
                case 'JMP': programa = [...programa, 0x4A]; break;
                case 'JMZ': programa = [...programa, 0x4B]; break;
                case 'JMS': programa = [...programa, 0x4C]; break;
                case 'PSH': programa = [...programa, 0x5A]; break;
                case 'POP': programa = [...programa, 0x5B]; break;
                case 'WRT': programa = [...programa, 0x6A]; break;
            }

            if (instrucao[1]) {
                switch (instrucao[1]) {
                    case 'AX': programa = [...programa, 0xF0]; break;
                    case 'BX': programa = [...programa, 0xF1]; break;
                    case 'CX': programa = [...programa, 0xF2]; break;
                    case 'DX': programa = [...programa, 0xF3]; break;
                    default: programa = [...programa, parseInt (instrucao[1])]; break;
                }
            }

            if (instrucao[2]) {
                switch (instrucao[2]) {
                    case 'AX': programa = [...programa, 0xF0]; break;
                    case 'BX': programa = [...programa, 0xF1]; break;
                    case 'CX': programa = [...programa, 0xF2]; break;
                    case 'DX': programa = [...programa, 0xF3]; break;
                    default: programa = [...programa, parseInt (instrucao[2])]; break;
                }
            }

            if (instrucao[3]) {
                switch (instrucao[3]) {
                    case 'AX': programa = [...programa, 0xF0]; break;
                    case 'BX': programa = [...programa, 0xF1]; break;
                    case 'CX': programa = [...programa, 0xF2]; break;
                    case 'DX': programa = [...programa, 0xF3]; break;
                    default: programa = [...programa, parseInt (instrucao[3])]; break;
                }
            }
        })

        let dados = {
            programa: programa
        }

        axios.post ('http://192.168.0.13:3000/api/programas/executar', dados).then (
            retorno => {
                setRetorno (retorno.data.resultado)
            }
        )
    }

    return (
        <View style={styles.container}>
            <Cartao titulo="Programas">
                    <Input callback={novaInstrucao} place="Digite a instrução" legenda="Expressão" senha={false} />
                    <Botao action={adicionarInstrucao} title="Inserir" />
                    <Botao action={executar} title="Executar" />
                    <View style={styles.output}>
                        <Output titulo="Programa">
                            <FlatList
                            data={statments}
                            renderItem={
                                (statment) => (
                                    <Text style={styles.statment}>
                                        {statment.item.value}
                                    </Text>
                                )
                            }
                            />
                        </Output>
                        <Output titulo="Saida">
                            <Text>{retorno}</Text>
                        </Output>
                    </View>
            </Cartao>
        </View>
    )
}