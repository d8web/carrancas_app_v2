import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Preload from '../screens/Preload';
import SignIn from '../screens/Signin';
import SignUp from '../screens/Signup';
import Atrativo from '../screens/Atrativo';
import Guias from '../screens/Guias';
import Alimentacao from '../screens/Alimentacao';

import MainTab from '../stacks/MainTab'

const Stack = createNativeStackNavigator()

export default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="Atrativo" component={Atrativo} />
        <Stack.Screen name="Guias" component={Guias} />
        <Stack.Screen name="Alimentacao" component={Alimentacao} />
    </Stack.Navigator>
)