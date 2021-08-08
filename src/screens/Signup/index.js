import React, { useState, useContext } from "react";
import {
    Container,
    InputArea,
    CustomButtom,
    SignMessageButton
} from './styled'
import { Text, StyleSheet } from 'react-native'

// Component SignInput
import SignInput from "../../components/SignInput";

import { useNavigation } from '@react-navigation/native'

import AsyncStorage from "@react-native-async-storage/async-storage";

import { UserContext } from '../../contexts/UserContext';

const backgroundImage = 'https://scontent-gru2-1.xx.fbcdn.net/v/t1.6435-9/120777913_3904292116248705_45572926540649316_n.jpg?_nc_cat=109&ccb=1-4&_nc_sid=730e14&_nc_ohc=KKwkZniY-FEAX9wRc3k&_nc_ht=scontent-gru2-1.xx&oh=b8c73e2ad09ee68802ae14f7275aa800&oe=6133F9D6';

export default () => {

    const { dispatch: UserDispatch } = useContext(UserContext)
    const navigation = useNavigation()

    const [ nameField, setNameField ] = useState('')
    const [ emailField, setEmailField ] = useState('')
    const [ passwordField, setPasswordField ] = useState('')

    const handleCadastroClick = async () => {
        if(nameField !== '' && emailField !== '' && passwordField !== '') {

            let json = await Api.signUp(nameField, emailField, passwordField);
            //console.log(json)
            if(json.token) {
                
                await AsyncStorage.setItem('token', json.token);

                UserDispatch({
                    type: 'setAvatar',
                    payload: {
                        avatar: json.data.avatar
                    }
                });

                navigation.reset({
                    routes: [{ name: 'MainTab' }]
                });

            } else {
                alert("Email e/ou senha incorretos!");
            }

        } else {
            alert('Preencha todos os campos!');
        }
    }

    const handleSignUpClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        })
    }

    return (
        <Container source={{ uri: backgroundImage }} blurRadius={3}>
            <Text style={styles.title}>Cadastro</Text>
            <InputArea>

                <SignInput
                    iconSvg="user"
                    type="name"
                    placeholder="Digite seu Nome"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                />

                <SignInput
                    iconSvg="email-outline"
                    type="email"
                    placeholder="Digite seu Email"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />

                <SignInput
                    iconSvg="key-outline"
                    type="password"
                    placeholder="Digite sua Senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />

                <CustomButtom onPress={handleCadastroClick}>
                    <Text style={styles.buttomText}>Cadastro</Text>
                </CustomButtom>
            </InputArea>

            <SignMessageButton onPress={handleSignUpClick}>
                <Text style={styles.signText}>Já possui uma conta?</Text>
                <Text style={styles.signTextBold}> Faça Login</Text>
            </SignMessageButton>
        </Container>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Poppins_500Medium',
        color: '#fff',
        fontSize: 26
    },
    buttomText: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 18,
        color: '#555'
    },
    signText: {
        color: '#fff',
        fontFamily: 'Poppins_400Regular'
    },
    signTextBold: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#fff'
    }
})