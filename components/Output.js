import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Output (props) {

    return (
        <View style={styles.block}>
            <Text style={styles.title}>{props.titulo}</Text>
            <View style={styles.container}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        textAlign: 'left',
        width: 113,
        backgroundColor: '#DDDDDD',
        borderRadius: 10,
        height: '65%',
        paddingLeft: 15,
        elevation: 5,
        marginLeft: 5
    },
    title: {
        color: "#0AF505",
        fontSize: 12,
        fontWeight: '100',
        marginLeft: 25,
        margin: 0
    },
})