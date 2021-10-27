import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
    input: {
        color: '#000',
        backgroundColor: "#DDDDDD",
        borderRadius: 10,
        width: 228,
        height: 32,
        paddingLeft: 25,
        elevation: 5
    },
    legenda: {
        color: "#0AF505",
        fontSize: 12,
        fontWeight: '100',
        marginLeft: 25
    }
})

const Input = (props) => {

    const [info, setInfo] = useState ("")

    const capturarInfo = (info) => {
        setInfo (info)
        props.callback (info)
        //console.log (info)
    }

    return (
        <View>
            <Text style={styles.legenda}>{props.legenda}</Text>
            <TextInput 
                onChangeText={capturarInfo}
                secureTextEntry={props.senha}
                placeholder={props.place}
                style={styles.input}
                value={info}
            />
        </View>
    );
}

export default Input;