import React from "react";
import styled from "styled-components/native";

import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons'; 

const TabArea = styled.View`
    height: 60px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #29c2c2;
`

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export default ({ state, navigation }) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName)
    }

    return (
        <TabArea>
            <TabItem onPress={() => goTo("Home")}>
                <AntDesign name="home" size={24} color="white" style={{ opacity: state.index === 0 ? 1 : 0.5 }} />
            </TabItem>
            <TabItem onPress={() => goTo("Search")}>
                <Feather name="search" size={24} color="white" style={{ opacity: state.index === 1 ? 1 : 0.5 }} />
            </TabItem>
            <TabItem onPress={() => goTo("Favorites")}>
                <MaterialIcons name="favorite-border" size={24} color="white" style={{ opacity: state.index === 2 ? 1 : 0.5 }} />
            </TabItem>
            <TabItem onPress={() => goTo("Profile")}>
                <AntDesign name="user" size={24} color="white" style={{ opacity: state.index === 3 ? 1 : 0.5 }} />
            </TabItem>
        </TabArea>
    );
}