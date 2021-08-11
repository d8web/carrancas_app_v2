import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const FavoriteArea = styled.TouchableOpacity`
    width: 80%;
    padding: 20px;
    background-color: rgba(255,255,255,0.6);
    margin: 10px 0px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`

export const ImageFavorite = styled.Image`
    width: 160px;
    height: 160px;
    border-radius: 10px;
    margin-bottom: 10px;
`