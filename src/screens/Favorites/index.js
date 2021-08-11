import React, { useContext } from "react";
import { Container, FavoriteArea, ImageFavorite } from './styles'
import { Text } from 'react-native'

import { UserContext } from '../../contexts/UserContext'

export default () => {
    const { state:user } = useContext(UserContext)

    return (
        <Container>
            <Text>{user.favorites.length === 0 ? 'Nenhum favorito' : 'Meus Favoritos'}</Text>
            {user.favorites.map((item,key)=>(
                <FavoriteArea key={key}>
                    <ImageFavorite source={{ uri: item.image }} />
                    <Text>{item.type} {item.name}</Text>
                </FavoriteArea>
            ))}
        </Container>
    )
}