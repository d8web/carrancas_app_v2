import React, { useState, useEffect } from "react";
import { Container, InputArea, InputItem, InputButton, AreaItemSearch, ItemArea, ImageSearch } from './styles'
import { Text, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons'; 

// Hooks import
import { useNavigation } from '@react-navigation/native'

const backgroundImage = 'https://scontent-gru2-1.xx.fbcdn.net/v/t1.6435-9/120777913_3904292116248705_45572926540649316_n.jpg?_nc_cat=109&ccb=1-4&_nc_sid=730e14&_nc_ohc=KKwkZniY-FEAX9wRc3k&_nc_ht=scontent-gru2-1.xx&oh=b8c73e2ad09ee68802ae14f7275aa800&oe=6133F9D6';

import { Atrativos } from '../Home/Data'

export default () => {

    const navigation = useNavigation()

    const [ search, setSearch ] = useState('')
    const [ list, setList ] = useState([])

    const handleSearch = () => {
       // Ordenar... se quiser 
    }

    useEffect(() => {
        if(search === '') {
            setList(Atrativos)
        } else {
            setList(
                Atrativos.filter((item) => (item.title.toLowerCase().indexOf(search.toLowerCase()) > -1))
            );
        }
    }, [search])

    return (
        <Container source={{ uri: backgroundImage }} blurRadius={2}>
                <InputArea>
                    <InputItem
                        placeholder="Digite um termo"
                        placeholderTextColor="white"
                        value={search}
                        onChangeText={t=>setSearch(t)}
                    />
                    <InputButton onPress={handleSearch}>
                        <Feather name="search" size={26} color="white" />
                    </InputButton>
                </InputArea>
                
                <AreaItemSearch>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {list.map((item, key) =>(
                            <ItemArea
                                key={key}
                                onPress={() => {
                                    navigation.navigate('Atrativo', {
                                        id: item.id,
                                        image: item.moreImages[0].url,
                                        name: item.name,
                                        type: item.type,
                                        price: item.price,
                                        distancia: item.distancia,
                                        images: item.moreImages
                                    });
                                }}
                            >
                                <ImageSearch source={{ uri: item.image }}/>
                                <Text style={{ marginLeft: 10, color: '#fff', fontFamily: 'Poppins_500Medium' }}>
                                    {item.title}
                                </Text>
                            </ItemArea>
                        ))}
                    </ScrollView>
                </AreaItemSearch>
        </Container>
    );
}