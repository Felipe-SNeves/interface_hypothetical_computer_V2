import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './screens/Login'
import Menu from './screens/Menu'
import Programa from './screens/Programa'
import Depurar from './screens/Depurar'

const Stack = createNativeStackNavigator ()

export default function App () {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Menu" component={Menu} />
                <Stack.Screen name="Programa" component={Programa} />
                <Stack.Screen name="Depurar" component={Depurar} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}