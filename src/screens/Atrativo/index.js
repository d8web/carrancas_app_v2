import React, { useState, useContext, useEffect } from "react";
import * as WebBrowser from 'expo-web-browser';
import {
    Container,
    Overlay,
    ButtonArea,
    InfoArea,
    InfoBottomArea,
    InfoAreaBottomText,
    PhotosArea,
    ImageBox,
    HeaderArea,
    IconArea
} from './styles'
import { StatusBar } from 'expo-status-bar'
import { AntDesign, Feather } from '@expo/vector-icons'; 
import { Text, StyleSheet, Image } from 'react-native'
import { UserContext } from '../../contexts/UserContext';

export default ({ route, navigation }) => {

    const { dispatch:UserDispatch, state:user } = useContext(UserContext);

    const { id, image, name, type, price, distancia, images, mapa } = route.params;

    const [ imageSelected, setImageSelected ] = useState(0);

    const handleImageClick = (key) => {
        setImageSelected(key);
    }

    const res = user.favorites.find(item => item.id === id);

    const handleFavorite = () => {
        let data = {id, name, type, price, image: images[0].url}

        UserDispatch({
            type: 'setFavorites',
            payload: {
                data
            }
        });
    }

    useEffect(()=>{
        
    },[])

    return (
        <Container source={{ uri: images[imageSelected].url }} >
            <StatusBar style="light" />
            <Overlay>
                <HeaderArea>    
                    <ButtonArea
                        title="Voltar"
                        onPress={() => navigation.goBack()}
                    >
                        <AntDesign name="arrowleft" size={24} color="#333" />
                    </ButtonArea>
                    <ButtonArea
                        title="Voltar"
                        onPress={() => WebBrowser.openBrowserAsync(mapa)}
                    >
                        <Feather name="map-pin" size={24} color="black" />
                    </ButtonArea>
                    <IconArea onPress={handleFavorite}>
                        {res === undefined &&
                            <AntDesign name="hearto" size={24} color="#333" />
                        }
                        {res &&
                            <AntDesign name="heart" size={24} color="red" />
                        }
                    </IconArea>
                </HeaderArea>
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