import React from 'react';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
} from '@expo-google-fonts/poppins';

import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';
import UserContextProvider from './src/contexts/UserContext';

export default () => {

    let [ fontsLoaded ] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold
    });

    if(!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <UserContextProvider>
            <NavigationContainer>
                <MainStack/>
            </NavigationContainer>
        </UserContextProvider>
    );
};

// 2horas e 29 min