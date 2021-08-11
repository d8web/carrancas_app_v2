import React, { useState } from "react";
import { Container, HeaderArea, ButtonArea } from './styles'
import { Text, StyleSheet, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default ({ route, navigation }) => {

    const { id, name, routers, phone } = route.params

    const [ myRouters, setMyRouters ] = useState(routers)

    return (
        <Container>
            <HeaderArea>
                <ButtonArea
                    title="Voltar"
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name="arrowleft" size={24} color="#333" />
                </ButtonArea>
            </HeaderArea>
            <Text>{name}</Text>
            <Text>{phone}</Text>
            {myRouters.map((item,key)=>(
                <View key={key} style={{ marginTop: 20 }}>
                    <Text key={key}>{item.name}</Text>
                    {item.atrativos.map((item,index)=>(
                        <Text key={index}>{item}</Text>
                    ))}
                </View>
            ))}
        </Container>
    )
}

const styles = StyleSheet.create({
    marginTopText: {
        marginTop: 20
    }
})