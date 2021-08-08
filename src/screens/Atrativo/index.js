import React from "react";
import { Container, Overlay } from './styles'
import { Text, Button } from 'react-native'

export default ({ route, navigation }) => {

    const { id, image, name } = route.params;

    return (
        <Container source={{ uri: image }} >
            <Overlay>
                <Text style={{ color: '#fff' }}>Atrativo {id}</Text>
                <Text style={{ color: '#fff', marginBottom: 20 }}>{name}</Text>
                <Button
                    title="Voltar"
                    onPress={() => navigation.goBack()}
                />
            </Overlay>
        </Container>
    )
}