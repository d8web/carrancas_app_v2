import React, { useEffect, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { Container, LoadingIcon } from './styled';
import { Text, StyleSheet } from 'react-native';

import { UserContext } from '../../contexts/UserContext';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native'
import Api from "../../Api";

const backgroundImage = 'https://scontent-gru2-1.xx.fbcdn.net/v/t1.6435-9/120777913_3904292116248705_45572926540649316_n.jpg?_nc_cat=109&ccb=1-4&_nc_sid=730e14&_nc_ohc=KKwkZniY-FEAX9wRc3k&_nc_ht=scontent-gru2-1.xx&oh=b8c73e2ad09ee68802ae14f7275aa800&oe=6133F9D6';

export default () => {

    const { dispatch: UserDispatch } = useContext(UserContext)
    const navigation = useNavigation()

    useEffect(() => {

        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');

            if(token) {

                let res = await Api.checkToken(token);
                if(res.token) {

                    await AsyncStorage.setItem('token', res.token);

                    UserDispatch({
                        type: 'setAvatar',
                        payload: {
                            avatar: res.data.avatar
                        }
                    });

                    navigation.reset({
                        routes: [{ name: 'MainTab' }]
                    });

                } else {
                    navigation.navigate("SignIn");
                }

            } else {
                navigation.navigate("SignIn");
            }
        }
        checkToken();

    }, []);

    return (
        <Container source={{ uri: backgroundImage }} blurRadius={2}>
            <Text style={styles.title}>Go Carrancas</Text>
            <LoadingIcon size="large" color="#fff" />
            <StatusBar style="light" />
        </Container>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: "Poppins_500Medium",
        fontSize: 30,
        color: '#fff'
    }
});