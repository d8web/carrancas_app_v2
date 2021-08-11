import React, { useState, useEffect } from "react";
import { Text, StyleSheet, ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
    Container,
    Header,
    UserArea,
    TextArea,
    AvatarImage,
    FlatItem,
    FlatView,
    AreaInfo,
    BoxInfo,
    AreaBox,
    BoxInfoDescriptionArea,
    AreaGuia,
    GuiaInfo,
    ImageGuia,
    ButtonGuia,
    FaunaArea,
    FaunaItem,
    AnimalImage,
    PousadaArea,
    PousadaItem,
    PousadaImage,
} from './styles';

import { StatusBar } from "expo-status-bar";
import { MaterialIcons, Entypo } from '@expo/vector-icons';

import {
    Categorias,
    Atrativos,
    Guias,
    Fauna,
    Pousadas,
    Alimentacao
} from './Data';

// Hooks import
import { useNavigation } from '@react-navigation/native'

const CategoryItem = ({ item, onPress, backgroundColor, textColor }) => (
    <FlatView onPress={onPress} style={[backgroundColor, {flexDirection: 'row'}]}>
        <MaterialIcons name="park" size={24} color="#29c2c2" />
        <Text style={[styles.textCategory, textColor]}>{item.title}</Text>
    </FlatView>
);

export default () => {

    const navigation = useNavigation()

    const [ categorySelected, setcategorySelected ] = useState('1');
    const [ list, setList ] = useState([])

    const renderCategory = ({ item }) => {
        const backgroundColor = item.id === categorySelected ? "#333" : "#fff";
        const color = item.id === categorySelected ? 'white' : 'black';
    
        return (
            <CategoryItem
                item={item}
                onPress={() => setcategorySelected(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    useEffect(()=>{
        setList(Categorias)
    }, [])

    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar style="auto" />

                <Header>
                    <Entypo name="water" size={30} color="#29c2c2" />
                    <UserArea>
                        <TextArea>
                            <Text style={styles.boldText}>Bom Dia</Text>
                            <Text style={styles.text}>Daniel</Text>
                        </TextArea>
                        <AvatarImage source={{ uri: 'https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png' }} />
                    </UserArea>
                </Header>

                <FlatItem
                    data={list}
                    renderItem={renderCategory}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    height={50}
                    alignItems="center"
                />
                
                {categorySelected === '1' &&
                    <AreaInfo>
                        {Atrativos.map((item, key) => (
                            <AreaBox
                                key={key}
                                onPress={() => {
                                    navigation.navigate('Atrativo', {
                                        id: item.id,
                                        image: item.moreImages[0].url,
                                        name: item.name,
                                        type: item.type,
                                        price: item.price,
                                        distancia: item.distancia,
                                        images: item.moreImages,
                                        mapa: item.mapa
                                    });
                                }}
                            >
                                <BoxInfo
                                    source={{ uri: item.image }}
                                    imageStyle={{ borderRadius: 10 }}
                                >
                                    
                                    <BoxInfoDescriptionArea>
                                        <LinearGradient
                                            // Button Linear Gradient
                                            colors={['transparent', '#333']}
                                            style={styles.button}>
                                            <Text style={styles.textInfo}>{item.title}</Text>
                                        </LinearGradient>
                                    </BoxInfoDescriptionArea>
                                </BoxInfo>
                            </AreaBox>
                        ))}
                    </AreaInfo>
                }

                {categorySelected === '2' &&
                    <>
                        <Text style={styles.historyText}>
                            Andar pelas ruas de Carrancas ou de bike pelas redondezas, que incluem fazendas históricas e marcos da Estrada Real é passeio obrigatório para quem vem aqui. A cidade foi fundada em meio ao ciclo do ouro e as viagens desde Parati trouxeram bandeirantes e as suas famílias, que fixaram moradia e criaram um povoado. Eram paulistas da capital e de Taubaté que por volta de 1720 encontraram-se às margens do Rio Grande em Minas Gerais.
                        </Text>
                        <Text style={styles.historyText}>
                            Apesar de grandes rivais na disputa pelas terras e pelo ouro, juntos se instalaram nas terras onde hoje está situado o município de Carrancas. Empolgados com o potencial fértil de suas terras e com a possibilidade de encontrar ouro em grande quantidade, decidiram conquistar o local iniciando um povoado com suas famílias, escravos e amigos. Em 1721 foi edificada uma capela em homenagem a Nossa Senhora da Conceição ficando então conhecido o lugar como Nossa Senhora do Rio Grande. 
                        </Text>
                    </>
                }

                {categorySelected === '3' &&
                    <FaunaArea>
                        {Fauna.map((item,key)=>(
                            <FaunaItem key={key}>
                                <AnimalImage source={{ uri: item.image }} />
                                <Text>{item.name}</Text>
                                <Text>{item.cientificName}</Text>
                            </FaunaItem>
                        ))}
                    </FaunaArea>
                }

                {categorySelected === '4' &&
                    <AreaGuia>
                        {Guias.map((item, key) => (
                            <GuiaInfo key={key}
                                onPress={() => {
                                    navigation.navigate('Guias', {
                                        id: item.id,
                                        routers: item.routers,
                                        name: item.name,
                                        phone: item.phone
                                    });
                                }}
                            >
                                <ImageGuia source={{ uri: item.image }} />
                                <Text style={styles.textButton}>{item.name}</Text>
                                <ButtonGuia>
                                    <Text style={styles.textButton}>Ver Roteiros</Text>
                                </ButtonGuia>
                            </GuiaInfo>
                        ))}
                    </AreaGuia>
                }

                {categorySelected === '5' &&
                    <PousadaArea>
                        {Pousadas.map((item,key)=>(
                            <PousadaItem key={key}>
                                <PousadaImage source={{ uri: item.image }} />
                                <View style={{ flex: 1 }}>
                                    <Text>{item.name}</Text>
                                    <Text>{item.location}</Text>
                                    <Text>{item.restaurante ? 'Tem Restaurante' : 'Não Tem Restaurante'}</Text>
                                </View>
                            </PousadaItem>
                        ))}
                    </PousadaArea>
                }

                {categorySelected === '6' &&
                    <PousadaArea>
                        {Alimentacao.map((item,key)=>(
                            <PousadaItem
                                key={key}
                                onPress={() => {
                                    navigation.navigate('Alimentacao', {
                                        id: item.id,
                                        name: item.name,
                                        type: item.type
                                    });
                                }}
                            >
                                <PousadaImage source={{ uri: item.image }} />
                                <View style={{ flex: 1 }}>
                                    <Text>{item.name}</Text>
                                    <Text>{item.location}</Text>
                                    <Text>{item.delivery ? 'Tem Delivery' : 'Não tem Delivery'}</Text>
                                </View>
                            </PousadaItem>
                        ))}
                    </PousadaArea>
                }

                {categorySelected === '8' &&
                    <Text>Mais informações</Text>
                }
                
            </ScrollView>
        </Container>
    );
}

const styles = StyleSheet.create({
    boldText: {
        fontFamily: 'Poppins_700Bold',
    },
    text: {
        fontFamily: 'Poppins_400Regular',
    },
    textCategory: {
        fontFamily: 'Poppins_500Medium'
    },
    textInfo: {
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        textAlign: 'center'
    },
    textButton: {
        color: '#333',
        fontSize: 14,
        fontFamily: 'Poppins_500Medium'
    },
    historyText: {
        fontSize: 15,
        fontFamily: 'Poppins_400Regular',
        color: '#333',
        marginTop: 30,
        lineHeight: 26
    },
    button: {
        width: '100%',
        height: 150,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 10
    }
});