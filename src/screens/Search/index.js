import React, { useState, useEffect } from "react";
import { Container, InputArea, InputItem, InputButton, AreaItemSearch, ItemArea, ImageSearch } from './styles'
import { Text, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons'; 

// Hooks import
import { useNavigation } from '@react-navigation/native'

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
        <Container>
                <InputArea>
                    <InputItem
                        placeholder="Digite um termo"
                        placeholderTextColor="white"
                        value={search}
                        onChangeText={t=>setSearch(t)}
                    />
                    <InputButton onPress={handleSearch}>
                        <Feather name="search" size={26} color="#333" />
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
                                <Text style={{ marginLeft: 10, color: '#333', fontFamily: 'Poppins_500Medium' }}>
                                    {item.title}
                                </Text>
                            </ItemArea>
                        ))}
                    </ScrollView>
                </AreaItemSearch>
        </Container>
    );
}