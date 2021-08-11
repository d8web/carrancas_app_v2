import React from "react";
import { Container } from './styles';
import { Text, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default ({ route, navigation }) => {

    const { id, name, type } = route.params;

    const handleGo = () => {
        WebBrowser.openBrowserAsync('https://www.google.com.br/maps/place/Restaurante+Tempero+da+Nair+-+Comida+Caseira/@-21.4979415,-44.6348553,15z/data=!4m9!1m2!2m1!1sRestaurantes!3m5!1s0x9f9474e820afdb:0xbfbbb6e6479e6f46!8m2!3d-21.4880574!4d-44.6454398!15sCgxSZXN0YXVyYW50ZXNaDiIMcmVzdGF1cmFudGVzkgEfdHlwaWNhbF9taW5hc19nZXJhaXNfcmVzdGF1cmFudJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOdk1tWnlkMk5CRUFF');
    }

    return (
        <Container>
            <Text>{type}</Text>
            <Text>{name}</Text>
            <TouchableOpacity onPress={handleGo} style={{ width: 50, height: 50, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', borderRadius: 25 }}>
                <Text>Go</Text>
            </TouchableOpacity>
        </Container>
    );
}