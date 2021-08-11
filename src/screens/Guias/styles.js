import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 60px 25px 0px 25px;
    background-color: #fff;
`

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const ButtonArea = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    background-color: rgba(255,255,255,0.6);
    justify-content: center;
    align-items: center;
    border-radius: 25px;
`