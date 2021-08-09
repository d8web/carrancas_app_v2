import React, { useState } from "react";
import {
    Container,
    Overlay,
    ButtonArea,
    InfoArea,
    InfoBottomArea,
    InfoAreaBottomText,
    PhotosArea,
    ImageBox
} from './styles'
import { StatusBar } from 'expo-status-bar'
import { AntDesign } from '@expo/vector-icons'; 
import { Text, StyleSheet, Image } from 'react-native'

export default ({ route, navigation }) => {

    const { id, image, name, type, price, distancia, images } = route.params;

    const [ imageSelected, setImageSelected ] = useState(0)

    const handleImageClick = (key) => {
        setImageSelected(key)
    }

    return (
        <Container source={{ uri: images[imageSelected].url }} >
            <StatusBar style="light" />
            <Overlay>
                <ButtonArea
                    title="Voltar"
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name="arrowleft" size={24} color="white" />
                </ButtonArea>
                <InfoArea>
                    <Text style={styles.text}>{type}</Text>
                    <Text style={styles.textBig}>{name}</Text>
                </InfoArea>
                <InfoBottomArea>
                    <InfoAreaBottomText>
                        <Text style={{ color: '#fff', fontSize: 18 }}>R$ {price},00</Text>
                        <Text style={{ color: '#fff', fontSize: 18 }}>{distancia}</Text>
                    </InfoAreaBottomText>
                    <PhotosArea>
                        {images.map((item, key)=>(
                            <ImageBox key={key} onPress={()=>handleImageClick(key)}>
                                <Image source={{ uri: item.url }} style={styles.imageAtrativo} />
                            </ImageBox>
                        ))}
                    </PhotosArea>
                </InfoBottomArea>
            </Overlay>
        </Container>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 20,
        color: "#fff",
        marginBottom: -5
    },
    textBig: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 28,
        color: "#fff"
    },
    imageAtrativo: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    }
})