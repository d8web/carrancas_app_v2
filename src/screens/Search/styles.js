import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    padding-top: 50px;
    padding-right: 20px;
    padding-left: 20px;
    background-color: #fff;
`

export const InputArea = styled.TouchableOpacity`
    width: 100%;
    height: 60px;
    margin-top: 20px;
    background-color: #ccc;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 30px;
    align-items: center;
    padding-left: 15px;
    padding-right: 6px;
`

export const InputItem = styled.TextInput`
    flex: 1;
    height: 50px;
    background-color: transparent;
    margin-left: 8px;
    font-size: 18px;
`

export const InputButton = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    background-color: transparent;
    justify-content: center;
    align-items: center;
`

export const AreaItemSearch = styled.View`
    width: 100%;
    margin: 10px 0px;
    padding: 10px 0px;
    margin-bottom: 70px;
`

export const ItemArea = styled.TouchableOpacity`
    margin-bottom: 10px;
    background-color: #ccc;
    height: 160px;
    flex-direction: row;
    align-items: center;
    border-radius: 20px;
    padding: 20px;
`

export const ImageSearch = styled.Image`
    width: 40%;
    height: 120px;
    border-radius: 10px;
`